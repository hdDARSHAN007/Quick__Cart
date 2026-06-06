//here we will create address schema to save user address in database and fetch it when user login from any device
import mongoose from "mongoose";


const addressSchema = new mongoose.Schema({
    userId:{type:String,required :true},
    fullName : {type:String,required :true},
    phoneNumber : {type:String,required:true},
    pincode : {type:String,required:true},
    area:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
})

const Address = mongoose.models.address || mongoose.model('address',addressSchema)


//now we created address schema and model now we can use it in our api to save user address in database and fetch it when user login from any device
export default Address