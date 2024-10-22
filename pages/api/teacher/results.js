import { withIronSession } from "next-iron-session";
import clientPromise from '../../../lib/mongodb';

async function handler(req, res) {
  const teacher = req.session.get("teacher");
  if (!teacher) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("psycho-test");
    const results = await db.collection("results")
      .find({ teacherName: teacher.username })
      .toArray();
    res.status(200).json(results);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Error fetching results' });
  }
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
