import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, isLoginSelector, isLoadingSelector } from "~/redux/reducers/accountSlice";
import logoLogin from "~/assets/login-logo.png";
import "./login.scss";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const isLogin = useSelector(isLoginSelector);
  const isLoading = useSelector(isLoadingSelector);
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser({ email, password }));
  };

  React.useEffect(() => {
    // console.log('isLogin:',isLogin);
    if (isLogin) {
      return navigate("/dashboard");
    }
  }, [isLogin]);

  return (
    <div className="wrapper ">
      <div className="icon">
        <img src={logoLogin} alt="" />
      </div>
      <div className="text-center mt-4 name"> HAMADA LOGIN </div>
      <form className="p-3 mt-3" onSubmit={handleLogin}>
        <div className="input-field flex flex-row justify-center items-center">
          <span className="far fa-user"></span>
          <input
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

        {error && <p className="error-message">{error}</p>}
        {
          isLoading? (<button disabled className="btn mt-3" type="submit">
          Loading...
        </button>):(<button className="btn mt-3" type="submit">
          Đăng Nhập
        </button>)
        }
        
      </form>
      <div className="text-center fs-6"> 
            <a href="forget">Forgot password?</a> or <a href="/register">Sign up</a> 
        </div>
    </div>
  );
};

export default Login;
