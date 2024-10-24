import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Teacher.module.css';

export default function TeacherLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('/api/teacher/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('登录成功');
        // 可以在这里存储教师信息，例如：
        localStorage.setItem('teacher', JSON.stringify(data.teacher));
        router.push('/teacher/dashboard');
      } else {
        console.error('登录失败:', data.error);
        setError(data.error || '登录失败，请重试');
      }
    } catch (error) {
      console.error('登录错误:', error);
      setError('发生网络错误，请稍后重试');
    }
  };

  return (
    <div className={styles.container}>
      <h1>评估老师登录</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="用户名"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="密码"
          required
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
}
