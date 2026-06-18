// we created this to fetch data from website to mongoDB
//by this we can update the cart data in database and fetch it when user login from any device
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";

export async function POST(request) {
    try {
        const {userId} = getAuth(request)

        const {cartData} = await request.json()

        await connectDB()

        const user = await User.findById(userId)

        user.cartItems = cartData
        await user.save()

        return NextResponse.json({
            success : true,
        })
    }catch(error){
        return NextResponse.json({
            success : false,
            message : error.message
        })

    }
}