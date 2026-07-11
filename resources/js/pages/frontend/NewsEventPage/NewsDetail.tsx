import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import { News } from '@/types/Frontend/Index';
import parse from 'html-react-parser';
import { newsShow } from '@/actions/App/Http/Controllers/FrontController';

interface Props {
    news: News;
    related: News[];
}

const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const backToNews = () => window.history.back();

export default function NewsDetail({ news, related }: Props) {
    // Standardize images into a unified array format
    const images: string[] = news.image 
        ? (Array.isArray(news.image) ? news.image : [news.image]) 
        : [];

    return (
        <FrontLayout>
            <Head title={`Notice: ${news.title} — ${news.category} | Jaya Bageshwori School`} />

            <main className="flex-1 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

                {/* ── HEADER BANNER ───────────────────────────────────────── */}
                <section className="relative pt-16 pb-16 bg-blue-950 overflow-hidden">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div 
                            onClick={backToNews}
                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full cursor-pointer"
                        >
                            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                            Go Back
                        </div>
                        <div className="space-y-6 max-w-4xl">
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-widest">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </span>
                                <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-3 h-3" />
                                    Posted: {formatDate(news.created_at)}
                                </span>
                            </div>
                            <h1 className="text-2xl lg:text-4xl font-black text-white leading-tight tracking-tight uppercase italic">
                                {news.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* ── CONTENT & SIDEBAR ───────────────────────────────────── */}
                <section className="py-12">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                            {/* ── MAIN CONTENT BOARD ──────────────────────────────── */}
                            <div className="lg:col-span-8 space-y-8">

                                <article className="bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-sm">
                                    
                                    {/* Multi-Image Gallery Grid */}
                                    {images.length > 0 && (
                                        <div className={`mb-8 grid gap-4 ${
                                            images.length === 1 
                                                ? 'grid-cols-1' 
                                                : images.length === 2 
                                                ? 'grid-cols-2' 
                                                : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                        }`}>
                                            {images.map((imgUrl, index) => (
                                                <div 
                                                    key={index} 
                                                    className={`relative rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 ${
                                                        images.length > 2 && index === 0 ? 'sm:col-span-2 lg:col-span-3 aspect-video' : 'aspect-square'
                                                    }`}
                                                >
                                                    <img
                                                        src={imgUrl}
                                                        alt={`${news.title} gallery asset - ${index + 1}`}
                                                        className="w-full h-full object-cover mx-auto"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Text Content */}
                                    <div className="prose prose-slate dark:prose-invert max-w-none text-base lg:text-lg text-slate-800 dark:text-slate-200 font-bold tracking-wide uppercase italic text-slate-400 dark:text-slate-500 mb-2">
                                        Description:
                                    </div>
                                    <div className="pt-4 border-t border-dashed border-slate-200 dark:border-slate-800 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {parse(news.description)}
                                    </div>
                                </article>

                            </div>

                            {/* ── SIDEBAR (RELATED NOTICES) ────────────────────── */}
                            <aside className="lg:col-span-4 space-y-6">
                                <div className="sticky top-32 space-y-4">
                                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider pb-2 border-b border-slate-200 dark:border-slate-800">
                                        Recent Announcements
                                    </h3>

                                    {related && related.length > 0 ? (
                                        <div className="space-y-3">
                                            {related.map((item) => (
                                                <Link
                                                    key={item.id}
                                                    href={newsShow(item.slug)}
                                                    className="block p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800/80 hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-200 shadow-xs group"
                                                >
                                                    <div className="flex items-center gap-2 mb-1.5">
                                                        <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-500/10 dark:bg-amber-500/5 px-2 py-0.5 rounded uppercase">
                                                            {item.category}
                                                        </span>
                                                        <span className="text-[10px] text-slate-400">
                                                            {formatDate(item.created_at)}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                                        {item.title}
                                                    </h4>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-xs text-slate-400 italic">No alternative announcements posted recently.</p>
                                    )}
                                </div>
                            </aside>

                        </div>
                    </div>
                </section>

            </main>
        </FrontLayout>
    );
}