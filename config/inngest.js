// src/inngest/client.ts
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "../models/User";

export const inngest = new Inngest({ id: "quickcart-next" });

// now we create multiple function by clerk to use data to database
export const syncUserCreation = inngest.createFunction(
    {id : 'sync-user-from-clerk', },
    {event : 'clerk/user.created'},
    async({event})=>{
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
    {id : 'update-user-from-clerk' },
    {event : 'clerk/user.updated'},
    async({event})=>{
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
    {id : 'delete-user-with-clerk' },
    {event : 'clerk/user.deleted'},
    async({event})=>{
        const {id} = event.data;
        // now we will delete this data from the database
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)
