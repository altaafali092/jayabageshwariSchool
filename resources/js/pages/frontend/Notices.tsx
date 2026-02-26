import React, { useState, useMemo } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Download,
    Calendar,
    Bell,
    Search,
    Tag,
    EyeClosed,
    Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { News } from '@/types/Frontend/Index';

interface NoticeProps {
    notices: News[];
}

const Notices = ({ notices = [] }: NoticeProps) => {
    const [searchQuery, setSearchQuery] = useState('');

    /* ================= FILTER ================= */
    const filteredNotices = useMemo(() => {
        const q = searchQuery.toLowerCase();

        return notices.filter(notice =>
            notice.title.toLowerCase().includes(q) ||
            notice.category.toLowerCase().includes(q)
        );
    }, [notices, searchQuery]);

    /* ================= DATE FORMAT ================= */
    const formatNoticeDate = (dateString?: string) => {
        if (!dateString) return { month: '---', day: '--' };

        const date = new Date(dateString);

        return {
            month: date.toLocaleString('en-US', { month: 'short' }),
            day: date.getDate(),
        };
    };

    return (
        <FrontLayout>
            <Head title="Notices - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ================= HEADER ================= */}
                {/* <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                <Bell className="w-3 h-3" />
                                Stay Informed
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black text-white uppercase italic leading-none">
                                Official <span className="text-blue-500">Notices</span>
                            </h1>
                            <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-[0.2em]">
                                Official announcements & administrative updates
                            </p>
                        </div>
                    </div>
                </section> */}
                <section className="relative pt-24 pb-16 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                            <Bell className="w-3 h-3" />
                            <span>Stay Informed</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">
                            NOTICES & <span className="text-blue-500">ANNOUNCEMENTS</span>
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Stay informed about the latest happenings, achievements, and upcoming activities at JBS.
                        </p>
                    </div>
                </section>

                {/* ================= SEARCH ================= */}
                <section className="sticky top-[80px] z-40 border-b border-slate-100 dark:border-slate-800 py-6 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur">
                    <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between gap-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                            Showing {filteredNotices.length} notices
                        </p>

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="FILTER BY TITLE OR CATEGORY"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-[10px] font-black uppercase tracking-[0.2em] outline-none focus:border-blue-600"
                            />
                        </div>
                    </div>
                </section>

                {/* ================= LIST ================= */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20 space-y-6">

                        {filteredNotices.map((notice) => {
                            const { month, day } = formatNoticeDate(notice.created_at);

                            return (
                                <div
                                    key={notice.id}
                                    className={cn(
                                        "group flex flex-col md:flex-row gap-6 lg:gap-12 p-8 lg:p-12 rounded-[2.5rem] border transition-all",
                                        notice.status
                                            ? "bg-blue-50/30 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/50"
                                            : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50/50"
                                    )}
                                >
                                    {/* DATE */}
                                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white dark:bg-slate-950 border flex flex-col items-center justify-center shrink-0">
                                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                                            {month}
                                        </span>
                                        <span className="text-xl lg:text-2xl font-black">
                                            {day}
                                        </span>
                                    </div>

                                    {/* CONTENT */}
                                    <div className="flex-1 space-y-3">
                                        <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 text-[9px] font-black uppercase tracking-widest">
                                            {notice.category}
                                        </span>

                                        <h3 className="text-xl lg:text-2xl font-black uppercase italic">
                                            {notice.title}
                                        </h3>

                                        <p className="text-sm font-bold text-slate-400 max-w-2xl">
                                            {notice.description}
                                        </p>
                                    </div>

                                    {/* ACTION */}
                                    <div className=' flex gap-1 justify-between items-center'>
                                        <button className="h-12 px-8  bg-slate-900 dark:bg-blue-600 text-white rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
                                            <Download className="w-4 h-4" />

                                        </button>
                                        <Link
                                            href={`/notices/${notice.slug}`}
                                            className="h-12 px-8 bg-blue-600 dark:bg-slate-600 text-white rounded-2xl flex items-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all"
                                        >
                                            <Eye className="w-4 h-4" />
                                            <span>VIEW</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}

                        {filteredNotices.length === 0 && (
                            <div className="py-20 text-center">
                                <Search className="w-10 h-10 mx-auto text-slate-300" />
                                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                                    No notices found
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Notices;