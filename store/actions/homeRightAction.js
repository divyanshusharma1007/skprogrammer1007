import axios from "axios";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";
export default async (fun) => {
  const stateData = await axios.get(`http://localhost:3000/api/authority/homeright`);
  console.log(stateData);
  if(stateData?.status){
    fun(stateData?.data?.data);
  }
};
