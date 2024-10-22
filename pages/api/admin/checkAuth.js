import { withIronSession } from "next-iron-session";

async function handler(req, res) {
  const user = req.session.get("user");
  if (user) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
}

export default withIronSession(handler, {
  password: "complex_password_at_least_32_characters_long",
  cookieName: "myapp_cookiename",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});
