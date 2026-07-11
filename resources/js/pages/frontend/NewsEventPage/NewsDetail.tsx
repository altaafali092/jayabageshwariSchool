import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar, Clock, ArrowLeft, ArrowRight,
    Tag, MapPin, User, Share2, Zap
} from 'lucide-react';
import { News } from '@/types/Frontend/Index';
import { newsShow } from '@/actions/App/Http/Controllers/FrontController';
import parse from 'html-react-parser';

interface Props {
    news: News;
    related: News[];
}

const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const formatTime = (d: string) =>
    new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

export default function NewsDetail({ news, related }: Props) {
    const isEvent = news.category?.toLowerCase() === 'event';

    return (
        <FrontLayout>
            <Head title={`${news.title} — ${news.category} | Jaya Bageshwori School`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── HEADER SECTION ───────────────────────────────────────── */}
                <section className="relative pt-32 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <Link
                            href="/news-events"
                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to All News & Events
                        </Link>

                        <div className="space-y-6 max-w-4xl">
                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-[10px] font-black uppercase tracking-widest">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </span>
                                <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(news.created_at)}
                                </span>
                                {isEvent && news.event_date && (
                                    <span className="inline-flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                        <Clock className="w-3 h-3" />
                                        {news.event_date}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight uppercase italic">
                                {news.title}
                            </h1>
                        </div>
                    </div>
                </section>

                {/* ── CONTENT SECTION ──────────────────────────────────────── */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* ── MAIN CONTENT ─────────────────────────────── */}
                            <div className="lg:col-span-8 space-y-12">

                                {/* Featured Image */}
                                {news.image && (
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200 dark:border-slate-800">
                                        <img
                                            src={Array.isArray(news.image) ? news.image[0] : news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Article Body */}
                                <article className="prose prose-slate dark:prose-invert max-w-none">
                                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
                                        <div className="text-lg lg:text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                                            {parse(news.description)}
                                        </div>

                                        {/* Further Information */}
                                        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                                            <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic mb-4">For More Information</h4>
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                                For additional details regarding this {news.category.toLowerCase()}, please visit the school office or contact our administration team. We're here to help!
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* Additional Gallery */}
                                {Array.isArray(news.image) && news.image.length > 1 && (
                                    <div className="space-y-6 pt-8">
                                        <div>
                                            <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-2">
                                                Media Gallery
                                            </p>
                                            <h3 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                                More <span className="text-blue-600">MOMENTS</span>
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {news.image.slice(1).map((image: string, idx: number) => (
                                                <div key={idx} className="group relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500">
                                                    <img
                                                        src={image}
                                                        alt={`Gallery ${idx + 2}`}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* ── SIDEBAR ──────────────────────────────────── */}
                            <aside className="lg:col-span-4 space-y-8">

                                {/* Event Details Card */}
                                {isEvent && (
                                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-600/30 space-y-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <Zap className="w-5 h-5" />
                                            <h3 className="text-sm font-black uppercase tracking-widest opacity-90">Event Information</h3>
                                        </div>
                                        <h4 className="text-2xl font-black uppercase italic tracking-tight">Event Details</h4>

                                        <div className="space-y-5">
                                            {news.event_date && (
                                                <div className="flex gap-4 pb-4 border-b border-white/20">
                                                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <Calendar className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Date</p>
                                                        <p className="text-lg font-black uppercase italic">{news.event_date}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {news.event_time && (
                                                <div className="flex gap-4 pb-4 border-b border-white/20">
                                                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <Clock className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Time</p>
                                                        <p className="text-lg font-black uppercase italic">{news.event_time}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {news.event_location && (
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <MapPin className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-70 mb-1">Location</p>
                                                        <p className="text-lg font-black uppercase italic">{news.event_location}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Publisher Info Card */}
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic">Published By</h4>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shrink-0">
                                            <User className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Department</p>
                                            <p className="text-sm font-black text-slate-900 dark:text-white">Administration Office</p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                        <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Posted On</p>
                                        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{formatDate(news.created_at)}</p>
                                    </div>
                                </div>

                                {/* Share Card */}
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 sticky top-32">
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic">Share This</h4>
                                    
                                    <div className="flex gap-3">
                                        {[1, 2, 3, 4].map((i) => (
                                            <button key={i} className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 shadow-sm">
                                                <Share2 className="w-5 h-5" />
                                            </button>
                                        ))}
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-300 group"
                                    >
                                        <span>Inquiry</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>

                            </aside>

                        </div>
                    </div>
                </section>

                {/* ── RELATED SECTION ──────────────────────────────────────── */}
                {related.length > 0 && (
                    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
                        <div className="container mx-auto px-6 lg:px-20">

                            <div className="mb-12">
                                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] block mb-2">
                                    Continue Reading
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                    Related <span className="text-blue-600">ARTICLES</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {related.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={newsShow(item.slug)}
                                        className="group flex flex-col bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-slate-800">
                                            {item.image ? (
                                                <img
                                                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <Tag className="w-8 h-8 text-slate-400" />
                                                </div>
                                            )}
                                            <div className="absolute top-3 left-3">
                                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest shadow-lg">
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-1">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1 mb-3">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(item.created_at)}
                                            </p>
                                            <h4 className="text-sm font-black uppercase italic leading-snug text-slate-900 dark:text-white line-clamp-2 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {item.title}
                                            </h4>
                                            <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    Read More
                                                </span>
                                                <div className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                    <ArrowRight className="w-3 h-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </FrontLayout>
    );
}
