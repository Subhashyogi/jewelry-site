import React from 'react';

// --- Icon Imports ---
import { ArtificialEarringsIcon } from './icons/ArtificialEarringsIcon';
import { BraceletCurbIcon } from './icons/BraceletCurbIcon';
import { AzrouelVariableIcon } from './icons/AzrouelVariableIcon';
import { AnkleBraceletIcon } from './icons/AnkleBraceletIcon';
import { PointerRingIcon } from './icons/PointerRingIcon';
import { CopperNecklaceIcon } from './icons/CopperNecklaceIcon';

// --- Data for all 6 cards ---
const handpickedData = [
    { id: 1, Icon: ArtificialEarringsIcon, title: 'Artifical Earings', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { id: 2, Icon: BraceletCurbIcon, title: 'Bracelet Curb', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { id: 3, Icon: AzrouelVariableIcon, title: 'Azrouel Variable', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { id: 4, Icon: AnkleBraceletIcon, title: 'Ankle Bracelet', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { id: 5, Icon: PointerRingIcon, title: 'Pointer Ring', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
    { id: 6, Icon: CopperNecklaceIcon, title: 'Copper Necklace', text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet' },
];


// --- Sub-components for clarity ---

const DiamondSeparator = () => (
    <div className="my-6 w-full flex justify-center items-center">
        <div className="w-16 h-px bg-white/20"></div>
        <div className="mx-4 w-4 h-4 transform rotate-45 border border-white/20"></div>
        <div className="w-16 h-px bg-white/20"></div>
    </div>
);

// A reusable card for the handpicked items
const HandpickedCard = ({ card }) => (
    <div className="bg-[#2a2a2a] rounded-lg p-8 text-center">
        <div className="flex flex-col items-center">
            <card.Icon className="h-16 w-16 text-white" />
            <h3 className="font-serif text-3xl text-white mt-6 hover:text-brand-gold transition-colors duration-300 cursor-pointer">{card.title}</h3>
            <p className="text-brand-gray mt-4 text-base leading-relaxed">{card.text}</p>
        </div>
    </div>
);


// --- Main Section Component ---
function HandpickedProducts() {
    return (
        <section className="bg-brand-charcoal py-20 lg:py-32">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center text-white mb-16">
                    <p className="text-sm tracking-[0.2em] text-white/70">NEW COLLECTION</p>
                    <DiamondSeparator />
                    <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl">Handpicked Products</h2>
                </div>

                {/* Responsive Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {handpickedData.map(card => (
                        <HandpickedCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HandpickedProducts;