import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, usePage } from '@inertiajs/react';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Headphones,
    User,
    Clock,
    ChevronRight
} from 'lucide-react';
import ContactForm from '@/components/frontend/Contact/ContactForm';
import ContactMap from '@/components/frontend/Contact/ContactMap';
import SocialContact from '@/components/frontend/Contact/SocialContact';
import { SharedData } from '@/types';

const Contact = () => {
    const { officeSettings } = usePage<SharedData>().props;
    return (
        <FrontLayout>
            <Head title="Contact Us - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION (Minimalist) ================= */}
                <section className="relative pt-32 pb-20 bg-blue-950 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 -skew-x-12 transform translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />

                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                <Headphones className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-widest">Available Sun-Fri</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic">
                                GET IN <span className="text-blue-500">TOUCH</span>
                            </h1>
                            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest bg-white/5 px-6 py-2 rounded-full border border-white/5">
                                <span>Home</span>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-blue-400">Contact Us</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= MAIN CONTACT SECTION ================= */}
                <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            {/* LEFT COLUMN: Contact Details */}
                            <div className="lg:col-span-5 space-y-12">
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-none uppercase">
                                        Reach out to our <br />
                                        <span className="text-blue-600 dark:text-blue-500">Support Team</span>
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-md">
                                        Have a question, feedback, or need academic counseling? Our team is standing by to assist you in every way possible.
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {/* Contact Cards */}
                                    {[
                                        {
                                            icon: MapPin,
                                            label: "Visit Our Campus",
                                            val: officeSettings.office_address || "",
                                            sub: "Monday - Friday, 10:00 - 16:00",
                                            color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                                            borderColor: "dark:border-blue-800/50"
                                        },
                                        {
                                            icon: Phone,
                                            label: "Call Support",
                                            val: officeSettings.office_phone || "",
                                            sub: "24/7 Admission Line",
                                            color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                                            borderColor: "dark:border-emerald-800/50"
                                        },
                                        {
                                            icon: Mail,
                                            label: "Email Hub",
                                            val: officeSettings.office_email || "",
                                            sub: "Admissions Inquiries",
                                            color: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
                                            borderColor: "dark:border-indigo-800/50"
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-6 group">
                                            <div className={`${item.color} ${item.borderColor || ''} w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm border border-black/5`}>
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.label}</p>
                                                <p className="text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors uppercase italic">{item.val}</p>
                                                <p className="text-xs font-bold text-slate-500 dark:text-slate-500">{item.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Social Connect */}
                                <SocialContact />
                            </div>

                            {/* RIGHT COLUMN: Contact Form */}
                            <ContactForm />
                        </div>
                    </div>
                </section>

                {/* ================= GOOGLE MAP AREA (Redesigned) ================= */}
                <ContactMap />
            </main>
        </FrontLayout>
    );
};

export default Contact;
