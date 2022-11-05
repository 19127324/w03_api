const e = require("express");

const temp = [];
temp.push({username: 'abc', email: 'abc@gmail.com', password : 'abcabc'})
temp.push({username: 'abc1', email: 'abc1@gmail.com', password : 'abcabc1'})
temp.push({username: 'abc2', email: 'abc2@gmail.com', password : 'abcabc2'})

exports.profile = () => {
  return temp;
}
exports.checkingEmail = (email)=>{
  var result = false;
  temp.forEach(element => {
    if(element.email.localeCompare(email) == 0){
        result = true;
    }
  });
  return result;
}

exports.register = (username, email, password) => {
  temp.push({username: username, email: email, password : password});
  return {username: username, email: email, password : password};
}

exports.checkingLogin = (username, password) => {
  var result = false;
  temp.forEach(element => {
    if(element.username.localeCompare(username) == 0 && element.password.localeCompare(password)==0){
        result = true;
    }
  });
  return result;
}