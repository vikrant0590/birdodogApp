import api from '../../helpers/ApiClient';
import config from '../../config/app'
import { AsyncStorage } from 'react-native';
import {Actions} from 'react-native-router-flux';
import TimerMixin from 'react-timer-mixin';


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

const LEAD_IMAGE_DELETE = "auth/LEAD_IMAGE_DELETE";
const LEAD_IMAGE_DELETE_SUCCESS="auth/LEAD_IMAGE_DELETE_SUCCESS";
const LEAD_IMAGE_DELETE_FAIL = "auth/LEAD_IMAGE_DELETE_FAIL";

const LEAD_DATA ="auth/LEAD_DATA";


const LEAD_DETAIL ="auth/LEAD_DETAIL";
const LEAD_DETAIL_SUCCESS="auth/LEAD_DETAIL_SUCCESS";
const LEAD_DETAIL_FAIL="auth/LEAD_DETAIL_FAIL";


const TRACK_LEAD ="auth/TRACK_LEAD";
const TRACK_LEAD_SUCCESS ="auth/TRACK_LEAD_SUCCESS";
const TRACK_LEAD_FAIL ="auth/TRACK_LEAD_FAIL";

const NEED_HELP="auth/NEED_HELP";


const CLEAR_PROFILE = 'CLEAR_PROFILE';

const initialState = {
  user: undefined,
  userProfile:undefined,
  detail:undefined,
  trackListData:undefined
  
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



       //IMAGE SAVE

       case LEAD_IMAGE_DELETE:
       return {...state};
 

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

       case USER_UPDATE:
        return{...state}
       
      

      // Lead Form SUbmition Here

      case LEAD_DATA:
        return {...state}
      

      //get Lead Deatil checkbox

      case LEAD_DETAIL:
        return {...state};
      case LEAD_DETAIL_SUCCESS:
      return {...state, detail:action.result}
        
      case LEAD_DETAIL_FAIL:
      return { ...state}

      //track Lead

      case TRACK_LEAD:
      return {...state}
      case TRACK_LEAD_SUCCESS:
      return {...state, trackListData:action.result}
      case TRACK_LEAD_FAIL:
      return {...state}

      //need help

      case NEED_HELP:
      return {...state}

    

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
        
        dispatch({ type: LOGIN_SUCCESS, result: res });
        AsyncStorage.setItem('userCredentials', JSON.stringify(data));
        AsyncStorage.setItem('token', JSON.stringify(res));
        AsyncStorage.setItem('UserType',JSON.stringify(res.data.type));
         resolve(res);
        
        
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
        AsyncStorage.setItem('token', JSON.stringify(res));
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


export function getDetails(UserToken){
  console.log("TOKEN",UserToken);
  return (dispatch, getState)=>  new Promise((resolve, reject)=> {
    dispatch({ type: LEAD_DETAIL});
    api
    .get('lead/lead_details_list',UserToken)
    .then((res)=> { 
      
      if(res.status === 200){
      dispatch({ type: LEAD_DETAIL_SUCCESS, result: res });
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
       if(res.status === 200){
       
        dispatch({type:RESETPASSWORD_SUCCESS, result:res});
        resolve(res);
       }else {
         resolve(res);
       }
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
      .post('user/temp_password', data)
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
       Actions.login({type: 'reset'});    
      })
    
}


export function deleteImage(data, UserToken) {
  console.log("DELETE USER TOKEN", UserToken)
  console.log("IMAGE FILE",data)
  return (dispatch,getState)=> new Promise((resolve, reject)=> {
    dispatch({ type:LEAD_IMAGE_DELETE});
    api.
  get('lead/lead_image_delete/' + data.fileid, UserToken)
  .then((res) => {
    console.log("DELETE IMAGE API RESPONSE",res);
  

      resolve(res);
  
  })
  .catch((ex) => {

    reject(ex);
  });
  })
  
}


export function submitLead(data, UserToken) {
  console.log("LEAD USER TOKEN", UserToken)
  console.log("Lead form DATA",data)
  return (dispatch,getState)=> new Promise((resolve, reject)=> {
    dispatch({ type:LEAD_DATA});
    api.
  post('lead/add',data,UserToken)
  .then((res) => {
    console.log("ADD LEAD  API RESPONSE",res);
  

      resolve(res);
  
  })
  .catch((ex) => {

    reject(ex);
  });
  })
  
}

export function getTrackList(Usertoken,page) {
  console.log("Track USER TOKEN", Usertoken);
  console.log(page);
  
  return (dispatch,getState)=> new Promise((resolve, reject)=> {
    dispatch({ type:TRACK_LEAD});
    api.
  get('lead/list/'+page, Usertoken)
  .then((res) => {
    console.log("TACKLIST  API RESPONSE",res);
    if(res.status === 200){
      dispatch({type:TRACK_LEAD_SUCCESS, result:res});
      resolve(res);
    }
  

 
  })
  .catch((ex) => {

    reject(ex);
  });
  })
  
}



export function needHelp(data,UserToken){
  console.log(data);

  
  return (dispatch,getState)=> new Promise((resolve, reject)=> {
    dispatch({ type:NEED_HELP});
  api.
  post('user/need_help',data,UserToken)
  .then((res)=> {
    console.log("help Res", res)
    resolve(res);
  })
  .catch((ex) => {

    reject(ex);
  });
})

}


