

//Action Type
export const Add_Count = "Add_Count";
export const Sub_Count = "Sub_Count";


export const Add_Todo = "Add_Todo"

//ACtion creators

export const addCount = (payload) =>({type: Add_Count,payload})
export const subCount = (payload) =>({type: Sub_Count,payload})
export const addTodo = (todo) => ({type:Add_Todo,payload: todo})
