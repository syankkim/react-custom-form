import React from 'react';
import {useForm} from 'react-hook-form';

export default function MakeOrder(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log('watch > '+watch("example")); // watch input value by passing the name of it
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} style={{"margin-top":"50px"}}>
        <input name="example" defaultValue="test" ref={register} />
        <input name="exampleRequired" ref={register({ required: true })} />

        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
}