import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import './CheckOut.css'
import { useState } from 'react';

export const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError,setcardError]= useState(null)
  const [payment,setPayment]=useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log("Payment integrated",error,paymentMethod)
    if(error){
        setcardError(error.message);
        setPayment(null);
    }else{
        setPayment(paymentMethod);
        const payment ={
          id: paymentMethod.id,
          last4:paymentMethod.card.last4
        }
        props.handlPlaceOrder(payment);
        setcardError(null)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} className="btn1">
        Pay
      </button>
      {
          cardError && <p style={{color:'red'}}>{cardError}</p>
      }
      {
          payment && <p style={{color:'green'}}>payment successfull</p>
      }
    </form>
  );
};
