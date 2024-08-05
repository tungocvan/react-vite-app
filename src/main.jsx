import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from "react-redux";
import { ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "~/redux/store";
import { ContextProvider } from "./redux/LoginContext";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "~/components/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
      <GlobalStyles>      
        <App />
        <ToastContainer autoClose={1000} />
      </GlobalStyles>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
 
// Đăng ký service worker
// serviceWorkerRegistration.register();