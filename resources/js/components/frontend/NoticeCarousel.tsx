import React, { useState, useEffect, useCallback } from 'react';
import { Megaphone, Calendar, ChevronLeft, ChevronRight, Pin, ArrowRight, ShieldAlert } from 'lucide-react';

const NoticeCarousel = () => {
    const notices = [
        {
            id: 1,
            title: "School Re-opening After Winter Break",
            description: "All classes will resume from February 25th, 2026. Students are required to come in full winter uniform and strictly follow the revised school timings.",
            date: "Feb 15, 2026",
            type: "General",
            urgency: "High"
        },
        {
            id: 2,
            title: "Annual Sports Meet Registration",
            description: "Registrations for the Annual Sports Meet 2026 are now open for classes 5 to 10. Interested students must register with their house captains by Friday.",
            date: "Feb 18, 2026",
            type: "Sports",
            urgency: "Medium"
        },
        {
            id: 3,
            title: "Distribution of First Term Grade Sheets",
            description: "Grade sheets for the recently concluded First Term Examinations will be distributed this coming Saturday during the PTA meeting.",
            date: "Feb 22, 2026",
            type: "Academic",
            urgency: "High"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoplay, setIsAutoplay] = useState(true);

    const nextNotice = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % notices.length);
    }, [notices.length]);

    const prevNotice = () => {
        setActiveIndex((prev) => (prev - 1 + notices.length) % notices.length);
    };

    useEffect(() => {
        if (isAutoplay) {
            const timer = setInterval(nextNotice, 6000);
            return () => clearInterval(timer);
        }
    }, [isAutoplay, nextNotice]);

    return (
        <section className="relative py-12 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            {/* Artistic Background Overlay */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-[0.03] pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-6 mx-auto lg:px-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Side: Header & Context */}
                    <div className="lg:w-1/3 text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-[0.2em] bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800 rounded-lg">
                            <ShieldAlert className="w-4 h-4" />
                            <span>Attention Required</span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                            Important <br />
                            <span className="text-red-600 dark:text-red-500">Notice Bulletin</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            Stay updated with the latest official announcements, schedule changes, and vital information from the school administration.
                        </p>
                        <div className="flex gap-3 pt-4">
                            <button
                                onClick={prevNotice}
                                className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white transition-all shadow-sm active:scale-95"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextNotice}
                                className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-900 dark:hover:bg-slate-800 hover:text-white transition-all shadow-sm active:scale-95"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Notice Carousel */}
                    <div
                        className="lg:w-2/3 w-full"
                        onMouseEnter={() => setIsAutoplay(false)}
                        onMouseLeave={() => setIsAutoplay(true)}
                    >
                        <div className="relative h-[400px] md:h-[350px]">
                            {notices.map((notice, index) => (
                                <div
                                    key={notice.id}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === activeIndex
                                        ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto'
                                        : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                                        }`}
                                >
                                    <div className="h-full bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 flex flex-col justify-between group overflow-hidden relative">
                                        {/* Big Quote Style Background Icon */}
                                        <Megaphone className="absolute -bottom-10 -right-10 w-48 h-48 text-slate-200/20 dark:text-slate-800/20 -rotate-12 group-hover:text-red-600/5 transition-colors duration-500" />

                                        <div className="relative z-10 space-y-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                                                        <Pin className="w-5 h-5 text-red-500 dark:text-red-400 -rotate-45" />
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mb-1">Posted On</span>
                                                        <span className="text-sm font-black text-slate-900 dark:text-white leading-none">{notice.date}</span>
                                                    </div>
                                                </div>
                                                <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${notice.urgency === 'High' ? 'bg-red-600 text-white shadow-lg shadow-red-200 dark:shadow-red-900/40' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                                                    }`}>
                                                    {notice.urgency} Urgency
                                                </div>
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors duration-300">
                                                {notice.title}
                                            </h3>

                                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                                                {notice.description}
                                            </p>
                                        </div>

                                        <div className="relative z-10 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 font-bold text-sm">
                                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                                Category: {notice.type} Notice
                                            </div>
                                            <a href={`/notices/${notice.id}`} className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-black text-sm group/btn">
                                                Read Fully
                                                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination indicators */}
                        <div className="flex justify-center lg:justify-start gap-3 mt-12">
                            {notices.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative h-1.5 rounded-full transition-all duration-500 overflow-hidden ${activeIndex === idx ? 'w-16 bg-red-600 dark:bg-red-500 shadow-lg shadow-red-100 dark:shadow-red-900/40' : 'w-4 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700'
                                        }`}
                                >
                                    {activeIndex === idx && (
                                        <div className="absolute top-0 left-0 h-full bg-white/30 animate-progress-notice" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes progress-notice {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-progress-notice {
                    animation: progress-notice 6s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default NoticeCarousel;
