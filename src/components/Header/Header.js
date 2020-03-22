/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css'
import im from '../../components/Header/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                     <img src={im} alt=""></img>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#"><FontAwesomeIcon icon={faCartPlus}/></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" id="sign-up">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}