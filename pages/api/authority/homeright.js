
import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
// add some thing in the midle ware by which we valid the authority in the post method 
const handler = async (req, res) => {
  const { HomeRight } = AllCollections();
  if (req.method === 'POST') {


    // add fetch authority here 


    
// add some if else and check 

    try {
    let cn=await HomeRight.find();

      if (cn.length === 0) {
        await HomeRight.create({ heading: "welcome", box: [{ heading: "bloger", description: "provide the better opportunity to blogers" }] })
        let data=await HomeRight.find();
        res.status(200).json()
      }
      const id = req.body.data[0]._id;
      await HomeRight.findByIdAndUpdate(id,req.body.data[0]);
      const data = await HomeRight.find();
      res.status(200).json({ success: true, data: data });
    } catch (e) {
      console.error(e);
      res.status(400).json({ success: false, data: "some error occured" })
    }

  }
  else {
    try {
      const data = await HomeRight.find();
      console.log(data);
      res.status(200).json({ success: true, data: data });
    } catch (e) {
      res.status(400).json({ success: false, data: "some error occured" })
    }
  }
}
export default Connection(handler);