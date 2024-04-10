const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js")

router.post('/addUser',async(req,res)=>{
    const user = new User(req.body);
    await user.save();

    res.json({
        success:true,
        message:"user data is saved"
    })

});

module.exports = router;