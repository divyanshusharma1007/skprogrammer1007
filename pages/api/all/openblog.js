import Connection from "../../../Databases/Connection";
import AllCollections from "../../../Databases/Models";

const handler = async (req, res) => {
  const { Blogs } = AllCollections();
  console.log(req.body," req body blog id")
  try {
     const blog= await Blogs.findById(req.body.id);
     res.status(200).json({data:blog})
  } catch (err) {
     res.status(400).json({data:"some error occured"})
  }
};
export default Connection(handler);
