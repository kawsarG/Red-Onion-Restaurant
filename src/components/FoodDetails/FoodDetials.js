import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import { Breakfast, Launch, Dinner } from '../../Data/Data';
import './FoodDetails.css'
import { Button } from 'react-bootstrap';
import { useAuth } from '../Login/useAuth';


export default function FoodDetials(props) {
    
    const auth=useAuth();
    let price=0;
    let i = 0;
    const foods = [];
    let Key;
    for (; Key = window.localStorage.key(i); i++) {
        foods[Key] = JSON.parse(window.localStorage.getItem(Key));
        price=price+parseInt(foods[Key].price);
    }
    console.log(price)
    let count=localStorage.length;
    let data=[];
    const { id } = useParams();
       if(id<7){
         data=Breakfast.find(data=>data.id===id);
         
       }
       else if(id<13){
         data=Launch.find(data=>data.id===id);
        
       }
       else{
         data=Dinner.find(data=>data.id===id);
       
       }
    const handleOrder=()=>{
        if(auth.kawsar)
        window.location.href='/cart';
    }  
  
    const AddTocart=()=>{
      localStorage.setItem(id,JSON.stringify(data));
      window.location.reload();
      
    }

    return (
       <div className="row">
            <div  className="col text-center">
            <div className="col ">
                <div className="card" id="center1">
                     <  img src={data.url} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <h3>Price:$<span>{data.price}</span></h3>
                    </div>
                </div>
            </div>
            <Button  id="center" onClick={AddTocart}>Add to Cart</Button>
        </div>
        <div className="col">
            <div className="border">
            
            <h3>Total Item Orderd:{count} </h3>
            <h4>Totla Price:{data.price}</h4>
            <Button id="center" onClick={
             handleOrder
            }>Place Order</Button>
            </div>
        </div>
        
       </div>

    )
}
