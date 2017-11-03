import { combineReducers } from "redux";
import providerReducer from "./providerReducer"

const rootReducer = combineReducers({
  providerReducer,
})

export default rootReducer;
