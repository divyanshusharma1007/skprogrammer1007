import * as ActionTypes from "../actionTypes";
import axios from 'axios';
import url from '../Url'
// create the store here 
function fetchPortalDetails() {
     return function (dispatch) {
          return axios.get(url + "fetchdetails")
               .then(({ data }) => {
                    dispatch(PortalDetails(data));
               });
     };
}
function PortalDetails(data) {
     return {
          type: ActionTypes.FETCH_PORTAL_DETAILS,
          payload: data,
     };
}
// export the functions 