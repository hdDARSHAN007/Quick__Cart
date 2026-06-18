// mongoose models for user collection in the database
//usin this model we can save the database and perform operations on it
import mongoose from "mongoose";

// create a schema for user collection
const userSchema = new mongoose.Schema({
    // define properties of user
    _id:{type : String,required:true},
    name:{type : String,required:true},
    email:{type:String,required:true,unique:true},
    imageUrl : {type : String,required : true},
    cartItems : {type :Object,default : {} }
},{minimize : false})

//using that schema we will create a model
//we can create multiple models with the same schema but different collection name but here we will create only one model for user collection
// and store in DB with the name 'user'
//mongoose.models.user this is used to check if the model is already created or not because in development mode nextjs hot reloads the code and if we create a new model every time it will give error that model is already created so we will check if the model is already created or not if it is already created then we will use that model otherwise we will create a new model
const User = mongoose.models.user || mongoose.model('user', userSchema)

// export the model to use it in other files
export default User;
