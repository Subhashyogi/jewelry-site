import React from 'react';

// --- SwiperJS Imports ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// --- Icon Imports ---
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import CalendarIcon from './icons/CalendarIcon';
import UserIcon from './icons/UserIcon';

// --- Image Imports for the 4 blog posts ---
import blogImg1 from '../assets/blog/blog-1.jpg';
import blogImg2 from '../assets/blog/blog-2.jpg';
import blogImg3 from '../assets/blog/blog-3.jpg';
import blogImg4 from '../assets/blog/blog-4.jpg';

// --- Data for the 4 blog posts ---
const blogData = [
    { id: 1, image: blogImg1, date: '28th Aug 2022', author: 'By Admin', title: 'New Retro Collection of Pendants and Ring sets.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { id: 2, image: blogImg2, date: '28th Aug 2022', author: 'By Admin', title: 'Special Wedding Rings Sets for Him and for Her.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { id: 3, image: blogImg3, date: '28th Aug 2022', author: 'By Admin', title: 'Matching Jewellery Sets with your Outwear.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
    { id: 4, image: blogImg4, date: '27th Aug 2022', author: 'By Admin', title: 'A Guide to Choosing the Perfect Engagement Ring.', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.' },
];

// --- Sub-component for a single blog card ---
const BlogCard = ({ post }) => (
    <a href="#" className="block group">
        <div className="overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="bg-[#2a2a2a] p-6">
            {/* Meta Info */}
            <div className="flex items-center text-sm text-brand-gray space-x-4 mb-4">
                <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                </div>
            </div>
            {/* Title and Text */}
            <h3 className="font-serif text-2xl text-white group-hover:text-brand-gold transition-colors duration-300 mb-3">{post.title}</h3>
            <p className="text-brand-gray">{post.text}</p>
        </div>
    </a>
);

// --- Main Section Component ---
function NewsFeeds() {
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    return (
        <section className="bg-brand-charcoal py-20 lg:py-32">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <p className="text-sm tracking-[0.2em] text-white/70 font-sans">BLOG</p>
                        <h2 className="font-serif text-5xl sm:text-6xl text-white mt-2">News Feeds</h2>
                    </div>
                    {/* Custom Navigation with Hover Effects */}
                    <div className="flex items-center gap-x-1 mt-6 md:mt-0">
                        <button
                            ref={navigationPrevRef}
                            className="bg-[#2a2a2a] p-4 hover:bg-brand-gold transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
                            aria-label="Previous slide"
                        >
                            <ArrowLeftIcon className="h-6 w-6 text-white" />
                        </button>
                        <button
                            ref={navigationNextRef}
                            className="bg-brand-gold p-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
                            aria-label="Next slide"
                        >
                            <ArrowRightIcon className="h-6 w-6 text-brand-charcoal" />
                        </button>
                    </div>
                </div>

                {/* Blog Post Carousel */}
                <Swiper
                    modules={[Navigation]}
                    navigation={{ prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    loop={true}
                >
                    {blogData.map((post) => (
                        <SwiperSlide key={post.id}>
                            <BlogCard post={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default NewsFeeds;