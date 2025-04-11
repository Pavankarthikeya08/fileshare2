const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

module.exports = cloudinary;


/*const cloudinary=new require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dxbcetv7j",    
  api_key: "481137744182885",            
  api_secret: "P1BIlWyoyM8NG3qq8HBzZnbKHeY",  
});


module.exports=cloudinary;

*/