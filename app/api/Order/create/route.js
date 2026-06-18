import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Product from "@/models/Product";
import User from "@/models/User";
import { inngest } from "@/config/inngest";
import Order from "@/models/Order";

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
       let amount = 0;

for (const item of items) {
    const product = await Product.findById(item.product);

    if (!product) {
        return NextResponse.json({
            success: false,
            message: `Product not found: ${item.product}`
        });
    }

    amount += product.offerPrice * item.quantity;
}

        //create order in DB
        await Order.create({
    userId,
    address,
    items: items.map(item => ({
        productId: item.product,
        quantity: item.quantity
    })),
    amount: amount + Math.floor(amount * 0.02),
    date: new Date()
});

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
