import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Admin.module.css';

export default function AdminDashboard() {
  const [results, setResults] = useState([]);
  const [adminName, setAdminName] = useState('');
  const [activeTab, setActiveTab] = useState('results');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchResults();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/checkAuth');
    const data = await response.json();
    if (!data.isLoggedIn) {
      router.push('/admin/login');
    } else {
      setAdminName(data.username);
    }
  };

  const fetchResults = async () => {
    const response = await fetch('/api/admin/results');
    if (response.ok) {
      const data = await response.json();
      setResults(data);
    } else {
      console.error('Failed to fetch results');
    }
  };

  const deleteResult = async (id) => {
    if (window.confirm('确定要删除这条记录吗？')) {
      const response = await fetch(`/api/admin/results?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchResults();
      } else {
        console.error('Failed to delete result');
      }
    }
  };

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.container}>
      <h1>管理员仪表板</h1>
      <p>欢迎，{adminName}管理员</p>
      
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'results' ? styles.activeTab : ''} 
          onClick={() => setActiveTab('results')}
        >
          评估结果
        </button>
        <button 
          className={activeTab === 'manageTeachers' ? styles.activeTab : ''} 
          onClick={() => setActiveTab('manageTeachers')}
        >
          管理评估老师
        </button>
      </div>

      {activeTab === 'results' && (
        <div>
          <h2>评估结果</h2>
          {results.length === 0 ? (
            <p>暂无评估结果。</p>
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
                    <th>评估老师</th>
                    <th>评估时间</th>
                    <th>结果</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {currentResults.map((result) => (
                    <tr key={result._id}>
                      <td>{result.grade}</td>
                      <td>{result.class}</td>
                      <td>{result.studentId}</td>
                      <td>{result.name}</td>
                      <td>{result.age}</td>
                      <td>{result.teacherName}</td>
                      <td>{result.date}</td>
                      <td>{result.description}</td>
                      <td>
                        <button onClick={() => deleteResult(result._id)} className={styles.deleteButton}>
                          删除
                        </button>
                      </td>
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

      {activeTab === 'manageTeachers' && (
        <div>
          <h2>管理评估老师</h2>
          <Link href="/admin/teachers">
            <a className={styles.manageTeachersButton}>管理评估老师</a>
          </Link>
        </div>
      )}
    </div>
  );
}
