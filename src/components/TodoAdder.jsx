import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { listActions } from '../features/list/listSlice';
import styled from 'styled-components';

const StyledFormAdder = styled.form`
    .form-field{
        max-width: 100%;
        display: flex;
        flex-direction: column;
        & input,& textarea{
            padding: 1.2em;
            margin: .5em;
        }
        label{
            display: block;
        }
    }
`
export const TodoAdder = (props) => {
    const {register,handleSubmit,setValue} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (d)=>{
        if(props.isEdit){
            dispatch(listActions.edit({id:props.toEdit,data:d}));
            props.onSubmit && props.onSubmit();
        }else{
            dispatch(listActions.add(d));
        }
    }

    useEffect(()=>{
       console.log('updated:' + JSON.stringify(props.placeholder));

      if(props.placeholder){
        setValue('title',props.placeholder.title);
        setValue('description',props.placeholder.description);
      }
    },[props.placeholder]);

    return (
        <StyledFormAdder onSubmit={handleSubmit(onSubmit)} >
            <div className='form-field'>
                <label htmlFor="title">Task Name: </label>
                <input type="text"  {...register("title",{required:true})} placeholder='What do you need to do?' />
            </div>
            <div className="form-field">
                <label htmlFor="description" placeholder='Describe the task in detail here!'>Description:</label>
                <textarea placeholder='Describe the task in more detail here!'  {...register("description")}></textarea>
            </div>
            <button type='submit'>{props.isEdit ? 'Edit' : 'Add'}</button>
        </StyledFormAdder>
    )
}
