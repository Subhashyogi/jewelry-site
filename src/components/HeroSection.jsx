// src/components/HeroSection.jsx

import { useState, useEffect } from 'react';

// We continue to use the original two images for the cycling effect
import heroImage1 from '../assets/heroImages/hero-image-1.jpg';
import heroImage2 from '../assets/heroImages/hero-image-2.jpg';
import bgGraphics from '../assets/hero-bg-graphics.svg';

// We update the data for our slides. The second slide now has the new text.
const heroData = [
    {
        image: heroImage1,
        subtitle: "JEWELS THAT DEFINE YOU",
        titleLine1: "The Perfect",
        titleLine2: "Jewels For You"
    },
    {
        image: heroImage2,
        subtitle: "CRAFTED WITH PASSION",
        titleLine1: "New Designs",
        titleLine2: "Rings For You" // The second line is empty for this slide design
    }
];

function HeroSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    // The cycling effect logic remains the same
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % heroData.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = heroData[activeIndex];

    return (
        <div className="relative min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh] w-full overflow-hidden">
            {/* Background Image Slider */}
            {heroData.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div
                        className={`h-full w-full bg-cover bg-center ${index === activeIndex ? 'animate-kenburns' : ''}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    ></div>
                </div>
            ))}

            {/* Faint SVG Graphics Overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{ backgroundImage: `url(${bgGraphics})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            ></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-20"></div>

            {/* Text and Button Content */}
            <div className="relative z-30 h-full flex flex-col justify-center items-center text-center text-white p-4 sm:p-6 lg:p-8 mt-[16rem] sm:mt-[16rem] lg:mt-[20rem] mb-[4rem] sm:mb-[6rem] lg:mb-[10rem]">

                <p className="text-sm sm:text-base lg:text-xl xl:text-[0.950rem] tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6 font-sans uppercase px-4">
                    {currentSlide.subtitle}
                </p>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl leading-tight sm:leading-none mb-6 sm:mb-8 px-4">
                    {currentSlide.titleLine1}
                    {currentSlide.titleLine2 && <br />}
                    {currentSlide.titleLine2}
                </h1>

                <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-8 font-sans mb-20 sm:mb-32 lg:mb-40 px-4">
                    {/* --- BUTTON 1: Solid by default, transparent on hover --- */}
                    <button
                        className="bg-brand-gold text-white font-bold py-2 sm:py-3 px-6 sm:px-8 lg:px-10 tracking-wider text-sm sm:text-base
                       border-2 border-transparent 
                       hover:bg-transparent hover:text-white hover:border-brand-gold 
                       transition-all duration-300 w-full sm:w-auto"
                    >
                        EXPLORE MORE
                    </button>

                    {/* --- BUTTON 2: Transparent by default, solid on hover --- */}
                    <button
                        className="bg-transparent text-white font-bold py-2 sm:py-3 px-6 sm:px-8 lg:px-10 tracking-wider text-sm sm:text-base
                       border-2 border-white/50 
                       hover:bg-brand-gold hover:text-white hover:border-brand-gold
                       transition-all duration-300 w-full sm:w-auto"
                    >
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;