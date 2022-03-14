const express=require("express");

const mongoose=require("mongoose");


const app=express();

const connect=()=>{
return mongoose.connect("mongodb://127.0.0.1:27017/BankingSyatem");

}
 // user Schema

 const userSchema=new moongoose.Schema({
    firstName :{type:String,required:true},
    middleName:{type:String,required:optional},
    lastName:{type:String,required:true},
    age:{type:Number,required:true},
    email:{type:String,required:true},
    address :{type:String,requierd:true},
    gender:{type:String,required:optional,default:Female},
    type:{type:String,required:optional,default:Customer},
 },
 {
timestamps:true,
 },
 );

 const User=moongoose.model("user",userSchema);
//Branch Details
 const BranchSchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    IFSC:{type:String,required:true},
    MICR:{type:String,required:true},
    uderId:{type:moongoose.Schema.objectId,ref:"user",required:true,requierd:true},
 },
    {
        timestamps:true,
         },
 );

 const Branch=moongoose.model("branch",BranchSchema);

 //master Account

 const masterSchema=new mongoose.Schema({
    balance:{type:stringify,require:true},
 },
    {
        timestamps:true,
         },
 );
 const Master=moongoose.model("master",masterSchema);

 //saving account
 const savingSchema=new mongoose.Schema({
    account_number:{type:String,type:required,unique:true},
    balance:{type:String,required:true},
    interestrate:{type:String,required:true},
   
 },
    {
        timestamps:true,
         }
 );

 const Saving=moongoose.model("saving",savingSchema);

 //fixedAccount
 const fixedSchema=moongoose.Schema({
     account_number:{type:String,required:true},
     balance:{type:String,required:true},
     interestrate:{type:String,required:true},
     startDate:{type:String,required:true},
     maturitydate:{type:String,required:true},
 },{
timestamps:true
 });

 const Fixed=mongoose.model("fixed",fixedSchema)






app.listen(5000,async()=>{
    await connect();
    console.log("Listening on port 5000")
})