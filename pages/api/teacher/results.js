import { withIronSession } from "next-iron-session";
import { connectToDatabase } from '../../../utils/mongodb';

async function handler(req, res) {
  try {
    const teacher = req.session.get("teacher");
    if (!teacher) {
      return res.status(401).json({ error: '未授权' });
    }

    const { db } = await connectToDatabase();
    const results = await db.collection('results').find({ teacherId: teacher.id }).toArray();
    res.status(200).json(results);
  } catch (error) {
    console.error('API 错误:', error);
    res.status(500).json({ error: '服务器错误' });
  }
}

if (!process.env.SESSION_PASSWORD) {
  console.error('SESSION_PASSWORD 未设置');
  throw new Error('SESSION_PASSWORD 必须在环境变量中设置');
}

export default withIronSession(handler, {
  password: process.env.SESSION_PASSWORD,
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
