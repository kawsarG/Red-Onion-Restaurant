import React, { useState} from 'react'
import { useAuth } from '../Login/useAuth';
import './Signup.css'


export default function Sigunup() {
    const auth=useAuth();
    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })
    
    const handleChange=(e)=>{
        e.preventDefault();
        const newUser={
            ...user
        }
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
        console.log(newUser)
    }
    const SignUp=(e)=>{
        e.preventDefault();
        auth.sinUpWithPassword(user.email,user.password);
        auth.SetUserName("user.name");
       // window.location.href="/";
    }

    return (
        <div>
            <div>
                <form onSubmit={SignUp} style={{ border: "1px solid #ccc" }}>
                    <div className="container ">
                        <h1 id="center1">Sign Up</h1>
                        <hr />
                        <label htmlFor="name"><b>Name</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Name" name="name" autoComplete="off" required id="UserName"/>

                        <label htmlFor="email"><b>Email</b></label>
                        <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" autoComplete="off" required />

                        <label htmlFor="psw"><b>Password</b></label>
                        <input onChange={handleChange} type="password" placeholder="Enter Password" name="password" autoComplete="off" required />
                        <p>By creating an account you agree to our Terms & Privacy.</p>

                        <div className="clearfix">
                            <button type="submit" className="signupbtn loginStyle signupbtn .signupbtn1">Sign Up</button>
                        </div>
                        <h2><a href='/login' className="text-center center3"> Already Have An Account ?</a></h2>
                    </div>
                </form>
            </div>


        </div>
    )
}
