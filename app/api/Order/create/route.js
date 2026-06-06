import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import User from "@/models/User";
import { inngest } from "@/config/inngest";



export async function POST(request){
    try{
        const {userId} = getAuth(request)
        const { address,items} = await request.json()

        if(!address || items.length === 0){
            return NextResponse.json({
                success : false,
                message : "invalid data"
            })
        }

        //calculate amt using items
        const amount = await items.reduce(async (acc,item)=>{
            const product = await Product.findById(item.productId)
        
                return acc + (product.offerprice * item.quantity)
        
        },0)

        await inngest.send({
            name : "order/created",
            data : {
                userId,
                address,
                items,
                amount : amount + Math.floor(amount * 0.02),
                date : Date.now()
            }

        })

        //ckear user cart items
        const user = await User.findById(userId)
        user.cart = []
        await user.save()
        return NextResponse.json({
            success :true,
            message : "order created successfully"
        })

    }catch(error){
        console.log(error)
        return NextResponse.json({
            success : false,
            message : error.message
        })
    }
}
