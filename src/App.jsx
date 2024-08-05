import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import {  useSelector, useDispatch } from 'react-redux';
import {  isLoginSelector , updateUser } from '~/redux/reducers/accountSlice';
import { publicRoutes, privateRoutes } from "~/routes";
import DefaultLayout from "~/layouts";

function App() {
  const isLogin = useSelector(isLoginSelector)
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(isLogin === false){
      const loginLocalStorge = sessionStorage.getItem('token');
      if (loginLocalStorge) {
          const user = JSON.parse(loginLocalStorge)
          dispatch(updateUser(user))
      }
    }
  },[isLogin])
  return (
    <Router>
      <Routes>      
        {publicRoutes.map((route, index) => {         
          const Page = route.component;
          let Layout = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={ 
                <Layout>
                  <Page />       
                </Layout>              
              }
            />
          );
        })}
        {isLogin && privateRoutes.map((route, index) => {
            const PagePrivate = route.component;   
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }         
            return (
              <Route key={index} path={route.path} element={<Layout><PagePrivate /></Layout>}  />
            );
          })}
         <Route path="*" element={<Navigate to={'/'} replace />} /> 
      </Routes>
    </Router>
  );
}

export default App;
