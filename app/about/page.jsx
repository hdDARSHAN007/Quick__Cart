'use client'
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { assets } from "@/assets/assets";

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-16 flex-grow">
                
                {/* Hero Section */}
                <div className="text-center mb-20 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">About <span className="text-orange-600">QuickCart</span></h1>
                    <p className="text-gray-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We are passionate about bringing the best products right to your doorstep. Experience seamless shopping with premium quality.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group cursor-default">
                        <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Image src={assets.box_icon} alt="Quality" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Premium Quality</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Every product we offer is carefully curated to ensure it meets our strict quality standards.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group cursor-default">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Image src={assets.order_icon} alt="Delivery" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Fast Delivery</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            We pride ourselves on lightning-fast shipping so you can enjoy your items sooner.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col items-center text-center group cursor-default">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300">
                            <Image src={assets.user_icon} alt="Support" className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Support</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Our dedicated team is here around the clock to help with any questions or concerns.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center mb-10">
                    <div className="p-10 md:p-16 flex-1 text-white">
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            To redefine the e-commerce experience by merging cutting-edge technology with unparalleled customer service. We believe shopping should be easy, secure, and enjoyable for everyone.
                        </p>
                        <a href="/all-products" className="inline-block px-8 py-3 bg-orange-600 hover:bg-orange-500 transition duration-300 text-white font-medium rounded-full shadow-lg">
                            Explore Products
                        </a>
                    </div>
                    <div className="flex-1 w-full min-h-[300px] md:min-h-[400px] relative bg-orange-100/10">
                         <Image 
                             src={assets.boy_with_laptop_image} 
                             alt="Mission" 
                             fill 
                             className="object-contain object-bottom pt-10" 
                         />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default About;
