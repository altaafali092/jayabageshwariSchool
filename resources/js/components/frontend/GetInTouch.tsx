import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ArrowRight } from 'lucide-react';

const GetInTouch = () => {
    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Visual & Text Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                                <MessageCircle className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Connect with us</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight">
                                Let's Start a <br />
                                <span className="text-blue-600">Conversation</span>
                            </h2>
                            <p className="text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                                Whether you're a prospective parent, a student, or a community member, we're here to answer your questions and welcome you to the Jaya Bageshwori family.
                            </p>
                        </div>

                        {/* Quick Stats/Features */}
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                            <div>
                                <p className="text-3xl font-black text-slate-900">24h</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Response Time</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900">98%</p>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Parent Satisfaction</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="h-14 px-8 bg-slate-900 text-white font-black rounded-2xl flex items-center gap-3 hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-slate-900/20">
                                Send a Message
                                <Send className="w-4 h-4" />
                            </button>
                            <button className="h-14 px-8 bg-white text-slate-900 border border-slate-200 font-black rounded-2xl flex items-center gap-3 hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95 shadow-sm">
                                Download Brochure
                            </button>
                        </div>
                    </div>

                    {/* Interactive Cards Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Contact Card 1 */}
                        <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-600/30 hover:-translate-y-2 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-500">
                                <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">Call Support</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">Our admissions team is available for a direct talk.</p>
                            <div className="space-y-1">
                                <p className="text-blue-600 font-black text-lg">+977-01-4444444</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available 10:00 - 16:15</p>
                            </div>
                        </div>

                        {/* Contact Card 2 */}
                        <div className="group p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl hover:-translate-y-2 transition-all duration-500 md:mt-12">
                            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-10 group-hover:bg-white transition-colors duration-500">
                                <Mail className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors duration-500" />
                            </div>
                            <h4 className="text-xl font-black text-white mb-2">Email Inquiry</h4>
                            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-6">Drop us a line for detailed academic inquiries.</p>
                            <div className="space-y-1 text-white">
                                <p className="font-black text-lg">info@jayaschool.edu.np</p>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                                    Reply within 24 hours <ArrowRight className="w-3 h-3" />
                                </p>
                            </div>
                        </div>

                        {/* Contact Card 3 */}
                        <div className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-600/30 hover:-translate-y-2 transition-all duration-500">
                            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-500">
                                <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">Campus Visit</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">We'd love to show you around our modern facilities.</p>
                            <div className="space-y-1">
                                <p className="text-blue-600 font-black text-lg">Balaju, Kathmandu</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Main Avenue Entrance</p>
                            </div>
                        </div>

                        {/* Small decorative card */}
                        <div className="p-8 rounded-[2.5rem] bg-blue-600 flex flex-col justify-end min-h-[220px] md:mt-12 group/cta cursor-pointer hover:scale-[1.02] transition-transform">
                            <div className="space-y-4">
                                <div className="p-3 bg-white/20 rounded-xl w-fit">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-2xl font-black text-white leading-tight">Virtual Campus Tour Available</h4>
                                <div className="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest group-hover/cta:gap-4 transition-all">
                                    Start Now <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GetInTouch;

