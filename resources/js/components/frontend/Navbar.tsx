import { 
    Phone, 
    Mail, 
    Facebook, 
    Instagram, 
    Youtube, 
    User, 
    GraduationCap, 
    Menu,
    X,
    ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useCurrentUrl } from '@/hooks/use-current-url';

type NavLink = {
    name: string;
    href: string;
    dropdown?: { name: string; href: string }[];
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
    const { isCurrentUrl } = useCurrentUrl();

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        { 
            name: 'About Us', 
            href: '#', 
            dropdown: [
                { name: 'History', href: '/about/history' },
                { name: 'Why Choose Us', href: '/about/why-choose-us' },
                { name: 'Gallery', href: '/gallery' },
            ]
        },
        { name: 'Academics', href: '/academics' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Updates', href: '/updates' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
    };

    return (
        <header className="w-full flex flex-col font-sans">
            {/* Top Bar */}
            <div className="bg-[#1e3a8a] text-white py-4 px-4 md:px-8 lg:px-20">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>081-533337</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>jbsschool2037@gmail.com</span>
                        </div>
                    </div>

                    {/* Right Side: Portals & Socials */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-1 bg-blue-800/50 hover:bg-blue-700 px-3 py-1 rounded-full text-xs transition-colors">
                                <User className="h-3 w-3" />
                                <span>Admin</span>
                            </button>
                            <button className="flex items-center gap-1 bg-blue-800/50 hover:bg-blue-700 px-3 py-1 rounded-full text-xs transition-colors">
                                <GraduationCap className="h-3 w-3" />
                                <span>Student</span>
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-3">
                            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook className="h-4 w-4" /></a>
                            <a href="#" className="hover:text-pink-300 transition-colors"><Instagram className="h-4 w-4" /></a>
                            <a href="#" className="hover:text-red-400 transition-colors"><Youtube className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Logo & Navigation */}
            <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-20 py-4">
                    <div className="flex justify-between items-center">
                        {/* Logo Area */}
                        <div className="flex items-center gap-3">
                            {/* Placeholder for Logo Image */}
                            <img src="./assets/logo.png" alt="" className='h-16' />
                            
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.dropdown ? (
                                        <button 
                                            className={cn(
                                                "flex items-center gap-1 text-md font-medium transition-all hover:text-blue-700 relative py-2",
                                                isCurrentUrl(link.href) || link.dropdown.some(item => isCurrentUrl(item.href))
                                                    ? "text-blue-700" 
                                                    : "text-gray-600"
                                            )}
                                        >
                                            {link.name}
                                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "text-md font-medium transition-all hover:text-blue-700 relative py-2",
                                                isCurrentUrl(link.href) 
                                                    ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-700" 
                                                    : "text-gray-600"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {link.dropdown && (
                                        <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                                            <div className="bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={cn(
                                                            "block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-50 last:border-0",
                                                            isCurrentUrl(item.href) && "bg-blue-50 text-blue-700"
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden text-gray-700 p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Navigation Dropdown */}
                    {isMenuOpen && (
                        <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2 border-t pt-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className={cn(
                                                    "flex items-center justify-between px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-left",
                                                    isCurrentUrl(link.href) || link.dropdown.some(item => isCurrentUrl(item.href))
                                                        ? "text-blue-700" 
                                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                )}
                                            >
                                                {link.name}
                                                <ChevronDown className={cn(
                                                    "h-4 w-4 transition-transform",
                                                    mobileDropdownOpen === link.name && "rotate-180"
                                                )} />
                                            </button>
                                            
                                            {mobileDropdownOpen === link.name && (
                                                <div className="pl-6 flex flex-col gap-1 mt-1 border-l-2 border-gray-100 ml-4">
                                                    {link.dropdown.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className={cn(
                                                                "px-4 py-2 rounded-md text-sm transition-colors",
                                                                isCurrentUrl(item.href) 
                                                                    ? "text-blue-700 font-medium" 
                                                                    : "text-gray-500 hover:text-gray-900"
                                                            )}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                                                isCurrentUrl(link.href) 
                                                    ? "bg-blue-50 text-blue-700" 
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
