import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {type:String,required:true,ref:'user'},
    items : [
        {
            productId : {type:String,required:true,ref:'product'},
            quantity : {type:Number,required:true}
        }
    ],
    amount : {type:Number,required:true},
    address :{
        type : String,
        required : true
    },
    status : {
        type : String,
        required : true,
        default : "order placed",
    },
    date :{
        type : Date,
        required : true,
    },
})

const Order = mongoose.models.order || mogoose.model('order',orderSchema)

export default Order