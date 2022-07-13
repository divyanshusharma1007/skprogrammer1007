import axios from 'axios';

export default async (fun) => {
     const res = await axios.post("http://localhost:3000/api/all/approvedblogs")
     if (res.status === 200) {
          console.log(res);
          fun(res.data)
     } 
}