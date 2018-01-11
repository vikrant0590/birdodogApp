export function validationOnEmail(email) {
    const regExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpression.test(email);
  };


  export function passwordMatch(password,ConfirmPassword){
    if((password.length >= 5 && password.length <=15) && (ConfirmPassword.length >= 5 && ConfirmPassword.length <=15) ){
      if(password.length === ConfirmPassword.length){
        if(password === ConfirmPassword)
        return true;
      }else {
        return false;
      }
    }

  }
  
  