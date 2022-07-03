import * as ActionTypes from "../../ActionTypes";

const usersInitialState = {
  heading: "",
  box: [
    {
      heading: "",
      description: "",
    },
  ],
};

export default function reducer(state = usersInitialState, action) {
  //console.log("call 2", action, state);
  switch (action?.type) {
    case ActionTypes.HOME_RIGHT:
      const newstate = { ...state, homeRight: action.payload.data };
      //console.log(newstate);
      return newstate.homeRight;
    default:
      return state;
  }
}
