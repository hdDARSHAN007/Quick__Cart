'use client'
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-32 py-16 flex-grow">
                
                <div className="text-center mb-16 mt-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">Get in <span className="text-orange-600">Touch</span></h1>
                    <p className="text-gray-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We'd love to hear from you. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 mb-10">
                    {/* Left Side: Contact Info */}
                    <div className="bg-gray-900 text-white p-10 lg:p-16 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">Our Location</h4>
                                        <p className="text-gray-400">123 Commerce Avenue<br/>Tech District, NY 10001</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">Phone Number</h4>
                                        <p className="text-gray-400">+1 (555) 123-4567<br/>Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-orange-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-1">Email Address</h4>
                                        <p className="text-gray-400">support@quickcart.com<br/>sales@quickcart.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-20 -right-20 pointer-events-none"></div>
                        <div className="absolute w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-20 -left-20 pointer-events-none"></div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-10 lg:p-16 lg:w-3/5 bg-white">
                        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition bg-gray-50 resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg shadow-md transition duration-300 transform hover:-translate-y-0.5">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Contact;
