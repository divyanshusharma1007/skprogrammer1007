// admin security add here 


import Connection from "../../../Databases/Connection";
import AllCollections from "../../../Databases/Models";
import fetchAuthority from '../../../Middlewares/fetchAuthority'
const handler = async (req, res) => {
  const { HomeRight } = AllCollections();


  const authority = fetchAuthority(req, res);
  if (req.method === "POST") {
    try {
      let cn = await HomeRight.find();
      console.log(cn)
      if (cn.length === 0) {
        await HomeRight.create({
          heading: "welcome",
          box: [
            {
              heading: "bloger",
              description: "provide the better opportunity to blogers",
            },
          ],
        });
        let data = await HomeRight.find();
        res.status(200).json({ success: true, data: data[0] });
      }
      if (authority) {

        const id = req.body._id;
        console.log(id);
        console.log(req.body, " request body");
        await HomeRight.findByIdAndUpdate(id, req.body);
        const data = await HomeRight.findById(id);
        console.log(data, "data");
        res.status(200).json({ success: true, data: data });
      } else {
        res.statue(400).json({ success: false, data: "unable to update" })
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({ success: false, data: "some error occured" });
    }
  } else {
    try {
      const data = await HomeRight.find();
      console.log(data);
      res.status(200).json({ success: true, data: data[0] });
    } catch (e) {
      res.status(400).json({ success: false, data: "some error occured" });
    }
  }

};
export default Connection(handler);
