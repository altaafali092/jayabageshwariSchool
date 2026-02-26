import React, { useState, useEffect } from 'react';
import { Megaphone, X, ChevronRight, AlertCircle } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { News } from '@/types/Frontend/Index';

interface NewsProps {
    notices: News[];
}

const ImportantNotice = ({ notices }: NewsProps) => {
    const [isVisible, setIsVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!notices.length) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % notices.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [notices.length]);

    if (!isVisible || notices.length === 0) return null;

    return (
        <section className="bg-blue-200 dark:bg-blue-900/40 border-b border-slate-100 dark:border-slate-800 relative z-30">
            <div className="container mx-auto px-4 py-3 lg:py-2">
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-12">

                    {/* Left Label */}
                    <div className="flex shrink-0 items-center gap-3">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-25" />
                            <div className="relative w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Megaphone className="w-6 h-6" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-black text-red-600 uppercase tracking-widest">
                                Important
                            </h3>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter leading-none">
                                Notices & Updates
                            </p>
                        </div>
                    </div>

                    {/* Notice Slider */}
                    <div className="flex-1 w-full overflow-hidden bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-blue-300/30 dark:border-slate-800">

                        <div className="flex items-center justify-between gap-4">

                            {/* Sliding Wrapper */}
                            <div className="flex-1 overflow-hidden h-10 relative">
                                <div
                                    className="transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: `translateY(-${currentIndex * 40}px)`
                                    }}
                                >
                                    {notices.map((notice) => (
                                        <div
                                            key={notice.id}
                                            className="h-10 flex items-center"
                                        >
                                            <Link
                                                href={`/notices/${notice.slug}`}
                                                className="flex items-center gap-3 hover:bg-white/10 dark:hover:bg-slate-800/10 rounded-lg w-full"
                                            >
                                                <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[9px] font-black rounded-md uppercase whitespace-nowrap">
                                                    <AlertCircle className="w-3 h-3" />
                                                    New
                                                </div>

                                                <p className="text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm lg:text-base truncate pr-4">
                                                    <span className="text-red-600 uppercase italic tracking-tighter mr-2">
                                                        {notice.title}
                                                    </span>
                                                    <span className="font-medium text-slate-500 hidden sm:inline">
                                                        — {notice.description}
                                                    </span>
                                                </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Controls */}
                            <div className="flex items-center gap-3 shrink-0">

                                {/* Indicator Dots */}
                                <div className="hidden sm:flex items-center gap-1">
                                    {notices.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex
                                                ? 'bg-red-600 w-3'
                                                : 'bg-slate-300 w-1'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <Link
                                    href="/notices"
                                    className="flex items-center gap-1.5 text-[10px] font-black text-blue-600 hover:text-blue-700 transition-colors group px-2 py-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm"
                                >
                                    VIEW
                                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                                </Link>

                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1.5 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400 border border-transparent hover:border-slate-100 dark:hover:border-slate-700"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ImportantNotice;