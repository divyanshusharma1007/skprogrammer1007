import { applyMiddleware,createStore } from "redux";
import thunk from "redux-thunk";
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from "./reducers/index";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
export const store =createStore(reducer, composedEnhancer)