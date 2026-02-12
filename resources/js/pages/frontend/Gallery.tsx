import React, { useState } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Camera,
    Play,
    Maximize2,
    Filter,
    ArrowRight,
    Image as ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Gallery = () => {
    const [activeTab, setActiveTab] = useState('All');

    const tabs = ['All', 'Academic', 'Campus', 'Sports', 'Events'];

    const items = [
        { id: 1, category: 'Academic', title: 'Smart Classroom Session', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' },
        { id: 2, category: 'Sports', title: 'Annual Sports Meet', image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800&auto=format&fit=crop' },
        { id: 3, category: 'Campus', title: 'Main Campus Building', image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop' },
        { id: 4, category: 'Events', title: 'Graduation Ceremony', image: 'https://images.unsplash.com/photo-1523050853064-ebad6505128e?q=80&w=800&auto=format&fit=crop' },
        { id: 5, category: 'Campus', title: 'Science Laboratory', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop' },
        { id: 6, category: 'Academic', title: 'Library Study Area', image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop' },
        { id: 7, category: 'Sports', title: 'Basketball Championship', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop' },
        { id: 8, category: 'Events', title: 'Cultural Dance Program', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop' },
        { id: 9, category: 'Campus', title: 'School Cafeteria', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop' },
    ];

    const filteredItems = activeTab === 'All' ? items : items.filter(item => item.category === activeTab);

    return (
        <FrontLayout>
            <Head title="Campus Gallery - Jaya Bageshwori" />

            <main className="flex-1 bg-white">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                            <Camera className="w-3 h-3" />
                            <span>Visual Journey</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                            OUR <span className="text-blue-500">CAMPUS</span> IN FRAME
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            A glimpse into the vibrant life, modern facilities, and memorable events at Jaya Bageshwori School.
                        </p>
                    </div>
                </section>

                {/* ================= TABS SECTION ================= */}
                <section className="sticky top-[80px] lg:top-[80px] z-40 bg-white border-b border-slate-100 py-6 px-6 lg:px-0">
                    <div className="container mx-auto lg:px-20">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto -mx-6 px-6 lg:mx-0 lg:px-0 no-scrollbar">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "whitespace-nowrap px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                                            activeTab === tab
                                                ? "bg-slate-900 text-white shadow-xl shadow-slate-900/10"
                                                : "bg-slate-50 text-slate-400 hover:bg-slate-100 italic"
                                        )}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Grid Mode</span>
                                <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-1">
                                    <div className="w-8 h-8 rounded-lg bg-blue-600 shadow-sm flex items-center justify-center text-white"><ImageIcon className="w-4 h-4" /></div>
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors"><Play className="w-4 h-4" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= GALLERY GRID ================= */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item) => (
                                <div key={item.id} className="group relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-700">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                        <button className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
                                            <Maximize2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest italic">{item.category}</p>
                                            <h4 className="text-xl font-black text-white uppercase italic tracking-tight">{item.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Meta */}
                        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Showing {filteredItems.length} of {items.length} Campus Captures</p>
                            <button className="h-16 px-12 bg-slate-50 border border-slate-100 text-slate-900 rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all italic flex items-center gap-3">
                                Load More Moments
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* ================= VIDEO SECTION ================= */}
                <section className="py-24 bg-blue-950 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050853064-ebad6505128e?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                WATCH THE <span className="text-blue-500">VIRTUAL TOUR</span>
                            </h2>
                            <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-[0.2em] max-w-xl mx-auto">
                                Take a 5-minute guided cinematic tour of our entire campus and facilities.
                            </p>
                        </div>
                        <div className="relative inline-block group cursor-pointer">
                            <div className="absolute -inset-4 bg-blue-600/20 rounded-full blur-2xl group-hover:bg-blue-600/40 transition-all" />
                            <div className="relative w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/40 group-hover:scale-110 transition-transform duration-500">
                                <Play className="w-10 h-10 ml-2 fill-current" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Gallery;
