import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, isLoginSelector, isLoadingSelector } from "~/redux/reducers/accountSlice";
import logoLogin from "~/assets/login-logo.png";
import "./register.scss";


const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const hanldRegister = () => {
    console.log('hanldRegister');
  }
  return (
    <div className="wrapper ">
    <div className="icon">
      <img src={logoLogin} alt="" />
    </div>
    <div className="text-center mt-4 name"> HAMADA REGISTER </div>
    <form className="p-3 mt-3" onSubmit={hanldRegister}>
      <div className="input-field flex flex-row justify-center items-center">
        <span className="far fa-user"></span>
        <input        
          type="text"
          id="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-field flex flex-row justify-center items-center">
          <span className="fas fa-envelope"></span>
          
          <input
            className="bg-transparent"
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      <div className="input-field flex flex-row justify-center items-center">
        <span className="fas fa-key"></span>
        <input
          
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-field flex flex-row justify-center items-center">
        <span className="fas fa-key"></span>
        <input
          
          type="password"          
          placeholder="Password confirm"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
      </div>

      {error && <p className="error-message">{error}</p>}
      <button className="btn mt-3" type="submit">
        Đăng ký
      </button>
      
    </form>
    <div className="text-center fs-6"> 
          <a href="/forget">Forgot password?</a> or <a href="/login">Sign in</a> 
      </div>
  </div>
  )
}


export default Register;
