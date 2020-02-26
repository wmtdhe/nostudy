const {ErrorModel} = require('../model/ResModel');

/**
 * @description generate validators
 */
function genValidator(validatorFn) {
  return async function(ctx,next){
    let data = ctx.request.body;
    let error = validatorFn(data);
    if(!error){
      await next();
    }else{
      ctx.body = new ErrorModel({
        errno:503,
        message:'failed validating'
      });
      return;
    }
  };
}

module.exports = {
  genValidator
}
