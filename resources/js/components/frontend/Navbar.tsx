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
import { Link, usePage } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { useAppearance } from '@/hooks/use-appearance';
import { SharedData } from '@/types';
import { admissions, home } from '@/routes';
import TopNav from './Navbar/TopNav';
import { MenuItem } from '@/types/Frontend/MenuItem';

type NavLink = {
    name: string;
    href: string;
    dropdown?: {
        name: string;
        href: string;
        description?: string;
    }[];
};

export default function Navbar() {
    const { officeSettings, menuSettings } = usePage<{
        officeSettings: any
        menuSettings: MenuItem[]
    }>().props;

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

    const navLinks: NavLink[] = (menuSettings ?? []).map((menu) => ({
        name: menu.title,
        href: menu.url ?? '#',
        dropdown: menu.children && menu.children.length
            ? menu.children.map((child) => ({
                name: child.title,
                href: child.url ?? '#',
                description: child.description ?? '',
            }))
            : undefined,
    }));

    return (
        <>
            <TopNav />
            <header
                className={cn(
                    "fixed top-0 lg:top-[42px] left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                    isScrolled
                        ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-blue-900/5 py-3 lg:top-0 border-slate-200/40 dark:border-slate-800/40"
                        : "bg-white/50 dark:bg-slate-950/50 backdrop-blur-md py-4 lg:py-6"
                )}
            >
                <div className="container mx-auto px-4 lg:px-6 xl:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo Hub with Brand Typography */}
                        <Link href={home()} className="flex items-center gap-3 group shrink-0">
                            <div className="relative w-11 h-11 lg:w-13 h-13 overflow-hidden rounded-2xl flex items-center justify-center shadow-md shadow-blue-600/10 group-hover:rotate-6 transition-transform duration-500 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                <img src={officeSettings?.office_logo || "/assets/logo.png"} alt="Logo" className="w-9 h-9 lg:w-11 lg:h-11 object-contain" />
                            </div>
                            {/* <div className="flex flex-col">
                                <span className="font-black text-base lg:text-lg tracking-tight text-slate-900 dark:text-white uppercase leading-none">
                                    Jaya <span className="text-blue-600 dark:text-blue-500">Bageshwari</span>
                                </span>
                                <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em] mt-1 leading-none">
                                    Secondary School
                                </span>
                            </div> */}
                        </Link>

                        {/* Desktop Links with Pill Styling */}
                        <nav className="hidden lg:flex items-center gap-1">
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
                                            "px-4 py-2 text-xs font-black uppercase tracking-widest transition-all rounded-full flex items-center gap-1.5 relative group/nav",
                                            isCurrentUrl(link.href)
                                                ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30"
                                                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-900/50"
                                        )}
                                    >
                                        <span>{link.name}</span>
                                        {link.dropdown && (
                                            <ChevronDown
                                                className={cn(
                                                    "h-3 w-3 transition-transform duration-300 opacity-70 group-hover/nav:opacity-100",
                                                    activeDropdown === link.name && "rotate-180"
                                                )}
                                            />
                                        )}
                                    </Link>

                                    {/* Premium Dropdown with sliding animations */}
                                    {link.dropdown && (
                                        <div className={cn(
                                            "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 transition-all duration-300 transform origin-top",
                                            activeDropdown === link.name
                                                ? "opacity-100 visible translate-y-0 scale-100"
                                                : "opacity-0 invisible -translate-y-2 scale-95"
                                        )}>
                                            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-900/5 dark:shadow-black/60 border border-slate-200/40 dark:border-slate-800/40 p-2.5 overflow-hidden">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex flex-col p-3.5 rounded-2xl hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all group/item"
                                                    >
                                                        <span className="text-[13px] font-black text-slate-855 dark:text-slate-200 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors flex items-center justify-between">
                                                            <span>{item.name}</span>
                                                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-blue-600 dark:text-blue-400" />
                                                        </span>
                                                        {item.description && (
                                                            <span className="text-[9px] text-slate-400 dark:text-slate-500 font-bold mt-1 uppercase tracking-widest leading-relaxed">
                                                                {item.description}
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3">
                            {officeSettings?.is_open && (
                                <Link
                                    href={admissions()}
                                    className="h-11 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-widest rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 group animate-cta-pulse"
                                >
                                    <span className="hidden sm:inline">Apply Now</span>
                                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            )}

                            {/* Theme Toggle Button */}
                            <button
                                onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                                className="p-3 rounded-full bg-slate-100/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-sm border border-slate-200/40 dark:border-slate-800/40 group"
                                aria-label="Toggle Theme"
                            >
                                {appearance === 'dark' ? (
                                    <Sun className="h-4.5 w-4.5 transition-transform duration-500 group-hover:rotate-90" />
                                ) : (
                                    <Moon className="h-4.5 w-4.5 transition-transform duration-500 group-hover:-rotate-12" />
                                )}
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                className="lg:hidden p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/30 active:scale-90 transition-all"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" strokeWidth={2.5} />
                                ) : (
                                    <Menu className="h-6 w-6" strokeWidth={2.5} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl z-60 transition-all duration-500 ease-in-out transform lg:hidden flex flex-col",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* Mobile Menu Header */}
                    <div className="p-6 flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                <GraduationCap className="h-6 w-6 text-white" />
                            </div>
                            <h1 className="text-lg font-black text-slate-900 dark:text-white leading-none tracking-tighter uppercase italic">
                                JBS <span className="text-blue-600 italic">SCHOOL</span>
                            </h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateAppearance(appearance === 'dark' ? 'light' : 'dark')}
                                className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-900 dark:text-slate-100 border border-slate-200/40 dark:border-slate-800/40"
                                aria-label="Toggle Theme"
                            >
                                {appearance === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
                            </button>
                            <button
                                className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full text-slate-900 dark:text-slate-100 border border-slate-200/40 dark:border-slate-800/40"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <X className="h-4.5 w-4.5" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-1">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-slate-100 dark:border-slate-900/50 last:border-0 pb-2">
                                {link.dropdown ? (
                                    <div className="space-y-1">
                                        <button
                                            onClick={() => toggleMobileDropdown(link.name)}
                                            className="w-full flex justify-between items-center py-3.5 group"
                                        >
                                            <span className="text-xl font-black text-slate-900 dark:text-slate-100 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{link.name}</span>
                                            <ChevronDown className={cn(
                                                "h-5 w-5 text-slate-400 transition-transform duration-300",
                                                mobileDropdowns[link.name] && "rotate-180 text-blue-600"
                                            )} />
                                        </button>
                                        <div className={cn(
                                            "overflow-hidden transition-all duration-300 space-y-1 pl-4 border-l border-blue-500/20",
                                            mobileDropdowns[link.name] ? "max-h-96 opacity-100 py-1" : "max-h-0 opacity-0"
                                        )}>
                                            {link.dropdown.map(item => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block py-2.5 group"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    <p className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 transition-colors">{item.name}</p>
                                                    {item.description && <p className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{item.description}</p>}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block py-3.5 text-xl font-black text-slate-900 dark:text-slate-100 hover:text-blue-600 transition-colors uppercase tracking-tight"
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
                        0%, 100% { transform: scale(1); box-shadow: 0 4px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -4px rgba(37, 99, 235, 0.1); }
                        50% { transform: scale(1.03); box-shadow: 0 10px 20px -3px rgba(37, 99, 235, 0.25), 0 8px 10px -4px rgba(37, 99, 235, 0.15); }
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

