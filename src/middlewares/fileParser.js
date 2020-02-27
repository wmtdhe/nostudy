const formidable = require('formidable');

async function fileParser(ctx,next) {
  const form = formidable({multiples:true});
  await new Promise((resolve,reject)=>{
    form.parse(ctx.req,(err,fileds,files)=>{
      if(err){
        console.log(err)
        reject(err);
      }else{
        // console.log(fileds);
        console.log(files);
        files = files.file; //file in ajax
        let file = {
          name:files.name,
          size:files.size,
          type:files.type,
          filePath:files.path
        }
        ctx.request.file = file; //add file to req
        resolve();
      }
    });
  })
  await next();
  return;
}

module.exports = fileParser;
