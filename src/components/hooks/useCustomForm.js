import React from 'react';
import {useState, useEffect, useRef} from 'react'

const useCustomForm = ({initialValues, onSubmit}) =>{
    console.log('My custom useForm');
    
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [onSubmitting, setOnSubmitting] = useState(false);
    const [onBlur, setOnBlur] = useState(false);

    const formRendered = useRef(true);

    useEffect(()=>{
        if(!formRendered.current){
            setValues(initialValues);
            setErrors({});
            setTouched({});
            setOnSubmitting(false);
            setOnBlur(false);
        }
        formRendered.current = false;
    }, [initialValues]); // initialValues 값이 바뀔때에만 적용

    const handleChange = (e)=>{
        const {name, value} = e.target;
        e.persist(); // 이벤트를 저장
        setValues({...values, [name]: value});
    };
    
    const handleBlur = (e)=>{
        const {target}= e;
        const {name} = target;
    }
}


export default useCustomForm;