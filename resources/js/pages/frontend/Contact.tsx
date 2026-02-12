import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
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

const Contact = () => {
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
                                            val: "Kohalpur-11, Banke, Nepal",
                                            sub: "Monday - Friday, 10:00 - 16:00",
                                            color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
                                            borderColor: "dark:border-blue-800/50"
                                        },
                                        {
                                            icon: Phone,
                                            label: "Call Support",
                                            val: "+977-081-533337",
                                            sub: "24/7 Admission Line",
                                            color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                                            borderColor: "dark:border-emerald-800/50"
                                        },
                                        {
                                            icon: Mail,
                                            label: "Email Hub",
                                            val: "info@jayaschool.edu.np",
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
                                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Key Contacts</h4>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-xs font-black text-slate-900 dark:text-white">Mrs. Presanna Raj Bhandari</p>
                                                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Founder</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black text-slate-900 dark:text-white">Mrs. Bidya Man Raj Bhandari</p>
                                                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Principal</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Office Hours</h4>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center text-[11px]">
                                                    <span className="font-bold text-slate-600 dark:text-slate-400 group">Sun - Thu:</span>
                                                    <span className="font-black text-slate-900 dark:text-white">9AM - 5PM</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[11px]">
                                                    <span className="font-bold text-slate-600 dark:text-slate-400">Friday:</span>
                                                    <span className="font-black text-slate-900 dark:text-white">9AM - 2PM</span>
                                                </div>
                                                <div className="flex justify-between items-center text-[11px]">
                                                    <span className="font-bold text-slate-600 dark:text-slate-400">Saturday:</span>
                                                    <span className="font-black text-red-500 dark:text-red-400 italic uppercase">Closed</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                                        <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect:</p>
                                        <div className="flex gap-4">
                                            {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                                                <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 border border-transparent dark:border-slate-800">
                                                    <Icon className="w-4 h-4" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: Contact Form */}
                            <div className="lg:col-span-7 relative">
                                <div className="absolute -inset-4 bg-blue-50 dark:bg-blue-900/10 rounded-[3rem] blur-2xl opacity-50 transition-colors" />
                                <div className="relative bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-8 md:p-14 shadow-2xl shadow-blue-900/5 dark:shadow-black/50 transition-colors">
                                    <div className="mb-12">
                                        <h3 className="text-3xl font-black text-slate-950 dark:text-white mb-3 tracking-tighter uppercase">Send a Message</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">Please fill in the form below and we'll get back to you within 24 hours.</p>
                                    </div>

                                    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="Example: John Doe"
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Subject</label>
                                            <input
                                                type="text"
                                                placeholder="What is this regarding?"
                                                className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                            />
                                        </div>
                                        <div className="md:col-span-2 space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">Your Message</label>
                                            <textarea
                                                rows={5}
                                                placeholder="Write your message here..."
                                                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-6 text-slate-900 dark:text-white font-bold outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600"
                                            ></textarea>
                                        </div>
                                        <div className="md:col-span-2">
                                            <button className="w-full h-18 bg-slate-950 dark:bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-blue-600/20 dark:hover:shadow-blue-900/40 active:scale-[0.98] transition-all duration-500 overflow-hidden group/btn relative border border-transparent dark:border-blue-500/50">
                                                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-700 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                                                <span className="relative z-10 uppercase tracking-widest text-sm italic">Dispatch Message Now</span>
                                                <Send className="relative z-10 w-5 h-5 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform" />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= GOOGLE MAP AREA (Redesigned) ================= */}
                <section className="py-24 bg-slate-50 dark:bg-slate-950/50 relative overflow-hidden transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 relative z-10">
                        <div className="relative group">
                            {/* Decorative Frame */}
                            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[3rem] opacity-10 blur-xl group-hover:opacity-20 transition duration-1000" />

                            <div className="relative rounded-[3rem] overflow-hidden border border-white dark:border-slate-800 shadow-2xl shadow-blue-900/10 dark:shadow-black/50 min-h-[600px] flex flex-col lg:flex-row transition-colors">
                                {/* Map Container (Takes most space) */}
                                <div className="flex-1 min-h-[400px] lg:min-h-[600px] relative">
                                    <iframe
                                        title="JBS Location"
                                        className="absolute inset-0 w-full h-full border-none dark:invert-[0.9] dark:hue-rotate-180 dark:brightness-[0.8] dark:contrast-[1.2]"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3514.670356167882!2d81.6841113!3d28.182444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3998592c31f9d509%3A0xc47be73063f2b604!2sJaya%20Bageshwori%20Higher%20Secondary%20School!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>

                                {/* Floating Sidebar Info (Redesigned) */}
                                <div className="w-full lg:w-96 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-10 lg:p-14 flex flex-col justify-center space-y-10 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-800 transition-colors">
                                    <div className="space-y-4">
                                        <div className="w-12 h-1 bg-blue-600 dark:bg-blue-500 rounded-full" />
                                        <h4 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Navigate <br />to Campus</h4>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">
                                            Located in the heart of Kohalpur, our campus is easily accessible via the main highway.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 border border-transparent dark:border-slate-700">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-sm tracking-tight uppercase">Kohalpur-11, Banke, Nepal</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 border border-transparent dark:border-slate-700">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-sm tracking-tight">+977-081-533337</span>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <a
                                            href="https://maps.app.goo.gl/t6Kxk2eK9J6e8z8y9"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-14 bg-blue-600 dark:bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-950 dark:hover:bg-blue-700 transition-all active:scale-[0.98] shadow-lg shadow-blue-600/20 dark:shadow-blue-900/40 uppercase tracking-widest text-xs italic"
                                        >
                                            Get Directions
                                            <Send className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Contact;
