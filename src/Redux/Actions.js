import { ADDTASK, DELETETASK, CHECK } from "./ActionTypes"

export const addTask=(payload)=>{
    return(
        {
            type : ADDTASK,
            payload
        }
    )
}


export const deleteTask=(payload)=>{
    return(
        {
            type : DELETETASK,
            payload
        }
    )
}

export const check=(payload)=>{
    return(
        {
            type : CHECK,
            payload
        }
    )
}