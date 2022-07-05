import axios from 'axios'
export default async (authtoken)=>{
     const headers={
          "auth-token":authtoken
     }
     const data={};
    const res=await  axios.post("http://localhost:3000/api/bloger/updateblog",data,{headers});
    console.log(res);
    if(res.status==200){
     toast("updated success fully ")
    }else{
     toast("some error in creating your blog ")
    }
}
