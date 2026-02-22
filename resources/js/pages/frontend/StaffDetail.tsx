import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Instagram,
    ChevronLeft,
    Briefcase,
    GraduationCap,

    Quote
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Staff } from '@/types/admin/Staff';

interface Props {
    staff: Staff;
}

const StaffDetail = ({ staff }: Props) => {
    return (
        <FrontLayout>
            <Head title={`${staff.full_name} - Faculty Directory | Jaya Bageshwori`} />

            <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 pb-20">
                {/* ================= NAVIGATION BAR ================= */}
                <nav className="container mx-auto px-6 lg:px-20 pt-32 pb-8">
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors group"
                    >
                        <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                        Back to Faculty Directory
                    </Link>
                </nav>

                {/* ================= HERO PROFILE ================= */}
                <section className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Portrait Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 shadow-2xl shadow-blue-900/10 border border-slate-100 dark:border-slate-800">
                            <img
                                src={staff.image}
                                alt={staff.full_name}
                                className="w-full h-full object-cover"
                            />
                            {/* Department Badge */}
                            <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 shadow-xl">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">
                                    {staff.department}
                                </span>
                            </div>
                        </div>

                        {/* Connectivity Dock */}
                        <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 space-y-6 shadow-xl shadow-slate-200/50 dark:shadow-none">
                            <div className="space-y-4">
                                <h4 className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-4">
                                    Professional Connectivity
                                </h4>

                                {staff.email && (
                                    <a href={`mailto:${staff.email}`} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                                            <p className="text-xs font-black text-slate-900 dark:text-white lowercase">{staff.email}</p>
                                        </div>
                                    </a>
                                )}

                                {staff.phone && (
                                    <a href={`tel:${staff.phone}`} className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Direct Contact</p>
                                            <p className="text-xs font-black text-slate-900 dark:text-white tracking-widest">{staff.phone}</p>
                                        </div>
                                    </a>
                                )}
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                                {staff.fb_url && (
                                    <a href={staff.fb_url} target="_blank" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                )}
                                {staff.linkedin_url && (
                                    <a href={staff.linkedin_url} target="_blank" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}
                                {staff.insta_url && (
                                    <a href={staff.insta_url} target="_blank" className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Header Info */}
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.4em]">Faculty Profile</span>
                                </div>
                                <h1 className="text-5xl lg:text-8xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                    {staff.full_name}
                                </h1>
                                <p className="text-lg lg:text-2xl font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest italic leading-relaxed">
                                    {staff.designation} <span className="text-blue-600">@</span> {staff.department}
                                </p>
                            </div>
                        </div>

                        {/* Bio / About */}
                        <div className="space-y-10">
                            <div className="relative">
                                <Quote className="absolute -top-6 -left-8 w-16 h-16 text-slate-100 dark:text-slate-900 rotate-180" />
                                <div className="relative space-y-8">
                                    <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Professional Background</h3>
                                    <div className="prose prose-slate dark:prose-invert max-w-none">
                                        <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-loose whitespace-pre-wrap italic border-l-4 border-blue-600 pl-8">
                                            {staff.bio || `A dedicated member of our institutional faculty, ${staff.full_name} brings excellence and commitment to the ${staff.department} division. Their contribution is vital in maintaining the academic standards and institutional values of Jaya Bageshwori.`}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-100 dark:border-slate-800">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Briefcase className="w-5 h-5 text-blue-600" />
                                        <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Primary Role</h4>
                                    </div>
                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase">
                                        Lead Professional in {staff.department}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <GraduationCap className="w-5 h-5 text-blue-600" />
                                        <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest">Institutional Tenure</h4>
                                    </div>
                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase">
                                        Active Faculty Member
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Core Values / Call to Action */}
                        <div className="p-12 rounded-[3rem] bg-blue-950 text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent group-hover:scale-110 transition-transform duration-1000" />
                            <div className="relative z-10 space-y-6">
                                <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-tight">
                                    DEDICATED TO <span className="text-blue-500">ACADEMIC</span> <br />EXCELLENCE
                                </h3>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest max-w-md leading-relaxed">
                                    Collaborating for the future of our students through research, innovation, and educational integrity.
                                </p>
                                <div className="pt-4 flex flex-wrap gap-4">
                                    <Link
                                        href="#"
                                        className="px-8 py-4 bg-blue-600 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-xl shadow-blue-600/20 italic"
                                    >
                                        Schedule an Appointment
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-8 py-4 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all italic border border-white/10"
                                    >
                                        Our Philosophy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default StaffDetail;
