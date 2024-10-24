import { withIronSession } from "next-iron-session";
import { connectToDatabase } from '../../../utils/mongodb';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '方法不允许' });
  }

  try {
    const teacher = req.session.get("teacher");
    if (!teacher) {
      return res.status(401).json({ error: '未授权' });
    }

    const { db } = await connectToDatabase();
    const result = req.body;
    result.teacherId = teacher.id;

    const insertResult = await db.collection('results').insertOne(result);
    res.status(201).json({ message: '评估结果创建成功', id: insertResult.insertedId });
  } catch (error) {
    console.error('创建评估结果错误:', error);
    res.status(500).json({ error: '服务器错误' });
  }
}

export default withIronSession(handler, {
  password: process.env.SESSION_PASSWORD,
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
