const express=require('express');
const user=require('../modal');
const router=express.Router();

router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user1 = await user.findOne({ email });
  
      if (user1 && user1.password === password) {
        res.sendStatus(200);
      } else {
        res.sendStatus(401); 
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500); 
    }
  });
  

router.post("/register",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const user1= new user({name,email,password});
        await user1.save();
        res.sendStatus(200);
    } catch(err){
        res.sendStatus(404);
    }
})

module.exports = router;