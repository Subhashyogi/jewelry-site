// src/components/TopBar.jsx
import { ChevronDownIcon } from '@heroicons/react/24/solid';

/**
 * A reusable, styled link component for the top bar.
 */
const NavLink = ({ children, href = '#' }) => (
    <a href={href} className="text-white hover:text-brand-gold transition-colors duration-300 text-xs sm:text-sm">
        {children}
    </a>
);

/**
 * A styled vertical separator.
 */
const Separator = () => (
    <span className="text-brand-gray/50 hidden sm:inline">|</span>
);

function TopBar() {
    return (
        // The main container with a charcoal background and a subtle bottom border
        <div className="text-sm py-3 sm:py-6">
            <div className="container mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row justify-between items-center font-sans space-y-2 sm:space-y-0">
                
                {/* Left Side: Contact Info */}
                <div className="text-white text-center sm:text-left">
                    <span className="text-xs sm:text-sm">Need Help? Call 1234 567 890</span>
                </div>

                {/* Right Side: Account Links & Language Selector */}
                <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4 text-center">
                    <NavLink>My Account</NavLink>
                    <Separator />
                    <NavLink>Blog</NavLink>
                    <Separator />
                    <NavLink>Support</NavLink>
                    <Separator />
                    <NavLink>Signup</NavLink>
                    <Separator />
                    <NavLink>Login</NavLink>

                    {/* Language selector, separated by padding for a visual gap */}
                    <div className="pl-2 sm:pl-4">
                        <button className="flex items-center text-brand-gray hover:text-white transition-colors text-xs sm:text-sm">
                            <span className="hidden sm:inline">English</span>
                            <span className="sm:hidden">EN</span>
                            <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;