const express=require('express');
const router1=require('./router/reg.js');
const router2=require('./router/api');
const mongoose=require('mongoose');
const app=express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const connectDB=require('./db.js');
connectDB();
app.use("/",router1);
app.use("/",router2);

app.get("/", (req, res) => {
    res.send("✅ Server is alive!");
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
