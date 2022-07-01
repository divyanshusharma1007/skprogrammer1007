import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
import FetchAuthority from '../../../middlewares/fetchAuthority';
const handler = async (req, res) => {
    FetchAuthority(req,res);
    try {
        const { Authority } = AllCollections();
        let Authorityid = req.authority.id;
        const authority = await Authority.findById(Authorityid).select("-password")
        res.status(400).send({ status: true, data: authority })
    } catch (err) {
        res.status(500).send({ status: false, data: "Some Error occured" })
    }

}

export default  Connection(handler);