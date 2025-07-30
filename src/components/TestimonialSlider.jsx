import React, { useState } from 'react';

// --- SwiperJS Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay } from 'swiper/modules'; // Pagination is no longer needed for this exact style
import 'swiper/css';
import 'swiper/css/pagination';

// --- Icon Imports ---
import { DiamondNecklaceIcon } from './icons/DiamondNecklaceIcon';
import { GoldEarringsIcon } from './icons/GoldEarringsIcon';
import { SilverBraceletIcon } from './icons/SilverBraceletIcon';
import { PointerRingIcon } from './icons/PointerRingIcon';
import { AnkleBraceletIcon } from './icons/AnkleBraceletIcon';
import { AzrouelVariableIcon } from './icons/AzrouelVariableIcon';

// --- Image Imports ---
import slideImg1 from '../assets/testimonials/slide-1.jpg';
import slideImg2 from '../assets/testimonials/slide-2.jpg';
import slideImg3 from '../assets/testimonials/slide-3.jpg';
import slideImg4 from '../assets/testimonials/slide-4.jpg';
import slideImg5 from '../assets/testimonials/slide-5.jpg';
import slideImg6 from '../assets/testimonials/slide-6.jpg';


// --- Data for the slides ---
const testimonialData = [
    { id: 1, Icon: DiamondNecklaceIcon, title: 'Diamond Necklace', image: slideImg1, text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet.' },
    { id: 2, Icon: GoldEarringsIcon, title: 'Gold Earrings', image: slideImg2, text: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Vestibulum ante ipsum primis.' },
    { id: 3, Icon: SilverBraceletIcon, title: 'Silver Bracelet', image: slideImg3, text: 'Donec velit neque, auctor sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' },
    { id: 4, Icon: PointerRingIcon, title: 'Pointer Ring', image: slideImg4, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
    { id: 5, Icon: AnkleBraceletIcon, title: 'Ankle Bracelet', image: slideImg5, text: 'Faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet. Vestibulum ante ipsum primis.' },
    { id: 6, Icon: AzrouelVariableIcon, title: 'Azrouel Variable', image: slideImg6, text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna. Vestibulum ante ipsum primis in faucibus orci luctus.' },
];

// --- Main Section Component ---
function TestimonialSlider() {
    const [imageSwiper, setImageSwiper] = useState(null);
    const [textSwiper, setTextSwiper] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#2a2a2a] py-12 sm:py-16 lg:py-20 xl:py-32">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

                {/* --- Text Content Slider --- */}
                <div className="px-4 sm:px-6 lg:px-8">
                    <Swiper
                        modules={[Controller, Autoplay]}
                        onSwiper={setTextSwiper}
                        controller={{ control: imageSwiper }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {testimonialData.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className="text-center lg:text-left">
                                    <item.Icon className="h-16 w-16 sm:h-20 sm:w-20 text-brand-gold mx-auto lg:mx-0" />
                                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mt-4 sm:mt-6">{item.title}</h2>
                                    <p className="text-brand-gray mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination */}
                    <div className="flex justify-center lg:justify-start items-center gap-x-2 sm:gap-x-3 mt-6 sm:mt-8">
                        {testimonialData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    textSwiper?.slideToLoop(index);
                                    imageSwiper?.slideToLoop(index);
                                }}
                                className={`h-1 sm:h-1.5 w-8 sm:w-12 transition-colors duration-300 cursor-pointer hover:bg-brand-gold/60 ${activeIndex === index ? 'bg-brand-gold' : 'bg-white/20'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>

                {/* --- Image Slider --- */}
                <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <Swiper
                        modules={[Controller, Autoplay]}
                        onSwiper={setImageSwiper}
                        controller={{ control: textSwiper }}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="h-full w-full"
                    >
                        {testimonialData.map(item => (
                            <SwiperSlide key={item.id}>
                                <div
                                    className="h-full w-full bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section>
    );
}

export default TestimonialSlider;