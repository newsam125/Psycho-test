import { useState, useEffect } from 'react';

export default function ExamplePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://your-api-url.com/api/data');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) return <div>加载中...</div>;

  return (
    <div>
      {/* 使用从API获取的数据 */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
