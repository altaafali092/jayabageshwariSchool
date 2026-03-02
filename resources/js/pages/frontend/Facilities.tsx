import React, { useState, useEffect } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    Wifi, Coffee, Music, Dribbble, Shield, Activity,
    Bus, Laptop, BookOpen, Users, Waves, Utensils, Home, Trophy, Dumbbell, MapPin, Plus, ArrowRight
} from 'lucide-react';

import {
    PageHero,
    PageTabs,
    PageSplitSection,
    PageGridSection,
    PageImageGridSection,
    PageCTA
} from '@/components/frontend/PageBuilder';

const Facilities = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const type = params.get('type');
        if (type) {
            const tabMap: Record<string, string> = {
                'hostel': 'Hostel',
                'transportation': 'Transportation',
                'sports': 'Sports',
                'library': 'Library'
            };
            if (tabMap[type]) setActiveTab(tabMap[type]);
        }
    }, []);

    const tabs = ['Overview', 'Hostel', 'Transportation', 'Sports', 'Library'];

    // --- DATA ---
    const mainFacilities = [
        {
            title: "Smart Classrooms",
            desc: "Digitally equipped spaces with interactive whiteboards and high-speed internet to enhance the learning experience.",
            icon: Laptop,
            image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Advanced Laboratories",
            desc: "Dedicated labs for Physics, Chemistry, Biology, and IT, providing hands-on practical knowledge of complex concepts.",
            icon: Shield,
            image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Multimedia Center",
            desc: "A creative hub for digital arts, video editing, and modern communication studies.",
            icon: Music,
            image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const lifestyles = [
        { title: "Sports Academy", category: "Athletics", icon: Dribbble },
        { title: "Arts & Culture", category: "Creative", icon: Users },
        { title: "Music Studio", category: "Performative", icon: Music },
        { title: "Cafeteria", category: "Nutrition", icon: Coffee },
        { title: "Transport", category: "Services", icon: Bus },
        { title: "Medical Room", category: "Health", icon: Activity }
    ];

    const sportsFacilities = [
        { title: "Football Ground", subtitle: "Full Size AstroTurf", icon: Dribbble, image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop" },
        { title: "Basketball Court", subtitle: "Indoor Multi-Purpose", icon: Trophy, image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" },
        { title: "Swimming Pool", subtitle: "Temperature Controlled", icon: Waves, image: "https://images.unsplash.com/photo-1560090500-16f5c88939c4?q=80&w=600&auto=format&fit=crop" },
        { title: "Fitness Center", subtitle: "High Performance Lab", icon: Dumbbell, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" }
    ];

    const hostelFeatures = [
        { title: "Comfortable Rooms", desc: "Spacious, well-ventilated, and hygienic living quarters.", icon: Home },
        { title: "Nutritious Meals", desc: "Balanced and delicious vegetarian meals prepared in a modern kitchen.", icon: Utensils },
        { title: "24/7 Supervision", desc: "Dedicated wardens and security personnel to ensure safety.", icon: Shield },
        { title: "Study Halls", desc: "Quiet zones designed for group studies and individual focus.", icon: Laptop }
    ];

    return (
        <FrontLayout>
            <Head title={`${activeTab} - Facilities | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                <PageHero
                    tagText="Campus Life"
                    tagIcon={Home}
                    titleTop={activeTab === 'Overview' ? 'WORLD CLASS' : activeTab.toUpperCase()}
                    titleBottom={activeTab === 'Overview' ? 'INFRASTRUCTURE' : 'FACILITIES'}
                    subtitle="Discover the facilities that make Jaya Bageshwori a premier institution for holistic student development."
                />

                <PageTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    rightLinkText="Take a Campus Tour"
                    rightLinkUrl="/admissions"
                />

                <div className="min-h-[600px]">
                    {activeTab === 'Overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Map through main facilities using SplitSection */}
                            {mainFacilities.map((facility, index) => (
                                <PageSplitSection
                                    key={index}
                                    reverse={index % 2 !== 0}
                                    bgClass="bg-white dark:bg-slate-950"
                                    icon={facility.icon}
                                    tagText="Building blocks of excellence"
                                    titleTop={facility.title}
                                    description={facility.desc}
                                    visualContent={
                                        <div className="w-full aspect-[4/3] rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 group">
                                            <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                            <div className="absolute inset-0 bg-blue-900/10 dark:bg-blue-950/20 group-hover:bg-transparent transition-colors" />
                                        </div>
                                    }
                                />
                            ))}

                            <PageGridSection
                                bgClass="bg-slate-50 dark:bg-slate-900"
                                titleTop="BEYOND"
                                titleBottom="ACADEMICS"
                                subtitle="Everything your child needs for a balanced educational journey"
                                items={lifestyles}
                            />
                        </div>
                    )}

                    {activeTab === 'Hostel' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <PageSplitSection
                                bgClass="bg-white dark:bg-slate-950"
                                titleTop="A CALM"
                                titleBottom="RESIDENCY"
                                description="Our hostel provide a safe, secure, and nurturing environment that feels like a home away from home."
                                features={hostelFeatures}
                                visualContent={
                                    <div className="relative mt-8 lg:mt-0">
                                        <div className="aspect-[3/4] bg-slate-100 dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border-8 border-white dark:border-slate-800">
                                            <img src="https://images.unsplash.com/photo-1555854817-5b2337a8973b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hostel" />
                                        </div>
                                        <div className="absolute -bottom-10 -left-10 bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl dark:shadow-black/50 border border-slate-50 dark:border-slate-800 max-w-[200px]">
                                            <p className="text-4xl font-black text-blue-600 dark:text-blue-500 italic leading-none mb-2">200+</p>
                                            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-tight">Capacity for Resident Students</p>
                                        </div>
                                    </div>
                                }
                            />
                        </div>
                    )}

                    {activeTab === 'Transportation' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <PageSplitSection
                                bgClass="bg-slate-50/50 dark:bg-slate-900/50"
                                reverse={true}
                                tagText="RELIABLE & PUNCTUAL"
                                titleTop="EASY"
                                titleBottom="TRANSIT"
                                description="Our extensive transportation network ensures that every student can reach school safely and comfortably from any part of the city."
                                visualContent={
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="aspect-[3/4] rounded-4xl bg-blue-600 dark:bg-blue-600 p-8 flex flex-col justify-end text-white border dark:border-blue-500/30">
                                                <Bus className="w-12 h-12 mb-6" />
                                                <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">Safe Transit</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">GPS Tracked Fleet</p>
                                            </div>
                                            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover shadow-xl dark:shadow-black/50" alt="Bus" />
                                        </div>
                                        <div className="space-y-4 pt-12">
                                            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover shadow-xl dark:shadow-black/50" alt="Route" />
                                            <div className="aspect-[3/4] rounded-4xl bg-slate-900 dark:bg-slate-950 p-8 flex flex-col justify-end text-white border dark:border-slate-800">
                                                <MapPin className="w-12 h-12 mb-6 text-blue-500" />
                                                <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">35+ Routes</h4>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Covering Entire City</p>
                                            </div>
                                        </div>
                                    </div>
                                }
                            />
                            {/* Features list below for transport */}
                            <div className="container mx-auto px-6 lg:px-20 pb-24 -mt-10 relative z-10 w-full lg:w-1/2 lg:ml-auto">
                                <ul className="space-y-6">
                                    {[
                                        "GPS Real-time tracking for parents",
                                        "Experienced and background-checked drivers",
                                        "Trained attendants on every bus",
                                        "Strict maintenance schedules",
                                        "First-aid kits and emergency protocols"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-xs font-black text-slate-900 dark:text-white uppercase tracking-widest group cursor-default">
                                            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                <Plus className="w-4 h-4" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Sports' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <PageImageGridSection
                                titleTop="CHAMPIONS"
                                titleBottom="HUB"
                                subtitle="We believe in building character through sports. Our world-class facilities support a wide range of athletic activities."
                                items={sportsFacilities}
                            />
                        </div>
                    )}

                    {activeTab === 'Library' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="py-24 bg-slate-900 dark:bg-slate-900 overflow-hidden relative transition-colors">
                                <div className="absolute top-0 right-0 p-32 opacity-5">
                                    <BookOpen className="w-80 h-80 text-white" />
                                </div>
                                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                        <div className="space-y-12">
                                            <div className="space-y-6">
                                                <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">THE DIGITAL OASIS</span>
                                                <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                                                    KNOWLEDGE <br /><span className="text-blue-500">RESPOSITORY</span>
                                                </h2>
                                                <p className="text-lg font-bold text-slate-400 leading-relaxed uppercase tracking-tight">
                                                    Our library is more than just books; it's a sanctuary for research, discovery, and silent contemplation.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-12">
                                                <div>
                                                    <p className="text-4xl font-black text-white italic tracking-tighter mb-2">25K+</p>
                                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">Physical & Digital Books</p>
                                                </div>
                                                <div>
                                                    <p className="text-4xl font-black text-blue-500 italic tracking-tighter mb-2">50+</p>
                                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-tight">National & Int. Journals</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-6">
                                                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" className="aspect-[4/3] rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1544640808-32ca72ac7f07?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                            </div>
                                            <div className="space-y-6 pt-12">
                                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop" className="aspect-[4/3] rounded-4xl object-cover" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>

                <PageCTA />
            </main>
        </FrontLayout>
    );
};

export default Facilities;
