import React from 'react';

// --- SwiperJS Imports: Add the Autoplay module ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Autoplay
import 'swiper/css';
import 'swiper/css/navigation';

// --- Icon Imports ---
import { ArrowLeftIcon, ArrowRightIcon as ArrowRightSolid } from '@heroicons/react/24/solid';
import HeartIcon from './icons/HeartIcon';
import RefreshIcon from './icons/RefreshIcon';
import EyeIcon from './icons/EyeIcon';

// --- Image Imports ---
import productImg1 from '../assets/products/product-1.jpg';
import productImg2 from '../assets/products/product-2.jpg';
import productImg3 from '../assets/products/product-3.jpg';
import productImg4 from '../assets/products/product-4.jpg';
import productImg5 from '../assets/products/product-5.jpg';

// --- Data for the products (no changes needed) ---
const productsData = [{ id: 1, name: 'Crumpled Ring', image: productImg1, price: 450, originalPrice: 500, discount: 10 }, { id: 2, name: 'Moon Necklace', image: productImg2, price: 125, originalPrice: 167, discount: 25 }, { id: 3, name: 'Ankle Bracelet', image: productImg3, price: 59, originalPrice: 70, discount: 15 }, { id: 4, name: 'Stud Earrings', image: productImg4, price: 290 }, { id: 5, name: 'Diamond Pendant', image: productImg5, price: 750, originalPrice: 850, discount: 12 },];

// --- ProductCard Component (with a minor fix for icon colors) ---
const ProductCard = ({ product }) => (
    <div className="block group">
        <div className="relative bg-[#2a2a2a] aspect-[4/5] overflow-hidden">
            <div style={{ backgroundImage: `url(${product.image})` }} className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300 ease-in-out"></div>
            {product.discount && (<div className="absolute top-4 left-4 flex flex-col items-start gap-y-2 z-10"><span className="bg-brand-gold text-brand-charcoal text-sm font-bold px-3 py-1">Sale</span><span className="bg-white text-brand-charcoal text-sm font-bold px-3 py-1">-{product.discount}%</span></div>)}
            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out z-10">
                <button className="bg-brand-charcoal/80 p-3 hover:bg-brand-gold group/icon" aria-label="Add to wishlist"><HeartIcon className="h-5 w-5 text-brand-gold group-hover/icon:text-white" /></button>
                <button className="bg-brand-charcoal/80 p-3 hover:bg-brand-gold group/icon" aria-label="Compare"><RefreshIcon className="h-5 w-5 text-brand-gold group-hover/icon:text-white" /></button>
                <button className="bg-brand-charcoal/80 p-3 hover:bg-brand-gold group/icon" aria-label="Quick view"><EyeIcon className="h-5 w-5 text-brand-gold group-hover/icon:text-white" /></button>
            </div>
        </div>
        <div className="bg-brand-charcoal p-4">
            <h3 className="font-serif text-xl text-white truncate">{product.name}</h3>
            <div className="mt-2 flex justify-between items-center">
                <div className="font-sans text-lg">{product.originalPrice ? (<><span className="text-brand-gold font-bold">${product.price}</span><del className="text-brand-gray ml-2">${product.originalPrice}</del></>) : (<span className="text-brand-gold font-bold">${product.price}</span>)}</div>
                <a href="#" aria-label={`View details for ${product.name}`} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"><ArrowRightSolid className="h-5 w-5 text-brand-gold" /></a>
            </div>
        </div>
    </div>
);


// --- Main Section Component with Responsive Logic ---
function LatestProducts() {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    return (
        <section className="bg-brand-charcoal py-16 lg:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div><p className="text-sm tracking-[0.2em] text-white/70 font-sans">SHOP</p><h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mt-2">Latest Products</h2></div>
                    {/* UPDATED: Arrows are now hidden on mobile (screens smaller than `md`) */}
                    <div className="hidden md:flex items-center gap-x-2 mt-4 md:mt-0">
                        <button ref={navigationPrevRef} className="bg-[#2a2a2a] p-4 hover:bg-brand-gold transition-colors" aria-label="Previous slide"><ArrowLeftIcon className="h-6 w-6 text-white" /></button>
                        <button ref={navigationNextRef} className="bg-brand-gold p-4 hover:bg-yellow-500 transition-colors" aria-label="Next slide"><ArrowRightSolid className="h-6 w-6 text-brand-charcoal" /></button>
                    </div>
                </div>

                {/* UPDATED: Swiper now includes the Autoplay module and configuration */}
                <Swiper
                    modules={[Navigation, Autoplay]} // Add Autoplay module
                    navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current, }}
                    onBeforeInit={(swiper) => { swiper.params.navigation.prevEl = navigationPrevRef.current; swiper.params.navigation.nextEl = navigationNextRef.current; }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: true, // Autoplay stops when the user interacts with the carousel
                        pauseOnMouseEnter: true,    // Pauses autoplay on hover for desktop
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, autoplay: false }, // On tablets, show 2 slides and turn off autoplay
                        1024: { slidesPerView: 4, autoplay: false }, // On desktops, show 4 slides and turn off autoplay
                    }}
                    className="!pb-4"
                >
                    {productsData.map((product) => (<SwiperSlide key={product.id}><ProductCard product={product} /></SwiperSlide>))}
                </Swiper>
            </div>
        </section>
    );
}

export default LatestProducts;