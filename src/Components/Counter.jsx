import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
import { addCount, subCount } from "../Redux/action"
import { store } from "../Redux/store"

export const Counter = ()=>{
const dispatch = useDispatch()
const state = useSelector((store)=>store.count)
// it can control the rerendring  - useselector
    return(
        <div>
     <h1>Counter: {state}</h1>
     <button onClick={()=>{dispatch(addCount(1))}}>Add</button>
     <button onClick={()=>{dispatch(subCount(1))}}>Dec</button>
        </div>
    )
}