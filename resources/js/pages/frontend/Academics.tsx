import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, GraduationCap, } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils';
import { AcademicLevel } from '@/types/Frontend/Academics';
import { academicsShow, admissions, contact, home } from '@/routes';
import parse from 'html-react-parser';

interface AcademicItem {
    id: number;
    title: string;
    description?: string;
    icon?: string;
    meta_value?: string;
    sort_order?: number;
}


interface AcademicProps {
    levels: AcademicLevel[];
    academicLevel: AcademicLevel;

}

type IconName = keyof typeof LucideIcons;

const ResolvedIcon = ({ name, ...props }: { name: IconName; className?: string }) => {
    const Icon = LucideIcons[name] || LucideIcons.BookOpen;
    return <Icon {...props} />;
};


const Academics = ({ levels, academicLevel }: AcademicProps) => {

    const limitText = (html: any, limit: number) => {
        if (html.length <= limit) return html;
        return html.substring(0, limit) + "...";
    };

    return (
        <FrontLayout>
            <Head title={`${academicLevel.title} Academics | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden text-slate-900 dark:text-slate-100">
                {/* ── PREMIUM HERO ── */}
                <section className="relative pt-24 pb-12 bg-blue-950 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                <GraduationCap className="w-3 h-3" />
                                <span>{academicLevel.title} Level</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                                {academicLevel.title} <span className="text-blue-500">PROGRAM</span>
                            </h1>
                            <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                                {academicLevel.description || 'Shaping the future through comprehensive education.'}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── LEVEL NAVIGATION ── */}
                <nav className="sticky top-[70px] lg:top-[80px] z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none justify-center lg:justify-start">
                            {levels.map((level) => {
                                const active = academicLevel.slug === level.slug;
                                return (
                                    <Link
                                        key={level.slug}
                                        href={academicsShow(level.slug)}
                                        className={cn(
                                            'relative shrink-0 px-8 py-5 text-[11px] font-black uppercase tracking-widest transition-colors whitespace-nowrap',
                                            active
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                        )}
                                    >
                                        {level.title}
                                        {active && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 dark:bg-blue-400 rounded-t-full" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </nav>


                {/* ACADEMIC ITEMS */}
                <div className="container mx-auto px-6 lg:px-20 py-16 space-y-20">

                    {/* CARD ITEMS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {academicLevel?.academic_items
                            ?.filter(item => item.content_type === 'Card')
                            .map((item) => (
                                <div
                                    key={item.id}
                                    className="p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700">
                                            <ResolvedIcon name={item.icon || 'BookOpen'} className="w-5 h-5" />
                                        </div>

                                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                            {limitText(item.title, 17)}
                                        </h3>
                                    </div>

                                    {item.meta_value && (
                                        <div className="mb-3 inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest border border-blue-200 dark:border-blue-500/20">
                                            {item.meta_value}
                                        </div>
                                    )}

                                    {item.description && (
                                        <p className="text-sm text-slate-500 dark:text-slate-400">
                                            {parse(limitText(item.description, 70))}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>


                    {/* DESCRIPTION ITEMS */}
                    <div className="space-y-8">
                        {academicLevel?.academic_items
                            ?.filter(item => item.content_type !== 'Card')
                            .map((item) => (
                                <div key={item.id} className="space-y-4">
                                    <h3 className="text-2xl font-black ml-4 text-slate-900 dark:text-white uppercase tracking-tight">
                                        {item?.title}
                                    </h3>

                                    {item.description && (
                                        <p className="text-sm text-slate-500 ml-10 dark:text-slate-400 leading-relaxed">
                                            {parse(item?.description)}
                                        </p>
                                    )}
                                </div>
                            ))}
                    </div>

                </div>



                <section className="py-24 bg-slate-950 dark:bg-black text-center relative overflow-hidden transition-colors duration-300 mt-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)]" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-12">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                SECURE YOUR <br /> <span className="text-blue-500 dark:text-blue-400">ACADEMIC FUTURE</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest max-w-2xl mx-auto">Take the first step towards excellence by enrolling in our 2026-27 session. Limited seats available for specialized streams.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href={admissions()} className="w-full sm:w-auto h-15 px-12 bg-blue-600 dark:bg-blue-600 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-blue-600 dark:hover:text-white transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20 dark:shadow-blue-900/40 group">
                                Apply for Admission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href={contact()} className="w-full sm:w-auto h-15 px-12 bg-white/5 dark:bg-slate-900/50 border border-white/10 dark:border-slate-800 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl">
                                Request Prospectus
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout >
    );
};

export default Academics;