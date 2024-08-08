import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, isLoginSelector, isLoadingSelector } from "~/redux/reducers/accountSlice";
import logoLogin from "~/assets/login-logo.png";
import "./forget.scss";


const Forget = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const hanldForget = () => {
    console.log('hanldForget');
  }
  return (
    <div className="wrapper ">
    <div className="icon">
      <img src={logoLogin} alt="" />
    </div>
    <div className="text-center mt-4 name"> HAMADA FORGOT PASSWORD  </div>
    <form className="p-3 mt-3" onSubmit={hanldForget}>
     
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

      {error && <p className="error-message">{error}</p>}
      <button className="btn mt-3" type="submit">
        Reset Password
      </button>
      
    </form>
    <div className="text-center fs-6"> 
          <a href="/register">Sign up?</a> or <a href="/login">Sign in</a> 
      </div>
  </div>
  )
}


export default Forget;
