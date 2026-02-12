import React, { useState, useEffect } from 'react';
import {
    X,
    Bell,
    Calendar,
    ArrowRight,
    Volume2
} from 'lucide-react';
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";

const PopupNotice = ({ notice }: { notice?: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Use provided notice or fall back to local test data
    const activeNotice = notice || {
        title: "Admission Open for 2026/27",
        subtitle: "Secure your child's future at JBS",
        content: "We are pleased to announce that registrations for the upcoming academic session 2026/27 are now officially open for Primary, Secondary and Higher Secondary levels. Limited seats are available for our residential programs.",
        image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=1200&auto=format&fit=crop",
        date: "Feb 12, 2026",
        urgency: "High",
        cta: "Apply Now",
        link: "/admissions"
    };

    useEffect(() => {
        // Show after a small delay for better UX
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenNoticePopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenNoticePopup', 'true');
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden border-none bg-transparent">
                <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl mx-4 sm:mx-0">
                    {/* Urgency Badge */}
                    <div className="absolute top-6 left-6 z-20">
                        <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-red-500/30">
                            <Volume2 className="w-3 h-3 animate-bounce" />
                            <span>Urgent Notice</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image Section */}
                        <div className="relative aspect-video md:aspect-auto h-full min-h-[250px]">
                            <img
                                src={activeNotice.image}
                                alt="Notice"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{activeNotice.date}</span>
                                </div>
                                <h3 className="text-2xl font-black italic tracking-tighter leading-none uppercase">
                                    Shape the <br /> <span className="text-blue-400">Next Gen</span>
                                </h3>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 lg:p-12 space-y-8 bg-slate-50 relative">
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 p-2 rounded-xl bg-white border border-slate-100 text-slate-400 hover:text-slate-900 transition-colors z-30"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                                    <Bell className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                        {activeNotice.title}
                                    </h2>
                                    <p className="text-blue-600 font-bold text-xs uppercase tracking-widest italic">
                                        {activeNotice.subtitle}
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight">
                                {activeNotice.content}
                            </p>

                            <div className="space-y-4 pt-4">
                                <a
                                    href={activeNotice.link}
                                    className="w-full h-16 bg-slate-900 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-slate-950/20 group"
                                >
                                    {activeNotice.cta}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </a>
                                <button
                                    onClick={handleClose}
                                    className="w-full text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
                                >
                                    Maybe Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PopupNotice;
