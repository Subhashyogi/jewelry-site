import { ChevronUpIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

function ScrollToTopButton({ isScrolled }) {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <button onClick={scrollToTop} className={clsx('fixed bottom-5 right-5 z-50 bg-brand-gold text-brand-charcoal p-3 shadow-lg transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:scale-110', { 'opacity-100 translate-y-0': isScrolled, 'opacity-0 translate-y-4 pointer-events-none': !isScrolled })} aria-label="Scroll to top">
            <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
    );
}
export default ScrollToTopButton;