const router = require("express").Router();
const { Post, User } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts); // Add this line
    res.render("dashboard", { posts, name: req.session.name });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const { title, text } = req.body;
    const user_id = req.session.user_id;

    const post = await Post.create({
      title,
      text,
      user_id,
    });

    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User, attributes: ["name"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.status(201).render("dashboard", { posts, name: req.session.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});





module.exports = router;
