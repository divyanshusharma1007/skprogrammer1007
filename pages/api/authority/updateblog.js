import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
import FetchAuthority from '../../../middlewares/fetchAuthority';

const handler = async (req, res) => {
    const authority =await FetchAuthority(req, res);
    if(authority){
        const {Blogs}=AllCollections();
        try{
       
          const blogs=await Blogs.findByIdAndUpdate(req.body._id,req.body)
          const blog=await Blogs.findById(req.body._id);
          res.status(200).json({data:blog})
        }catch(e){
          res.staus(400).json("some error occured")
        }
    }
}

export default Connection(handler);