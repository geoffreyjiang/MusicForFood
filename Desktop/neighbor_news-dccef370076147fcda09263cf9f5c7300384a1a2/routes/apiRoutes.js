const router = require("express").Router();
const Blog = require("../models/blogSchema");
const { cloudinary } = require("../utils/cloudinary");

const {
  blogTest,
  blogGetAll,
  postBlog,
  blogFindOne,
  blogDeleteOne,
  blogUpdateOne,
} = require("../controllers/newsController");

router.route("/test").delete(blogTest);

router.route("/blog/").get(blogGetAll).post(postBlog);

router
  .route("/blog/:id")
  .get(blogFindOne)
  .patch(blogUpdateOne)
  .delete(blogDeleteOne);

router.post("/product-listings"),
  async (req, res) => {
    try {
      const fileStr = req.body.data;
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: "neighbor_news",
      });
      console.log(uploadedResponse);
      res.json({ msg: "img successfully uploaded" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: "img not uploaded" });
      const publicIds = resources.map((file) => file.public_id);
      res.send(publicIds);
    }
  };

router.get("/api/images", async (req, res) => {
  const { resources } = await cloudinary.search
    .expression("folder:neighbor_news")
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute();
  const publicIds = resources.map((file) => file.public_id);
});

module.exports = router;
