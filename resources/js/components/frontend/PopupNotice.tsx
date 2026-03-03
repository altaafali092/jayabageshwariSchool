import React, { useState, useEffect } from 'react';
import {
    X,
    Bell,
    Calendar,
    ArrowRight
} from 'lucide-react';
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";

interface PopupNoticeProps {
    popupNotice?: {
        image?: string;
        created_at: string;
        title: string;
        subtitle?: string;
        content: string;
        link?: string;
        cta?: string;
    };
}

const PopupNotice = ({ popupNotice }: PopupNoticeProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            const hasSeenPopup = sessionStorage.getItem('hasSeenNoticePopup');
            if (!hasSeenPopup) {
                setIsOpen(true);
            }
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!popupNotice) return null;

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                setIsOpen(open);
                if (!open) {
                    sessionStorage.setItem('hasSeenNoticePopup', 'true');
                }
            }}
        >
            <DialogContent className="
                w-[95vw] 
                sm:w-[90vw] 
                md:w-[80vw] 
                lg:w-[70vw] 
                xl:w-[60vw] 
                max-w-6xl
                max-h-[92vh] 
                p-0 
                overflow-hidden 
                border-none 
                bg-transparent
            ">

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300">

                    {/* ===== HEADER ===== */}
                    <div className="bg-blue-900 text-white px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Bell className="w-5 h-5" />
                            <span className="font-bold uppercase tracking-widest text-sm">
                                Important Notice
                            </span>
                        </div>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-white/20 p-2 rounded-full transition"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    {/* ===== IMAGE ===== */}
                    {popupNotice.image && (
                        <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden">
                            <img
                                src={popupNotice.image}
                                alt="Notice"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    {/* ===== CONTENT ===== */}
                    <div className="p-8 md:p-10 space-y-6 overflow-y-auto max-h-[60vh]">

                        {/* Date */}
                        <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 text-sm font-semibold">
                            <Calendar className="w-4 h-4" />
                            <span>
                                {new Date(popupNotice.created_at).toLocaleDateString()}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-snug">
                            {popupNotice.title}
                        </h2>

                        {/* Subtitle */}
                        {popupNotice.subtitle && (
                            <p className="text-blue-700 dark:text-blue-400 font-medium text-base">
                                {popupNotice.subtitle}
                            </p>
                        )}

                        {/* Content */}
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base whitespace-pre-line">
                            {popupNotice.content}
                        </p>

                        {/* CTA Button */}
                        {popupNotice.link && (
                            <a
                                href={popupNotice.link}
                                className="inline-flex items-center gap-3 px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                            >
                                {popupNotice.cta || "Read More"}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        )}

                    </div>

                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PopupNotice;