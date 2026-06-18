import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {type:String,required:true,ref:'User'},
    items : [
        {
            productId : {type:mongoose.Schema.Types.ObjectId,required:true,ref:'Product'},
            quantity : {type:Number,required:true}
        }
    ],
    amount : {type:Number,required:true},
    address :{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'address'
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

const Order = mongoose.models.order || mongoose.model('order',orderSchema)

export default Order
