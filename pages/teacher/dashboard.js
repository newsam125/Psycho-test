import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Teacher.module.css';

export default function TeacherDashboard() {
  const [results, setResults] = useState([]);
  const [teacherName, setTeacherName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('results');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchResults();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/teacher/checkAuth');
    const data = await response.json();
    if (!data.isLoggedIn) {
      router.push('/teacher/login');
    } else {
      setTeacherName(data.username);
    }
  };

  const fetchResults = async () => {
    const response = await fetch('/api/teacher/results');
    if (response.ok) {
      const data = await response.json();
      setResults(data);
    } else {
      console.error('Failed to fetch results');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('新密码和确认密码不匹配');
      return;
    }
    const response = await fetch('/api/teacher/changePassword', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newPassword }),
    });
    if (response.ok) {
      alert('密码修改成功');
      setNewPassword('');
      setConfirmPassword('');
    } else {
      alert('密码修改失败');
    }
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>评估老师仪表板</h1>
      <p>欢迎，{teacherName}老师</p>
      
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'results' ? styles.activeTab : ''} 
          onClick={() => setActiveTab('results')}
        >
          评估结果
        </button>
        <button 
          className={activeTab === 'changePassword' ? styles.activeTab : ''} 
          onClick={() => setActiveTab('changePassword')}
        >
          修改密码
        </button>
      </div>

      {activeTab === 'results' && (
        <div>
          <h2>评估结果</h2>
          {results.length === 0 ? (
            <p>您还没有进行过任何评估。</p>
          ) : (
            <>
              <table className={styles.resultsTable}>
                <thead>
                  <tr>
                    <th>年级</th>
                    <th>班级</th>
                    <th>学号</th>
                    <th>学生姓名</th>
                    <th>年龄</th>
                    <th>评估时间</th>
                    <th>结果</th>
                  </tr>
                </thead>
                <tbody>
                  {currentResults.map((result, index) => (
                    <tr key={index}>
                      <td>{result.grade}</td>
                      <td>{result.class}</td>
                      <td>{result.studentId}</td>
                      <td>{result.name}</td>
                      <td>{result.age}</td>
                      <td>{result.date}</td>
                      <td>{result.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={styles.pagination}>
                {Array.from({ length: Math.ceil(results.length / resultsPerPage) }, (_, i) => (
                  <button key={i} onClick={() => paginate(i + 1)}>
                    {i + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {activeTab === 'changePassword' && (
        <div>
          <h2>修改密码</h2>
          <form onSubmit={handleChangePassword} className={styles.form}>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="新密码"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="确认新密码"
              required
            />
            <button type="submit">修改密码</button>
          </form>
        </div>
      )}
    </div>
  );
}
