import { useState, useEffect } from 'react';
import clsx from 'clsx';
import TopBar from '../components/TopBar';
import MainNavbar from '../components/MainNavbar';
import HeroSection from '../components/HeroSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import NewsletterPopup from '../components/NewsletterPopup';
import FeaturedSection from '../components/FeaturedSection';
import VideoSection from '../components/VideoSection';
import LatestProducts from '../components/LatestProducts';
import JewelOnSaleSection from '../components/JewelOnSaleSection';
import BestFeaturesSection from '../components/BestFeaturesSection';
import HandpickedProducts from '../components/HandpickedProducts';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsFeeds from '../components/NewsFeeds';
import Footer from '../components/Footer';

function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Show popup after 3 seconds on desktop, 5 seconds on mobile
        const popupDelay = window.innerWidth < 768 ? 5000 : 3000;
        const popupTimer = setTimeout(() => {
            setIsPopupOpen(true);
        }, popupDelay);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(popupTimer);
        };
    }, []);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="bg-brand-charcoal min-h-screen">
            <NewsletterPopup isOpen={isPopupOpen} onClose={handleClosePopup} />

            {/* Static Header (visible when not scrolled) */}
            <header
                className={clsx(
                    'absolute top-0 left-0 right-0 z-40 transition-opacity duration-300',
                    { 'opacity-100': !isScrolled, 'opacity-0 pointer-events-none': isScrolled }
                )}
            >
                <TopBar />
                <MainNavbar isScrolled={false} />
            </header>

            {/* Fixed Header (visible when scrolled) */}
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out',
                    { 'translate-y-0': isScrolled, '-translate-y-full': !isScrolled }
                )}
            >
                <MainNavbar isScrolled={true} />
            </header>

            {/* Main Content */}
            <main className="relative">
                <HeroSection />
                <FeaturedSection />
                <VideoSection />
                <LatestProducts />
                <JewelOnSaleSection />
                <BestFeaturesSection />
                <HandpickedProducts />
                <TestimonialSlider />
                <NewsFeeds />
            </main>

            <Footer />
            
            {/* Scroll to Top Button */}
            <ScrollToTopButton isScrolled={isScrolled} />
        </div>
    );
}

export default HomePage;