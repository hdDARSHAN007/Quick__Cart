import React, { useState, useEffect } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const ProductCard = ({ product }) => {

    const { currency, router, addToCart } = useAppContext()

    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setIsWishlisted(wishlist.includes(product._id));
    }, [product._id]);

    const toggleWishlist = (e) => {
        e.stopPropagation();
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        if (wishlist.includes(product._id)) {
            wishlist = wishlist.filter(id => id !== product._id);
            setIsWishlisted(false);
        } else {
            wishlist.push(product._id);
            setIsWishlisted(true);
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    };

    return (
        <div
            onClick={() => { router.push('/product/' + product._id); scrollTo(0, 0) }}
            className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer"
        >
            <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className="group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full"
                    width={800}
                    height={800}
                />
                <button 
                    onClick={toggleWishlist}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition group/wishlist"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill={isWishlisted ? "currentColor" : "none"} 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className={`w-4 h-4 ${isWishlisted ? 'text-red-500' : 'text-gray-400 group-hover/wishlist:text-red-400'} transition`}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </button>
            </div>

            <p className="md:text-base font-medium pt-2 w-full truncate">{product.name}</p>
            <p className="w-full text-xs text-gray-500/70 max-sm:hidden truncate">{product.description}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs">{4.5}</p>
                <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                            key={index}
                            className="h-3 w-3"
                            src={
                                index < Math.floor(4)
                                    ? assets.star_icon
                                    : assets.star_dull_icon
                            }
                            alt="star_icon"
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-end justify-between w-full mt-1">
                <p className="text-base font-medium">{currency}{product.offerPrice}</p>
                <button 
                    onClick={(e) => { 
                        e.stopPropagation(); 
                        addToCart(product._id); 
                        router.push('/cart'); 
                    }} 
                    className=" max-sm:hidden px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition"
                >
                    Buy now
                </button>
            </div>
        </div>
    )
}

export default ProductCard