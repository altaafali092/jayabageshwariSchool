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
} from 'lucide-react'
import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { cn } from '@/lib/utils'
import { useCurrentUrl } from '@/hooks/use-current-url'

type NavLink = {
    name: string
    href: string
    dropdown?: { name: string; href: string }[]
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
    const { isCurrentUrl } = useCurrentUrl()

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        {
            name: 'About Us',
            href: '#',
            dropdown: [
                { name: 'History', href: '/about/history' },
                { name: 'Why Choose Us', href: '/about/why-choose-us' },
                { name: 'Gallery', href: '/gallery' },
            ],
        },
        { name: 'Academics', href: '/academics' },
        { name: 'Facilities', href: '/facilities' },
        { name: 'Admissions', href: '/admissions' },
        { name: 'Updates', href: '/updates' },
        { name: 'Contact', href: '/contact' },
    ]

    const toggleMobileDropdown = (name: string) => {
        setMobileDropdownOpen(mobileDropdownOpen === name ? null : name)
    }

    return (
        <>
            {/* ================= TOP BAR ================= */}
            <div className="bg-[#1e3a8a] text-white py-3 px-4 md:px-8 lg:px-20">
                <div className="mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
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

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-1 bg-blue-800/60 hover:bg-blue-700 px-3 py-1 rounded-full text-xs">
                                <User className="h-3 w-3" /> Admin
                            </button>
                            <button className="flex items-center gap-1 bg-blue-800/60 hover:bg-blue-700 px-3 py-1 rounded-full text-xs">
                                <GraduationCap className="h-3 w-3" /> Student
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <Facebook className="h-4 w-4 hover:text-blue-300 cursor-pointer" />
                            <Instagram className="h-4 w-4 hover:text-pink-300 cursor-pointer" />
                            <Youtube className="h-4 w-4 hover:text-red-400 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= STICKY BOTTOM BAR ================= */}
            <div className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="px-4 md:px-8 lg:px-20">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/logo.png"
                                alt="JBS Logo"
                                className="h-14"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.dropdown ? (
                                        <button
                                            className={cn(
                                                'flex items-center gap-1 font-medium py-2',
                                                link.dropdown.some((d) =>
                                                    isCurrentUrl(d.href)
                                                )
                                                    ? 'text-blue-700'
                                                    : 'text-gray-600 hover:text-blue-700'
                                            )}
                                        >
                                            {link.name}
                                            <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                'font-medium py-2',
                                                isCurrentUrl(link.href)
                                                    ? 'text-blue-700 border-b-2 border-blue-700'
                                                    : 'text-gray-600 hover:text-blue-700'
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {link.dropdown && (
                                        <div className="absolute left-0 top-full mt-2 w-48 bg-white  rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={cn(
                                                        'block px-4 py-3 text-sm hover:bg-blue-50',
                                                        isCurrentUrl(item.href)
                                                            ? 'text-blue-700 bg-blue-50'
                                                            : 'text-gray-600'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Button */}
                        <button
                            className="lg:hidden p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden pb-4 ">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <>
                                            <button
                                                onClick={() =>
                                                    toggleMobileDropdown(
                                                        link.name
                                                    )
                                                }
                                                className="w-full flex justify-between px-4 py-3 text-left font-medium"
                                            >
                                                {link.name}
                                                <ChevronDown
                                                    className={cn(
                                                        'h-4 w-4 transition-transform',
                                                        mobileDropdownOpen ===
                                                            link.name &&
                                                            'rotate-180'
                                                    )}
                                                />
                                            </button>
                                            {mobileDropdownOpen ===
                                                link.name && (
                                                <div className="pl-6">
                                                    {link.dropdown.map(
                                                        (item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block px-4 py-2 text-sm text-gray-600"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block px-4 py-3 font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
