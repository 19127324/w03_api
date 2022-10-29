const e = require("express");

const temp = [];
temp.push({fullName: 'abc', email: 'abc@gmail.com', password : 'abcabc'})
temp.push({fullName: 'abc1', email: 'abc1@gmail.com', password : 'abcabc1'})
temp.push({fullName: 'abc2', email: 'abc2@gmail.com', password : 'abcabc2'})

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
exports.register = (fullName, email, password) => {
  temp.push({fullName: fullName, email: email, password : password});
  return {fullName: fullName, email: email, password : password};
}