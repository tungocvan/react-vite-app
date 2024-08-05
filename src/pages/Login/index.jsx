import React, { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, isLoginSelector } from '~/redux/reducers/accountSlice';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isLogin = useSelector(isLoginSelector)
  const dispatch = useDispatch();
  const handleLogin = (e) => {
    e.preventDefault();
    
    dispatch(loginUser({email,password}))  
  };

  React.useEffect(() => {
    // console.log('isLogin:',isLogin);
     if(isLogin){      
        return navigate('/dashboard');
     }
  },[isLogin])


  return (
    <div className="login-container container mt-6 ">
      <h2 className='text-center text-blue-600 font-black'>Đăng Nhập</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Đăng Nhập</button>
      </form>
    </div>
  );
};

export default Login;
