
import { useState } from "react";
import {useSelector} from "react-redux"
import { store } from "../Redux/store";
import {useDispatch} from "react-redux"
import { useParams } from "react-router-dom";

export const Detailtodo = ()=>{
    const [text,setText] = useState("")
    const {id} = useParams()
    console.log(id)
    const todos = useSelector(store => store.todo.key)
   console.log("Details",todos)
    return (
<div>

<h1>Hello</h1>

</div>


    )


}