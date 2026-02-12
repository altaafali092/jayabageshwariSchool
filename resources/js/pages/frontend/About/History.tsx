import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    History as HistoryIcon,
    Target,
    Award,
    Clock,
    Milestone,
    Flag,
    ArrowRight
} from 'lucide-react';

const History = () => {
    const milestones = [
        { year: "1995", title: "The Foundation", desc: "JBS was established with a vision to provide quality education to the local community with just 50 students." },
        { year: "2005", title: "Secondary Wing", desc: "Successfully expanded into secondary education, achieving excellent results in national examinations." },
        { year: "2012", title: "Digital Revolution", desc: "Inaugurated the first smart classroom and integrated digital learning into the core curriculum." },
        { year: "2018", title: "Excellence Award", desc: "Recognized as one of the top performing schools in the region for academic and extracurricular achievements." },
        { year: "2024", title: "Silver Jubilee+", desc: "Celebrating over 25 years of educational excellence and looking forward to a sustainable future." }
    ];

    return (
        <FrontLayout>
            <Head title="Our History - Jaya Bageshwori" />

            <main className="flex-1 bg-white">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <HistoryIcon className="w-3 h-3" />
                            <span>Established 1995</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            A LEGACY OF <br /><span className="text-blue-500">EXCELLENCE</span>
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            For over three decades, Jaya Bageshwori has been at the forefront of educational innovation and character building.
                        </p>
                    </div>
                </section>

                {/* ================= STORY SECTION ================= */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-950/10 group">
                                <img src="https://images.unsplash.com/photo-1523050853064-ebad6505128e?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="School Legacy" />
                                <div className="absolute bottom-10 left-10 p-10 bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-white/20">
                                    <h4 className="text-3xl font-black text-slate-900 italic tracking-tighter mb-2">30+</h4>
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Years of Impact</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight">
                                        HOW IT ALL <span className="text-blue-600">BEGAN</span>
                                    </h2>
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                                        Small beginnings, infinite dreams
                                    </p>
                                </div>
                                <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                                    <p>
                                        Jaya Bageshwori School was founded in 1995 with a mission to bridge the gap between traditional values and modern educational needs. What started as a small primary school has now grown into a premier institution.
                                    </p>
                                    <p>
                                        Our journey has always been guided by the philosophy that education is not just about academic grades but about shaping responsible, ethical, and capable global citizens.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                                    <div className="space-y-2">
                                        <h5 className="text-lg font-black text-slate-900 uppercase italic">Our Mission</h5>
                                        <p className="text-xs text-slate-500 leading-relaxed">To empower students with knowledge and character to lead and serve.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="text-lg font-black text-slate-900 uppercase italic">Our Vision</h5>
                                        <p className="text-xs text-slate-500 leading-relaxed">To be a global benchmark for value-based excellence in education.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= TIMELINE ================= */}
                <section className="py-24 bg-slate-50 overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                                OUR <span className="text-blue-600">JOURNEY</span> SO FAR
                            </h2>
                            <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Key milestones in our educational heritage</p>
                        </div>

                        <div className="relative">
                            {/* Desktop Line */}
                            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200" />

                            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {milestones.map((ms, i) => (
                                    <div key={i} className="group relative pt-12 lg:pt-0 lg:pb-12 text-center space-y-6">
                                        <div className="hidden lg:block absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 group-hover:scale-150 transition-transform duration-300 z-10" />
                                        <div className="space-y-2">
                                            <span className="text-3xl lg:text-4xl font-black text-blue-600/10 italic group-hover:text-blue-600 transition-colors duration-500">{ms.year}</span>
                                            <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight">{ms.title}</h4>
                                        </div>
                                        <p className="text-xs font-bold text-slate-500 leading-relaxed uppercase tracking-tight px-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {ms.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-slate-900 text-center">
                    <div className="container mx-auto px-6 lg:px-20 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                BE PART OF OUR <br />FUTURE <span className="text-blue-500">STORY</span>
                            </h2>
                            <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Join the thousands of alumni who have shaped their future at JBS</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/admissions" className="w-full sm:w-auto h-20 px-12 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20 group">
                                Apply Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

const Link = ({ href, children, className }: any) => (
    <a href={href} className={className}>{children}</a>
);

export default History;
