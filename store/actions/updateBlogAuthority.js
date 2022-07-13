import axios from 'axios'
import {toast }from 'react-toastify'
export default async (data,authtoken)=>{
     const headers={
          "auth-token":authtoken
     }
    const res=await  axios.post("http://localhost:3000/api/authoriy/updateblog",data,{headers});
    console.log(res);
    if(res.status==200){
     toast("updated success fully ")
    }else{
     toast("some error in creating your blog ")
    }
}
