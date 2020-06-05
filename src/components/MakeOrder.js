import React from 'react';
import useCustomForm from './hooks/useCustomForm';
import Parser from './Parser'

const initialValues = {
  custNm : '',
  orderType: '4201',
  prodNm : 'GiGAeyes i-view'
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
     mkxml
   } = Parser({orders});
  
    return (
      <div id="wrapper">
        <div className="row">
            <form onSubmit={handleSubmit} className='order-form'>
                <h1>Make Your Order</h1>
                <div>
                  <label>상품유형</label>
                  <select className='prodNm' defaultValue={initialValues.prodNm} name='prodNm'>
                    <option selected value={orders.prodNm} onChange={handleChange}>GiGAeyes i-view</option>
                    <option selected value={orders.prodNm} onChange={handleChange}>GiGAeyes i-guard</option>
                    <option selected value={orders.prodNm} onChange={handleChange}>GiGAeyes i-slim</option>
                    <option selected value={orders.prodNm} onChange={handleChange}>GiGAeyes i-special</option>
                  </select>
                </div>
                <div>
                  <label>오더타입</label>
                  <select className='order-type' defaultValue={initialValues.orderType} name='orderType'>
                    <option selected value={orders.orderType} onChange={handleChange}>4201</option>
                    <option selected value={orders.orderType} onChange={handleChange}>4202</option>
                    <option selected value={orders.orderType} onChange={handleChange}>4204</option>
                    <option selected value={orders.orderType} onChange={handleChange}>4203</option>
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
            <textarea className="xml-area" value={mkxml}>
              </textarea>
          </div>
        </div>
    );
    
}

export default MakeOrder;