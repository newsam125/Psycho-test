import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    // 检查用户名和密码是否都为 "admin"
    if (username === 'admin' && password === 'admin') {
      req.session.set("user", { isLoggedIn: true, username: 'admin' });
      await req.session.save();
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
