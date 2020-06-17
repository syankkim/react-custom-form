import React, { useState, useEffect } from 'react';
import useCustomForm from './hooks/useCustomForm';
import Parser from './Parser'
import $ from 'jquery'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

const initialValues = {
  said : '',
  prodNm : 'GiGAeyes i-view',
  orderType: '4201',
  custNm : '이덕스'
};

const MakeOrder= () => {
  
  const {
    orders,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useCustomForm({
      initialValues,
      onSubmit: orders=> console.log({orders})
  });

  const {
     onParsing,
     mkxml,
   } = Parser({orders});
  
    return (
      <div id="wrapper">
        <div className="row">
            <form onSubmit={handleSubmit} className='order-form'>
                <h1>Make Your Order</h1>
                <div>
                  <label>계약 ID</label>
                  <input type='text' name='said' onChange={handleChange} value={orders.said}/>
                  <button className="said-random-btn btn-rand" type='button' >RANDOM</button>
                </div>
                <div>
                  <label>상품유형</label>
                  <select defaultValue={initialValues.prodNm}  onChange={handleChange} name='prodNm'>
                    <option selected value='GiGAeyes i-view'>GiGAeyes i-view</option>
                    <option selected value='GiGAeyes i-guard'>GiGAeyes i-guard</option>
                    <option selected value='GiGAeyes i-slim'>GiGAeyes i-slim</option>
                    <option selected value='GiGAeyes i-special'>GiGAeyes i-special</option>
                  </select>
                </div>
                <div>
                  <label>오더타입</label>
                  <select defaultValue={initialValues.orderType} onChange={handleChange} name='orderType'>
                    <option selected value='4201'>4201</option>
                    <option selected value='4202'>4202</option>
                    <option selected value='4204'>4204</option>
                    <option selected value='4203'>4203</option>
                  </select>
                </div>
                <div>
                  <label>고객명</label>
                  <input type='text' name='custNm' onChange={handleChange} value={orders.custNm}/>
                </div>
                <br/>
                <div className="buttons">
                  <button className='submit-btn btn' type='submit'>SUBMIT</button>
                  <button className='parse-btn btn' type='button' onClick={onParsing}>CREATE</button>
                </div>
             </form>
            {/* <textarea spellcheck="false" type="text" className="xml-area" value={mkxml}>
              </textarea> */}
              {/* <pre className="xml-area"><code class="xml">{mkxml}</code></pre> */}
              <SyntaxHighlighter className="xml-area" language="xml" style={coy}>
                {mkxml}
              </SyntaxHighlighter>
          </div>
        </div>
    );
    
}



export default MakeOrder;