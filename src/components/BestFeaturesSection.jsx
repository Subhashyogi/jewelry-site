import React from 'react';

// --- Icon Imports ---
import {ClockIcon} from './icons/ClockIcon';
import {MapPinIcon} from './icons/MapPinIcon';
import {ClockCancelIcon} from './icons/ClockCancelIcon';
import {CreditCardIcon} from './icons/CreditCardIcon';
import {PercentIcon} from './icons/PercentIcon';
import StarHandIcon from './icons/StarHandIcon';

// --- Image Imports ---
import img1 from '../assets/features/feature-bird.jpg';
import img2 from '../assets/features/feature-earrings.jpg';
import img3 from '../assets/features/feature-watch.jpg';

// --- UPDATED Data Structure ---
// An `image` property is added ONLY to the items that should start as images.
const featuresData = [
    { id: 1, Icon: StarHandIcon, title: 'Get On Offer Price', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..', image: img1 },
    { id: 2, Icon: ClockIcon, title: 'Quiet Hours Offer', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..' },
    { id: 3, Icon: MapPinIcon, title: 'Assured Quality', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..', image: img2 },
    { id: 4, Icon: ClockCancelIcon, title: 'Free Cancellation', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..' },
    { id: 5, Icon: CreditCardIcon, title: 'Payment Options', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..', image: img3 },
    { id: 6, Icon: PercentIcon, title: 'Special Offers', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna..' },
];


// --- Sub-components for clarity ---

const DiamondSeparator = () => (
    <div className="my-6 w-full flex justify-center items-center"><div className="w-16 h-px bg-white/20"></div><div className="mx-4 w-4 h-4 transform rotate-45 border border-white/20"></div><div className="w-16 h-px bg-white/20"></div></div>
);

// --- UPDATED: A single, smart FeatureCard component ---
// It can be either a static card or a hybrid image/content card.
const FeatureCard = ({ feature, image }) => {

    // This is the static content block, used in both card types.
    const content = (
        <div className="relative z-10 flex flex-col items-center md:items-start">
            <h2 className="absolute top-0 right-0 text-8xl font-bold text-white/10 z-0">0{feature.id}</h2>
            <feature.Icon className="h-16 w-16 text-brand-gold group-hover:animate-shake" />
            <h3 className="font-serif text-3xl text-white mt-4 hover:text-brand-gold transition-colors duration-300">{feature.title}</h3>
            <p className="text-brand-gray mt-2">{feature.text}</p>
        </div>
    );

    // If an 'image' prop is provided, render the hybrid card.
    if (image) {
        return (
            <div className="relative group bg-[#2a2a2a] h-96 border border-white/10 overflow-hidden">
                {/* Image Layer: Initially visible, fades out on hover */}
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-105"
                />
                {/* Feature Content Layer: Initially hidden, fades in on hover */}
                <div className="relative w-full h-full p-8 md:p-10 flex flex-col justify-center text-center md:text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {content}
                </div>
            </div>
        );
    }

    // Otherwise, render a static, non-hoverable feature card.
    return (
        <div className="relative group bg-[#2a2a2a] h-96 p-8 md:p-10 flex flex-col justify-center text-center md:text-left border border-white/10">
            {content}
        </div>
    );
};


// --- Main Section Component ---
function BestFeaturesSection() {
    return (
        <section className="bg-brand-charcoal py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="text-center text-white mb-16">
                    <p className="text-sm tracking-[0.2em] text-white/70">AVAIL OUR OFFER</p>
                    <DiamondSeparator />
                    <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl">Our Best Feature</h2>
                </div>

                {/* Responsive Grid with a larger gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuresData.map(feature => (
                        <FeatureCard
                            key={feature.id}
                            feature={feature}
                            image={feature.image} // Pass the image prop if it exists
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BestFeaturesSection;