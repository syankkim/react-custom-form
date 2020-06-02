import React from 'react';
import {useState, useEffect, useRef} from 'react'

const useCustomForm = ({initialValues, onSubmit}) =>{
    console.log('My custom useForm');
    
    const [orders, setOrders] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [onSubmitting, setOnSubmitting] = useState(false);
    const [onBlur, setOnBlur] = useState(false);

    const formRendered = useRef(true);

    useEffect(()=>{
        if(!formRendered.current){
            console.log('Rendered!!!');
            setOrders(initialValues);
            setErrors({});
            setTouched({});
            setOnSubmitting(false);
            setOnBlur(false);
        }
        console.log('Rendered!!!');
        formRendered.current = false;
    }, [initialValues]); // initialValues 값이 바뀔때에만 적용

    const handleChange = (e)=>{
        const {name, value} = e.target;
        e.persist(); // 이벤트를 저장
        setOrders({...orders, [name]: value});
    };
    
    const handleBlur = (e)=>{
        const {target}= e;
        const {name} = target;
        setTouched({...touched, [name] :true});
        setErrors({...errors});
    }

    const handleSubmit = (e)=>{
        if(e) e.preventDefault();
        setErrors({...errors});
        onSubmit({orders, errors});
    }

    return{
        orders,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit
    }

}


export default useCustomForm;