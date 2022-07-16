import axios from "axios";
import * as ActionTypes from "../ActionTypes";
import { toast } from "react-toastify";
export default async () => {
  const InitialState = {}
  try {
    const stateData = await axios.get(`http://localhost:3000/api/authority/homeright`);
    //console.log(stateData.status);
    if (stateData.data.success) {
      return { payload: stateData.data, type: ActionTypes.HOME_RIGHT }
    }
  } catch (e) {
    return { payload: InitialState, type: ActionTypes.LOG_IN }
  }
};
