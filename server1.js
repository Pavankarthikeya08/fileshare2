const express=require('express');
const router=require('./router/reg.js');
const mongoose=require('mongoose');

const app=express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const connectDB=require('./db.js');
connectDB();
app.use("/",router);
app.listen(5000);