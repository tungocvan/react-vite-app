import React, { createContext, useState, useEffect } from 'react';


export const LoginContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    if(isLogin === false){
      const loginLocalStorge = sessionStorage.getItem('token');
      if (loginLocalStorge) {
        setIsLogin(true);
      }
    }
  }
 

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin , checkLogin}}>
      {children}
    </LoginContext.Provider>
  );
};
