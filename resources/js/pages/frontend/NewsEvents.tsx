import React, { useState } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    Send,
    ArrowRight,
    Search,
    Filter,
    Tag,
    ChevronRight,
    Share2,
    Bookmark
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NewsEvents = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'News', 'Events', 'Academic', 'Sports', 'Achievements'];

    const newsItems = [
        {
            id: 1,
            title: "Annual Sports Meet 2026: A Celebration of Athletics",
            category: "Events",
            date: "March 15, 2026",
            time: "09:00 AM",
            image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop",
            excerpt: "Join us for a day of competitive sports and teamwork as our students showcase their athletic prowess...",
            isFeatured: true
        },
        {
            id: 2,
            title: "JBS Students Excel in SEE Board Examinations",
            category: "News",
            date: "February 28, 2026",
            time: "10:30 AM",
            image: "https://images.unsplash.com/photo-1523050853064-ebad6505128e?q=80&w=800&auto=format&fit=crop",
            excerpt: "We are proud to announce that our students have achieved a 100% pass rate in the recent board exams...",
        },
        {
            id: 3,
            title: "New STEM Laboratory Inaugurated by Education Minister",
            category: "Academic",
            date: "February 20, 2026",
            time: "11:00 AM",
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
            excerpt: "Our commitment to science and technology takes a giant leap forward with the opening of our new lab...",
        },
        {
            id: 4,
            title: "Parent-Teacher Conference: Spring Semester",
            category: "Academic",
            date: "March 05, 2026",
            time: "08:00 AM",
            image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop",
            excerpt: "An important discussion regarding student progress and upcoming academic goals for the semester...",
        },
        {
            id: 5,
            title: "Interschool Debate Competition Winner",
            category: "Achievements",
            date: "February 15, 2026",
            time: "02:00 PM",
            image: "https://images.unsplash.com/photo-1475721027187-402ad2989a3b?q=80&w=800&auto=format&fit=crop",
            excerpt: "Our debate team secured the first position among 20 participating schools in the valley...",
        },
        {
            id: 6,
            title: "Upcoming Holiday Notice: Holi Festival",
            category: "News",
            date: "March 10, 2026",
            time: "All Day",
            image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
            excerpt: "School will remain closed for the Holi festival. We wish all our students a colorful and safe celebration...",
        }
    ];

    const filteredItems = activeCategory === 'All'
        ? newsItems
        : newsItems.filter(item => item.category === activeCategory);

    return (
        <FrontLayout>
            <Head title="News & Events - Jaya Bageshwori" />

            <main className="flex-1 bg-white">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-16 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                            <Tag className="w-3 h-3" />
                            <span>Academic Year 2025-26</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">
                            NEWS & <span className="text-blue-500">EVENTS</span>
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Stay informed about the latest happenings, achievements, and upcoming activities at JBS.
                        </p>
                    </div>
                </section>

                {/* ================= FILTER & SEARCH BAR ================= */}
                <section className="sticky top-[80px] lg:top-[80px] z-40 border-b border-slate-100 py-6 px-2 lg:px-0 shadow-lg shadow-blue-900/5 backdrop-blur-md bg-slate-50/90">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                            {/* Categories */}
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto -mx-6 px-6 lg:mx-0 lg:px-0 no-scrollbar">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={cn(
                                            "whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all",
                                            activeCategory === cat
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                                : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Search */}
                            <div className="relative w-full lg:w-72">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="SEARCH ARTICLES..."
                                    className="w-full h-12 pl-12 pr-4 bg-slate-50 border border-slate-100 rounded-full text-xs font-bold text-slate-900 outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all uppercase tracking-widest placeholder:text-slate-300"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= ARTICLES GRID ================= */}
                <section className="py-24 bg-slate-50/50">
                    <div className="container mx-auto px-6 lg:px-20">
                        {/* Featured Article */}


                        {/* Smaller Compact Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                            {filteredItems.filter(item => !item.isFeatured || activeCategory !== 'All').map((item) => (
                                <div key={item.id} className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-xl shadow-slate-950/2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-700">
                                    <div className="relative aspect-3/2 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md shadow-sm text-slate-900 text-[8px] font-black uppercase tracking-widest italic border border-white/20">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex flex-wrap items-center gap-3 mb-4 text-slate-400">
                                            <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest">
                                                <Calendar className="w-3 h-3" />
                                                {item.date}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-slate-200" />
                                            <span className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest">
                                                <Clock className="w-3 h-3" />
                                                {item.time}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-black text-slate-900 uppercase italic tracking-tight leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                                            {item.title}
                                        </h3>

                                        <p className="text-[11px] font-bold text-slate-500 line-clamp-2 mb-6 opacity-70 leading-relaxed uppercase tracking-tight">
                                            {item.excerpt}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-50">
                                            <button className="flex items-center justify-between w-full group/btn">
                                                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic group-hover/btn:text-blue-600 transition-colors">View Details</span>
                                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination or Load More */}
                        <div className="mt-20 flex justify-center">
                            <button className="px-12 h-16 bg-slate-900 text-white rounded-4xl flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-950/20 italic group">
                                Load Older Articles
                                <ArrowRight className="w-4 h-4 rotate-90 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= NEWSLETTER ================= */}
                <section className="py-24 bg-blue-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                    NEVER MISS AN <br /><span className="text-blue-500">UPDATE</span>
                                </h2>
                                <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                                    Subscribe to our weekly newsletter and get the latest news delivered to your inbox.
                                </p>
                            </div>

                            <form className="relative max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 p-2 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL ADDRESS"
                                    className="flex-1 h-14 px-8 bg-transparent text-white font-bold outline-none placeholder:text-white/20 uppercase tracking-widest text-sm"
                                />
                                <button className="h-14 px-10 bg-blue-600 text-white font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-white hover:text-blue-950 transition-all uppercase tracking-widest text-xs italic">
                                    Subscribe
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};


export default NewsEvents;
