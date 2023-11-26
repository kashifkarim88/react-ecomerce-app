import React, { useState } from "react";
import "../css/Signup.css";
import { useNavigate } from "react-router";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function signupUser(){
    if(password !== confirmPass){
        alert("Password & Confirm Password doesn't match, Please re-enter the password")
    }
    else{
      localStorage.setItem('Users',
        JSON.stringify({name,email,contact,password})
        )
        navigate('/login')
    }
  }

  return (
    <div className="signup-wrapper">
      <div className="signup-form">
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPass}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="signup-btn" onClick={() => signupUser()}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default SignUp;
