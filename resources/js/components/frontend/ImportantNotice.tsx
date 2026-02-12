import React, { useState, useEffect } from 'react';
import { Megaphone, X, ChevronRight, AlertCircle, Calendar } from 'lucide-react';

const ImportantNotice = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    const notices = [
        {
            id: 1,
            title: "First Term Examination Results",
            details: "Results will be published on the official web portal at 5:00 PM.",
            isNew: true,
        },
        {
            id: 2,
            title: "Admission Open for Session 2026/27",
            details: "Forms available at the administrative office and online.",
            isNew: false,
        },
        {
            id: 3,
            title: "Annual Sports Week Postponed",
            details: "New dates will be announced shortly due to weather conditions.",
            isNew: false,
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % notices.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [notices.length]);

    if (!isVisible) return null;

    return (
        <section className="bg-blue-200 dark:bg-blue-900/40 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300 relative z-30">
            <div className="container mx-auto px-4 py-3 lg:py-2">
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-12">
                    {/* Notice Label */}
                    <div className="flex shrink-0 items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-25" />
                            <div className="relative w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-200 dark:shadow-red-900/50">
                                <Megaphone className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="text-left">
                            <h3 className="text-sm font-black text-red-600 dark:text-red-400 uppercase tracking-widest">Important</h3>
                            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter leading-none">Notices & Updates</p>
                        </div>
                    </div>

                    {/* Scrolling/Static Notice Area */}
                    <div className="flex-1 w-full min-w-0 overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-blue-300/30 dark:border-slate-800">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 overflow-hidden h-10 flex items-center relative">
                                <div className="w-full h-full relative">
                                    {notices.map((notice, index) => (
                                        <div
                                            key={notice.id}
                                            className={`absolute inset-x-0 top-0 h-full flex items-center gap-3 transition-all duration-700 ease-in-out ${index === currentIndex
                                                ? 'opacity-100 translate-y-0'
                                                : 'opacity-0 -translate-y-8'
                                                }`}
                                        >
                                            <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[9px] font-black rounded-md uppercase whitespace-nowrap">
                                                <AlertCircle className="w-3 h-3" />
                                                New
                                            </div>
                                            <p className="text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm lg:text-base truncate pr-4">
                                                <span className="text-red-600 dark:text-red-500 uppercase italic tracking-tighter mr-2">{notice.title}</span>
                                                <span className="font-medium text-slate-500 dark:text-slate-400 hidden sm:inline">— {notice.details}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                                <div className="hidden sm:flex items-center gap-1">
                                    {notices.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-1 h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-red-600 dark:bg-red-500 w-3' : 'bg-slate-300 dark:bg-slate-700'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <a href="/notices" className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm">
                                    VIEW
                                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </a>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400 dark:text-slate-500 border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                                    title="Dismiss"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats/Links - Only visible on desktop if space allows */}
                    <div className="hidden xl:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-400">Syllabus 2026</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImportantNotice;
