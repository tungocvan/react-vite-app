import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { isLogout } from '~/redux/reducers/accountSlice';

function Logout() {
  const navigate = useNavigate();    
  const dispatch = useDispatch()
  const [exit,setIsexit] = React.useState(false)
  React.useEffect(() => {
    if (sessionStorage.getItem('token')) {        
        sessionStorage.removeItem('token')    
        // dispatch(isLogout());   
        setIsexit(true)         
      }
      if(exit){
        return navigate('/')
      }
  },[exit])

  return (<>Logout</>)

}

export default Logout