import React, { useState, useEffect } from 'react';

 const Test=()=>{
    
    const [name, setName]  = useState('');
    const [nick, setNick]  = useState('');
    const [values , setValues]=  useState({});
    useEffect(()=>{
        console.log('Rendered !!');
        console.log({name, nick});
    },[]); // mount 될때에만 실행된다. 이후 input 값을 변경해도 console에 찍히지 않음.
    // },[name]); // 특정값인 name 값이 변경될 때만 실행된다.

    const onChangeName= (e)=>{
        setName(e.target.value);
    }
    const onChangeNick= (e)=>{
        setNick(e.target.value);
    }

    const onHandleChange= (e)=>{
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        console.log(values);
    }

    const onClickBtn= (e)=>{
        e.persist();
        console.log("Before : ", e);
        setTimeout(()=>{
            console.log("After : ", e);
        }, 5000)
    }

    return(
        <div>
            <h2>Hello This is Test</h2>
            <table>
                <tr>
                    <td>name</td>
                    <td>
                        <input type='text' value={name} onChange={onChangeName} /> <br/>
                    </td>
                </tr>
                <tr>
                    <td>nick</td>
                    <td>
                        <input type='text' value={nick} onChange={onChangeNick} /><br/>
                    </td>
                </tr>
            </table>
                <input type='text'name="checkHandle" value={values.value} onChange={onHandleChange} /><br/>
            <div>
                <b>이름 : </b> {name}
            </div>
            <div>
                <b>닉네임 : </b> {nick}
            </div>
            <button type='button' onClick={onClickBtn}>CLICK</button>
        </div>
    );
};

export default Test