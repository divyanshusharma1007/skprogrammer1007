import axios from 'axios'
import {toast} from 'react-toastify'
export default async(authtoken,fun)=>{ 
     const headers={
          "auth-token":authtoken
     }
    const data={value:null}
    const res=await  axios.post("http://localhost:3000/api/bloger/myblogs",data,{headers});
    fun(res.data)
    if(res.status==200){
     toast("successfull")
    }else{
     toast("some error in creating your blog ")
    }
    console.log(res);
}