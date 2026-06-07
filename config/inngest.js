// src/inngest/client.ts
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User";
import Orders from "../models/Order";


export const inngest = new Inngest({ id: "quickcart-next" });

// now we create multiple function by clerk to use data to database
export const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk', triggers: { event: 'clerk/user.created' } },
    async ({ event }) => {
        const {id,first_name,last_name,image_url,email_addresses} = event.data;
        const userData = {
            _id:id,
            email : email_addresses[0].email_address,
            name : first_name + " "+last_name,
            imageUrl : image_url,

        }
        // now we will save this data to the database
        await connectDB()
        await User.create(userData)
    }
)

//Inngest function to update user data in database
export const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk', triggers: { event: 'clerk/user.updated' } },
    async ({ event }) => {
        const {id,first_name,last_name,image_url,email_addresses} = event.data;
        const userData = {
            _id:id,
            email : email_addresses[0].email_address,
            name : first_name + " "+last_name,
            imageUrl : image_url,
        }
        // now we will update this data to the database
        await connectDB()
        await User.findByIdAndUpdate(id,userData)
    }
)

//inest to delete user data from database when user is deleted from clerk
export const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk', triggers: { event: 'clerk/user.deleted' } },
    async ({ event }) => {
        const {id} = event.data;
        // now we will delete this data from the database
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)


// inngest function to update user cart data in database when user add or update the cart items from frontend
//inngest function to create user order in database when user place the order from frontend and we will clear the cart data from database after placing the order
export const createUserOrder = inngest.createFunction(
    { 
        id: 'create-order-from-frontend',
        triggers: { event: 'order/created' },
        batchEvents:{
            maxSize : 5,
            timeout : '5s'
        }

    },
    async ({event})=>{
        const orders = event.map((event) => {
            return {
                userId : event.data.userId,
                items : event.data.items,
                amount : event.data.amount,
                address : event.data.address,
                date: event.data.date
            }
        })
        await connectDB()
        await Orders.insertMany(orders)
        return {
            success : true,
            processed : orders.length

        }
    }
)
