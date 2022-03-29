import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Counter} from "./Components/Counter"
import {store} from "./Redux/store"
import { Todo } from './Components/Todo'
import {Routes,Route} from "react-router-dom"
import {Detailtodo} from "./Components/Detailtodo"
function App() {


  return (
    <div className="App">
     {/* <Counter/> */}
    

    <Routes>
      <Route path='/' element={<Todo/>}></Route>
      <Route path='/todo/:id' element= {<Detailtodo/>}></Route>
     </Routes>
    </div>
  )
}
export default App
