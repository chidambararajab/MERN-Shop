import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@chid.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Chid",
    email: "chid@chid.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Vijay Balaji",
    email: "vjay@chid.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
