import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Teacher.module.css';

export default function TeacherLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/teacher/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      router.push('/teacher/dashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <h1>评估老师登录</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="请输入用户名"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="请输入密码"
          required
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
}
