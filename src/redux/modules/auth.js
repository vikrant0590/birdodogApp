import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';

import { toast } from '../../helpers/ToastMessage';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const REGISTER = 'register/REGISTER';
const REGISTER_SUCCESS = 'register/REGISTER';
const REGISTER_FAIL = 'register/REGISTER';


const RESETPASSWORD ='auth/RESETPASSWORD';
const RESETPASSWORD_SUCCESS ='auth/RESETPASSWORD_SUCCESS';


const FORGOTPASSWORD = 'auth/FORGOTPASSWORD';
const FORGOTPASSWORD_SUCCESS = 'auth/FORGOTPASSWORD_SUCCESS';
const FORGOTPASSWORD_FAIL = 'auth/FORGOTPASSWORD_FAIL';

const USERPROFILE ='auth/USERPROFILE';
const USERPROFILE_SUCCESS ='auth/USERPROFILE_SUCCESS';
const USERPROFILE_FAIL ='auth/USERPROFILE_FAIL';

const USER_UPDATE ="auth/USER_UPDATE";
const USER_UPDATE_SUCCESS = 'auth/USER_UPADTE_SUCCESS';


const CLEAR_PROFILE = 'CLEAR_PROFILE';

const initialState = {
  user: undefined,
  userProfile:undefined
  
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // Signin
    case LOGIN:
      return { ...state };
    case LOGIN_SUCCESS:
      return { ...state, user: action.result };
    case LOGIN_FAIL:
      return { ...state };

   //signup

      case REGISTER:
      return { ...state };
    case REGISTER_SUCCESS:
      return { ...state,user: action.result };
    case REGISTER_FAIL:
      return { ...state, };



       // reset password
    case RESETPASSWORD:{
      return{...state}
    }
    case RESETPASSWORD_SUCCESS:{
      return{...state, newPassword:action.result }
    }
  // forgotPassword
    case FORGOTPASSWORD:
    return { ...state };
  case FORGOTPASSWORD_SUCCESS:
    return { ...state, forgotUser:action.result };
  case FORGOTPASSWORD_FAIL:
    return { ...state};

    // userProfile

    case USERPROFILE:
        return{ ...state };
    case USERPROFILE_SUCCESS:
         return {...state, userProfile:action.result};    
    case USERPROFILE_FAIL:
         return {...state }

    //clear Profile
    case CLEAR_PROFILE: {
      return { ...state, user:undefined, userProfile:undefined }
    }

       // user updation

       case USER_UPDATE:{
        return{...state}
      }
    

    default:
      return state;
  }
}

export function login(data) {
  console.log("LOGIN DATA", data);
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({ type: LOGIN });
    api
      .post('user/signin', data)
      .then((res) => {
        console.log("LOGIN response",res);
        if(res.status === 200){
        dispatch({ type: LOGIN_SUCCESS, result: res });
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        resolve(res);
        }
        else {
          resolve(res);
          
        }
      })
      .catch((ex) => {
        console.log("CATCH CALLED");
        dispatch({ type: LOGIN_FAIL });
        reject(ex);
      });
  });
}


export  function register(data) {
  console.log("SIGNUP DATA",data);
  return (dispatch, getState)  => new Promise((resolve, reject) => {
    dispatch({ type: REGISTER });
    api
      .post('user/signup', data)
      .then((res) => {
        console.log("SIGNUP RESPONSE",res);
        dispatch({ type: REGISTER_SUCCESS, result: res });
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        resolve(res);
      })
      .catch((ex) => {
        dispatch({ type: REGISTER_FAIL });
        reject(ex);
      });
  });
}

export function getProfile(data){
  console.log("TOKEN",data);
  return (dispatch, getState)=>  new Promise((resolve, reject)=> {
    dispatch({ type: USERPROFILE});
    api
    .get('user/profile',data)
    .then((res)=> { 
      
      if(res.status === 200){
      dispatch({ type: USERPROFILE_SUCCESS, result: res });
      console.log("USER PROFILE API RESPONSE",res);
      }
      resolve(res);
    })
    .catch((ex)=>{
      reject(ex);
    })
  })

}
export function userupdate(data,Usertoken) {

  console.log("FORM DATA TO UPDATE", data);
  console.log("UPDATE TOKEN", Usertoken);
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({type:USER_UPDATE});
    api
      .post('user/profile_update', data, Usertoken)
      .then((res) => {
        console.log("UPADTE API RESPONSE", res);
        //dispatch({ type:USER_UPDATE_SUCCESS, result:res});
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });

}


export function changepassword(data,UserToken) {
  console.log("CHANGE PASSWORD FORM DATA",data);
  console.log("CHANGE PASSWORD USER TOKEN",UserToken);
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch({type:RESETPASSWORD});
    api
      .post('user/change_password', data,UserToken)
      .then((res) => {
        console.log("API CHANGE RESPONSE",res)
       
        dispatch({type:RESETPASSWORD_SUCCESS, result:res});
        resolve(res);
      })
      .catch((ex) => {
        reject(ex);
      });
  });
}

export function forgotpassword(data) {
  return (dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: FORGOTPASSWORD});
    api
      .post('user/forgot_password', data)
      .then((res) => {
        console.log("FORGOT API RESPONSE",res);
      
          resolve(res);
      
      })
      .catch((ex) => {
        dispatch({ type: FORGOTPASSWORD_FAIL});
        reject(ex);
      });
  });
}



export function logout() {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    
        dispatch({type: CLEAR_PROFILE });
        toast('Logout successfuly.');
        Actions.login();
        AsyncStorage.removeItem('userCredentials');
        resolve();
      })
    
}

