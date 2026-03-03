import React, { useState, useEffect } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Wifi, Coffee, Music, Dribbble, Shield, Activity,
    Bus, Laptop, BookOpen, Users, Waves, Utensils, Home, Trophy,
    Dumbbell, MapPin, Plus, ArrowRight, LucideIcon, Library, Bed
} from 'lucide-react';

import {
    PageHero,
    PageTabs,
    PageSplitSection,
    PageGridSection,
    PageImageGridSection,
    PageCTA
} from '@/components/frontend/PageBuilder';

import { FacilityItem } from '@/types/Frontend/Index';

// ─── Icon resolver ─────────────────────────────────────────────────────────
const iconMap: Record<string, LucideIcon> = {
    Wifi, Coffee, Music, Dribbble, Shield, Activity, Bus, Laptop,
    BookOpen, Users, Waves, Utensils, Home, Trophy, Dumbbell,
    MapPin, Plus, ArrowRight, Library, Bed,
};
const icon = (name: string | null): LucideIcon => (name ? iconMap[name] ?? Shield : Shield);

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

export default function Facilities({
    overview_main = [],
    overview_lifestyle = [],
    hostel_features = [],
    transport_features = [],
    transport_stats = [],
    sports_items = [],
    library_stats = [],
    library_images = [],
}: Props) {
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
    const hostelCapacity =
        hostel_features.find(f => f.meta_data?.capacity)?.meta_data?.capacity ?? '200+';

    const routeStat =
        transport_stats.find(s => s.meta_data?.key === 'routes')?.title ?? '35+ Routes';

    const libBooks = library_stats.find(s => s.meta_data?.key === 'books');
    const libJournals = library_stats.find(s => s.meta_data?.key === 'journals');

    return (
        <FrontLayout>
            <Head title={`${activeTab} - Facilities | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <PageHero
                    tagText="Campus Life"
                    tagIcon={Home}
                    titleTop={activeTab === 'Overview' ? 'WORLD CLASS' : activeTab.toUpperCase()}
                    titleBottom={activeTab === 'Overview' ? 'INFRASTRUCTURE' : 'FACILITIES'}
                    subtitle="Discover the facilities that make Jaya Bageshwori a premier institution for holistic student development."
                />

                {/* ── Tab Bar ───────────────────────────────────────────── */}
                <PageTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    rightLinkText="Take a Campus Tour"
                    rightLinkUrl="/admissions"
                />

                <div className="min-h-[600px]">

                    {/* ════════════════════════════════════════════════════
                        OVERVIEW
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Split cards for each main facility */}
                            {overview_main.map((f, idx) => (
                                <PageSplitSection
                                    key={f.id}
                                    reverse={idx % 2 !== 0}
                                    bgClass={idx % 2 === 0
                                        ? 'bg-white dark:bg-slate-950'
                                        : 'bg-slate-50 dark:bg-slate-900'}
                                    icon={icon(f.icon)}
                                    tagText="Building blocks of excellence"
                                    titleTop={f.title}
                                    description={f.description ?? ''}
                                    visualContent={
                                        <div className="w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 group">
                                            <img
                                                src={f.image ?? ''}
                                                alt={f.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-950/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    }
                                />
                            ))}

                            {/* Lifestyle grid */}
                            <PageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="BEYOND"
                                titleBottom="ACADEMICS"
                                subtitle="Everything your child needs for a balanced educational journey"
                                columns={3}
                                items={overview_lifestyle.map(f => ({
                                    title: f.title,
                                    category: f.meta_data?.category ?? '',
                                    icon: icon(f.icon),
                                }))}
                            />
                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        HOSTEL
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Hostel' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Hero split */}
                            <PageSplitSection
                                bgClass="bg-white dark:bg-slate-950"
                                titleTop="A CALM"
                                titleBottom="RESIDENCY"
                                description="Our hostel provides a safe, secure, and nurturing environment that feels like a home away from home."
                                visualContent={
                                    <div className="relative mt-8 lg:mt-0">
                                        <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border-8 border-white dark:border-slate-800">
                                            <img
                                                src="https://images.unsplash.com/photo-1555854817-5b2337a8973b?q=80&w=800&auto=format&fit=crop"
                                                className="w-full h-full object-cover"
                                                alt="Hostel"
                                            />
                                        </div>
                                        {/* Stat badge */}
                                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl dark:shadow-black/50 border border-slate-50 dark:border-slate-800 max-w-[200px]">
                                            <p className="text-4xl font-black text-blue-600 dark:text-blue-500 italic leading-none mb-2">
                                                {hostelCapacity}
                                            </p>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight">
                                                Capacity for Resident Students
                                            </p>
                                        </div>
                                    </div>
                                }
                            />

                            {/* Features grid */}
                            <PageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="WHAT WE"
                                titleBottom="OFFER"
                                subtitle="Every comfort and service your child needs during their stay"
                                columns={4}
                                items={hostel_features.map(f => ({
                                    title: f.title,
                                    desc: f.description ?? '',
                                    icon: icon(f.icon),
                                    category: 'Hostel',
                                }))}
                            />
                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        TRANSPORTATION
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Transportation' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Hero split */}
                            <PageSplitSection
                                bgClass="bg-white dark:bg-slate-950"
                                reverse={true}
                                tagText="RELIABLE & PUNCTUAL"
                                titleTop="EASY"
                                titleBottom="TRANSIT"
                                description="Our extensive transportation network ensures that every student can reach school safely and comfortably from any part of the city."
                                visualContent={
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="aspect-[3/4] rounded-4xl bg-blue-600 p-8 flex flex-col justify-end text-white border dark:border-blue-500/30">
                                                <Bus className="w-12 h-12 mb-6" />
                                                <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">Safe Transit</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">GPS Tracked Fleet</p>
                                            </div>
                                            <img
                                                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop"
                                                className="aspect-square rounded-4xl object-cover shadow-xl dark:shadow-black/50"
                                                alt="Bus"
                                            />
                                        </div>
                                        <div className="space-y-4 pt-12">
                                            <img
                                                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop"
                                                className="aspect-square rounded-4xl object-cover shadow-xl dark:shadow-black/50"
                                                alt="Route"
                                            />
                                            <div className="aspect-[3/4] rounded-4xl bg-slate-900 dark:bg-slate-950 p-8 flex flex-col justify-end text-white border dark:border-slate-800">
                                                <MapPin className="w-12 h-12 mb-6 text-blue-500" />
                                                <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">
                                                    {routeStat}
                                                </h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Covering Entire City</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />

                            {/* Safety features grid */}
                            <PageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="SAFETY"
                                titleBottom="FIRST"
                                subtitle="Every measure in place to keep your child safe on the road"
                                columns={3}
                                items={transport_features.map(f => ({
                                    title: f.title,
                                    category: 'Transport',
                                    icon: icon(f.icon),
                                }))}
                            />
                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        SPORTS
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Sports' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Hero split */}
                            <PageSplitSection
                                bgClass="bg-white dark:bg-slate-950"
                                tagText="Athletics & Fitness"
                                titleTop="CHAMPIONS"
                                titleBottom="HUB"
                                icon={Trophy}
                                description="We believe in building character through sports. Our world-class facilities support a wide range of athletic activities for every student."
                                visualContent={
                                    sports_items[0] ? (
                                        <div className="w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 group">
                                            <img
                                                src={sports_items[0].image ?? ''}
                                                alt={sports_items[0].title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-950/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[4/3] rounded-4xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                                            <Trophy className="w-24 h-24 text-slate-300 dark:text-slate-700" />
                                        </div>
                                    )
                                }
                            />

                            {/* Image card grid for all sports */}
                            <PageImageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="OUR"
                                titleBottom="ARENAS"
                                subtitle="State-of-the-art venues built to nurture champions"
                                items={sports_items.map(f => ({
                                    title: f.title,
                                    subtitle: f.meta_data?.sub_category ?? '',
                                    icon: icon(f.icon),
                                    image: f.image ?? '',
                                }))}
                            />
                        </div>
                    )}

                    {/* ════════════════════════════════════════════════════
                        LIBRARY
                    ════════════════════════════════════════════════════ */}
                    {activeTab === 'Library' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">

                            {/* Hero split */}
                            <PageSplitSection
                                bgClass="bg-white dark:bg-slate-950"
                                tagText="THE DIGITAL OASIS"
                                titleTop="KNOWLEDGE"
                                titleBottom="REPOSITORY"
                                icon={BookOpen}
                                description="Our library is more than just books — it's a sanctuary for research, discovery, and silent contemplation, offering both physical volumes and digital resources."
                                visualContent={
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            {library_images[0] && (
                                                <div className="aspect-[4/3] rounded-4xl overflow-hidden shadow-xl dark:shadow-black/50 group">
                                                    <img src={library_images[0].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[0].title} />
                                                </div>
                                            )}
                                            {library_images[1] && (
                                                <div className="aspect-square rounded-4xl overflow-hidden shadow-xl dark:shadow-black/50 group">
                                                    <img src={library_images[1].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[1].title} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="space-y-4 pt-10">
                                            {library_images[2] && (
                                                <div className="aspect-square rounded-4xl overflow-hidden shadow-xl dark:shadow-black/50 group">
                                                    <img src={library_images[2].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[2].title} />
                                                </div>
                                            )}
                                            {library_images[3] && (
                                                <div className="aspect-[4/3] rounded-4xl overflow-hidden shadow-xl dark:shadow-black/50 group">
                                                    <img src={library_images[3].image ?? ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={library_images[3].title} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                }
                            />

                            {/* Stats grid */}
                            <PageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="BY THE"
                                titleBottom="NUMBERS"
                                subtitle="A collection that grows every year to support every learner"
                                columns={2}
                                items={[
                                    {
                                        title: libBooks?.title ?? '25K+',
                                        category: 'Collection',
                                        desc: libBooks?.description ?? 'Physical & Digital Books',
                                        icon: icon('BookOpen'),
                                    },
                                    {
                                        title: libJournals?.title ?? '50+',
                                        category: 'Research',
                                        desc: libJournals?.description ?? 'National & International Journals',
                                        icon: icon('BookOpen'),
                                    },
                                    ...library_stats
                                        .filter(s => s.meta_data?.key !== 'books' && s.meta_data?.key !== 'journals')
                                        .map(s => ({
                                            title: s.title,
                                            category: 'Library',
                                            desc: s.description ?? '',
                                            icon: icon(s.icon),
                                        })),
                                ]}
                            />
                        </div>
                    )}

                </div>

                <PageCTA />
            </main>
        </FrontLayout>
    );
}
