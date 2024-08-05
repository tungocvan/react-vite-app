import { Navigate, Outlet  } from "react-router-dom";

function PrivateRoute({ isLogged }) {
  console.log('isLogged:',isLogged);
  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;
