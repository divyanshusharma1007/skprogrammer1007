// Create blog do not reduce in any state 
import { toast } from "react-toastify"
import { useSelector } from "react-redux"
import axios from "axios"
export default async (data,authtoken)=>{
     console.log(authtoken);

     const headers={
          "auth-token":authtoken
     }
    const res=await  axios.post("http://localhost:3000/api/bloger/createblog",data,{headers});
    if(res.status==200){
     toast("successfull")
    }else{
     toast("some error in creating your blog ")
    }
    console.log(res);

}