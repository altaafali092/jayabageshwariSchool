import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar, Clock, ArrowLeft, ArrowRight,
    Tag, MapPin, Share2, User, ChevronRight
} from 'lucide-react';
import { News } from '@/types/Frontend/Index';
import { newsShow } from '@/actions/App/Http/Controllers/FrontController';

interface Props {
    news: News;
    related: News[];
}

const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const formatTime = (d: string) =>
    new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

// ─── Category colour helper ───────────────────────────────────────────────────
const categoryColor = (cat: string) => {
    const map: Record<string, string> = {
        news: 'bg-blue-600',
        event: 'bg-violet-600',
        notice: 'bg-amber-500',
    };
    return map[cat?.toLowerCase()] ?? 'bg-slate-600';
};
const handleBack = () => window.history.back();

export default function NewsDetail({ news, related }: Props) {
    const isEvent = news.category?.toLowerCase() === 'event';

    return (
        <FrontLayout>
            <Head title={`${news.title} — News & Events | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── HERO ────────────────────────────────────────────────── */}
                <section className="relative pt-24 pb-24 bg-slate-900 overflow-hidden">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="flex gap-2 text-[10px] font-black text-slate-500 dark:text-slate-400 tracking-widest mb-10">
                            <ArrowLeft className="w-3 h-3" />
                            <button onClick={handleBack} className="hover:text-blue-400 transition-colors">
                                News & Events
                            </button>

                        </div>

                        <div className="max-w-4xl space-y-8">
                            {/* Meta badges */}
                            <div className="flex flex-wrap items-center gap-3">
                                <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[10px] font-black uppercase tracking-widest ${categoryColor(news.category)}`}>
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                                    {formatDate(news.created_at)}
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                                    {formatTime(news.created_at)}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl lg:text-4xl font-black text-white leading-[1.05] uppercase italic">
                                {news.title}
                            </h1>


                        </div>
                    </div>
                </section>

                {/* ── CONTENT ─────────────────────────────────────────────── */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* ── MAIN ─────────────────────────────────────── */}
                            <article className="lg:col-span-8 space-y-10">

                                {/* Featured image */}
                                {news.image && (
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border border-slate-100 dark:border-slate-800">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Category watermark */}
                                        <div className="absolute top-6 left-6">
                                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg ${categoryColor(news.category)}`}>
                                                <Tag className="w-3 h-3" /> {news.category}
                                            </span>
                                        </div>
                                    </div>
                                )}

                                {/* Body */}
                                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 lg:p-14 shadow-sm space-y-8">
                                    {/* Drop-cap first paragraph */}
                                    <p className="text-lg lg:text-xl font-black text-slate-700 dark:text-slate-30">
                                        {news.description}
                                    </p>


                                </div>

                            </article>

                            {/* ── SIDEBAR ──────────────────────────────────── */}
                            <aside className="lg:col-span-4 space-y-8">

                                {/* Event details box — only for events */}
                                {isEvent && (
                                    <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-600/30 space-y-6">
                                        <h3 className="text-xl font-black uppercase italic tracking-tight">Event Details</h3>
                                        <div className="space-y-5">
                                            {news.event_date && (
                                                <div className="flex items-start gap-4">
                                                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <Calendar className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Date</p>
                                                        <p className="font-black uppercase italic">{news.event_date}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {news.event_time && (
                                                <div className="flex items-start gap-4">
                                                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <Clock className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Time</p>
                                                        <p className="font-black uppercase italic">{news.event_time}</p>
                                                    </div>
                                                </div>
                                            )}
                                            {news.event_location && (
                                                <div className="flex items-start gap-4">
                                                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                                                        <MapPin className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Location</p>
                                                        <p className="font-black uppercase italic">{news.event_location}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}


                            </aside>
                        </div>
                    </div>
                </section>

                {/* ── RELATED ─────────────────────────────────────────────── */}
                {related.length > 0 && (
                    <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
                        <div className="container mx-auto px-6 lg:px-20">

                            {/* Section header */}
                            <div className="flex items-end justify-between mb-14">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                        More from {news.category}
                                    </span>
                                    <h2 className="text-xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                        RELATED <span className="text-blue-600 dark:text-blue-500">ARTICLES</span>
                                    </h2>
                                </div>

                            </div>


                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                                {related.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={newsShow(item.slug)}
                                        className="group flex flex-col bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                    >
                                        {/* Thumbnail */}
                                        <div className="relative aspect-[3/2] overflow-hidden">
                                            {item.image
                                                ? <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                : <div className="w-full h-full bg-slate-100 dark:bg-slate-800" />
                                            }
                                            <div className="absolute top-4 left-4">
                                                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-white text-[8px] font-black uppercase tracking-widest shadow ${categoryColor(item.category)}`}>
                                                    {item.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1 mb-3">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(item.created_at)}
                                            </p>
                                            <h4 className="text-sm font-black uppercase italic mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                                {item.title}
                                            </h4>
                                            <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    Read More
                                                </span>
                                                <div className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
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
