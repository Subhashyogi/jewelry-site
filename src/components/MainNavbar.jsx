// src/components/MainNavbar.jsx

import { useState } from 'react';
import clsx from 'clsx';
import Logo from '../assets/logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Navigation links data - we ensure there are an equal number of links on both sides
const leftNavLinks = [
    { name: 'Home', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Diamond', href: '#' },
    { name: 'Blog', href: '#' },
];
const rightNavLinks = [
    { name: 'Accessories', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Contact', href: '#' },
];

/**
 * The main navigation bar component.
 * It accepts an `isScrolled` prop to change its appearance.
 * @param {object} props - The component props.
 * @param {boolean} props.isScrolled - True if the page has been scrolled down.
 */
function MainNavbar({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        // The main container div. Its background color changes on scroll.
        <div className={clsx(
            "transition-colors duration-300 ease-in-out",
            { 'bg-[#343430] shadow-lg': isScrolled, 'bg-transparent': !isScrolled }
        )}>
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center font-sans">
                
                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white p-2 hover:text-brand-gold transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* --- Left Navigation (Hidden on mobile) --- */}
                <div className="hidden lg:flex flex-1 justify-end items-center space-x-4 xl:space-x-8">
                    {leftNavLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white transition-colors tracking-wider text-sm xl:text-base hover:text-brand-gold"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* --- Center Logo --- */}
                <div className="flex-shrink-0 text-center mx-4 sm:mx-8">
                    <a href="#" className="block">
                        <img className="h-6 sm:h-8 w-auto inline-block" src={Logo} alt="Laramiss Logo" />
                        <div className={clsx(
                            'font-serif text-2xl sm:text-3xl xl:text-4xl tracking-wider -mt-1 sm:-mt-2 transition-colors duration-300 ease-in-out text-brand-gold',
                        )}>
                            Laramiss
                        </div>
                        <div className={clsx(
                            'text-xs tracking-[0.2em] sm:tracking-[0.3em] font-semibold transition-colors duration-300 ease-in-out text-brand-gold',
                        )}>
                            LUXURY PIECES
                        </div>
                    </a>
                </div>

                {/* --- Right Navigation (Hidden on mobile) --- */}
                <div className="hidden lg:flex flex-1 justify-start items-center space-x-4 xl:space-x-8">
                    {rightNavLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white transition-colors tracking-wider text-sm xl:text-base hover:text-brand-gold"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Placeholder for mobile layout balance */}
                <div className="lg:hidden w-10"></div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-black/80">
                    <div className="bg-[#343430] min-h-screen p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-center">
                                <img className="h-8 w-auto inline-block" src={Logo} alt="Laramiss Logo" />
                                <div className="font-serif text-3xl tracking-wider -mt-2 text-brand-gold">
                                    Laramiss
                                </div>
                                <div className="text-xs tracking-[0.3em] font-semibold text-brand-gold">
                                    LUXURY PIECES
                                </div>
                            </div>
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white p-2 hover:text-brand-gold transition-colors"
                                aria-label="Close mobile menu"
                            >
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>
                        
                        {/* Mobile Navigation Links */}
                        <nav className="space-y-6">
                            {[...leftNavLinks, ...rightNavLinks].map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block text-white text-lg tracking-wider hover:text-brand-gold transition-colors border-b border-gray-600 pb-4"
                                    onClick={toggleMobileMenu}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainNavbar;