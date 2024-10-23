import { useState, useEffect } from 'react';

export default function ExamplePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/.netlify/functions/getData');
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  if (!data) return <div>加载中...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
}
