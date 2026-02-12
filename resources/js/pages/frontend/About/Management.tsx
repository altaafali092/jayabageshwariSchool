import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Users,
    MessageSquare,
    Linkedin,
    Mail,
    Award,
    ChevronRight,
    Search
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Management = () => {
    const management = [
        {
            name: "Ram Bahadur Thapa",
            role: "Chairman",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
            bio: "With over 30 years in educational administration, Mr. Thapa has been the visionary force behind JBS since its inception.",
            linkedin: "#",
            email: "chairman@jbs.edu.np"
        },
        {
            name: "Dr. Sita Devi",
            role: "Managing Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
            bio: "An academician with a PhD in Education Psychology, Dr. Devi focuses on student-centric learning methodologies.",
            linkedin: "#",
            email: "md@jbs.edu.np"
        },
        {
            name: "Krishna Prasad",
            role: "Principal",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
            bio: "Leading the academic wing with a passion for excellence and holistic development since 2012.",
            linkedin: "#",
            email: "principal@jbs.edu.np"
        },
        {
            name: "Anita Gurung",
            role: "Academic Coordinator",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
            bio: "Ensuring our curriculum remains global, relevant, and challenging for our bright young minds.",
            linkedin: "#",
            email: "coordinator@jbs.edu.np"
        }
    ];

    return (
        <FrontLayout>
            <Head title="Management Team - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Users className="w-3 h-3" />
                            <span>Leadership Team</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            GUIDING <span className="text-blue-500">VOICES</span> <br />OF JBS
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Meet the dedicated professionals leading our institution toward new horizons of excellence.
                        </p>
                    </div>
                </section>

                {/* ================= CHAIRPERSON'S MESSAGE PREVIEW ================= */}
                <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    alt="Chairman"
                                />
                                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="w-12 h-1 bg-blue-600" />
                                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight">
                                        MESSAGE FROM <br /><span className="text-blue-600">THE CHAIRMAN</span>
                                    </h2>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-xl font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed">
                                        "Education is the most powerful weapon which you can use to change the world. At JBS, we don't just teach modules; we cultivate character and curiosity."
                                    </p>
                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em]">
                                        — Ram Bahadur Thapa, Chairman
                                    </p>
                                </div>
                                <button className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] group">
                                    READ FULL STATEMENT
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= TEAM GRID ================= */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="text-center mb-20 space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                BOARD OF <span className="text-blue-600 dark:text-blue-500">DIRECTORS</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Experts driving our educational mission</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {management.map((member, i) => (
                                <div key={i} className="group bg-white dark:bg-slate-950 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-black/20 transition-all duration-500">
                                    <div className="relative aspect-square overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                                            <a href={member.linkedin} className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{member.name}</h3>
                                            <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{member.role}</p>
                                        </div>
                                        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed line-clamp-3">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= ADVISORY BOARD ================= */}
                <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 text-center space-y-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                ADVISORY <span className="text-blue-600 dark:text-blue-500">COUNCIL</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Industry veterans providing strategic oversight</p>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: "Dr. Arun K.C.", org: "TU Professor" },
                                { name: "Ms. Maya Shrestha", org: "Child Psychologist" },
                                { name: "Er. Ramesh Dev", org: "Tech Entrepreneur" },
                                { name: "Dr. Binita Jha", org: "Public Health Specialist" }
                            ].map((advisor, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{advisor.name}</h4>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">{advisor.org}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-slate-900 dark:bg-black text-center">
                    <div className="container mx-auto px-6 lg:px-20 space-y-12">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                CONNECT WITH <br /><span className="text-blue-500">OUR OFFICE</span>
                            </h2>
                            <p className="text-slate-400 dark:text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Have specific questions for our administration? We're here to help.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="/contact" className="h-20 px-12 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20">
                                Contact Administration
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Management;
