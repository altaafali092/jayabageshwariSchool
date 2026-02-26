import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    ArrowLeft,
    Tag,
    Clock,
    Share2,
    MapPin,
    User,
    ArrowRight
} from 'lucide-react';
import { News } from '@/types/Frontend/Index';

interface NewsDetailProps {
    news: News;
}

const NewsDetail = ({ news }: NewsDetailProps) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <FrontLayout>
            <Head title={`${news.title} - News & Events`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* Hero / Header Section */}
                <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src={news.image}
                            alt=""
                            className="w-full h-full object-cover opacity-30 blur-sm scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40" />
                    </div>

                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <Link
                            href="/news-events"
                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to news & events
                        </Link>

                        <div className="max-w-4xl space-y-8">
                            <div className="flex flex-wrap items-center gap-6">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                                    <Tag className="w-3 h-3" />
                                    {news.category}
                                </span>
                                <div className="flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    {formatDate(news.created_at)}
                                </div>
                                {news.category === 'Event' && (
                                    <div className="flex items-center gap-2 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                                        <Clock className="w-4 h-4 text-blue-400" />
                                        {news.event_time || 'TBA'}
                                    </div>
                                )}
                            </div>

                            <h1 className="text-4xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
                                {news.title}
                            </h1>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Published By</p>
                                    <p className="text-sm font-black text-white uppercase italic">Administration Office</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Main Content */}
                            <div className="lg:col-span-8 space-y-16">
                                {/* Featured Image */}
                                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-100 dark:border-slate-800">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Article Body */}
                                <article className="prose prose-slate lg:prose-xl dark:prose-invert max-w-none">
                                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] p-8 lg:p-16 shadow-sm">
                                        <p className="text-2xl font-bold text-slate-900 dark:text-white leading-relaxed mb-12 first-letter:text-6xl first-letter:font-black first-letter:text-blue-600 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                            {news.description}
                                        </p>

                                        {/* Dynamic Content could go here if available in the model */}
                                        <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-800">
                                            <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic mb-6">Further Information</h4>
                                            <p className="text-slate-600 dark:text-slate-400">
                                                For more details regarding this {news.category.toLowerCase()}, please contact the school administration office during working hours or send an email to our official inquiry address.
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-4 space-y-8">
                                {/* Quick Info Box */}
                                {news.category === 'Event' && (
                                    <div className="bg-blue-600 rounded-[2.5rem] p-10 text-white shadow-xl shadow-blue-600/30">
                                        <h3 className="text-2xl font-black uppercase italic tracking-tight mb-8">Event Details</h3>
                                        <div className="space-y-6">
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                                    <Calendar className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Date</p>
                                                    <p className="text-lg font-black uppercase italic">{news.event_date || 'TBA'}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                                    <Clock className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Time</p>
                                                    <p className="text-lg font-black uppercase italic">{news.event_time || 'TBA'}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                                    <MapPin className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Location</p>
                                                    <p className="text-lg font-black uppercase italic">{news.event_location || 'School Campus'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Newsletter / Share Box */}
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-100 dark:border-slate-800 transition-all sticky top-32">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-6">Stay Connected</h3>
                                    <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                                        Sharing is caring. Help others stay informed by sharing this update with your network.
                                    </p>

                                    <div className="flex gap-3 mb-10">
                                        {[1, 2, 3, 4].map((i) => (
                                            <button key={i} className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                                                <Share2 className="w-5 h-5" />
                                            </button>
                                        ))}
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl flex items-center justify-center gap-3 text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all group"
                                    >
                                        <span>Inquiry for this {news.category}</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
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

export default NewsDetail;
