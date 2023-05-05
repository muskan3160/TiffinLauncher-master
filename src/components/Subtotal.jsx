import React from "react";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { PayAction } from "../redux/actions/payAction";
import "./css/Subtotal.css";


const Subtotal = ({ price, items, setShowPay, message}) => {
  
  const dispatch = useDispatch();
  


  // const handleChange = event => {
  //   setMessage(event.target.value);
  // };

  const handleClick = event => {
   
    console.log("Bill Split:", parseInt(message)/parseInt(price));
  };
  
    
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({items} items): <strong>₹{price}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalText={2}
        value="0"
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button
        onClick={() => {
          setShowPay(true);
          dispatch(PayAction(true));
        }}
        className="subtotal_button"
      >
        Proceed to checkout
      </button>


      {/* !!You can check the bill per head!!
      Enter no. of people : 
      <input
        type="value"
        id="message"
        name="message"
        // onChange={handleChange}
        value={message}
      /> */}
      
      {/* <button onClick={handleClick}>Split</button> */}
      {/* Bill Split : {price}/{message}; */}
      </div>

  );
}
;

export default Subtotal;
