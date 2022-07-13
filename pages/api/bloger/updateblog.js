
import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";
import joi from "joi";
const handler = async (req, res) => {
  const Bloger = FetchBloger(req, res);
  const { Blogs } = allModels();
  console.log(Bloger, "Bloger");
  if (Bloger) {
    try {
      let blog = await Blogs.findById(req.body._id)
      console.log(blog.blogerid.tostring(), req.body.blogerid)
      if (blog.blogerid.tostring() === Bloger.id) {
        const blogs = await Blogs.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ data: blogs })
      }
      blog = await Blogs.findById(req.body._id)
      console.log(blog)
      res.status(200).json({ data: blog })
    } catch (e) {
      res.json(e);
    }
  }
}
export default Connection(handler);
