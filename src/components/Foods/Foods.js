/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'
import './Foods.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NotificationAlert from 'react-notification-alert';


var options = {};
options = {
    place: 'tl',
    message: (
        <div>
            <div>
                <p>Food added to cart!</p>
            </div>
        </div>
    ),
    type: "success",
    icon: "now-ui-icons ui-1_bell-53",
    autoDismiss: 5
}

export default class Foods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foods1: [],
            category: 'breakfast',
        }

    }
    task = function () {
        fetch('https://still-gorge-33451.herokuapp.com/foods').then(res => res.json()).then(data => this.setState({ foods1: data })
        )
    }
    componentDidMount() {
        this.task();
    }

    render() {

        return (
            <div>
                <NotificationAlert ref="notify" />
                <div id="foods" className="text-center">
                    <div id="category">
                        <button onClick={() => { this.setState({ category: "breakfast" }) }} className="button1">Breakfast</button>
                        <button onClick={() => { this.setState({ category: "launch" }) }} className="button1">Launch</button>
                        <button onClick={() => { this.setState({ category: "dinner" }) }} className="button1">Dinner</button>
                    </div>

                    {
                        this.state.category === "breakfast" && this.state.foods1.map((data) => {
                            if (parseInt(data.id) < 7) {
                                return (
                                    <div className="col-lg-4 foods">

                                        <div className="card" >
                                            <img src={data.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <h3>Price:$<span>{data.price}</span></h3>
                                                <Button onClick={() => {
                                                    localStorage.setItem(data.id, JSON.stringify(data));
                                                    this.refs.notify.notificationAlert(options);
                                                    window.location = '/'

                                                }}>Add to Cart</Button>
                                                <Link to={"/foods/" + data.id} id="decoration">
                                                    <Button className="view">View Details</Button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )

                            }

                        })
                    }
                    {

                        this.state.category === "launch" && this.state.foods1.map((data) => {
                            if (parseInt(data.id)>6 && parseInt(data.id) < 13) {
                                return (
                                    <div className="col-lg-4 foods">

                                        <div className="card" >
                                            <img src={data.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <h3>Price:$<span>{data.price}</span></h3>
                                                <Button onClick={() => {
                                                    localStorage.setItem(data.id, JSON.stringify(data));
                                                    this.refs.notify.notificationAlert(options);
                                                    window.location = '/'

                                                }}>Add to Cart</Button>
                                                <Link to={"/foods/" + data.id} id="decoration">
                                                    <Button className="view">View Details</Button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )

                            }

                        })
                    }
                    {

                        this.state.category === "dinner" && this.state.foods1.map((data) => {
                            if (parseInt(data.id)>12 && parseInt(data.id) < 19) {
                                return (
                                    <div className="col-lg-4 foods">

                                        <div className="card" >
                                            <img src={data.url} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{data.name}</h5>
                                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <h3>Price:$<span>{data.price}</span></h3>
                                                <Button onClick={() => {
                                                    localStorage.setItem(data.id, JSON.stringify(data));
                                                    this.refs.notify.notificationAlert(options);
                                                    window.location = '/'

                                                }}>Add to Cart</Button>
                                                <Link to={"/foods/" + data.id} id="decoration">
                                                    <Button className="view">View Details</Button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )

                            }

                        })
                    }

                </div>
                <div className="text-center" >
                    <Button style={{ marginTop: '10px' }} disabled={localStorage.length < 1} onClick={() => { window.location.href = '/cart' }}>Checkout Your Food</Button>
                </div>

            </div>
        )
    }
}
