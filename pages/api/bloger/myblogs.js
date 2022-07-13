import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";
import joi from "joi";
const handler = async (req, res) => {
  const Bloger = FetchBloger(req,res);
  const { Blogs } = allModels();
  try {
    const myblogs = await Blogs.find({blogerid:Bloger.id});
    console.log(myblogs);
    res.send(myblogs);
  } catch (err) {
    res.status(500).send(err);
  }
};
export default Connection(handler);
