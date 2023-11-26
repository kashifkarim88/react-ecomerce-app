import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate()
  const [userEmail, setEmail] = useState()
  const [userPassword, setPassword] = useState()

  const userLogin = ()=>{
    const localData = JSON.parse(localStorage.getItem('Users'))
    
    if (userEmail === localData.email || userPassword === localData.password)
    {
      localStorage.setItem('login',JSON.stringify({userEmail,userPassword}))
      navigate('/products')
    }
    else{
      alert("user email or password is wrong, please check email and password!")
    }

  }
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-Btn" onClick={() => userLogin()}>
          Login
        </button>
        <p onClick={() => navigate("/signup")}>don't have account | Signup.</p>
      </div>
    </div>
  );
}

export default Login;
