import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";
import joi from "joi";
const handler = async (req, res) => {
  const schema = joi.object({
    title: joi.string(),
    description: joi.string(),
    programmingLanguage: joi.string(),
    authorName: joi.string(),
  });
  // fetching the bloger
  const Bloger = await FetchBloger(req, res);
  console.log(Bloger)
  const { Blogs } = allModels();
  if (Bloger) {

    try {
      const blog1 = await Blogs.findOne({
        description: req.body.description,
      });
      console.log(blog1, req.body)
      if (blog1) {
        res.send("blog aready exists");
      } else {
        const bodyData = {
          blogerid: Bloger.id,
          title: req.body.title,
          description: req.body.description,
          programmingLanguage: req.body.programmingLanguage,
          authorName: req.body.authorName,
          hashtags: req.body.hashtags.split(";"),
        };
        const newBlog = await Blogs.create(bodyData);
        res.send(newBlog);
      }
    } catch (err) {
      console.log(err);
      res.status(400).send("some error occured");
    }
  }
};
export default Connection(handler);
