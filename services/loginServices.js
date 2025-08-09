import { User } from "../models/user.js";
import { hashPassword } from "../middleware/authMiddleware.js";

const registerUser = async ({ name, username, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("User already exists. Please Login");
  }
  const hashed = await hashPassword(password);
  const user = await User.create({
    name,
    username,
    email,
    password: hashed,
  });
  return { token: generateToken(user), user };
};
