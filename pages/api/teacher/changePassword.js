import { withIronSession } from "next-iron-session";
import clientPromise from '../../../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const teacher = req.session.get("teacher");
    if (!teacher) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { newPassword } = req.body;
    
    try {
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const result = await db.collection("teachers").updateOne(
        { username: teacher.username },
        { $set: { password: newPassword } }
      );

      if (result.modifiedCount === 1) {
        res.status(200).json({ message: 'Password changed successfully' });
      } else {
        res.status(400).json({ message: 'Failed to change password' });
      }
    } catch (error) {
      console.error('Change password error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
