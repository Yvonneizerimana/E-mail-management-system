import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const emailModel=new mongoose.Schema(
    {
    senderNames:{
        type:String,
        required:true
    },
   requestDescription:{
    type:String,
    required:true
   },
   submissionDate:{
    type:Date,
    default:Date.now,
    required:true
   },
   feedback:{
    type:String,
    
   },
   respondendDate:{
    type:Date,
    
   },
   delaysInResponse:{
    type:String,
   },
   status:{
    type:String,
    default:'Pending',
    enum:['Pending','Under Review','Responded']
   }
    })




export default mongoose.model('Email',emailModel);