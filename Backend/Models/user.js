const mongoose=require('mongoose');

const {Schema}=mongoose;

const userSchema=new Schema({
    name:{type:String , required :true},
    username:{type:SVGStringList,required :true},
    email:{type:String,required :true},
    password:{type:String,required:true}
},
 {timestamps:true}
);
module.exports=mongoose.modell('User',userSchema,'users');