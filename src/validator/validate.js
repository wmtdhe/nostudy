

const Ajv = require('ajv'); //validate using json schema
const ajv = new Ajv({allErrors:true});
const {userSchema} = require('./userSchema');

function userValidator(data){
  let valid = ajv.validate(userSchema,data);
  if(!valid){
    return ajv.errors;
  }else{
    return null;
  }
}

module.exports = {
  userValidator
};
