import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";
import joi from "joi";
const handler = async (req, res) => {
  const Bloger = FetchBloger(req, res);
  const { Blogs } = allModels();
  console.log(Bloger, "Bloger");
  try {
    const blogs = await Blogs.findByIdAndUpdate(req.body._id, req.body);
    const blog= await Blogs.findById(req.body._id)
    console.log(blog)
    res.status(200).json({data:blog})
  } catch (e) {
    res.json(e);
  }
};
export default Connection(handler);
