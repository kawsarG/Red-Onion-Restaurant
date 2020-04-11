import React ,{useState}from 'react'
import { useParams } from 'react-router-dom'
import './FoodDetails.css'
import { Button } from 'react-bootstrap';
import { useAuth } from '../Login/useAuth';
import { useEffect } from 'react';



export default function FoodDetials(props) {

    const [food,setFood]=useState({
      name:'',
      url:'',
      price:''
    })  
    const auth=useAuth();
    let price=0;
    let i = 0;
    const foods = [];
    let Key;
    for (; Key = window.localStorage.key(i); i++) {
        foods[Key] = JSON.parse(window.localStorage.getItem(Key));
        price=price+parseInt(foods[Key].price);
    }
    let count=localStorage.length;
    let data=[];
    const { id } = useParams();
    //useEffect
    const task=()=>{
      fetch(`https://still-gorge-33451.herokuapp.com/food/${id}`).then(res=>res.json()).
      then(res=>setFood(res));
    }
    useEffect(()=>{
       task();
    },[])

    const handleOrder=()=>{
        if(auth.kawsar && localStorage.length>0){
          localStorage.setItem(data.id, JSON.stringify(data));
          window.location.href='/cart';
        }
        else{
          window.location.href='/login'; 
        }
        
    }  
  
    const AddTocart=()=>{
      localStorage.setItem(id,JSON.stringify(food));
      window.location.reload();
      
    }

    return (
       <div className="row">
            <div  className="col text-center">
            <div className="col ">
                <div className="card" id="center1">
                     <  img src={food.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{food.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h3>Price:$<span>{food.price}</span></h3>
                    </div>
                </div>
            </div>
            <Button  id="center" onClick={AddTocart}>Add to Cart</Button>
        </div>
        <div className="col">
            <div className="border">
            
            <h3>Total Item Orderd:{count} </h3>
            <h4>Totla Price:{price}</h4>
            <Button id="center" onClick={
             handleOrder
            }>Place Order</Button>
            </div>
        </div>
        
       </div>

    )
}
