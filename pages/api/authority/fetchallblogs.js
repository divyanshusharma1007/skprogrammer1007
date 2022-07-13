import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
import FetchAuthority from '../../../middlewares/fetchAuthority';
// add fetch Authority here and make the security 
const handler = async (req, res) => {
    const authority =await FetchAuthority(req, res);
    console.log(authority)
    if(authority){
        try {
            const { Blogs } = AllCollections();
            const blogs = await Blogs.find();
            console.log(blogs)
            res.status(200).json({ data: blogs });
        } catch (err) {
            
            res.status(400).json("some error occured ");
        }
    }
}

export default Connection(handler);