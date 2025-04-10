const express=require('express');
const route=require('./router/api');


const app=express();

const connectDB=require('./db.js');
connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

app.use("/",route);
app.listen(3000);