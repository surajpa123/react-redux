import React, { useState } from "react";
import {useSelector} from "react-redux"
import { store } from "../Redux/store";
import {useDispatch} from "react-redux"
import { addTodo } from "../Redux/action";
import axios from "axios";
export const Todo = () =>{
const todos = useSelector(store => store.todo)
console.log(todos
    )
const [text,setText] = useState("")

const Settodo = ()=>{
    axios.post('http://localhost:8080/todos', {
        title: text,
        status: 'pending'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}
React.useEffect(()=>{

    gettodo()
},[])



const gettodo = ()=>{

axios.get("http://localhost:8080/todos").then(function(res){
    // dispatch(addTodo(text))
  let d = res.data
  dispatch(addTodo([...d,d]))
})
}

// gettodo()

const dispatch = useDispatch();
return(
<div>
<input type="text" onChange={(e)=> setText(e.target.value)}/>
<button 
onClick={()=>{


Settodo()

}}
>Add Task
</button>
{todos.map((e,i)=> (
    <div key={i}>{i+1} - {e}
    <button onClick={()=> dletetodo}>Delete</button>
    </div>
    
))}
</div>
)

}