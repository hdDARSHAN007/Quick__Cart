import mongoose from "mongoose";

// Define the Product schema
const productSchema = new mongoose.Schema({
    //define structure of product document
    userId:{type :String, required: true ,ref : "user"},
     // reference to the seller
     name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number ,required : true},
    image : { type: [String], required: true },
    category: { type: String, required: true },
      // Array of image URLs
    date :{type : Date,required : true}
});

// Create the Product model
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product;
