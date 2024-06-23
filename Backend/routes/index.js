const express=require ('express');
const authController=require('../controller/authController')
const router=express.Router();

//user

//register
router.post('register',authController.register);
//login
router.post('/login',authController.login);


 module.exports=router;