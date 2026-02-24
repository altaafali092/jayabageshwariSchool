import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, GraduationCap, Clock } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { SharedData } from '@/types';

const Footer = () => {
    const { officeSettings } = usePage<SharedData>().props;
    const socials = [
        { Icon: Facebook, url: officeSettings?.fb_url },
        { Icon: Instagram, url: officeSettings?.insta_url },
        { Icon: Twitter, url: officeSettings?.titok_url },
        { Icon: Youtube, url: officeSettings?.yt_url },
    ];


    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-slate-950 text-slate-100 pt-24 pb-12 overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center opacity-[0.05]">
                <span className="text-[14vw] font-black leading-none whitespace-nowrap tracking-tighter text-blue-00 uppercase">
                    Jaya Bageshwori
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-white">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                                <img src="/assets/logo.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black tracking-tighter leading-none">{officeSettings?.office_name || "no name"}</h3>

                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs italic">
                            {officeSettings?.office_description || "no description"}
                        </p>
                        <div className="flex gap-3">
                            {socials.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    className="w-10 h-10 rounded-full bg-blue-900/20 border border-blue-900/30 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white hover:scale-110 active:scale-90 transition-all duration-300"
                                >
                                    <item.Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'About History', href: '/about/history' },
                                { name: 'Admissions', href: '/admissions' },
                                { name: 'Academic Levels', href: '/academics' },
                                { name: 'Why Choose Us', href: '/about/why-choose-us' },
                                { name: 'Latest News', href: '/news-events' },
                                { name: 'Official Notices', href: '/notices' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm hover:text-blue-500 transition-colors flex items-center gap-2 group">
                                        <ArrowRight className="w-3 h-3 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
                            Contact Info
                        </h4>
                        <div className="space-y-5">
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-900/30 flex items-center justify-center shrink-0 group-hover:border-blue-600/30 transition-colors">
                                    <MapPin className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="text-sm leading-snug">
                                    <p className="font-bold text-white mb-1 uppercase text-[10px] tracking-widest opacity-40">Visit Us</p>
                                    {officeSettings?.office_address || "no address"}
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-900/30 flex items-center justify-center shrink-0 group-hover:border-blue-600/30 transition-colors">
                                    <Phone className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-white mb-1 uppercase text-[10px] tracking-widest opacity-40">Call Us</p>
                                    {officeSettings?.office_phone || "no phone"}{','}
                                    {officeSettings?.office_phone_2 || "no phone"}
                                </div>
                            </div>
                            <div className="flex gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-900/30 flex items-center justify-center shrink-0 group-hover:border-blue-600/30 transition-colors">
                                    <Mail className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-white mb-1 uppercase text-[10px] tracking-widest opacity-40">Email Us</p>
                                    {officeSettings?.office_email || "no email"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* School Hours */}
                    <div className="space-y-6">
                        <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-blue-600">
                            Office Hours
                        </h4>
                        <div className="p-6 rounded-4xl bg-blue-900/10 border border-blue-900/20 space-y-4">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-blue-600" />
                                <div className="text-sm">
                                    <p className="text-white font-bold tracking-tight">Sunday - Friday</p>
                                    <p className="text-xs text-slate-500">10:00 AM - 4:15 PM</p>
                                </div>
                            </div>
                            <div className="pt-4 border-t border-blue-900/30">
                                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-2">School Status</p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-white font-bold text-sm tracking-tight">Open Today</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest">
                    <p>© 2016-{currentYear} {officeSettings?.office_name || "no name"}. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-blue-500 transition-colors text-slate-600">Site by Altaaf</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
