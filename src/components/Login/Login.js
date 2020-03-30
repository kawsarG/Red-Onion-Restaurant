import React ,{useState} from 'react'
import './Login.css'

import { useAuth } from './useAuth'



const Login = () => {
  const auth = useAuth();
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
  const handleSignIn = async(e) => {
    e.preventDefault();
    await auth.SignIn(user.email,user.password);
   
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSignIn} style={{ border: "1px solid #ccc" }}>
          <div className="container">
            <h1 id="center1">Login</h1>
            <hr />
            <label htmlFor="email"><b>Email</b></label>
            <input onChange={handleChange} type="text" placeholder="Enter Email" name="email" autoComplete="off" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input onChange={handleChange} type="password" placeholder="Enter Password" name="password" autoComplete="off" required />
            <div className="clearfix">
              <button type="submit" className="signupbtn loginStyle signupbtn">Login</button>
              <h1 className="text-center" > <a href="/Signup" style={{color:'red'}}> New User? Signup Here!</a></h1>
            </div>
          </div>
        </form>
      </div>


    </div>
  )
}
export default Login;