import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import homeRightReducer from './adminReducers/homeRightReducer'
const reducer=combineReducers({
    login:loginReducer,
    homeRight:homeRightReducer,

})
export default reducer;