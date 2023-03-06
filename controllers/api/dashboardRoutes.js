const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//new post
router.post("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      title: req.body.title,
      text: req.body.text,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbPostData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a post
router.put("/update", withAuth, async (req, res) => {
  try {
    const dbPostUpdate = await Post.update(
      {
        title: req.body.title,
        text: req.body.text,
      },
      {
        where: { id: req.body.id },
      }
    );
    res.status(200).json(dbPostUpdate);
  } catch (error) {
    res.status(500).json(error);
  }
});

//delete a post
router.delete("/delete", withAuth, async (req, res) => {
  try {
    const dbPostDelete = await Post.destroy({
      where: { id: req.body.id },
    });
    res.status(200).json(dbPostDelete);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
