import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Instagram,
    Briefcase,
    GraduationCap,
    Quote,
    ChevronLeft
} from 'lucide-react';
import { Staff } from '@/types/admin/Staff';
import parse from 'html-react-parser';

interface Props {
    staff: Staff;
}

const StaffDetail = ({ staff }: Props) => {
    const handleBack = () => window.history.back();
    return (
        <FrontLayout>
            <Head title={`${staff.full_name} - Faculty Directory`} />

            {/* removed excessive pt-32 and unnecessary wrappers */}
            <nav className="container mx-auto px-6 lg:px-20 pt-10 pb-4">
                <button onClick={handleBack} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors bg-blue-100 px-3 py-2 rounded-lg " >
                    <ChevronLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                    Back to Faculty Directory
                </button>
            </nav>

            <main className="bg-slate-50 dark:bg-slate-950 py-10">
                <section className="container mx-auto px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Side */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                            <img
                                src={staff.image}
                                alt={staff.full_name}
                                className="w-full aspect-[4/5] object-cover"
                            />

                            <div className="absolute top-5 left-5 bg-white px-4 py-2 rounded-xl shadow">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                                    {staff.department}
                                </span>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200 dark:border-slate-800 space-y-5">

                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                                Professional Connectivity
                            </h3>

                            {staff.email && (
                                <a
                                    href={`mailto:${staff.email}`}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <Mail className="w-4 h-4" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase text-slate-400 font-bold">
                                            Email
                                        </p>
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                            {staff.email}
                                        </p>
                                    </div>
                                </a>
                            )}

                            {staff.phone && (
                                <a
                                    href={`tel:${staff.phone}`}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                                        <Phone className="w-4 h-4" />
                                    </div>

                                    <div>
                                        <p className="text-[10px] uppercase text-slate-400 font-bold">
                                            Phone
                                        </p>
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                                            {staff.phone}
                                        </p>
                                    </div>
                                </a>
                            )}

                            {/* Social */}
                            <div className="flex gap-3 pt-2">
                                {staff.fb_url && (
                                    <a
                                        href={staff.fb_url}
                                        target="_blank"
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                                    >
                                        <Facebook className="w-4 h-4" />
                                    </a>
                                )}

                                {staff.linkedin_url && (
                                    <a
                                        href={staff.linkedin_url}
                                        target="_blank"
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                                    >
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                )}

                                {staff.insta_url && (
                                    <a
                                        href={staff.insta_url}
                                        target="_blank"
                                        className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center"
                                    >
                                        <Instagram className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:col-span-8 space-y-10">

                        {/* Header */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-[2px] bg-blue-600" />
                                <span className="text-[10px] uppercase tracking-[0.3em] font-black text-blue-600">
                                    Faculty Profile
                                </span>
                            </div>

                            <h1 className="text-3xl lg:text-5xl font-black italic uppercase text-slate-900 dark:text-white leading-none">
                                {staff.full_name}
                            </h1>

                            <p className="text-lg uppercase italic tracking-wide text-slate-500 dark:text-slate-400 font-semibold">
                                {staff.designation}{' '}
                                <span className="text-blue-600">@</span>{' '}
                                {staff.department}
                            </p>
                        </div>

                        {/* Bio */}
                        <div className="relative">
                            <Quote className="absolute -top-4 -left-2 w-14 h-14 text-slate-200 dark:text-slate-800" />

                            <div className="relative space-y-5">
                                <h2 className="text-2xl font-black italic uppercase text-slate-900 dark:text-white">
                                    Professional Background
                                </h2>

                                <div className="border-l-4 border-blue-600 pl-6 text-slate-600 dark:text-slate-300 leading-loose italic">
                                    {parse(staff.bio)}
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="w-5 h-5 text-blue-600" />

                                    <h3 className="text-xs uppercase tracking-[0.2em] font-black">
                                        Primary Role
                                    </h3>
                                </div>

                                <p className="text-slate-500 dark:text-slate-400 font-semibold uppercase">
                                    Lead Professional in {staff.department}
                                </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <GraduationCap className="w-5 h-5 text-blue-600" />

                                    <h3 className="text-xs uppercase tracking-[0.2em] font-black">
                                        Institutional Tenure
                                    </h3>
                                </div>

                                <p className="text-slate-500 dark:text-slate-400 font-semibold uppercase">
                                    Active Faculty Member
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default StaffDetail;