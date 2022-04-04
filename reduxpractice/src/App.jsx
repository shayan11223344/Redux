import React from 'react'
import {useSelector,useDispatch} from "react-redux"
function App() {
    const state=useSelector((store)=>{return store})
    const dispatch=useDispatch()
  return (
    <div>App
        {state}
        <button onClick={()=>dispatch({type:"inc"})}>Inc</button>
        <button onClick={()=>dispatch({type:"dec"})}>Dec</button>
        <button onClick={()=>dispatch({type:"res"})}>Res</button>


    </div>
  )
}

export default App