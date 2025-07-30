import React from 'react';

// --- Import your images ---
import ringCategoryImg from '../assets/features/ring-category.jpg';
import bangleCategoryImg from '../assets/features/bangle-category.jpg';
import necklaceCategoryImg from '../assets/features/necklace-category.jpg';
import crystalCategoryImg from '../assets/features/crystal-category.jpg';
import ctaDiamondsImg from '../assets/features/cta-diamonds.jpg';
import ctaSummerSaleImg from '../assets/features/cta-summer-sale.jpg';
import ctaNecklacesImg from '../assets/features/cta-necklaces.jpg';
import ctaDiamondChainImg from '../assets/features/cta-diamond-chain.jpeg';

// --- Import your icon components ---
import RingIcon from './icons/RingIcon';
import BangleIcon from './icons/BangleIcon';

// --- Reusable diamond separator component ---
const DiamondSeparator = () => (
    <div className="my-6 w-full flex justify-center items-center">
        <div className="w-16 h-px bg-white/20"></div>
        <div className="mx-4 w-4 h-4 transform rotate-45 border border-white/20"></div>
        <div className="w-16 h-px bg-white/20"></div>
    </div>
);

// --- FULLY RESPONSIVE CategoryCard Component ---
// No more fixed heights. It uses aspect-ratio to scale perfectly.
const CategoryCard = ({ image, Icon, title, hoverText }) => (
    <a href="#" className="relative block group aspect-[4/5] overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:opacity-0"></div>
        <div className="absolute inset-0 bg-[#6F6146]/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center p-4">
            <Icon className="h-10 w-10 sm:h-12 sm:w-12" />
            <h3 className="mt-4 text-xl sm:text-2xl font-serif">{title}</h3>
            <p className="mt-1 text-sm text-gray-300 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2 px-2">
                {hoverText}
            </p>
        </div>
    </a>
);

// --- FULLY RESPONSIVE CtaSection Component ---
// The `group` is now on the parent, so hovering the image works too.
// Heights are flexible, defined by content and padding.
const CtaSection = ({ title, image, imagePosition }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 group">
            {/* Image Side */}
            <div className={`min-h-[250px] md:min-h-0 bg-cover bg-center ${imagePosition === 'right' && 'md:order-last'}`} style={{ backgroundImage: `url(${image})` }}>
            </div>

            {/* Detail Side with Hover Effect */}
            <div className="relative flex items-center justify-center text-center p-8 min-h-[250px] md:min-h-0 overflow-hidden bg-brand-charcoal">
                {/* Default Content */}
                <div className="transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                    <h2 className="text-white font-serif text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
                    <span className="mt-6 inline-block bg-brand-gold text-white font-bold tracking-widest py-3 px-8 uppercase">
                        View Details
                    </span>
                </div>
                {/* Hover Overlay */}
                <a href="#" className="absolute inset-0 bg-brand-gold flex items-center justify-center p-8 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                    <span className="bg-brand-charcoal text-white font-bold tracking-widest py-3 px-8 uppercase">
                        View Details
                    </span>
                </a>
            </div>
        </div>
    );
};


// --- Main FeaturedSection Component ---
function FeaturedSection() {
    const categories = [{ id: 1, image: ringCategoryImg, Icon: RingIcon, title: 'New Rings', hoverText: 'Explore our latest collection.' }, { id: 2, image: bangleCategoryImg, Icon: BangleIcon, title: 'Copper Bangle', hoverText: 'We have modern design bracelet.' }, { id: 3, image: necklaceCategoryImg, Icon: RingIcon, title: 'Big Necklace', hoverText: 'Discover elegant necklaces.' }, { id: 4, image: crystalCategoryImg, Icon: BangleIcon, title: 'Crystal Jewelry', hoverText: 'Shine with crystal pieces.' },];
    const ctas = [{ id: 1, title: "Diamond's Haven", image: ctaDiamondsImg, imagePosition: 'left' }, { id: 2, title: "Best Summer Sale", image: ctaSummerSaleImg, imagePosition: 'left' }, { id: 3, title: "Necklaces", image: ctaNecklacesImg, imagePosition: 'right' }, { id: 4, title: "Diamond Chain", image: ctaDiamondChainImg, imagePosition: 'right' },];

    return (
        <section className="bg-brand-charcoal py-16 lg:py-24">
            {/* Title Section with responsive typography */}
            <div className="container mx-auto px-4 text-center text-white">
                <p className="text-sm tracking-[0.2em] text-white/70">AVAIL OUR OFFER</p>
                <DiamondSeparator />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Collection Arrived</h1>
            </div>

            {/* Category Grid with responsive columns and gap */}
            <div className="container mx-auto mt-16 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {categories.map(cat => <CategoryCard key={cat.id} {...cat} />)}
                </div>
            </div>

            {/* CTA Sections in the 2x2 grid layout for laptops and up */}
            <div className="container mx-auto mt-16 lg:mt-24 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {ctas.map(cta => <CtaSection key={cta.id} {...cta} />)}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;