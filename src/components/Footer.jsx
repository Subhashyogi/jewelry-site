import React from 'react';
import Logo from '../assets/logo.svg';
import footerBg from '../assets/footer-bg.jpg'; // Make sure you have this background pattern image

// --- Main Icon Imports ---
import { PhoneIcon } from './icons/PhoneIcon';
import { EnvelopeIcon } from './icons/EnvelopeIcon';
import { DiamondBulletIcon } from './icons/DiamondBulletIcon';
import { MapPinIcon } from './icons/MapPinIcon';

// --- Social Icon Imports ---
import FacebookIcon from './icons/FacebookIcon';
import TwitterIcon from './icons/TwitterIcon';
import BehanceIcon from './icons/BehanceIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import YoutubeIcon from './icons/YoutubeIcon';


// --- Data for easy editing ---
const collectionLinks = [
    "Diamond Ring", "Gold Bracelet", "Big Necklace", "Silver Bracelet", "Gold Earring", "Stud Earrings", "Crumpled Ring", "Moon Necklace", "Ankle Bracelet"
];

const contactInfo = [
    { Icon: PhoneIcon, title: 'Phone Number', details: ['+987 876 765 76 577'] },
    { Icon: EnvelopeIcon, title: 'Email Address', details: ['info@webmail.com'] },
    { Icon: MapPinIcon, title: 'Office Address', details: ['14/A, Miranda City, NYC'] },
];

const socialLinks = [
    { id: 'fb', Icon: FacebookIcon, href: '#' },
    { id: 'tw', Icon: TwitterIcon, href: '#' },
    { id: 'be', Icon: BehanceIcon, href: '#' },
    { id: 'li', Icon: LinkedInIcon, href: '#' },
    { id: 'yt', Icon: YoutubeIcon, href: '#' },
];


// --- Sub-components for a cleaner structure ---

const FooterColumnTitle = ({ children }) => (
    <h3 className="font-serif text-2xl text-white mb-6">{children}</h3>
);

const ContactBlock = ({ item }) => (
    <div className="flex items-start mb-10">
        <item.Icon className="h-8 w-8 text-brand-gold mt-1 flex-shrink-0" />
        <div className="ml-6">
            <h4 className="font-bold text-white text-sm mb-3">{item.title}</h4>
            {item.details.map((line, index) => (
                <a key={index} href="#" className="block text-white text-sm hover:text-brand-gold transition-colors duration-300">{line}</a>
            ))}
        </div>
    </div>
);

const CollectionLink = ({ text }) => (
    <a href="#" className="flex items-center text-white hover:text-brand-gold transition-all duration-300 group mb-6 hover:translate-x-1">
        <DiamondBulletIcon className="h-4 w-4 mr-4 text-white flex-shrink-0 group-hover:text-brand-gold transition-colors duration-300" />
        <span className="text-sm font-medium">{text}</span>
    </a>
);


// --- Main Footer Component ---
function Footer() {
    return (
        <footer className="relative bg-[#2a2a2a] text-white pt-24 lg:pt-36">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${footerBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }}></div>

            <div className="relative container mx-auto px-4">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

                    {/* Column 1: About */}
                    <div className="lg:col-span-4">
                        <a href="#" className="block mb-6">
                            <img className="h-10 w-auto" src={Logo} alt="Laramiss Logo" />
                            <div className="font-serif text-4xl tracking-wider -mt-2 text-brand-gold">Laramiss</div>
                            <div className="text-xs tracking-[0.3em] font-semibold text-brand-gold">LUXURY PIECES</div>
                        </a>
                        <p className="text-brand-gray leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="flex items-center space-x-3">
                            {socialLinks.map(social => (
                                <a
                                    key={social.id}
                                    href={social.href}
                                    className="w-10 h-10 bg-[#3a3a3a] rounded flex items-center justify-center text-white hover:bg-brand-gold transition-all duration-300"
                                    aria-label={`Follow us on ${social.id}`}
                                >
                                    <social.Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: New Collections */}
                    <div className="lg:col-span-4 px-8">
                        <FooterColumnTitle>New Collections.</FooterColumnTitle>
                        <div className="grid grid-cols-2 gap-x-16">
                            <div className="space-y-6">
                                {collectionLinks.slice(0, 5).map(link => <CollectionLink key={link} text={link} />)}
                            </div>
                            <div className="space-y-6">
                                {collectionLinks.slice(5).map(link => <CollectionLink key={link} text={link} />)}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Contact Us */}
                    <div className="lg:col-span-4 px-8">
                        <FooterColumnTitle>Contact Us.</FooterColumnTitle>
                        <div className="space-y-10">
                            {contactInfo.map(item => <ContactBlock key={item.title} item={item} />)}
                        </div>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="mt-20 lg:mt-32 py-8 bg-brand-charcoal -mx-4 px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p className="text-white text-center sm:text-left mb-4 sm:mb-0 font-bold">
                        Copyright By@Example - 2022
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-white hover:text-brand-gold transition-colors font-bold">Terms of use</a>
                        <a href="#" className="text-white hover:text-brand-gold transition-colors font-bold">Privacy Environmental Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;