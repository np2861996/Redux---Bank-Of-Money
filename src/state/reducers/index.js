import { combineReducers } from "redux";
import AmoutReducer from "./AmoutReducer";   

const reducers = combineReducers({
    amount: AmoutReducer
})

export default reducers