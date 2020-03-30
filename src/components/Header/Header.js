/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'
import im from '../../Images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from "../Login/useAuth";

export default function Header() {

    const auth= useAuth();
   
    const HandleCart=()=>{
      window.location.href="/cart"
    }
    const HandleLogout=()=>{
        auth.SignOut();
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">
                     <img src={im} alt=""></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                  <ul className="navbar-nav ml-auto" id="4"> 
                  <li className="nav-item">
                      <a className="nav-link"  onClick={HandleCart} style={{cursor:"pointer"}}><FontAwesomeIcon icon={faCartPlus}/></a>
                  </li>
                  <li className="nav-item" style={{display:'none',cursor:'pointer'}} id="1" onClick={HandleLogout}>
                      <a className="nav-link" href="/">Logout</a>
                  </li>
                  <li className="nav-item" style={{display:'none'}} id="2">
                      <a className="nav-link" href="/login">Login</a>
                  </li>
                  <li className="nav-item" style={{display:'none'}} id="3">
                      <a className="nav-link sign-up" href="/signup" >Sign Up</a>
                  </li>
              </ul>                         
                 
                </div>
            </nav>
        </div>
    );
}