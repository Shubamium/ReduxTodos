import { useDispatch } from "react-redux"
import { listActions } from "../features/list/listSlice"
import { TodoAdder } from "./TodoAdder"
import { useState } from "react"


export const TodoView = (props) => {
   
    const [toEdit,setToEdit] = useState(0);
    const [dialog,setDialog] = useState(false);
    function editList(id){
        setToEdit(id);
        openDialog();
    }
    function openDialog(){
        setDialog(true);
    }
    function closeDialog(){
        setDialog(false);
    }
    function renderList(list){
        return list.map((task)=>{
            return (
                <List key={task.id} onEdit={()=>{editList(task.id)}} id={task.id} title={task.title} description={task.description}></List>
            )
        })
    }
    return (
        <div>
            <h2>To-Do List</h2>
            {props.list && renderList(props.list)}
            <EditDialog id={toEdit} isOpen={dialog} onClose={closeDialog}></EditDialog>
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
            <button onClick={()=>{props.onEdit && props.onEdit()}}>Edit</button>
        </div>
    )
}


const EditDialog = (props) => {
    return (
        <dialog open={props.isOpen}>
            <button onClick={()=>{props.onClose && props.onClose()}}>Close</button>
            <h2>Edit Task</h2>
            <TodoAdder toEdit={props.id} isEdit={true}/>
        </dialog>
    )   
}