import { Add_Count, Add_Todo } from "./action";
import { Sub_Count } from "./action";
export const reducer = (store,{type,payload}) =>{

    switch (type) {
        case Add_Count:
            return {...store, count: store.count + payload};

            case Sub_Count:
                return {...store, count: store.count - payload};


           case Add_Todo:
               return {...store,todo:[...store.todo,payload]} 

            default:
                return store;
    }


}