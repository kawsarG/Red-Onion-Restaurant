/* eslint-disable no-cond-assign */
import React from 'react'
import { useState } from 'react'
import './PlaceOrder.css'
import { CheckoutForm } from '../Checkout/CheckOut';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import { useAuth } from '../Login/useAuth';


export default function PlaceOrder() {
    const auth=useAuth();
    const stripePromise = loadStripe('pk_test_huO7TbefERemE8Dhm1nFaeMB00yW8oxghG');
    const [userDetails,setuserDetails]=useState({
        name:"",
        email:'',
        contact:'',
        address:''
    });
    const [orderId,setorderId]=useState(null);
    const [shipmentInfo,setshipmentInfo]=useState(null);
    let i = 0;
    const foods = [];
    let Key;
    
    for (; Key = window.localStorage.key(i); i++) {
        foods[Key] = JSON.parse(window.localStorage.getItem(Key));
    }
    
    const handleSubmit=(e)=>{
        const fullUserInfo={
            ...userDetails,
            foods:foods,
        }
        setshipmentInfo(fullUserInfo);
        e.preventDefault();
    }
    const handlPlaceOrder=(payment)=>{
        const orderdetails={
            email:auth.kawsar,
            foods:foods,
            shipmentInfo:shipmentInfo,
            payment:payment
        };
        console.log(orderdetails)
        fetch('https://still-gorge-33451.herokuapp.com/placeOrder',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(orderdetails)
        }).then(res=>res.json()).then(data=>{
            localStorage.clear();
            setorderId(data._id);
        })

    }
    const handleChange=(e)=>{
        const userInfo={...userDetails}
        userInfo[e.target.name]=e.target.value;
        setuserDetails(userInfo);
    }
    return (
        <div className="row">
               <div className="col" style={{display: shipmentInfo && 'none'}}>
               <form className="form1" onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
                    <div className="container">
                        <h1 >Fill up the Shipment Info</h1>
                        <hr />
                        <label htmlFor="name"><b>Name</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Name" name="name" autoComplete="off" required id="UserName"/>

                        <label htmlFor="email"><b>Email</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" autoComplete="off" required />

                        <label htmlFor="contact"><b>Contact No</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Contact No" name="contact" autoComplete="off" required />

                        <label htmlFor="address"><b>Address Line</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Address" name="address" autoComplete="off" required />

                        <div className="clearfix">
                            <button type="submit" className="signupbtn loginStyle signupbtn .signupbtn1">Submit</button>
                        </div>
                    </div>
                </form>
               </div>
               <div className="col" style={{display: shipmentInfo ? 'block':'none'}}>
                    <div className="card12">
                        <h1>Payment Info</h1>
                        <Elements stripe={stripePromise} >
                            <CheckoutForm handlPlaceOrder={handlPlaceOrder}></CheckoutForm>
                        </Elements>
                        {
                            orderId && <div><p>Thank you for shopping with Us.</p>
                            <p>Your Order Id is:{orderId}</p>
                            <button onClick={()=>{
                                window.location='/';
                            }} className="btn1">Back to Shopping</button>
                            </div>
                            
                        }
                    </div>
               </div>
            </div>
    )
}
