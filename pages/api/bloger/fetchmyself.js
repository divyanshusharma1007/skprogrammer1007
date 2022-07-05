import Connection from "../../../Databases/Connection";
import FetchBloger from "../../../Middlewares/fetchBloger";
import allModels from "../../../Databases/Models";

const handler = async (req, res) => {
  const bloger = FetchBloger(req, res);
  const { Bloger } = allModels();
  console.log(bloger)
  try {
    const data = await Bloger.findById(bloger.id).select("-password");
    console.log(data);
    res.json({data});
  } catch (e) {}
};
export default Connection(handler);
