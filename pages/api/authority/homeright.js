// admin security add here 


import Connection from "../../../Databases/Connection";
import AllCollections from "../../../Databases/Models";
import fetchAuthority from '../../../Middlewares/fetchAuthority'
const handler = async (req, res) => {
  const { HomeRight } = AllCollections();
  if (req.method === 'POST') {
    const authority = fetchAuthority(req, res);
    if (authority) {
      const count = await HomeRight.find().count();
      if (count === 0) {
        await HomeRight.create(req.body);
        res.status(200).json("created successfully");
      }
      else {
        try {
          console.log(req.body)
          await HomeRight.findByIdAndUpdate(req._id, req.body)
          res.status(200).json("updated successfully")
        }
        catch (e) {
          console.log(e);
          res.status(400).json("update failed");
        }
      }
    }
  } else {
    const data = await HomeRight.find()
    res.status(200).json({ data: data[0] });
  }
};
export default Connection(handler);
