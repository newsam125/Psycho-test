import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const teachers = await db.collection('teachers').find({}).toArray();
    console.log('教师数据:', teachers);
    res.status(200).json({ message: "数据库连接成功", teacherCount: teachers.length, teachers });
  } catch (error) {
    console.error('测试路由错误:', error);
    res.status(500).json({ error: '服务器错误', details: error.message });
  }
}
