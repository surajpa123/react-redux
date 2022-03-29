import {createStore} from "redux";
import { Todo } from "../Components/Todo";
import { reducer } from "./reducer";

export const store = createStore(reducer,{count:0,todo:[]})







