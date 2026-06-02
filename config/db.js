// helps us to connect project  to the database and perform operations on it
import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(){
    if(cached.conn) {
        return cached.conn;
    }
    // if connection is not established then create a new connection
    if(!cached.promise) {
       const opts = {
        bufferCommands: false,
        }
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then((mongoose) => {
            return mongoose;
        }
      )
          
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;
