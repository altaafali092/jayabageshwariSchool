import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Users,
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Instagram,
    Search,
    ChevronRight,
    Briefcase,
    GraduationCap,
    Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Staff } from '@/types/admin/Staff';

interface Props {
    staffs: Record<string, Staff[]>;
}

const StaffPage = ({ staffs }: Props) => {
    return (
        <FrontLayout>
            <Head title="Our Faculty & Staff - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-32 pb-24 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Users className="w-3 h-3" />
                            <span>Institutional Directory</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            THE <span className="text-blue-500">FACULTY</span> <br />OF EXCELLENCE
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Meet the dedicated educators and professionals committed to shaping the leaders of tomorrow.
                        </p>
                    </div>
                </section>

                {/* ================= DEPARTMENTS ================= */}
                <div className="space-y-32 py-32">
                    {Object.entries(staffs).length > 0 ? (
                        Object.entries(staffs).map(([dept, members], deptIdx) => (
                            <section key={dept} className={cn(
                                "container mx-auto px-6 lg:px-20",
                                deptIdx % 2 === 1 ? "relative" : ""
                            )}>
                                {/* Department Header */}
                                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-100 dark:border-slate-800 pb-8">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">Department</span>
                                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                            {dept || 'General Administration'}
                                        </h2>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest max-w-xs md:text-right">
                                        Core professionals driving excellence within the {dept} division.
                                    </p>
                                </div>

                                {/* Members Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {members.map((member, i) => (
                                        <div key={member.id} className="group bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800/50 overflow-hidden hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-black/20 transition-all duration-500 hover:-translate-y-2">
                                            <div className="relative aspect-4/5 overflow-hidden">
                                                <img
                                                    src={member.image || 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=400'}
                                                    alt={member.full_name}
                                                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Social Overlay */}
                                                <div className="absolute bottom-6 left-6 right-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
                                                    {member.fb_url && (
                                                        <a href={member.fb_url} target="_blank" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                                                            <Facebook className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {member.linkedin_url && (
                                                        <a href={member.linkedin_url} target="_blank" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-blue-600 transition-colors">
                                                            <Linkedin className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {member.insta_url && (
                                                        <a href={member.insta_url} target="_blank" className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
                                                            <Instagram className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                    {member.email && (
                                                        <a href={`mailto:${member.email}`} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors">
                                                            <Mail className="w-4 h-4" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="p-8 space-y-4">
                                                <div className="space-y-1">
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                                        {member.full_name}
                                                    </h3>
                                                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">
                                                        {member.designation}
                                                    </p>
                                                </div>

                                                {member.bio && (
                                                    <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 italic leading-relaxed line-clamp-2">
                                                        "{member.bio}"
                                                    </p>
                                                )}

                                                <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                                    <span className="text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest flex items-center gap-2">
                                                        <Briefcase className="w-3 h-3" />
                                                        {dept || 'Faculty'}
                                                    </span>
                                                    {member.phone && (
                                                        <span className="text-[9px] font-bold text-slate-500 dark:text-slate-500">
                                                            {member.phone}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))
                    ) : (
                        <section className="container mx-auto px-6 py-32 text-center space-y-8">
                            <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                                <Users className="w-10 h-10 text-slate-200 dark:text-slate-800" />
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">Directory Synchronizing</h2>
                                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">Our staff profiles are currently being updated. Please check back soon.</p>
                            </div>
                        </section>
                    )}
                </div>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-slate-900 dark:bg-black text-center transition-colors">
                    <div className="container mx-auto px-6 lg:px-20 space-y-12">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                JOIN OUR <br /><span className="text-blue-500">FACULTY TEAM</span>
                            </h2>
                            <p className="text-slate-400 dark:text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Are you passionate about education? We're always looking for talent.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="/contact" className="h-20 px-12 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20">
                                Careers at JBS
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default StaffPage;
