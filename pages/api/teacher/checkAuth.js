import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  const teacher = req.session.get("teacher");
  if (teacher) {
    res.json({ isLoggedIn: true, username: teacher.username });
  } else {
    res.json({ isLoggedIn: false });
  }
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "teacher_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
