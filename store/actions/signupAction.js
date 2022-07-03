import axios from "axios";
import * as ActionTypes from '../ActionTypes'
import {toast } from 'react-toastify'
export default async (formData,value) => {
    //console.log(formData.image)
    const a = await axios.post(`http://localhost:3000/api/${value}/create`, formData)
    if(a.data.status){

      toast( `${value} account created successfully`)
      return { payload:a.data, type: ActionTypes.LOG_IN }
    }
    else{
      toast("unable to create your account ! try again");
      return { payload:{authby:'',authtoken:'',status:false}, type: ActionTypes.LOG_IN }
    }
}