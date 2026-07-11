import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Instagram,
    ArrowLeft
} from 'lucide-react';

import parse from 'html-react-parser';
import { Staffs } from '@/types/Frontend/Index';

interface Props {
    staff: Staffs;
}

const StaffDetail = ({ staff }: Props) => {
    const handleBack = () => window.history.back();

    return (
        <FrontLayout>
            <Head title={`${staff.full_name} - Faculty Profile`} />

            <main className="min-h-screen bg-gray-200 dark:bg-slate-950 transition-colors duration-300">
                <div className='px-20 pt-15'>
                    <div onClick={handleBack}

                        className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group bg-blue-950 rounded-lg px-4 py-2 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Back to Gallery
                    </div>
                </div>


                <section className="container mx-auto px-6 lg:px-20 py-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* LEFT COLUMN: THE PORTRAIT CARD */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="relative aspect-[5/5] rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-900">
                                {staff.image ? (
                                    <img
                                        src={staff.image}
                                        alt={staff.full_name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-800">
                                        <span className="text-sm font-black uppercase tracking-widest italic">No Portrait</span>
                                    </div>
                                )}

                                <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">
                                        {staff.department || 'Faculty'}
                                    </span>
                                </div>
                            </div>

                            {/* Minimal Social Icon Triggers Only */}
                            {(staff.fb_url || staff.linkedin_url || staff.insta_url) && (
                                <div className="flex gap-2 justify-center py-2">
                                    {staff.fb_url && (
                                        <a href={staff.fb_url} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 transition-all">
                                            <Facebook className="w-4 h-4" />
                                        </a>
                                    )}
                                    {staff.linkedin_url && (
                                        <a href={staff.linkedin_url} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 transition-all">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {staff.insta_url && (
                                        <a href={staff.insta_url} target="_blank" rel="noreferrer" className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/20 transition-all">
                                            <Instagram className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* RIGHT COLUMN: CORE TYPOGRAPHIC PROFILE & TARGETED CONTACTS */}
                        <div className="lg:col-span-8 space-y-12 lg:pt-2">

                            {/* Metadata Header Block */}
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-[2px] bg-blue-600 rounded-full" />
                                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-600">
                                            Faculty Directory Portfolio
                                        </span>
                                    </div>
                                    <h1 className="text-2xl lg:text-4xl font-black italic  text-slate-900 dark:text-white tracking-tighter leading-none">
                                        {staff.full_name}
                                    </h1>
                                    <p className="text-md lg:text-lg uppercase italic tracking-wide text-slate-500 dark:text-slate-400 font-bold">
                                        {staff.designation} <span className="text-blue-600 font-black">/</span> {staff.department || 'General Wing'}
                                    </p>
                                </div>

                                {/* CONTACT FOOTPRINT INJECTED BELOW METADATA */}
                                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2  border-slate-100 dark:border-slate-900/60 max-w-xl">
                                    {staff.email && (
                                        <a href={`mailto:${staff.email}`} className="flex items-center gap-2.5 group text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                            <span className="text-xs font-bold tracking-wide">{staff.email}</span>
                                        </a>
                                    )}

                                    {staff.phone && (
                                        <a href={`tel:${staff.phone}`} className="flex items-center gap-2.5 group text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                            <span className="text-xs font-bold tracking-wide">{staff.phone}</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Professional Background Content Area */}
                            <div className="space-y-2 border-t border-slate-100 dark:border-slate-900 pt-10">
                                <h2 className="text-lg font-black italic uppercase tracking-tight text-slate-900 dark:text-white">
                                    Professional Background
                                </h2>

                                {staff.bio ? (
                                    <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm antialiased match-bio-content">
                                        {parse(staff.bio)}
                                    </div>
                                ) : (
                                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 dark:text-slate-600 italic">
                                        Biographical structural details are currently updating for this faculty profile.
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </FrontLayout>
    );
};

export default StaffDetail;