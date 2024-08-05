import React from 'react'
import {  useSelector } from 'react-redux';
import { isLoginSelector } from '~/redux/reducers/accountSlice';
import { get } from '~/utils/httpRequest';

function Dashboard() {
  const isLogin = useSelector(isLoginSelector)
  const [user,setUser] = React.useState(null);
  React.useEffect(() => { 
      if(isLogin){
        get('get-user').then((data) => {    
          setUser(data?.user)
       });
      }
  },[isLogin])
  return user && (  
        <div style={{display:'flex', flexDirection:'column'}}>
          <h2>Name: {user.name}</h2>
          <h2>Email: {user.email}</h2>
          <h2>Username: {user.username}</h2>
        </div>
      ) || <><h2>No Data</h2></>
}

export default Dashboard