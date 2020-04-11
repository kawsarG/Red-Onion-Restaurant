import * as firebase from "firebase/app";
import React, { useContext, useState, useEffect } from 'react';
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { createContext } from "react";


firebase.initializeApp(firebaseConfig)
const AuthContext = createContext();
export const AuthContextProvider=(props)=>{
    const auth=Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
} 
export const useAuth=()=> useContext(AuthContext);

const Auth=()=>{
     const [kawsar,setKawsar] = useState(null)
    
    const setUpUI=(user,email)=>{
        const a=document.getElementById('1');
        const b=document.getElementById('2');
        const c= document.getElementById('3');

       
        if(user){
           a.style.display='block';
           //toggle
           b.style.display='none';
           c.style.display='none';
        }
        else{
            b.style.display='block';
            c.style.display='block';
            //toggle
            a.style.display='none';
        }
        if(email!==undefined){
            var ul = document.getElementById("4");
            var li = document.createElement("li");
            var an=document.createTextNode(email);
            li.appendChild(an);
            ul.appendChild(li);
        }
        
        setKawsar(email);

    }
    const sinUpWithPassword=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            res=>{
                console.log(res);
                console.log("signined")
                window.location.href="/"
            }
        ).catch(function(error) {
        
          });
    }
    const SignOut=()=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            localStorage.clear();
          
          }).catch(function(error) {
            // An error happened.
          });
    }
    const SignIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email, password).then(res=>{
            console.log("signined")
           window.location.href="/"
        }
        ).catch(function(error) {
          });
          
    }
   
    
    useEffect(()=>{
       
       firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const email = user.email;
                console.log(email)
                setKawsar(email);
               setUpUI(user,email)
             
            } else {
              // No user is signed in.
              console.log("no user")
              setUpUI();
            }
          });
    },[])

    return{
        sinUpWithPassword,
        SignIn,
        SignOut,
        useEffect,
        kawsar
    }
}
export default Auth;