import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Target,
    Eye,
    Heart,
    Shield,
    Star,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const MissionVision = () => {
    const values = [
        {
            title: "Excellence",
            desc: "Upholding the highest standards in academics and character.",
            icon: Star,
            color: "blue"
        },
        {
            title: "Integrity",
            desc: "Fostering honesty, ethics, and strong moral principles.",
            icon: Shield,
            color: "emerald"
        },
        {
            title: "Innovation",
            desc: "Embracing new ideas and technologies in learning.",
            icon: Heart,
            color: "rose"
        },
        {
            title: "Respect",
            desc: "Building a cultue of mutual respect and understanding.",
            icon: CheckCircle2,
            color: "amber"
        }
    ];

    return (
        <FrontLayout>
            <Head title="Mission & Vision - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Target className="w-3 h-3" />
                            <span>Purpose & Values</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            OUR <span className="text-blue-500">GOAL</span> & <br />FUTURE VISION
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Guided by tradition, driven by innovation, and committed to shaping tomorrow's leaders.
                        </p>
                    </div>
                </section>

                {/* ================= MISSION & VISION GRID ================= */}
                <section className="py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Mission Card */}
                            <div className="group relative p-12 rounded-[3.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-black/20">
                                <div className="absolute top-12 right-12 opacity-5">
                                    <Target className="w-32 h-32 text-blue-600" />
                                </div>
                                <div className="relative space-y-8">
                                    <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-xl shadow-blue-600/20">
                                        <Target className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">OUR <span className="text-blue-600">MISSION</span></h2>
                                        <p className="text-lg font-medium text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                            "To empower every student with high-quality education, moral values, and life skills that enable them to lead fulfilling lives and contribute meaningfully to the global community."
                                        </p>
                                        <ul className="space-y-4">
                                            {["Academic Rigor", "Character Building", "Holistic Growth"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Vision Card */}
                            <div className="group relative p-12 rounded-[3.5rem] bg-blue-600 dark:bg-blue-700 text-white shadow-2xl shadow-blue-600/20 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-12 right-12 opacity-10">
                                    <Eye className="w-32 h-32" />
                                </div>
                                <div className="relative space-y-8">
                                    <div className="w-20 h-20 rounded-3xl bg-white text-blue-600 flex items-center justify-center shadow-xl">
                                        <Eye className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-6">
                                        <h2 className="text-4xl font-black uppercase italic tracking-tighter">OUR <span className="text-slate-950">VISION</span></h2>
                                        <p className="text-lg font-medium leading-relaxed italic opacity-90">
                                            "To be a global benchmark for educational excellence, where students are nurtured with empathy and equipped for the challenges of the 21st century."
                                        </p>
                                        <ul className="space-y-4">
                                            {["Global Standards", "Innovative Learning", "Inclusive Culture"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest opacity-80">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= CORE VALUES ================= */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                OUR CORE <span className="text-blue-600 dark:text-blue-500">VALUES</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">The pillars that sustain our community</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((v, i) => (
                                <div key={i} className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:border-blue-500/30 transition-all duration-500">
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 mb-8">
                                        <v.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-4">{v.title}</h3>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
                                        {v.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 text-center">
                    <div className="container mx-auto px-6 lg:px-20 space-y-10">
                        <div className="inline-flex items-center gap-4 p-2 pl-6 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
                            <span className="text-[10px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest">Learn about our heritage</span>
                            <a href="/about/history" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white shadow-sm hover:bg-blue-600 hover:text-white transition-all">
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                            READY TO JOIN <br /><span className="text-blue-600">OUR MISSION?</span>
                        </h2>
                        <div className="flex justify-center">
                            <a href="/admissions" className="h-20 px-12 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-700 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-slate-900/10 mb-2">
                                Enrollment Open 2026-27
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default MissionVision;
