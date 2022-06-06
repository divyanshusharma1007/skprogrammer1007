import * as ActionTypes from "../actionTypes";
const PortalDetails = [];
export const PortalDetailsReducer = (state = fetchPortalDetails, action) => {
     switch (action.type) {
          case ActionTypes.FETCH_PORTAL_DETAILS:
               return action.paylod ? [...action.payload] : []
          default:
               return state;
     }
};
