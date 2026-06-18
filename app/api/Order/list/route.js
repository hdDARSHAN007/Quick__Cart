import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Order from "@/models/Order";
import "@/models/Product";
import "@/models/Address";

export async function GET(request){
    try{
        const {userId} = getAuth(request)

        await connectDB();

        const orders = await Order.find({ userId })
            .populate('items.productId')
            .populate('address')

        return NextResponse.json({
            success : true,
            orders
        })
    }catch(error){
        return NextResponse.json({
            success : false,
            message : error.message
        });
    }
}
