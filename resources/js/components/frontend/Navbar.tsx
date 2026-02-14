import React, { useState, useEffect } from 'react';
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
    ChevronDown,
    ArrowRight,
    Search,
    Globe,
    Sun,
    Moon,
    Monitor
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useAppearance } from '@/hooks/use-appearance';

type NavLink = {
    name: string;
    href: string;
    dropdown?: { name: string; href: string; description?: string }[];
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
    const { isCurrentUrl } = useCurrentUrl();
    const { appearance, updateAppearance } = useAppearance();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdowns(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        {
            name: 'About',
            href: '#',
            dropdown: [
                { name: 'Our History', href: '/about/history', description: 'Transforming lives since 1995' },
                { name: 'Mission & Vision', href: '/about/mission-vision', description: 'Our goals and aspirations' },
                { name: 'Management Team', href: '/about/management', description: 'Experienced leadership' },
                { name: 'Why Choose Us', href: '/about/why-choose-us', description: 'Academic excellence and innovation' },
                { name: 'Our Campus', href: '/gallery', description: 'Take a look at our world-class facilities' },
            ],
        },
        {
            name: 'Academics',
            href: '/academics',
            dropdown: [
                { name: 'Primary Level', href: '/academics?level=primary', description: 'Strong foundations for young minds' },
                { name: 'Secondary Level', href: '/academics?level=secondary', description: 'Advanced learning and board preparation' },
                { name: 'Higher Secondary', href: '/academics?level=higher-secondary', description: 'Gateway to professional careers' },
            ],
        },
        { name: 'Admissions', href: '/admissions' },
        {
            name: 'Life at JBS',
            href: '/facilities',
            dropdown: [
                { name: 'Hostel & Residency', href: '/facilities?type=hostel', description: 'Safe and comfortable home away from home' },
                { name: 'Transportation', href: '/facilities?type=transportation', description: 'Extensive fleet covering the entire city' },
                { name: 'Sports Academy', href: '/facilities?type=sports', description: 'Training future athletes in various disciplines' },
                { name: 'Digital Library', href: '/facilities?type=library', description: 'Vast resource center for curious minds' },
            ],
        },
        {
            name: 'Updates', href: '/updates',
            dropdown: [
                { name: 'News & Events', href: '/news-events', description: 'Stay updated with school activities' },
                { name: 'Notices', href: '/notices', description: 'Important academic announcements' },

            ]
        },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* ================= TOP UTILITY BAR (Desktop Only) ================= */}
            <div className="hidden lg:flex bg-blue-950 text-slate-300 py-2.5 px-6 lg:px-8 xl:px-20 border-b border-blue-900/30 relative z-60">
                <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                            <Phone className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>+977-01-4444444</span>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group border-l border-white/10 pl-8">
                            <Mail className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                            <span>info@jayaschool.edu.np</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                            <Facebook className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                            <Instagram className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                            <Youtube className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                                <Globe className="h-3 w-3 text-blue-500" /> English
                            </button>
                            <Link href="/login" className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600 px-4 py-1.5 rounded-full text-white transition-all border border-blue-600/30">
                                <User className="h-3 w-3" /> Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= MAIN NAVIGATION ================= */}
            <header
                className={cn(
                    "fixed top-0 lg:top-[42px] left-0 w-full z-50 transition-all duration-400 ease-in-out",
                    isScrolled
                        ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-blue-900/5 py-3 lg:top-0 border-b border-slate-200/50 dark:border-slate-800/50"
                        : "bg-white dark:bg-slate-950 py-2 lg:py-6"
                )}
            >
                <div className="container mx-auto px-6 lg:px-8 xl:px-20">
                    <div className="flex justify-between items-center">
                        {/* Logo Hub */}
                        <Link href="/" className="flex items-center gap-4 group shrink-0">
                            <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:rotate-6 transition-transform duration-500">
                                <img src="/assets/logo.png" alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tighter whitespace-nowrap">
                                    JAYA <span className="text-blue-600">BAGESHWORI</span>
                                </h1>
                                <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-1 italic">Knowledge is Power</p>
                            </div>
                        </Link>

                        {/* Desktop Links */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative flex items-center"
                                    onMouseEnter={() => setActiveDropdown(link.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "px-2 py-2 text-sm font-black uppercase tracking-widest transition-all relative group/nav",
                                            isCurrentUrl(link.href) ? "text-blue-600" : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                                        )}
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDown className={cn("inline-block ml-1 h-3 w-3 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />}
                                        <span className={cn(
                                            "absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600 transform origin-left transition-transform duration-300",
                                            isCurrentUrl(link.href) ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                                        )} />
                                    </Link>

                                    {/* Premium Dropdown */}
                                    {link.dropdown && (
                                        <div className={cn(
                                            "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 transition-all duration-300 transform",
                                            activeDropdown === link.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                        )}>
                                            <div className="bg-white dark:bg-slate-900 rounded-4xl shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 p-3 overflow-hidden">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex flex-col p-4 rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors group/item"
                                                    >
                                                        <span className="text-sm font-black text-slate-900 dark:text-slate-100 group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                                                        {item.description && <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold mt-1 uppercase tracking-wider">{item.description}</span>}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-4">

                            <Link
                                href="/admissions"
                                className="h-12 lg:h-12 px-6 lg:px-8 bg-slate-900 dark:bg-blue-600 text-white font-black text-xs lg:text-sm uppercase tracking-widest rounded-2xl flex items-center gap-3 hover:bg-blue-600 dark:hover:bg-blue-700 transition-all active:scale-95 shadow-xl shadow-slate-900/10 dark:shadow-blue-900/20 animate-cta-pulse"
                            >
                                <span className="hidden sm:inline">Apply Now</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            {/* Theme Toggle Button */}
                            <button
                                onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                                className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm border border-slate-200 dark:border-slate-700 group"
                                aria-label="Toggle Theme"
                            >
                                {appearance === 'dark' ? (
                                    <Sun className="h-5 w-5 transition-transform group-hover:rotate-45" />
                                ) : (
                                    <Moon className="h-5 w-5 transition-transform group-hover:-rotate-12" />
                                )}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/40 active:scale-90 transition-all"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-7 w-7" strokeWidth={3} />
                                ) : (
                                    <Menu className="h-7 w-7" strokeWidth={3} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-slate-50 dark:bg-slate-950 z-60 transition-all duration-500 ease-in-out transform lg:hidden flex flex-col",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* Mobile Menu Header */}
                    <div className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-800 bg-blue-100 dark:bg-slate-900">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="text-xl font-black text-slate-900 dark:text-white leading-none tracking-tighter uppercase italic">
                                JBS <span className="text-blue-600 italic">SCHOOL</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                                className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-slate-100 shadow-sm active:scale-90 transition-transform"
                                aria-label="Toggle Theme"
                            >
                                {appearance === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                            <button
                                className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-slate-900 dark:text-slate-100 shadow-sm active:scale-90 transition-transform"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-2 mb-2">
                                {link.dropdown ? (
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="w-full flex justify-between items-center py-4 group"
                                        >
                                            <span className="text-2xl font-black text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{link.name}</span>
                                            <ChevronDown className={cn(
                                                "h-6 w-6 text-slate-400 transition-transform duration-300",
                                                mobileDropdowns[link.name] && "rotate-180 text-blue-600"
                                            )} />
                                        </button>
                                        <div className={cn(
                                            "overflow-hidden transition-all duration-300 space-y-1 pl-4 border-l-2 border-blue-100",
                                            mobileDropdowns[link.name] ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0"
                                        )}>
                                            {link.dropdown.map(item => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block py-3 group"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <p className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">{item.name}</p>
                                                    {item.description && <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{item.description}</p>}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block py-4 text-2xl font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors uppercase tracking-tight"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>


                </div>

                <style>{`
                    @keyframes cta-pulse {
                        0%, 100% { transform: scale(1); box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.1), 0 8px 10px -6px rgba(37, 99, 235, 0.1); }
                        50% { transform: scale(1.03); box-shadow: 0 20px 30px -5px rgba(37, 99, 235, 0.3), 0 12px 15px -6px rgba(37, 99, 235, 0.2); }
                    }
                    .animate-cta-pulse {
                        animation: cta-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                `}</style>
            </header>
            <div className="h-[85px] lg:h-[95px]" />
        </>
    );
}
