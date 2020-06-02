import React from 'react';
import useCustomForm from './hooks/useCustomForm';
import Parser from './Parser'

const initialValues = {
  custNm : '',
  orderType: '4201',
  prodNm : ''
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
        <form onSubmit={handleSubmit} className='order-form'>
          <h1>Make Your Order</h1>
          <div>
            <label>고객명</label>
            <input type='text' name='custNm' onChange={handleChange} value={orders.custNm}/>
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
            <label>상품유형</label>
            <input type='text' name='prodNm' onChange={handleChange} value={orders.prodNm}/>
          </div>
          <br/>
          <button className='submit-btn' type='submit'>SUBMIT</button>
          <button className='parse-btn' type='button' onClick={onParsing}>SUBMIT</button>
          <div>
            {mkxml}
          </div>
        </form>
    );
    
    return {
      orders
    }
}

export default MakeOrder;