import axios from "axios";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";
export default async (data, value) => {
  try{
    const stateData = await axios.post(`http://localhost:3000/api/${value}/login`,data);
      if(stateData.data.status){
        toast("login successfull"+" as "+value);
        return { payload: stateData.data, type: ActionTypes.LOG_IN };
      }
    }catch(e){
      toast("failed");
      return { payload:{authby:'',authtoken:'',status:false}, type: ActionTypes.LOG_IN }
    }
};
