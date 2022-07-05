import axios from 'axios';
import { toast } from 'react-toastify';
export default async (id,fun)=>{
     const res=await axios.post("http://localhost:3000/api/all/openblog",{id:id})
if (res.status===200){
     toast("getted")
     fun(res.data.data)
}else{
toast("error occured")
}
}