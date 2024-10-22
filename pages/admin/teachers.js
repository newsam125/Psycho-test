import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Admin.module.css';

export default function TeacherManagement() {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ username: '', password: '' });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchTeachers();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('/api/admin/checkAuth');
    const data = await response.json();
    if (!data.isLoggedIn) {
      router.push('/admin/login');
    }
  };

  const fetchTeachers = async () => {
    const response = await fetch('/api/admin/teachers');
    if (response.ok) {
      const data = await response.json();
      setTeachers(data);
    } else {
      console.error('Failed to fetch teachers');
    }
  };

  const addTeacher = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/admin/teachers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTeacher),
    });
    if (response.ok) {
      setNewTeacher({ username: '', password: '' });
      fetchTeachers();
    } else {
      console.error('Failed to add teacher');
    }
  };

  const deleteTeacher = async (id) => {
    if (window.confirm('确定要删除这位老师吗？')) {
      const response = await fetch(`/api/admin/teachers?id=${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchTeachers();
      } else {
        console.error('Failed to delete teacher');
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1>评估老师管理</h1>
      <form onSubmit={addTeacher} className={styles.form}>
        <input
          type="text"
          value={newTeacher.username}
          onChange={(e) => setNewTeacher({ ...newTeacher, username: e.target.value })}
          placeholder="用户名"
          required
        />
        <input
          type="password"
          value={newTeacher.password}
          onChange={(e) => setNewTeacher({ ...newTeacher, password: e.target.value })}
          placeholder="密码"
          required
        />
        <button type="submit">添加老师</button>
      </form>
      <table className={styles.resultsTable}>
        <thead>
          <tr>
            <th>用户名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr key={teacher._id}>
              <td>{teacher.username}</td>
              <td>
                <button onClick={() => deleteTeacher(teacher._id)} className={styles.deleteButton}>
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
