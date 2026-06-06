import { getAuth } from "@/lib/auth";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/models/User";


export async function GET(request) {
    try{
        const {userId} = getAuth(request)
        await connectDB()
        // fetch user data from database and send it to frontend
        const user = await User.findById(userId)
        // send only cart items to frontend
        const {cartItems} = user
        return NextResponse.json({
            success : true,
            cartItems
        })
    }catch(error){
        return NextResponse.json({
            success : false,
            message : error.message
        })
    }
}


//now the api is ready to use in frontend to fetch cart data and update it in database when user login from any device
//whenwvwe user add or update the cart items api will be called and update the cart data in database and when user login from any device we can fetch the cart data from database and show it to user