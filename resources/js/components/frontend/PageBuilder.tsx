import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronDown, ArrowRight, Camera, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================
// PAGE HERO
// ============================================
export const PageHero = ({
    titleTop,
    titleBottom,
    subtitle,
    tagText = 'Campus Life',
    tagIcon: TagIcon = Home
}: any) => (
    <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
        <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
            {tagText && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                    {TagIcon && <TagIcon className="w-3 h-3" />}
                    <span>{tagText}</span>
                </div>
            )}
            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                {titleTop} <br />
                <span className="text-blue-500">{titleBottom}</span>
            </h1>
            <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                {subtitle}
            </p>
        </div>
    </section>
);

// ============================================
// PAGE TABS
// ============================================
export const PageTabs = ({
    tabs,
    activeTab,
    setActiveTab,
    rightLinkText = 'Take a Campus Tour',
    rightLinkUrl = '/admissions'
}: any) => (
    <section className="sticky top-[80px] lg:top-[80px] z-40 border-b border-slate-100 dark:border-slate-800 py-4 lg:py-0 shadow-lg shadow-blue-900/5 dark:shadow-black/20 backdrop-blur-md bg-slate-50/90 dark:bg-slate-950/90 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-6 lg:px-20">
            <div className="flex items-center justify-center lg:justify-between">
                {/* Horizontal Tabs (Desktop) */}
                <div className="hidden lg:flex items-center">
                    {tabs.map((tab: string) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-8 py-6 text-[10px] font-black uppercase tracking-widest transition-all relative group",
                                activeTab === tab ? "text-blue-600 dark:text-blue-400" : "text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                            )}
                        >
                            {tab}
                            <span className={cn(
                                "absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-500 transition-transform duration-300",
                                activeTab === tab ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            )} />
                        </button>
                    ))}
                </div>

                {/* Mobile Dropdown-style Select */}
                <div className="lg:hidden w-full relative">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="w-full h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 font-black text-[10px] uppercase tracking-widest appearance-none outline-none focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all text-slate-900 dark:text-white"
                    >
                        {tabs.map((tab: string) => <option key={tab} value={tab} className="bg-white dark:bg-slate-900">{tab}</option>)}
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>

                {rightLinkText && (
                    <Link href={rightLinkUrl} className="hidden lg:flex items-center gap-3 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:gap-5 transition-all">
                        {rightLinkText} <ArrowRight className="w-4 h-4" />
                    </Link>
                )}
            </div>
        </div>
    </section>
);

// ============================================
// SPLIT SECTION (Text Left, Visual Right)
// ============================================
export const PageSplitSection = ({
    tagText,
    titleTop,
    titleBottom,
    description,
    features = [],
    visualContent,
    reverse = false,
    bgClass = "bg-white dark:bg-slate-950",
    icon: Icon = null
}: any) => (
    <section className={`py-24 transition-colors ${bgClass}`}>
        <div className={`container mx-auto px-6 lg:px-20`}>
            <div className={`flex flex-col lg:flex-row gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-8">
                    {Icon && (
                        <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50">
                            <Icon className="w-7 h-7" />
                        </div>
                    )}
                    <div className="space-y-4">
                        {tagText && (
                            <span className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em] block">
                                {tagText}
                            </span>
                        )}
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                            {titleTop} {titleBottom && <span className="text-blue-600 dark:text-blue-500">{titleBottom}</span>}
                        </h2>
                        {description && (
                            <p className="text-sm lg:text-base font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tight">
                                {description}
                            </p>
                        )}
                    </div>
                    {/* Optional Features List */}
                    {features.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            {features.map((feature: any, i: number) => (
                                <div key={i} className="space-y-2">
                                    {feature.icon && <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />}
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{feature.title}</h4>
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* Visual Content (Image, Grid, etc.) */}
                <div className="flex-1 w-full relative">
                    {visualContent}
                </div>
            </div>
        </div>
    </section>
);

// ============================================
// GRID SECTION (Cards)
// ============================================
export const PageGridSection = ({
    titleTop,
    titleBottom,
    subtitle,
    items = [],
    bgClass = "bg-slate-50 dark:bg-slate-900",
    columns = 3
}: any) => {
    const gridCols = {
        2: "lg:grid-cols-2",
        3: "lg:grid-cols-3",
        4: "lg:grid-cols-4",
    }[columns] || "lg:grid-cols-3";

    return (
        <section className={`py-24 transition-colors ${bgClass}`}>
            <div className="container mx-auto px-6 lg:px-20">
                {(titleTop || subtitle) && (
                    <div className="text-center mb-16 space-y-4">
                        {titleTop && (
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                {titleTop} {titleBottom && <span className="text-blue-600 dark:text-blue-500">{titleBottom}</span>}
                            </h2>
                        )}
                        {subtitle && <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">{subtitle}</p>}
                    </div>
                )}

                <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols} gap-8`}>
                    {items.map((item: any, i: number) => (
                        <div key={i} className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-950/2 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-600/20">
                            {item.icon && (
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-white/20 dark:group-hover:bg-white/20 group-hover:text-white transition-all mb-8">
                                    <item.icon className="w-6 h-6" />
                                </div>
                            )}
                            <div className="space-y-1">
                                {item.category && <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest group-hover:text-white/60 dark:group-hover:text-white/60 transition-colors">{item.category}</p>}
                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight group-hover:text-white transition-colors">{item.title}</h4>
                                {item.desc && <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium group-hover:text-white/80">{item.desc}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ============================================
// IMAGE CARDS GRID (For Sports, Libraries, etc)
// ============================================
export const PageImageGridSection = ({
    titleTop,
    titleBottom,
    subtitle,
    items = [],
    bgClass = "bg-white dark:bg-slate-950"
}: any) => (
    <section className={`py-24 overflow-hidden transition-colors ${bgClass}`}>
        <div className="container mx-auto px-6 lg:px-20">
            {(titleTop || subtitle) && (
                <div className="text-center mb-24 space-y-6">
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                        {titleTop} {titleBottom && <span className="text-blue-600 dark:text-blue-500">{titleBottom}</span>}
                    </h2>
                    {subtitle && <p className="text-sm lg:text-base font-bold text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">{subtitle}</p>}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item: any, i: number) => (
                    <div key={i} className="group relative aspect-3/4 rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50">
                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={item.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 space-y-2 w-full">
                            {item.icon && (
                                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-600/30">
                                    <item.icon className="w-5 h-5" />
                                </div>
                            )}
                            <h4 className="text-xl font-black text-white uppercase italic tracking-tight leading-none">{item.title}</h4>
                            {item.subtitle && <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">{item.subtitle}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


// ============================================
// CTA SECTION
// ============================================
export const PageCTA = ({
    titleTop = "EXPERIENCE LIFE",
    titleBottom = "AT JBS SCHOOL",
    subtitle = "Schedule a physical tour or explore our virtual campus",
    primaryText = "Virtual Tour",
    primaryUrl = "/gallery",
    secondaryText = "Admission Inquiry",
    secondaryUrl = "/admissions"
}: any) => (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors text-center border-t border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-6 lg:px-20 space-y-12">
            <div className="space-y-4">
                <h2 className="text-3xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                    {titleTop} <br /> <span className="text-blue-600 dark:text-blue-500">{titleBottom}</span>
                </h2>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href={primaryUrl} className="w-full sm:w-auto h-20 px-12 bg-slate-900 dark:bg-blue-600 text-white rounded-4xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-700 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-slate-900/10 dark:shadow-blue-900/30 group">
                    {primaryText}
                    <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link href={secondaryUrl} className="w-full sm:w-auto h-20 px-12 bg-white dark:bg-slate-950 border-2 border-slate-900 dark:border-white text-slate-950 dark:text-white rounded-4xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic">
                    {secondaryText}
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    </section>
);
