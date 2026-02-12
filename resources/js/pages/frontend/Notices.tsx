import React, { useState } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    FileText,
    Download,
    Calendar,
    AlertCircle,
    Bell,
    ChevronRight,
    Search,
    Link as LinkIcon,
    ArrowUpRight,
    Pin
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Notices = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const notices = [
        {
            id: 1,
            title: "Urgent: Revised Final Examination Schedule",
            category: "Examination",
            date: "Feb 12, 2026",
            priority: "High",
            isPinned: true,
            description: "The final examination schedule for the academic year 2025-26 has been revised. Please download the latest version below.",
            fileSize: "1.2 MB"
        },
        {
            id: 2,
            title: "Fee Payment Deadline Extension - Q4",
            category: "Finance",
            date: "Feb 10, 2026",
            priority: "Medium",
            isPinned: true,
            description: "The deadline for the 4th installment of school fees has been extended until the end of this month.",
            fileSize: "450 KB"
        },
        {
            id: 3,
            title: "Annual Day 2026: Participant Rehearsal Schedule",
            category: "Activities",
            date: "Feb 08, 2026",
            priority: "Normal",
            description: "Detailed rehearsal schedule for students participating in the Annual Day cultural programs.",
            fileSize: "890 KB"
        },
        {
            id: 4,
            title: "Admission Open for Academic Year 2026-27",
            category: "Admissions",
            date: "Feb 05, 2026",
            priority: "High",
            description: "Formal notification regarding the commencement of the admission process for the new academic session.",
            fileSize: "2.5 MB"
        },
        {
            id: 5,
            title: "Inter-House Science Exhibition Guidelines",
            category: "Academic",
            date: "Feb 01, 2026",
            priority: "Normal",
            description: "Rules, regulations, and participation guidelines for the upcoming science fair.",
            fileSize: "1.1 MB"
        },
        {
            id: 6,
            title: "Winter Uniform Update - Final Notice",
            category: "General",
            date: "Jan 28, 2026",
            priority: "Normal",
            description: "Reminder regarding the strict adherence to the prescribed winter uniform for all students.",
            fileSize: "600 KB"
        }
    ];

    const filteredNotices = notices.filter(notice =>
        notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        notice.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <FrontLayout>
            <Head title="Official Notices - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HEADER SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                    <Bell className="w-3 h-3" />
                                    <span>Stay Informed</span>
                                </div>
                                <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                                    OFFICIAL <br /><span className="text-blue-500">NOTICES</span>
                                </h1>
                                <p className="text-slate-400 font-bold max-w-xl text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                                    Access all official announcements, board circulars, and administrative updates in one place.
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-md hidden lg:block">
                                <div className="space-y-6">
                                    <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Recent Archives</h3>
                                    <div className="space-y-4">
                                        {['Academic Year 2024-25', 'Academic Year 2023-24', 'Annual Reports', 'Strategic Plan 2030'].map((item) => (
                                            <div key={item} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer group">
                                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item}</span>
                                                <ArrowUpRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= SEARCH & SORT ================= */}
                <section className="sticky top-[80px] lg:top-[110px] z-40 border-b border-slate-100 dark:border-slate-800 py-6 px-6 lg:px-0 shadow-lg shadow-blue-900/5 dark:shadow-black/20 backdrop-blur-md bg-slate-50/90 dark:bg-slate-950/90 transition-colors duration-300">
                    <div className="container mx-auto lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="flex items-center gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-blue-600 shadow-lg shadow-blue-600/40 animate-pulse" />
                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest italic">Active Updates</span>
                            </div>
                            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hidden md:block">
                                Showing {filteredNotices.length} Official Bulletins
                            </p>
                        </div>

                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="FILTER BY TITLE OR CATEGORY..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 pl-12 pr-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] font-black text-slate-900 dark:text-white outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all uppercase tracking-[0.2em] placeholder:text-slate-300 dark:placeholder:text-slate-600"
                            />
                        </div>
                    </div>
                </section>

                {/* ================= NOTICES LIST ================= */}
                <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="space-y-6">
                            {filteredNotices.map((notice, i) => (
                                <div
                                    key={notice.id}
                                    className={cn(
                                        "group relative flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-12 p-8 lg:p-12 rounded-[2.5rem] border transition-all duration-500",
                                        notice.isPinned
                                            ? "bg-blue-50/30 dark:bg-blue-900/10 border-blue-100 dark:border-blue-800/50 shadow-xl shadow-blue-950/5 dark:shadow-black/20"
                                            : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 hover:shadow-xl dark:hover:shadow-black/20 shadow-sm"
                                    )}
                                >
                                    {notice.isPinned && (
                                        <div className="absolute -top-3 left-10 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-600/20">
                                            <Pin className="w-3 h-3 rotate-45" />
                                            <span>Pinned Notice</span>
                                        </div>
                                    )}

                                    {/* Date Logic */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center shrink-0">
                                            <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">{notice.date.split(' ')[0]}</span>
                                            <span className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white leading-none">{notice.date.split(' ')[1].replace(',', '')}</span>
                                        </div>
                                        <div className="md:hidden">
                                            <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest">
                                                {notice.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 space-y-3">
                                        <div className="hidden md:flex items-center gap-3">
                                            <span className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest">
                                                {notice.category}
                                            </span>
                                            <span className={cn(
                                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest",
                                                notice.priority === 'High' ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                                                    notice.priority === 'Medium' ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                                            )}>
                                                {notice.priority} Priority
                                            </span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {notice.title}
                                        </h3>
                                        <p className="text-sm font-bold text-slate-400 dark:text-slate-500 max-w-2xl leading-relaxed">
                                            {notice.description}
                                        </p>
                                    </div>

                                    {/* Download Action */}
                                    <div className="w-full md:w-auto flex items-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                                        <button className="flex-1 md:flex-none h-14 bg-slate-900 dark:bg-blue-600 text-white px-8 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-700 transition-all shadow-xl shadow-slate-900/10 dark:shadow-blue-900/20">
                                            <Download className="w-4 h-4" />
                                            <span>Download PDF</span>
                                        </button>
                                        <div className="hidden lg:block text-right">
                                            <p className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Filesize</p>
                                            <p className="text-xs font-black text-slate-900 dark:text-white">{notice.fileSize}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {filteredNotices.length === 0 && (
                                <div className="py-20 text-center space-y-4">
                                    <div className="w-20 h-20 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto text-slate-200 dark:text-slate-800">
                                        <Search className="w-10 h-10" />
                                    </div>
                                    <p className="text-slate-400 dark:text-slate-500 font-extrabold uppercase tracking-widest text-sm">No notices found matching your search</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* ================= CTA: NOTIFICATION SIGNUP ================= */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 text-center">
                        <div className="max-w-2xl mx-auto space-y-8">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl shadow-blue-600/40">
                                    <Bell className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                    NEVER MISS A <span className="text-blue-600 dark:text-blue-500">CRITICAL</span> UPDATE
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                                    Get instant SMS or Email alerts for urgent announcements and emergency notices.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="w-full sm:w-auto px-10 h-16 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-950 dark:hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 italic">
                                    Subscribe to SMS
                                </button>
                                <button className="w-full sm:w-auto px-10 h-16 bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-white rounded-2xl font-black text-xs uppercase tracking-widest text-slate-900 dark:text-white hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-900 transition-all shadow-xl shadow-slate-900/5 italic">
                                    Follow on Telegram
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Notices;
