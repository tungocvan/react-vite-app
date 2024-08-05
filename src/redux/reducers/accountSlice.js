import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';
const httpRequest = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const loginUser = createAsyncThunk('accounts/loginUser', async ( data, options) => {
  try {            
    const response = await httpRequest.post('login', data, options);
    return response.data      
    } catch (error) {
      console.error('Đã có lỗi gọi api xảy ra:');    
      return Promise.reject(error);
    }        
})



export const saveAccountCurrent = createAsyncThunk('accounts/accountsFetched',  
// goi api cho nay , sau do return tra ve phia extraReducers
(userCurrent) => {
        return userCurrent;     
})

const accountSlice = createSlice({
  name: "accounts",
  initialState: {    
    isLogin: false,
    account: {},
  },
  reducers: {
    updateUser(state,user) {      
      state.account = {...user};
      state.isLogin = true
      return state;
    },
    isLogout(state) {      
      state.isLogin = !state.isLogin ;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveAccountCurrent.fulfilled, (state, action) => {
        // logic here
         state.account = action.payload  
      }) 
    builder.addCase(loginUser.rejected,(state, action) => {                 
        toast.error("email hoặc mật khẩu không đúng", {          
          position: "top-left"
        });
    })  
    builder.addCase(loginUser.fulfilled,(state, action) => {      
      if(action.payload.length === 0){
          state.isLogin = false
        
      }else{
        state.isLogin = true
        state.account = action.payload 
        sessionStorage.setItem('token',JSON.stringify(action.payload))
        // console.log('payload:',action.payload)    
      }
           
      
      
    })   
      
  }
});

//const { actions, reducer } = todoSlice;
// Reducer
 const accountsReducer = accountSlice.reducer;
// Selector
export const accountsSelector = (state) => {
  return state.accounts;
};
export const isLoginSelector = (state) => {
  return state.accounts.isLogin;
};


export const { isLogout, updateUser } = accountSlice.actions;

export default accountsReducer;
