import React, { useState, useEffect } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    Wifi, Coffee, Music, Dribbble, Shield, Activity,
    Bus, Laptop, BookOpen, Users, Waves, Utensils, Home, Trophy,
    Dumbbell, MapPin, Plus, ArrowRight, Library, Bed
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';

import { FacilityItem } from '@/types/Frontend/Index';

// ─── Icon resolver ─────────────────────────────────────────────────────────
const iconMap: Record<string, React.ElementType> = {
    Wifi, Coffee, Music, Dribbble, Shield, Activity, Bus, Laptop,
    BookOpen, Users, Waves, Utensils, Home, Trophy, Dumbbell,
    MapPin, Plus, ArrowRight, Library, Bed,
};

const ResolvedIcon = ({ name, className }: { name?: string | null; className?: string }) => {
    const IconComponent = (name ? iconMap[name] : null) || Shield;
    return <IconComponent className={className} />;
};

// ─── Props ─────────────────────────────────────────────────────────────────
interface Props {
    overview_main: FacilityItem[];
    overview_lifestyle: FacilityItem[];
    hostel_features: FacilityItem[];
    transport_features: FacilityItem[];
    transport_stats: FacilityItem[];
    sports_items: FacilityItem[];
    library_stats: FacilityItem[];
    library_images: FacilityItem[];
}

export default function Facilities(props: Props) {
    const {
        overview_main = [],
        overview_lifestyle = [],
        hostel_features = [],
        transport_features = [],
        transport_stats = [],
        sports_items = [],
        library_stats = [],
        library_images = []
    } = props;
    const [activeTab, setActiveTab] = useState('Overview');

    // Read ?type=hostel|transportation|sports|library from URL
    useEffect(() => {
        const p = new URLSearchParams(window.location.search);
        const map: Record<string, string> = {
            hostel: 'Hostel', transportation: 'Transportation',
            sports: 'Sports', library: 'Library',
        };
        const t = p.get('type');
        if (t && map[t]) setActiveTab(map[t]);
    }, []);

    const tabs = ['Overview', 'Hostel', 'Transportation', 'Sports', 'Library'];

    // ─── Derived values ───────────────────────────────────────────────────
    const hostelCapacity = hostel_features.find(f => f.meta_data?.capacity)?.meta_data?.capacity ?? '200+';
    const routeStat = transport_stats.find(s => s.meta_data?.key === 'routes')?.title ?? '35+ Routes';
    const libBooks = library_stats.find(s => s.meta_data?.key === 'books') || { title: '25K+', description: 'Physical & Digital Books' };
    const libJournals = library_stats.find(s => s.meta_data?.key === 'journals') || { title: '50+', description: 'National & International Journals' };

    return (
        <FrontLayout>
            <Head title={`${activeTab} - Facilities | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden text-slate-900 dark:text-slate-100">

                {/* ── PREMIUM HERO ── */}
                <section className="relative pt-24 pb-12 bg-blue-950 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
                                <Home className="w-3 h-3" />
                                <span>Campus Life</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                                {activeTab === 'Overview' ? (
                                    <>WORLD CLASS <br className="hidden md:block" /> <span className="text-blue-500">INFRASTRUCTURE</span></>
                                ) : (
                                    <>{activeTab} <br className="hidden md:block" /> <span className="text-blue-500">FACILITIES</span></>
                                )}
                            </h1>
                            <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed mt-4">
                                Discover the facilities that make Jaya Bageshwori a premier institution for holistic student development.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── TAB NAVIGATION ── */}
                <nav className="sticky top-[70px] lg:top-[80px] z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none justify-center lg:justify-start">
                            {tabs.map((tab) => {
                                const active = activeTab === tab;
                                return (
                                    <button
                                        key={tab}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            window.history.pushState(null, '', `?type=${tab.toLowerCase()}`);
                                        }}
                                        className={cn(
                                            'relative shrink-0 px-6 lg:px-8 py-5 text-[11px] font-black uppercase tracking-widest transition-colors whitespace-nowrap',
                                            active
                                                ? 'text-blue-600 dark:text-blue-400'
                                                : 'text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                                        )}
                                    >
                                        {tab}
                                        {active && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 dark:bg-blue-400 rounded-t-full" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                <div className="min-h-[600px] container mx-auto px-6 lg:px-20 py-16 space-y-20">

                    {/* ════════════════════════════════════════════════════
                        OVERVIEW
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">

                            {/* Split Sections */}
                            <div className="space-y-20">
                                {overview_main.map((f, idx) => (
                                    <div key={f.id} className={cn("flex flex-col gap-12 lg:items-center", idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")}>
                                        <div className="flex-1 space-y-6">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                                <ResolvedIcon name={f.icon} className="w-3.5 h-3.5" />
                                                Building blocks of excellence
                                            </div>
                                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                                {f.title}
                                            </h2>
                                            {f.description && (
                                                <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                                                    {f.description}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex-1 w-full">
                                            <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 group relative border border-slate-100 dark:border-slate-800">
                                                <img
                                                    src={f.image ?? ''}
                                                    alt={f.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Lifestyle Grid */}
                            <div className="space-y-12">
                                <div className="text-center space-y-4">
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        BEYOND <span className="text-blue-600 dark:text-blue-500">ACADEMICS</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">
                                        Everything your child needs for a balanced educational journey
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                                    {overview_lifestyle.map((f, idx) => (
                                        <div key={idx} className="group p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500 relative overflow-hidden">
                                            <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 transition-all duration-500 pointer-events-none text-blue-900 dark:text-blue-100">
                                                <ResolvedIcon name={f.icon} className="w-32 h-32" />
                                            </div>
                                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700">
                                                    <ResolvedIcon name={f.icon} className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">
                                                    {f.title}
                                                </h3>
                                            </div>
                                            {(f.meta_data?.category || f.description) && (
                                                <div className="relative z-10">
                                                    {f.meta_data?.category && (
                                                        <div className="mb-3 inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest border border-blue-200 dark:border-blue-500/20">
                                                            {f.meta_data.category}
                                                        </div>
                                                    )}
                                                    {f.description && (
                                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                                            {f.description}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        HOSTEL
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Hostel' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">

                            {/* Hero split */}
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <Home className="w-3.5 h-3.5" />
                                        Home Away From Home
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        A CALM <span className="text-blue-600 dark:text-blue-500">RESIDENCY</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl text-lg">
                                        Our hostel provides a safe, secure, and nurturing environment that feels like a home away from home. Every comfort and service your child needs during their stay is carefully considered.
                                    </p>
                                </div>
                                <div className="flex-1 w-full flex justify-center lg:justify-end">
                                    <div className="relative w-full max-w-md">
                                        <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border-8 border-white dark:border-slate-800">
                                            <img
                                                src="https://images.unsplash.com/photo-1555854817-5b2337a8973b?q=80&w=800&auto=format&fit=crop"
                                                className="w-full h-full object-cover"
                                                alt="Hostel"
                                            />
                                        </div>
                                        <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-[2.5rem] shadow-2xl dark:shadow-black/50 border border-slate-50 dark:border-slate-800 max-w-[220px]">
                                            <p className="text-5xl font-black text-blue-600 dark:text-blue-500 italic leading-none mb-3">
                                                {hostelCapacity}
                                            </p>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight">
                                                Capacity for Resident Students
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Features grid */}
                            <div className="space-y-12">
                                <div className="text-left space-y-4 mb-12">
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        WHAT WE <span className="text-blue-600 dark:text-blue-500">OFFER</span>
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {hostel_features.map((f, idx) => (
                                        <div key={idx} className="group p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500 relative overflow-hidden">
                                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                                <ResolvedIcon name={f.icon} className="w-5 h-5" />
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-3 uppercase italic tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                                {f.title}
                                            </h4>
                                            {f.description && (
                                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                                    {f.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        TRANSPORTATION
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Transportation' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">

                            {/* Hero split */}
                            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <Bus className="w-3.5 h-3.5" />
                                        RELIABLE & PUNCTUAL
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        EASY <span className="text-blue-600 dark:text-blue-500">TRANSIT</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl text-lg">
                                        Our extensive transportation network ensures that every student can reach school safely and comfortably from any part of the city.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full max-w-lg mx-auto lg:mr-auto lg:ml-0">
                                        <div className="space-y-4 lg:space-y-6">
                                            <div className="aspect-[3/4] rounded-[2.5rem] bg-blue-600 p-8 flex flex-col justify-end text-white shadow-2xl shadow-blue-900/20">
                                                <Bus className="w-12 h-12 mb-6 opacity-90" />
                                                <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-3">Safe<br />Transit</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">GPS Tracked Fleet</p>
                                            </div>
                                            <img
                                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop"
                                                className="aspect-square rounded-[2.5rem] object-cover shadow-xl dark:shadow-black/50"
                                                alt="Bus"
                                            />
                                        </div>
                                        <div className="space-y-4 lg:space-y-6 pt-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop"
                                                className="aspect-square rounded-[2.5rem] object-cover shadow-xl dark:shadow-black/50"
                                                alt="Route"
                                            />
                                            <div className="aspect-[3/4] rounded-[2.5rem] bg-slate-900 dark:bg-slate-950 p-8 flex flex-col justify-end text-white border border-slate-800 shadow-2xl">
                                                <MapPin className="w-12 h-12 mb-6 text-blue-500" />
                                                <h4 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-3">
                                                    {routeStat.split(' ')[0]}<br />{routeStat.split(' ')[1] || 'Routes'}
                                                </h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mt-1">Covering Entire City</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Features grid */}
                            <div className="space-y-12">
                                <div className="text-center space-y-4 mb-12">
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        SAFETY <span className="text-blue-600 dark:text-blue-500">FIRST</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">
                                        Every measure in place to keep your child safe on the road
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {transport_features.map((f, idx) => (
                                        <div key={idx} className="group p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500 relative overflow-hidden">
                                            <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                                <ResolvedIcon name={f.icon} className="w-5 h-5" />
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2 uppercase italic tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                                                {f.title}
                                            </h4>
                                            {f.description && (
                                                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                                                    {f.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        SPORTS
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Sports' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">

                            {/* Hero split */}
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <Trophy className="w-3.5 h-3.5" />
                                        Athletics & Fitness
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        CHAMPIONS <span className="text-blue-600 dark:text-blue-500">HUB</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl text-lg">
                                        We believe in building character through sports. Our world-class facilities support a wide range of athletic activities for every student.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    {sports_items[0] ? (
                                        <div className="w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 group border border-slate-100 dark:border-slate-800">
                                            <img
                                                src={sports_items[0].image ?? ''}
                                                alt={sports_items[0].title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[4/3] rounded-[3rem] bg-slate-50 dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800">
                                            <Trophy className="w-24 h-24 text-slate-300 dark:text-slate-700" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Image card grid for all sports */}
                            <div className="space-y-12">
                                <div className="text-center space-y-4 mb-12">
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        OUR <span className="text-blue-600 dark:text-blue-500">ARENAS</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">
                                        State-of-the-art venues built to nurture champions
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {sports_items.map((f, idx) => (
                                        <div key={idx} className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-lg dark:shadow-black/40">
                                            <img
                                                src={f.image ?? ''}
                                                alt={f.title}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80" />
                                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
                                                    <ResolvedIcon name={f.icon} className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-2xl font-black text-white uppercase italic tracking-tight leading-none mb-1">
                                                    {f.title}
                                                </h4>
                                                {f.meta_data?.sub_category && (
                                                    <p className="text-xs font-bold text-white/70 uppercase tracking-widest mt-2">{f.meta_data.sub_category}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        LIBRARY
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Library' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-24">

                            {/* Hero split */}
                            <div className="flex flex-col lg:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <BookOpen className="w-3.5 h-3.5" />
                                        THE DIGITAL OASIS
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        KNOWLEDGE <span className="text-blue-600 dark:text-blue-500">REPOSITORY</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl text-lg">
                                        Our library is more than just books — it's a sanctuary for research, discovery, and silent contemplation, offering both physical volumes and digital resources.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="grid grid-cols-2 gap-4 lg:gap-6 w-full mx-auto">
                                        <div className="space-y-4 lg:space-y-6">
                                            {library_images[0] && (
                                                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/50 group border border-slate-100 dark:border-slate-800">
                                                    <img src={library_images[0].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[0].title} />
                                                </div>
                                            )}
                                            {library_images[1] && (
                                                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/50 group border border-slate-100 dark:border-slate-800">
                                                    <img src={library_images[1].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[1].title} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-4 lg:space-y-6 pt-10 lg:pt-16">
                                            {library_images[2] && (
                                                <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/50 group border border-slate-100 dark:border-slate-800">
                                                    <img src={library_images[2].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[2].title} />
                                                </div>
                                            )}
                                            {library_images[3] && (
                                                <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl dark:shadow-black/50 group border border-slate-100 dark:border-slate-800">
                                                    <img src={library_images[3].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[3].title} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats grid */}
                            <div className="space-y-12">
                                <div className="text-center space-y-4 mb-12">
                                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        BY THE <span className="text-blue-600 dark:text-blue-500">NUMBERS</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">
                                        A collection that grows every year to support every learner
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        {
                                            title: libBooks.title,
                                            category: 'Collection',
                                            desc: libBooks.description,
                                            icon: 'BookOpen',
                                        },
                                        {
                                            title: libJournals.title,
                                            category: 'Research',
                                            desc: libJournals.description,
                                            icon: 'BookOpen',
                                        },
                                        ...library_stats
                                            .filter(s => s.meta_data?.key !== 'books' && s.meta_data?.key !== 'journals')
                                            .map(s => ({
                                                title: s.title,
                                                category: 'Library',
                                                desc: s.description ?? '',
                                                icon: s.icon,
                                            })),
                                    ].map((s, idx) => (
                                        <div key={idx} className="group p-8 lg:p-10 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">
                                            <div className="text-5xl lg:text-6xl font-black text-blue-600 dark:text-blue-500 italic tracking-tighter mb-4">
                                                {s.title}
                                            </div>
                                            <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-widest mb-2">
                                                {s.category}
                                            </h4>
                                            {s.desc && (
                                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                                    {s.desc}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )}

                </div>

                {/* ── CTA FROM THE PREMIUM DESIGN LANGUAGE ── */}
                <section className="py-24 bg-slate-950 dark:bg-black text-center relative overflow-hidden transition-colors duration-300 mt-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)]" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-12">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                EXPERIENCE IT <br /> <span className="text-blue-500 dark:text-blue-400">YOURSELF</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest max-w-2xl mx-auto">
                                Schedule a campus tour to see our world-class facilities in person and discover the perfect environment for your child.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/admissions" className="w-full sm:w-auto h-20 px-12 bg-blue-600 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20 group">
                                Apply for Admission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto h-20 px-12 bg-white/5 dark:bg-slate-900/50 border border-white/10 dark:border-slate-800 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl">
                                Request Tour
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
}
