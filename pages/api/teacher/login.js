import { withIronSession } from "next-iron-session";
import { connectToDatabase } from '../../../utils/mongodb';

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: '方法不允许' });
  }

  const { username, password } = req.body;

  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('teachers');

    const teacher = await collection.findOne({ username, password });

    if (teacher) {
      // 登录成功
      req.session.set("teacher", {
        id: teacher._id,
        username: teacher.username
      });
      await req.session.save();
      res.status(200).json({ message: '登录成功', teacher: { id: teacher._id, username: teacher.username } });
    } else {
      // 登录失败
      res.status(401).json({ error: '用户名或密码错误' });
    }
  } catch (error) {
    console.error('登录错误:', error);
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
