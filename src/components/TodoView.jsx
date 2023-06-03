import { useDispatch } from "react-redux"
import { listActions } from "../features/list/listSlice"
import { TodoAdder } from "./TodoAdder"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { createPortal,findDOMNode } from "react-dom"


export const TodoView = (props) => {
   
    const [toEdit,setToEdit] = useState(0);
    const [dialog,setDialog] = useState(false);
    const [placeholder,setPlaceholder] = useState({});
    function editList(id){
        setToEdit(id);
        openDialog(); 
        const edit = props.list.find((val)=>val.id === id);
        console.log(edit);
        setPlaceholder(edit);
    }
    function openDialog(){
        setDialog(true);
    }
    function closeDialog(){
        setDialog(false);
        setPlaceholder({});
    }
    function renderList(list){
        return list.map((task)=>{
            return (
                <List key={task.id} onEdit={()=>{editList(task.id)}} id={task.id} title={task.title} description={task.description}></List>
            )
        })
    }
    function renderEditDialog(){
        const root = document.getElementById('root');
        const childrn = <EditDialog placeholder={placeholder} id={toEdit} isOpen={dialog} onClose={closeDialog}></EditDialog>;
        return createPortal(childrn,root);
    }
    return (
        <div style={{position:'relative'}}>
            <h2>To-Do List</h2>
            {props.list && renderList(props.list)}
            {renderEditDialog()}
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

const StyledEditDialog = styled.dialog`
    &::backdrop{
        opacity:1;
        backdrop-filter: blur(5px);
    }

`
const EditDialog = (props) => {
    const closeDialog = ()=>{props.onClose && props.onClose()};
    const modalRef = useRef();
    useEffect(()=>{
        if(props.isOpen){
            modalRef.current.showModal();
        }else{
            modalRef.current.close();
        }
    },[props.isOpen]);
    return (
        <StyledEditDialog ref={modalRef}>
            <button onClick={closeDialog}>Close</button>
            <h2>Edit Task</h2>
            <TodoAdder placeholder={props.placeholder} onSubmit={closeDialog} toEdit={props.id} isEdit={true}/>
        </StyledEditDialog>
    )   
}