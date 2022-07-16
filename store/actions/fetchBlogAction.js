import axios from 'axios';
import { toast } from 'react-toastify';
export default async (id, fun) => {
     console.log(id,"form the fetchblog")
     const res = await axios.post("http://localhost:3000/api/all/openblog", { id: id })
     if (res.status === 200) {
          fun(res?.data?.data)
     } else {
          toast("error occured")
     }
}