const multer=require('multer');
const { CloudinaryStorage }= require('multer-storage-cloudinary');
const cloudinary=require('./cloud.js');

const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
      params: {
        folder: "database",      
        resource_type: "auto",     
      },
});

const upload=multer({storage});
module.exports=upload;   