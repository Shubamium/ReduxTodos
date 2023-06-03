import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { listActions } from '../features/list/listSlice';

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
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='form-field'>
                <label htmlFor="title">Task Name: </label>
                <input type="text"  {...register("title",{required:true})} placeholder='What do you need to do?' />
            </div>
            <div className="form-field">
                <label htmlFor="description" placeholder='Describe the task in detail here!'>Description:</label>
                <textarea  {...register("description")}></textarea>
            </div>
            <button type='submit'>{props.isEdit ? 'Edit' : 'Add'}</button>
        </form>
    )
}
