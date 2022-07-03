import axios from "axios";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";
export default async (data) => 
{

  const InitialState = {
    heading: "",
    box: [
      {
        heading: "",
        description: "",
      },
    ],
  };
  try{
    const stateData = await axios.post(`http://localhost:3000/api/authority/homeright`,data);
    console.log(stateData,"Data");
      if(stateData.data.success){
        toast("updated Success")
        return { payload: stateData.data, type: ActionTypes.HOME_RIGHT }
      }
    }catch(e){
        toast("update failed")
      return { payload:InitialState, type: ActionTypes.LOG_IN }
    }
};
