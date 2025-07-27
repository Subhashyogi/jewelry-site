import React, { useState } from 'react';
import clsx from 'clsx';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import BoxIcon from './icons/BoxIcon';

// --- Image Imports ---
import bgImage from '../assets/sale/sale-bg.jpg';
import cardImg1 from '../assets/sale/card-1.jpg';
import cardImg2 from '../assets/sale/card-2.jpg';
import cardImg3 from '../assets/sale/card-3.jpg';
import cardImg4 from '../assets/sale/card-4.jpg';
import cardImg5 from '../assets/sale/card-5.jpg'; // Using 5 images for more variety

const saleData = {
    "Pendant": [
        // Layout: Two small squares, one tall, one wide
        { id: 'p1', title: 'Agonfly Jewelry', products: 5, image: cardImg1, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'p2', title: 'Coin Gold Necklace', products: 10, image: cardImg2, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'p3', title: 'Ariel Ring', products: 12, image: cardImg3, gridClass: 'lg:col-span-1 lg:row-span-2' }, // Tall card
        { id: 'p4', title: 'Gold Bracelet', products: 3, image: cardImg4, gridClass: 'lg:col-span-2 lg:row-span-1' }, // Wide card
    ],
    "Bracelet": [
        // Layout: Large feature square with two smaller cards
        { id: 'b1', title: 'Ruby Clasp Bracelet', products: 8, image: cardImg5, gridClass: 'lg:col-span-2 lg:row-span-2' }, // Large square
        { id: 'b2', title: 'Butterfly Bangle', products: 4, image: cardImg2, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'b3', title: 'Simple Pearl String', products: 15, image: cardImg1, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'b4', title: 'Woven Silver', products: 9, image: cardImg4, gridClass: 'lg:col-span-3 lg:row-span-1' }, // Full width banner
    ],
    "Ring": [
        // Layout: A wide banner top with three regular cards below
        { id: 'r1', title: 'The Solitaire', products: 22, image: cardImg3, gridClass: 'lg:col-span-3 lg:row-span-1' }, // Super wide
        { id: 'r2', title: 'Emerald Cut Ring', products: 7, image: cardImg1, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'r3', title: 'Wedding Band', products: 30, image: cardImg4, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 'r4', title: 'Promise Ring', products: 18, image: cardImg2, gridClass: 'lg:col-span-1 lg:row-span-1' },
    ],
    "Silver Bracelet": [
        // Layout: Two tall items flanking two smaller squares
        { id: 's1', title: 'Woven Silver Bracelet', products: 18, image: cardImg4, gridClass: 'lg:col-span-1 lg:row-span-2' }, // Tall left
        { id: 's2', title: 'Silver Chain', products: 25, image: cardImg2, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 's3', title: 'Engraved Bangle', products: 11, image: cardImg5, gridClass: 'lg:col-span-1 lg:row-span-1' },
        { id: 's4', title: 'T-Bar Bracelet', products: 6, image: cardImg1, gridClass: 'lg:col-span-1 lg:row-span-2' }, // Tall right
    ],
};

const TABS = Object.keys(saleData);

// --- The Scaled-Up SaleCard Component ---
const SaleCard = ({ item }) => (
    <a href="#" className={clsx("relative block group overflow-hidden h-[32rem] lg:h-auto", item.gridClass)}>
        <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="relative h-full flex flex-col justify-end p-8 md:p-12 text-white"><div className="flex items-center text-base"><BoxIcon className="h-5 w-5 mr-3" /><span>{item.products < 10 && '0'}{item.products} Products</span></div><h3 className="font-serif text-5xl md:text-6xl mt-3">{item.title}</h3><div className="absolute bottom-12 right-12 w-20 h-20 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-brand-gold transition-all duration-300"><ArrowRightIcon className="h-10 w-10" /></div></div>
    </a>
);

// --- Main Section Component with Enhanced Sizing and Animation Logic ---
function JewelOnSaleSection() {
    const [activeTab, setActiveTab] = useState('Pendant');
    const [isAnimating, setIsAnimating] = useState(false);

    const handleTabClick = (tab) => {
        if (tab === activeTab) return;
        setIsAnimating(true);
        setTimeout(() => { setActiveTab(tab); setIsAnimating(false); }, 200);
    };

    return (
        <section className="relative bg-brand-charcoal py-24 lg:py-40">
            <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
            <div className="relative container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-20"><div><p className="text-base tracking-[0.2em] text-white/70 font-sans">50 % DISCOUNT</p><h2 className="font-serif text-6xl sm:text-7xl lg:text-8xl text-white mt-3">Jewel On Sale</h2></div>
                <div className="flex flex-wrap items-center gap-2 mt-8 lg:mt-0 p-2">
  {TABS.map(tab => (
    <button
      key={tab}
      onClick={() => handleTabClick(tab)}
      className={clsx(
        "px-8 py-4 text-base font-sans tracking-wider transition-colors duration-300",
        {
          // Show border for active tab
          'border-2 border-white text-brand-white font-bold': activeTab === tab,
          // Show border on hover for inactive tabs
          'border-2 border-transparent text-brand-gray hover:border-white font-bold': activeTab !== tab,
        }
      )}
    >
      {tab}
    </button>
  ))}
</div>
                </div>
                <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8 lg:gap-10 transition-opacity duration-200 ease-in-out", { 'opacity-0': isAnimating, 'opacity-100': !isAnimating })}>
                    {saleData[activeTab].map(item => <SaleCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    );
}

export default JewelOnSaleSection;