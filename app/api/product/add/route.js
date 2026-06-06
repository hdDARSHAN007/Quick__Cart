import { v2 as cloudinary } from 'cloudinary';
import { getAuth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import authSeller from '../../../../lib/authSeller';
import connectDB from '../../../../config/db';
import Product from '../../../../../models/Product';

//config cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(request){
    try{
        const {userId} = getAuth(request)
        const isSeller = await authSeller(userId)

        if(!isSeller){
            return NextResponse.json({success: false, message: 'Unauthorized'});
        }

        const formData = await request.formData();

        // from this data we need to extract the file and other details
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const category = formData.get('category');
        const offerPrice = formData.get('offerPrice');

        // getAll will return all files uploaded under the same field name
        const files = formData.getAll('file');

        // upload the file(s) to Cloudinary
        if(!files || files.length === 0){
            return NextResponse.json({success: false, message: 'File is required'});
        }

        const uploadResults = await Promise.all(
            files.map(async (file) => {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                return new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: 'auto' },
                        (error, result) => {
                            if (error) return reject(error);
                            resolve(result);
                        }
                    );

                    stream.end(buffer);
                });
            })
        );
        // get image URLs
        const image = uploadResults.map((result) => result.secure_url);
        //product data is ready, now we can persist it to DB
        await connectDB();
        const newProduct = await Product.create({
            userId,
            name,
            description,
            category,
            price: Number(price),
            offerPrice: Number(offerPrice),
            image,
            date: Date.now()
        });

        return NextResponse.json({ success: true, message: 'Product uploaded', newProduct });

        // TODO: persist product to DB (name, description, price, category, offerPrice, images)
    } catch(error){
        return NextResponse.json({ success: false, message: error.message || 'Server error' });
    }
}