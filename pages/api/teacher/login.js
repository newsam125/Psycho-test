import { withIronSession } from "next-iron-session";
import clientPromise from '../../../lib/mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    
    try {
      const client = await clientPromise;
      const db = client.db("psycho-test");
      const teacher = await db.collection("teachers").findOne({ username, password });

      if (teacher) {
        req.session.set("teacher", { isLoggedIn: true, username: teacher.username });
        await req.session.save();
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      console.error('Login error:', error);
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
