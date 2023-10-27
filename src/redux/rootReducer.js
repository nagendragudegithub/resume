import {combineReducers} from "redux"
import SelfDetails from "./reducer"




const rootReducer=combineReducers({
    selfDetails:SelfDetails,
})





export default rootReducer