import { MapPin, PhoneCall, Send } from 'lucide-react'
import React from 'react'

const ContactMap = () => {
    return (
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
                                        <PhoneCall className="w-5 h-5" />
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
    )
}

export default ContactMap