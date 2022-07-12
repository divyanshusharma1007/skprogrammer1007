import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'

const handler = async (req, res) => {
const { Blogs}=AllCollections();
try{

     const blog=await Blogs.find({aproved:true})
     res.status(200).json(blog)
}catch(e){
     console.log(e);
     res.status(400).json("error occured")
}
}
export default Connection(handler);