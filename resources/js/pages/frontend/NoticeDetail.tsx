import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    ArrowLeft,
    Download,
    Tag,
    FileText,
    ChevronRight
} from 'lucide-react';
import { News } from '@/types/Frontend/Index';
import parse from 'html-react-parser';

interface NoticeDetailProps {
    notice: News;
    related: News[];
}

const NoticeDetail = ({ notice, related = [] }: NoticeDetailProps) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    console.log(related);
    const backToNotice = () => window.history.back();

    return (
        <FrontLayout>
            <Head title={`${notice.title} — Notices`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── HEADER HERO ─────────────────────────────────────────── */}
                <section className="relative pt-16 pb-16 bg-blue-950 overflow-hidden">

                    <div className="container relative z-10 mx-auto px-6 lg:px-20">

                        <div onClick={backToNotice}

                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full"

                        >

                            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />

                            Back to all notices

                        </div>

                        <div className="space-y-6 max-w-4xl">

                            <div className="flex flex-wrap items-center gap-4">

                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-widest">

                                    <Tag className="w-3 h-3" />

                                    {notice.category}

                                </span>

                                <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">

                                    <Calendar className="w-3 h-3" />

                                    Posted: {formatDate(notice.created_at)}

                                </span>

                            </div>
                            <h1 className="text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight uppercase italic">

                                {notice.title}

                            </h1>

                        </div>

                    </div>

                </section>

                {/* ── TWO-COLUMN CONTENT GRID ──────────────────────────────── */}
                <section className="py-16">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* LEFT COLUMN: MAIN ARTICLE */}
                            <div className="lg:col-span-8">
                                <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 lg:p-10 border border-slate-100 dark:border-slate-900 shadow-sm space-y-8">

                                    {/* Embedded Attachments (PDF / Images) */}
                                    {notice.image && notice.image.length > 0 && (
                                        <div className="space-y-6">
                                            {notice.image.map((file: string, index: number) => {
                                                const isPdf = file.toLowerCase().endsWith(".pdf");

                                                return (
                                                    <div key={index} className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
                                                        {isPdf ? (
                                                            <div className="bg-slate-50 dark:bg-slate-950 p-4 space-y-4">
                                                                <iframe
                                                                    src={file}
                                                                    title={`Attachment-${index + 1}`}
                                                                    className="w-full h-[550px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white"
                                                                />
                                                                <a
                                                                    href={file}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors w-full sm:w-auto justify-center"
                                                                >
                                                                    <Download className="w-4 h-4" />
                                                                    Download Document PDF
                                                                </a>
                                                            </div>
                                                        ) : (
                                                            <img
                                                                src={file}
                                                                alt={`${notice.title} attachment`}
                                                                className="w-full h-auto object-cover max-h-[700px]"
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Notice Body Markup Parse */}
                                    {notice.description ? (
                                        <div className="prose prose-slate dark:prose-invert max-w-none prose-p:text-slate-600 dark:prose-p:text-slate-400 prose-p:leading-relaxed prose-headings:uppercase prose-headings:italic font-medium text-[15px]">
                                            {parse(notice.description)}
                                        </div>
                                    ) : (
                                        <p className="text-slate-400 dark:text-slate-500 italic text-sm text-center py-6">
                                            No explicit description text provided for this notice entry.
                                        </p>
                                    )}
                                </article>
                            </div>

                            {/* RIGHT COLUMN: SIDEBAR */}
                            <aside className="lg:col-span-4 space-y-8">
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-900 sticky top-6">
                                    <div className="flex items-center gap-2 pb-4 mb-6 border-b border-slate-200 dark:border-slate-800">
                                        <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider">
                                            Recent Notices
                                        </h3>
                                    </div>

                                    {related.length > 0 ? (
                                        <div className="space-y-4">
                                            {related.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={`/notices/${item.slug || item.id}`} // Adjust route pattern helper if needed
                                                    className="group flex flex-col gap-2 p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800/60 shadow-sm hover:border-blue-500/50 transition-all block"
                                                >
                                                    <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight flex items-center gap-1">
                                                        {formatDate(item.created_at)}
                                                    </span>
                                                    <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                    <div className="flex items-center justify-end text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity gap-0.5">
                                                        View Notice <ChevronRight className="w-3 h-3" />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-xs text-slate-400 dark:text-slate-500 italic text-center py-4">
                                            No other active notices found.
                                        </p>
                                    )}
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

            </main>
        </FrontLayout>
    );
};

export default NoticeDetail;