// i created add-address and get-address floder to create an api for add and get user address from database 
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Address from "@/models/Address";
import { getAuth } from "@clerk/nextjs/server";



export async function POST(request){
    try{

        //to save the address we have to create new file in models folder and create address schema and then we can save the address in database and fetch it when user login from any device
        const {userId} = getAuth(request)
        const {address} = await request.json()

        await connectDB()
        const newAddress= await Address.create({
            ...address,userId
        })
        return NextResponse.json({
            success :true,
            message : "Address added successfully",
            address : newAddress
        })
    }
    catch(error){
        return NextResponse.json({
            success : false,
            message : error.message
        })

    }
}

//now our api is ready to use in frontend to add address in database and fetch it when user login from any device and we can show the address in checkout page and user can select the address for delivery
