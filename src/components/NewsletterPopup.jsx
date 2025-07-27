import { useState, useEffect } from 'react';
import clsx from 'clsx';
import newsletterImage from '../assets/newsletterImage/newsletter-image.jpg';

const CloseIcon = (props) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

function NewsletterPopup({ isOpen, onClose }) {
    const [isShowing, setIsShowing] = useState(false);
    useEffect(() => { if (isOpen) { setIsShowing(true); } }, [isOpen]);
    const handleClose = () => { setIsShowing(false); setTimeout(onClose, 300); };
    if (!isOpen) return null;
    return (
        <div className={clsx('fixed inset-0 flex items-start justify-center z-[100] p-4 pt-20 transition-colors duration-300 ease-in-out', { 'bg-black/0': !isShowing, 'bg-black/75': isShowing })} onClick={handleClose}>
            <div onClick={(e) => e.stopPropagation()} className={clsx('w-full max-w-4xl bg-black relative shadow-lg overflow-hidden transition-all duration-300 ease-in-out', { 'opacity-0 -translate-y-full': !isShowing, 'opacity-100 translate-y-0': isShowing })}>
                <img src={newsletterImage} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <div className="relative z-20 flex flex-col items-center justify-center text-center p-8 sm:p-16 text-white">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" aria-label="Close newsletter popup"><CloseIcon className="w-7 h-7" /></button>
                    <h1 className="font-serif text-4xl sm:text-5xl mb-2">Newsletter</h1>
                    <p className="text-gray-300 mb-8 max-w-xs">Subscribe to our newsletter to receive exclusive offers</p>
                    <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/20 text-white placeholder:text-gray-400 p-3 w-full focus:ring-brand-gold focus:border-brand-gold" aria-label="Email Address" />
                        <button type="submit" className="bg-brand-gold text-white font-bold tracking-widest p-3 w-full mt-4 uppercase transition-colors hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default NewsletterPopup;