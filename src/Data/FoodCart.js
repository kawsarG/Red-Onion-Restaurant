/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function FoodCart(props) {
    return (
        <div className="row col-lg-4 foods">
                    
        <div className="card" >
            <img src={props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            
        </div>
</div>
    )
}
