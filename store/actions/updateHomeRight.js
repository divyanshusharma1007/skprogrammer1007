import axios from "axios";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";
export default async (authtoken, data) => {

  const headers = {
    "auth-token": authtoken
  }
  try {
    const stateData = await axios.post(`http://localhost:3000/api/authority/homeright`, data,{ headers });
    // console.log(stateData, "Data");

    if (stateData.data.success) {
      // console.log(stateData.data)
      toast("updated Success")
    }
  } catch (e) {
    toast("update failed")
  }
};
