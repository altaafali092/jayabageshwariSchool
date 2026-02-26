import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    Bell,
    ArrowLeft,
    Download,
    Tag,
    Clock,
    Share2,
    CheckCircle2
} from 'lucide-react';
import { News } from '@/types/Frontend/Index';

interface NoticeDetailProps {
    notice: News;
}

const NoticeDetail = ({ notice }: NoticeDetailProps) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <FrontLayout>
            <Head title={`${notice.title} - Notices`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* Header Section */}
                <section className="relative pt-32 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <Link
                            href="/notices"
                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to all notices
                        </Link>

                        <div className="space-y-6 max-w-4xl">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-widest">
                                    <Tag className="w-3 h-3" />
                                    {notice.category} Notice
                                </span>
                                <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-3 h-3" />
                                    Posted: {formatDate(notice.created_at)}
                                </span>
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase italic">
                                {notice.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-12">
                                <article className="prose prose-slate dark:prose-invert max-w-none">
                                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
                                        <p className="text-xl font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-blue-600 pl-6 mb-12">
                                            {notice.description}
                                        </p>

                                        {/* Notice Body could go here if it had more fields, 
                                            but since we're using description as main content */}
                                        <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
                                            {/* Dummy content for demonstration if description is short */}
                                            {!notice.description && (
                                                <p>No detailed information available for this notice.</p>
                                            )}
                                        </div>
                                    </div>
                                </article>

                                {/* Action Bar */}
                                <div className="flex flex-wrap items-center gap-6 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-800/50">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-1">Official Document</h3>
                                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Download the verified PDF version of this announcement.</p>
                                    </div>
                                    <button className="h-14 bg-blue-600 text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest hover:bg-slate-950 transition-all shadow-xl shadow-blue-600/20 italic">
                                        <Download className="w-5 h-5" />
                                        <span>Download PDF</span>
                                    </button>
                                </div>
                            </div>

                            {/* Sidebar Infos */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm sticky top-32">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-8">Notice Verification</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 shrink-0">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p>
                                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase italic">Verified Official</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                                                <Clock className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expiry</p>
                                                <p className="text-sm font-black text-slate-900 dark:text-white uppercase italic">Active till further update</p>
                                            </div>
                                        </div>

                                        <hr className="border-slate-100 dark:border-slate-800" />

                                        <div className="space-y-4 pt-4">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share this notice</p>
                                            <div className="flex gap-2">
                                                {[1, 2, 3].map((i) => (
                                                    <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                                        <Share2 className="w-4 h-4" />
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default NoticeDetail;
