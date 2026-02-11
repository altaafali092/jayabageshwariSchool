import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Globe, Headphones, ArrowRight } from 'lucide-react';

const GetInTouch = () => {
    return (
        <section className="relative py-20 lg:py-8 flex items-center justify-center overflow-hidden bg-white">
            {/* Professional Parallax Background */}
            <div
                className="absolute inset-0 bg-fixed bg-center bg-cover opacity-25 grayscale-[0.3]"
                style={{
                    backgroundImage: 'url("./assets/para.avif")',
                }}
            />

            {/* Clean Light Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-white/90 via-blue-50/30 to-white/90 z-10" />

            <div className="container relative z-20 mx-auto px-2 text-center">
                <div className="max-w-4xl mx-auto space-y-12">

                    {/* Minimal Branding */}
                    <div className="space-y-6">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-[0.2em] border border-blue-100">
                            Admissions & Inquiries
                        </span>

                        <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                            We're Here to <span className="text-blue-600">Help You</span>
                        </h2>

                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our academic programs or campus life?
                            Our dedicated team is ready to provide the information you need.
                        </p>
                    </div>

                    {/* Minimalist Contact Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-100 mt-10">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                                <p className="text-base font-bold text-slate-900">+977-081-533337</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                                <p className="text-base font-bold text-slate-900">info@jayaschool.edu.np</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                <p className="text-base font-bold text-slate-900">Kohalpur, Banke</p>
                            </div>
                        </div>
                    </div>

                    {/* Simple Action Button */}
                    <div className="pt-2">
                        <button className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3 mx-auto">
                            Contact Us Today
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
