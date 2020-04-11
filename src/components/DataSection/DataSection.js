/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './DataSection.css'


export default function DataSection() {
    return (
        <div id="data">
            <div className="text-center">
                <h1>Why You chose us</h1>
                <p>We provide exceptional delivery service 24/7 from our Polish centre of excellence, with a targeted service level of 99.8%.
                We have a very highly skilled team of Food technologists who have gained
                many years’ experience working with the UK Food manufacturing sector.
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <img src='https://i.imgur.com/4vV4Z5w.png' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src='https://i.imgur.com/udXATim.png' className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card" >
                        <img src="https://i.imgur.com/WJjqFhS.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
