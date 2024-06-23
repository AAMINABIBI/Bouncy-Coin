const Joi=require('joi');
const User=require('../Models/user');
const bcrypt=require('bcryptjs');

const passwordPattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

const authController={
      async register(req,res,next){
        //validate user input

        const userRegisterSchema=Joi.object({
            username:Joi.string().min(5).max(30).required(),
            name:Joi.string().max(30).required(),
            email:Joi.string().email().required(),
            password:Joi.string().pattern(passwordPattern).required(),
            confirmPassword:Joi.ref('password')
        });

        const {error}=userRegisterSchema.validate(req.body);
        //if error in validation =>return error via middle ware

        if(error){
            return next(error);
        }
        //if email or username is already regiistered =>return error
const{username,name,email,password}=req.body;

try{
const emailInUse=await User.exists({email});

const usernameinUse=await User.exists({username});

if(emailInUse){
    const error={
    status:409,
    message:'Email already in use...Use another one'
}
return next(error);
}


if(usernameinUse)
    {
        const error={
            status:409,
            message:'username not available'
        }
        return next(error);
    }
}



catch(error){
return next(error);
}

        //password hash
//123abc=>kkdifjjsncuyrfnueyf839776874/.,

const hashedPassword=await bcrypt.hash(password,10);
        //store user data
        const userToRegister=new User({
            username,
            email,
            name,
            password:hashedPassword
        });
        const user=await userToRegister.save();
        //response send
        return res.status(201).json({user});
      },
      async login(){},
  

}

module.exports=authController;