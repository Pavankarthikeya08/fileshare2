const {Schema,model}=require('mongoose');
 const schema=new Schema({
   id:String,
    url:String,
    public_id:String
 });
 const datamodel= model('Data2',schema,'data2');
 module.exports=datamodel