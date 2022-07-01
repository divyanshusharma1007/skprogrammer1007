import * as ActionTypes from "../ActionTypes";

const usersInitialState = {
  
};

export default function reducer( state = usersInitialState,action) {
  console.log("call 2",action, state);
  switch (action?.type) {
    case ActionTypes.LOG_IN:
      const newstate={ ...state, login: action.payload};
      console.log(newstate);
      return newstate.login;
    default:
      return state;
  }
}
