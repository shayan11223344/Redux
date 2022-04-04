import {createStore} from "redux"
import Reducer from "./Reducer"
const data=0
const store=createStore(Reducer,data)
store.subscribe(()=>{console.log(store.getState(),"subscribe")})
export default store