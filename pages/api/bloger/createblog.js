import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import joi from "joi";
const handler = async (req, res) => {
  const schema=joi.object({
    title:joi.string(),
    description:joi.string(),
    programmingLanguage:joi.string(),
    authorName:joi.string()
  })
  const Bloger = await FetchBloger(req, res);
  const { Blogs } = allModels;
  try {
    const blog1 = await Blogs.findOne({
      description: req.body.description,
    });
    if (blog1) {
      res.send("blog aready exists");
    } else {
      const newBlog = await Blogs.create(bodyData);
      res.send(newBlog);
    }
  } catch (err) {
    res.status(400).send("some error occured");
  }
};
export default Connection(handler);
