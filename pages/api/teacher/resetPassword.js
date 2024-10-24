import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { db } = await connectToDatabase();
      const { username, password } = req.body;

      console.log('尝试重置密码:', username, password); // 添加日志

      const result = await db.collection('teachers').updateOne(
        { username },
        { $set: { password: password } }
      );

      if (result.modifiedCount === 1) {
        console.log('密码重置成功'); // 添加日志
        res.status(200).json({ message: "密码重置成功" });
      } else {
        console.log('未找到教师'); // 添加日志
        res.status(404).json({ error: "未找到教师" });
      }
    } catch (error) {
      console.error('重置密码错误:', error);
      res.status(500).json({ error: '服务器错误' });
    }
  } else {
    res.status(405).json({ error: '方法不允许' });
  }
}
