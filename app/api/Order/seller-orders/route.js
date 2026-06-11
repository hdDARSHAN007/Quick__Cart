import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import authSeller from "@/lib/authSeller";
import connectDB from "@/config/db";
import Order from "@/models/Order";
import "@/models/Product";
import "@/models/Address";

export async function GET(request){
    try{
        const {userId} = getAuth(request)

        const isSeller = await authSeller(userId)

        if(!isSeller){
            return NextResponse.json({
                success : false,
                message : "not Authorized"
            })
        }

        await connectDB()

        const orders = await Order.find({})
            .populate('address')
            .populate('items.productId')
        return NextResponse.json({
            success : true,
            orders
        })

    }catch(error){
        return NextResponse.json({
            success : false,
            message : "Internal Server Error"
        })
    }
}
