const express = require("express");
const router = express.Router();
const { sequelize, User, Post } = require("../models");

router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong!" });
  }
});

router.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
      include: "posts",
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong!" });
  }
});
router.post("/users", async (req, res) => {
  const { name, password, email, age, isDeleted } = req.body;
  try {
    const user = await User.create({ name, password, email, age, isDeleted });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.post("/posts", async (req, res) => {
  const { userUuid, body } = req.body;
  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, userId: user.id });

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.findAll({ include: "user" });

    return res.json(posts);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
});

router.put("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { name, password, email, age, isDeleted } = req.body;
  try {
    const user = await User.findOne({
      where: { uuid },
    });
    user.name = name;
    user.password = password;
    user.email = email;
    user.age = age;
    user.isDeleted = isDeleted;

    await user.save();

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong!" });
  }
});

router.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
    });
    await user.destroy();

    return res.json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Something went wrong!" });
  }
});
module.exports = router;
