const express = require("express");
const app = express();
const PORT = 8000;

const members = [
  {
    id: 1,
    name: "Deepak Singh Rawat",
    email: "dsrwt107@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Deepak Singh ",
    email: "dsingh@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Deepak ",
    email: "dpk@gmail.com",
    status: "active",
  },
];

app.get("/showAllUser", (req, res) => {
  res.status(200).json(members);
});

app.get("/showUser/:userId", (req, res) => {
  // console.log(typeof req.params.userId);

  const id = parseInt(req.params.userId);
  let user = members.filter((member) => member.id === id);
  user.length !== 0
    ? res.status(200).json(user)
    : res.status(404).json({ message: `User  not found with id ${id}` });

  // if (user.length !== 0) res.status(200).json(user);
  // else res.status(404).json({ message: `User  not found with id ${id}` });
});

app.listen(PORT, () => {
  console.log(`server in running on port http://localhost:${PORT}`);
});
