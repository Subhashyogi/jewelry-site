import React, { useState } from 'react';
import clsx from 'clsx';
import Logo from '../assets/logo.svg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// --- Icon Imports for Mega Menu ---
import { RingCategoryIcon } from './icons/RingCategoryIcon';
import { EarringsCategoryIcon } from './icons/EarringsCategoryIcon';
import { BraceletsCategoryIcon } from './icons/BraceletsCategoryIcon';
import { PendantsCategoryIcon } from './icons/PendantsCategoryIcon';
import { NecklacesCategoryIcon } from './icons/NecklacesCategoryIcon';

// --- Image Imports for Mega Menu ---
import earingsImg from '../assets/megamenu/earrings.jpg';
import pendantsImg1 from '../assets/megamenu/pendant-1.jpg';
import pendantsImg2 from '../assets/megamenu/pendant-2.jpg';
import pendantsImg3 from '../assets/megamenu/pendant-3.jpg';
import pendantsImg4 from '../assets/megamenu/pendant-4.jpg';
import pendantsImg5 from '../assets/megamenu/pendant-5.jpg';


const megaMenuData = {
    "Rings": { Icon: RingCategoryIcon, type: 'links', data: { image: earingsImg, columns: [{ title: 'Type Of Rings', links: ['Ruby Rings', 'Emerald Rings', 'Sapphire Rings', 'Diamond Rings', 'Gold Rings'] }, { title: 'Size', links: ['Size 5', 'Size 6', 'Size 7'] }, { title: 'Top Picks', links: ['Jiara Blessing', 'Hentry Firana', 'Lucrative Li', 'Mirana Go', 'Fira Diamond Ring', 'Fanir Lo'] }] } },
    "Earrings": { Icon: EarringsCategoryIcon, type: 'links', data: { image: earingsImg, columns: [{ title: 'Type Of Earrings', links: ['Ruby Earrings', 'Emerald Earrings', 'Sapphire Earrings', 'Diamond Earrings', 'Gold Earrings'] }, { title: 'Style', links: ['Hoop Earrings', 'Dangle Earrings', 'Stud Earrings'] }] } },
    "Bracelets": { Icon: BraceletsCategoryIcon, type: 'articles', data: { articles: [{ img: pendantsImg1, title: 'GOLD PENDANTS', linkText: 'View Post' }, { img: pendantsImg2, title: 'GOLD PENDANTS', linkText: 'View Post' }, { img: pendantsImg3, title: 'GOLD PENDANTS', linkText: 'View Post' }, { img: pendantsImg4, title: 'GOLD PENDANTS', linkText: 'View Post' }], collections: ['Vivamus Suscipit Tortor Eget', 'Vivamus Suscipit Tortor Eget', 'Vivamus Suscipit Tortor Eget', 'Vivamus Suscipit Tortor Eget'] } },
    "Pendants": { Icon: PendantsCategoryIcon, type: 'gallery', data: [pendantsImg1, pendantsImg2, pendantsImg3, pendantsImg4, pendantsImg5] },
    "Necklaces": { Icon: NecklacesCategoryIcon, type: 'links', data: { image: earingsImg, columns: [{ title: 'Type Of Necklace', links: ['Choker', 'Chain', 'Pendant'] }, { title: 'Material', links: ['Gold', 'Silver', 'Platinum'] }] } },
};
const TABS = Object.keys(megaMenuData);

const MegaMenuContent = ({ activeTab }) => {
    const content = megaMenuData[activeTab];
    if (!content) return null;
    switch (content.type) {
        case 'links': return (<div className="grid grid-cols-12 gap-8"><div className="col-span-8 grid grid-cols-3 gap-8">{content.data.columns.map(col => (<div key={col.title}><h3 className="font-serif text-xl text-white mb-4">{col.title}</h3><ul className="space-y-2">{col.links.map(link => <li key={link}><a href="#" className="text-brand-gray hover:text-brand-gold transition-colors">{link}</a></li>)}</ul></div>))}</div><div className="col-span-4"><img src={content.data.image} alt="Category" className="w-full object-cover" /></div></div>);
        case 'articles': return (<div className="grid grid-cols-12 gap-8"><div className="col-span-8 grid grid-cols-4 gap-4">{content.data.articles.map((article, i) => (<div key={i}><a href="#"><img src={article.img} alt={article.title} className="w-full" /><p className="text-white mt-2 text-sm">{article.title}</p><p className="text-brand-gray text-xs hover:text-brand-gold">{article.linkText}</p></a></div>))}</div><div className="col-span-4"><h3 className="font-serif text-xl text-white mb-4">Collections</h3><ul className="space-y-2">{content.data.collections.map((link, i) => <li key={i}><a href="#" className="text-brand-gray hover:text-brand-gold">{link}</a></li>)}</ul></div></div>);
        case 'gallery': return (<div className="grid grid-cols-5 gap-4">{content.data.map((img, i) => <div key={i}><a href="#"><img src={img} alt="Gallery item" /></a></div>)}</div>);
        default: return null;
    }
};

const MegaMenu = ({ isOpen, activeTab, setActiveTab }) => (
    <div className={clsx("absolute top-16 left-[392%] -translate-x-1/2 w-screen max-w-6xl bg-[#2a2a2a] shadow-lg transition-all duration-300 ease-in-out hidden lg:block", { 'opacity-100 visible translate-y-0': isOpen, 'opacity-0 invisible -translate-y-4 pointer-events-none': !isOpen })}>
        <div className="grid grid-cols-12">
            <div className="col-span-3 border-r border-white/10 py-8">
                {TABS.map(tab => {
                    const IconComponent = megaMenuData[tab].Icon;
                    return (
                        <button 
                            key={tab}
                            onMouseEnter={() => setActiveTab(tab)}
                            className={clsx("w-full flex items-center px-6 py-4 text-left transition-colors duration-200", {
                                'bg-brand-charcoal text-brand-gold': activeTab === tab,
                                'text-white/80 hover:text-white': activeTab !== tab
                            })}
                        >
                            <IconComponent className="h-6 w-6 mr-4 flex-shrink-0" />
                            <span>{tab}</span>
                        </button>
                    );
                })}
            </div>
            <div className="col-span-9 p-8"><MegaMenuContent activeTab={activeTab} />
            </div>
        </div>
    </div>
);


const leftNavLinks = [{ name: 'Home', href: '#' }, { name: 'Categories', href: '#' }, { name: 'Diamond', href: '#' }, { name: 'Blog', href: '#' },];
const rightNavLinks = [{ name: 'Accessories', href: '#' }, { name: 'Pages', href: '#' }, { name: 'Shop', href: '#' }, { name: 'Contact', href: '#' },];

function MainNavbar({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [activeMegaTab, setActiveMegaTab] = useState(TABS[0]);

    let leaveTimeout;
    const handleMenuEnter = () => { clearTimeout(leaveTimeout); setIsMegaMenuOpen(true); };
    const handleMenuLeave = () => { leaveTimeout = setTimeout(() => { setIsMegaMenuOpen(false); }, 200); };

    const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

    return (
        <div className={clsx("transition-colors duration-300 ease-in-out", { 'bg-[#343430] shadow-lg': isScrolled, 'bg-transparent': !isScrolled })}>
            <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center font-sans">
                <div className="lg:hidden"><button onClick={toggleMobileMenu} className="text-white p-2 hover:text-brand-gold" aria-label="Toggle mobile menu">{isMobileMenuOpen ? (<XMarkIcon className="h-6 w-6" />) : (<Bars3Icon className="h-6 w-6" />)}</button></div>

                <div className="hidden lg:flex flex-1 justify-end items-center space-x-4 xl:space-x-8">
                    {leftNavLinks.map((link) => {
                        if (link.name === 'Categories') {
                            return (
                                <div key={link.name} className="relative" onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
                                    <a href={link.href} className={clsx("text-white transition-colors tracking-wider text-sm xl:text-base hover:text-brand-gold", { 'text-brand-gold': isMegaMenuOpen })}>
                                        {link.name}
                                    </a>
                                    <MegaMenu isOpen={isMegaMenuOpen} activeTab={activeMegaTab} setActiveTab={setActiveMegaTab} />
                                </div>
                            );
                        }
                        return (<a key={link.name} href={link.href} className="text-white transition-colors tracking-wider text-sm xl:text-base hover:text-brand-gold">{link.name}</a>);
                    })}
                </div>

                <div className="flex-shrink-0 text-center mx-4 sm:mx-8">
                    <a href="#" className="block"><img className="h-6 sm:h-8 w-auto inline-block" src={Logo} alt="Laramiss Logo" /><div className="font-serif text-2xl sm:text-3xl xl:text-4xl tracking-wider -mt-1 sm:-mt-2 text-brand-gold">Laramiss</div><div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] font-semibold text-brand-gold">LUXURY PIECES</div></a>
                </div>

                <div className="hidden lg:flex flex-1 justify-start items-center space-x-4 xl:space-x-8">
                    {rightNavLinks.map((link) => (<a key={link.name} href={link.href} className="text-white transition-colors tracking-wider text-sm xl:text-base hover:text-brand-gold">{link.name}</a>))}
                </div>

                <div className="lg:hidden w-10"></div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 bg-black/80">
                    <div className="bg-[#343430] min-h-screen p-6">
                        <div className="flex justify-between items-center mb-8">
                            <div className="text-center"><img className="h-8 w-auto inline-block" src={Logo} alt="Laramiss Logo" /><div className="font-serif text-3xl tracking-wider -mt-2 text-brand-gold">Laramiss</div><div className="text-xs tracking-[0.3em] font-semibold text-brand-gold">LUXURY PIECES</div></div>
                            <button onClick={toggleMobileMenu} className="text-white p-2 hover:text-brand-gold" aria-label="Close mobile menu"><XMarkIcon className="h-6 w-6" /></button>
                        </div>
                        <nav className="space-y-6">{[...leftNavLinks, ...rightNavLinks].filter(link => link.name !== 'Categories').map((link) => (<a key={link.name} href={link.href} className="block text-white text-lg tracking-wider hover:text-brand-gold transition-colors border-b border-gray-600 pb-4" onClick={toggleMobileMenu}>{link.name}</a>))}</nav>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MainNavbar;