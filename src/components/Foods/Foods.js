/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import './Foods.css'
import { Breakfast, Launch, Dinner } from '../../Data/Data';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default class Foods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            category: 'breakfast'
        }
    }
    render() {

        return (
           <div>
                <div id="foods" className="text-center">
                <div id="category">
                    <button onClick={() => { this.setState({ category: "breakfast" }) }} className="button1">Breakfast</button>
                    <button onClick={() => { this.setState({ category: "launch" }) }} className="button1">Launch</button>
                    <button  onClick={() => { this.setState({ category: "dinner" }) }} className="button1">Dinner</button>
                </div>
                {
                    this.state.category === "breakfast" && Breakfast.map((data) => {
                        return (
                            <div className="col-lg-4 foods">
                                
                                <div className="card" >
                                    <img src={data.url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <h3>Price:$<span>{data.price}</span></h3>
                                        <Button onClick={()=>{
                                            localStorage.setItem(data.id,JSON.stringify(data));
                                        }}>Add to Cart</Button>
                                         <Link to={"/foods/"+data.id} id="decoration">
                                             <Button className="view">View Details</Button>
                                         </Link>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
                {
                    this.state.category === "launch" && Launch.map((data) => {
                        return (
                            <div className="col-lg-4 foods">
                                 
                                <div className="card" >
                                  <img src={data.url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                       <h3>Price:$<span>{data.price}</span></h3>
                                       <Button onClick={()=>{
                                            localStorage.setItem(data.id,JSON.stringify(data));
                                        }}>Add to Cart</Button>
                                        <Link to={"/foods/"+data.id} id="decoration">
                                             <Button className="view">View Details</Button>
                                         </Link>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })

                }
                {
                     this.state.category === "dinner" && Dinner.map((data) => {
                        return (
                            <div className="col-lg-4 foods">
                              
                                <div className="card " >
                                <img src={data.url} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.name}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <h3>Price:$<span>{data.price}</span></h3>
                                        <Button onClick={()=>{
                                            localStorage.setItem(data.id,JSON.stringify(data));
                                            
                                        }}>Add to Cart</Button>
                                        <Link to={"/foods/"+data.id} id="decoration">
                                             <Button className="view">View Details</Button>
                                         </Link>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
                
            </div>
            <div className="text-center" >
            <Button style={{marginTop:'10px'}} disabled={localStorage.length<1}  onClick={()=>{window.location.href='/cart'}}>Checkout Your Food</Button>
            </div>
           
           </div>
        )
    }
}
