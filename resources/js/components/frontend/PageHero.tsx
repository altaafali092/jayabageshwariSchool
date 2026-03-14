import React from 'react';
import { Target } from 'lucide-react';
import parse from 'html-react-parser';

interface PageHeroProps {
    title: string;
    description?: string;
    badgeText?: string;
    badgeIcon?: React.ReactNode;
}

const PageHero = ({
    title,
    description,
    badgeText = "Purpose & Values",
    badgeIcon = <Target className="w-3 h-3" />
}: PageHeroProps) => {
    return (
        <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
            <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                    {badgeIcon}
                    <span>{badgeText}</span>
                </div>
                <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                    {title}
                </h1>
                {description && (
                    <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                        {parse(description)}
                    </p>
                )}
            </div>
        </section>
    );
};

export default PageHero;
