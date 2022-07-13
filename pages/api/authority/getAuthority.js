import Connection from '../../../Databases/Connection'
import AllCollections from '../../../Databases/Models'
import FetchAuthority from '../../../middlewares/fetchAuthority';
// add fetch Authority here and make the security 
const handler = async (req, res) => {
    const authority = FetchAuthority(req, res);
    if (authority) {

        try {
            const { Authority } = AllCollections();

            const authority = await Authority.findById(Authorityid).select("-password")
            res.status(400).send({ status: true, data: authority })
        } catch (err) {
            res.status(500).send({ status: false, data: "Some Error occured" })
        }
    }

}

export default Connection(handler);