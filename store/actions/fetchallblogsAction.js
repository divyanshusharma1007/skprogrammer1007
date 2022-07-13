import axios from 'axios'
export default async (authtoken, setingFunction) => {
      const headers={
          "auth-token":authtoken
     }
     const data = {}
     const res = await axios.post("http://localhost:3000/api/authority/fetchallblogs", data, {headers})
     console.log(res);
     setingFunction(res.data.data);
}