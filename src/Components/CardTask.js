import { useDispatch } from "react-redux"
import { deleteTask, check } from "../Redux/Actions"

const CardTask=({el})=>{
    const dispatch = useDispatch()
    return(
        <div>
            
            <h2 className={el.isDone == true && "check"}>{el.title}</h2>
            
            <button onClick={()=> dispatch(check(el.id))}>Done</button>
            <button onClick={()=> dispatch(deleteTask(el.id))}>Delete</button>
        </div>
    )
}

export default CardTask