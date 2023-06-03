import { useDispatch } from "react-redux"
import { listActions } from "../features/list/listSlice"
import { TodoAdder } from "./TodoAdder"
import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { createPortal,findDOMNode } from "react-dom"
import { StyledButton } from "../App"


const StyledList = styled.div`
    background-color: #ffffff;

    & .list{
        background-color: rgb(92, 160, 255);
        margin: 1em;
        padding-bottom: 1em;
    }
`
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
        <StyledList style={{position:'relative'}}>
            <h2>To-Do List</h2>
            {props.list && renderList(props.list)}
            {renderEditDialog()}
        </StyledList>
    )
}


const List = (props) => {
    const dispatch = useDispatch();
    function handleRemove(){
        dispatch(listActions.remove(props.id));
    }    
    return (
        <div className="list">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <StyledButton bgColor={'#ff588d'} onClick={handleRemove}>Remove</StyledButton>
            <StyledButton onClick={()=>{props.onEdit && props.onEdit()}}>Edit</StyledButton>
        </div>
    )
}

const StyledEditDialog = styled.dialog`
    &::backdrop{
        opacity:1;
        backdrop-filter: blur(5px);
    }
    min-width: 60vw;

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
            <StyledButton bgColor={'#ff588d'}  onClick={closeDialog}>X</StyledButton>
            <h2>Edit Task</h2>
            <TodoAdder placeholder={props.placeholder} onSubmit={closeDialog} toEdit={props.id} isEdit={true}/>
        </StyledEditDialog>
    )   
}