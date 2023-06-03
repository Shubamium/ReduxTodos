import { useDispatch } from "react-redux"
import { listActions } from "../features/list/listSlice"


export const TodoView = (props) => {
    function renderList(list){
        return list.map((task)=>{
            return (
                <List key={task.id} id={task.id} title={task.title} description={task.description}></List>
            )
        })
    }
    return (
        <div>
            <h2>To-Do List</h2>
            {props.list && renderList(props.list)}
        </div>
    )
}


const List = (props) => {
    
    const dispatch = useDispatch();
    function handleRemove(){
        dispatch(listActions.remove(props.id));
    }    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}
