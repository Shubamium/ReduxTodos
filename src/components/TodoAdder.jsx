import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';

export const TodoAdder = () => {
    const {register,handleSubmit} = useForm();
    // const dispatch = useDispatch();
    const onSubmit = (d)=>{
    }
    return (
        <div>
            <h1>TodoAdder</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-field'>
                    <label htmlFor="title">Task Name: </label>
                    <input type="text" {...register("title",{required:true})} placeholder='What do you need to do?' />
                </div>
                <div className="form-field">
                    <label htmlFor="description" placeholder='Describe the task in detail here!'>Description:</label>
                    <textarea {...register("description")}></textarea>
                </div>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}
