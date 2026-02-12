import React, { useState, useEffect } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Wifi,
    Coffee,
    Music,
    Dribbble,
    Shield,
    Activity,
    Plus,
    ArrowRight,
    Home,
    Bus,
    Laptop,
    Camera,
    ChevronDown,
    BookOpen,
    Users,
    Waves,
    Utensils,
    Building2,
    MapPin,
    Search,
    Dumbbell,
    Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';

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
        { name: "Sports Academy", category: "Athletics", icon: Dribbble },
        { name: "Arts & Culture", category: "Creative", icon: Users },
        { name: "Music Studio", category: "Performative", icon: Music },
        { name: "Cafeteria", category: "Nutrition", icon: Coffee },
        { name: "Transport", category: "Services", icon: Bus },
        { name: "Medical Room", category: "Health", icon: Activity }
    ];

    return (
        <FrontLayout>
            <Head title={`${activeTab} - Facilities | Jaya Bageshwori`} />

            <main className="flex-1 bg-white">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Home className="w-3 h-3" />
                            <span>Campus Life</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            {activeTab === 'Overview' ? 'WORLD CLASS' : activeTab.toUpperCase()} <br />
                            <span className="text-blue-500">{activeTab === 'Overview' ? 'INFRASTRUCTURE' : 'FACILITIES'}</span>
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Discover the facilities that make Jaya Bageshwori a premier institution for holistic student development.
                        </p>
                    </div>
                </section>

                {/* ================= CATEGORY SELECTOR (Dropdown/Tabs) ================= */}
                <section className="sticky top-[80px] lg:top-[110px] z-40 border-b border-slate-100 py-4 lg:py-0 shadow-lg shadow-blue-900/5 backdrop-blur-md bg-slate-50/90 overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="flex items-center justify-center lg:justify-between">
                            {/* Horizontal Tabs (Desktop) */}
                            <div className="hidden lg:flex items-center">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "px-8 py-6 text-[10px] font-black uppercase tracking-widest transition-all relative group",
                                            activeTab === tab ? "text-blue-600" : "text-slate-500 hover:text-blue-600"
                                        )}
                                    >
                                        {tab}
                                        <span className={cn(
                                            "absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transition-transform duration-300",
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
                                    className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-6 font-black text-[10px] uppercase tracking-widest appearance-none outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
                                >
                                    {tabs.map(tab => <option key={tab} value={tab}>{tab}</option>)}
                                </select>
                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>

                            <Link href="/admissions" className="hidden lg:flex items-center gap-3 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:gap-5 transition-all">
                                Take a Campus Tour <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= CONTENT AREA ================= */}
                <div className="min-h-[600px]">
                    {activeTab === 'Overview' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Original Content for Overview */}
                            <section className="py-24 bg-white">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="space-y-24">
                                        {mainFacilities.map((facility, i) => (
                                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                                <div className="flex-1 space-y-8">
                                                    <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                                                        <facility.icon className="w-7 h-7" />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                                            {facility.title}
                                                        </h2>
                                                        <p className="text-sm lg:text-base font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                                            Building blocks of excellence
                                                        </p>
                                                    </div>
                                                    <p className="text-sm font-bold text-slate-600 leading-relaxed max-w-xl">
                                                        {facility.desc}
                                                    </p>
                                                    <button className="flex items-center gap-4 text-xs font-black text-slate-900 uppercase tracking-widest group italic">
                                                        View Gallery <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowRight className="w-4 h-4" /></div>
                                                    </button>
                                                </div>
                                                <div className="flex-1 relative w-full aspect-4/3 rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10 group">
                                                    <img src={facility.image} alt={facility.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                                    <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Lifestyle Grid */}
                            <section className="py-24 bg-slate-50">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="text-center mb-16 space-y-4">
                                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 uppercase italic tracking-tighter">
                                            BEYOND <span className="text-blue-600">ACADEMICS</span>
                                        </h2>
                                        <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Everything your child needs for a balanced educational journey</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {lifestyles.map((item, i) => (
                                            <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-slate-950/2 hover:shadow-2xl hover:shadow-blue-600/20">
                                                <div className="flex items-start justify-between mb-8">
                                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-white/20 group-hover:text-white transition-all">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <Plus className="w-6 h-6 text-slate-200 group-hover:text-white/40 transition-colors" />
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:text-white/60 transition-colors">{item.category}</p>
                                                    <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tight group-hover:text-white transition-colors">{item.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Hostel' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="py-24">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                                        <div className="space-y-10">
                                            <div className="space-y-6">
                                                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                                    A CALM <span className="text-blue-600">RESIDENCY</span>
                                                </h2>
                                                <p className="text-lg font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                                    Our hostel provide a safe, secure, and nurturing environment that feels like a home away from home.
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {[
                                                    { title: "Comfortable Rooms", desc: "Spacious, well-ventilated, and hygienic living quarters.", icon: Home },
                                                    { title: "Nutritious Meals", desc: "Balanced and delicious vegetarian meals prepared in a modern kitchen.", icon: Utensils },
                                                    { title: "24/7 Supervision", desc: "Dedicated wardens and security personnel to ensure safety.", icon: Shield },
                                                    { title: "Study Halls", desc: "Quiet zones designed for group studies and individual focus.", icon: Laptop }
                                                ].map((box, i) => (
                                                    <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                                                        <box.icon className="w-8 h-8 text-blue-600 mb-4" />
                                                        <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight mb-2">{box.title}</h4>
                                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{box.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <div className="aspect-3/4 bg-slate-100 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-white">
                                                <img src="https://images.unsplash.com/photo-1555854817-5b2337a8973b?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                                            </div>
                                            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50 max-w-[200px]">
                                                <p className="text-4xl font-black text-blue-600 italic leading-none mb-2">200+</p>
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-tight">Capacity for Resident Students</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Transportation' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="py-24 bg-slate-50/50">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                                        <div className="flex-1 relative order-2 lg:order-1">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-4">
                                                    <div className="aspect-3/4 rounded-4xl bg-blue-600 p-8 flex flex-col justify-end text-white">
                                                        <Bus className="w-12 h-12 mb-6" />
                                                        <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">Safe Transit</h4>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">GPS Tracked Fleet</p>
                                                    </div>
                                                    <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover shadow-xl" alt="" />
                                                </div>
                                                <div className="space-y-4 pt-12">
                                                    <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover shadow-xl" alt="" />
                                                    <div className="aspect-3/4 rounded-4xl bg-slate-900 p-8 flex flex-col justify-end text-white">
                                                        <MapPin className="w-12 h-12 mb-6 text-blue-500" />
                                                        <h4 className="text-2xl font-black uppercase italic tracking-tighter leading-none mb-2">35+ Routes</h4>
                                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-80">Covering Entire City</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-10 order-1 lg:order-2">
                                            <div className="space-y-6">
                                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">RELIABLE & PUNCTUAL</span>
                                                <h2 className="text-5xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                                    EASY <span className="text-blue-600">TRANSIT</span>
                                                </h2>
                                                <p className="text-lg font-bold text-slate-500 leading-relaxed uppercase tracking-tight">
                                                    Our extensive transportation network ensures that every student can reach school safely and comfortably from any part of the city.
                                                </p>
                                            </div>
                                            <ul className="space-y-6">
                                                {[
                                                    "GPS Real-time tracking for parents",
                                                    "Experienced and background-checked drivers",
                                                    "Trained attendants on every bus",
                                                    "Strict maintenance schedules",
                                                    "First-aid kits and emergency protocols"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-4 text-xs font-black text-slate-900 uppercase tracking-widest group cursor-default">
                                                        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                            <Plus className="w-4 h-4" />
                                                        </div>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Sports' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="py-24 overflow-hidden">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="text-center mb-24 space-y-6">
                                        <h2 className="text-5xl lg:text-7xl font-black text-slate-900 uppercase italic tracking-tighter">
                                            CHAMPIONS <span className="text-blue-600">HUB</span>
                                        </h2>
                                        <p className="text-lg font-bold text-slate-500 max-w-3xl mx-auto leading-relaxed uppercase tracking-tight">
                                            We believe in building character through sports. Our world-class facilities support a wide range of athletic activities.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {[
                                            { name: "Football Ground", size: "Full Size AstroTurf", icon: Dribbble, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop" },
                                            { name: "Basketball Court", size: "Indoor Multi-Purpose", icon: Trophy, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop" },
                                            { name: "Swimming Pool", size: "Temperature Controlled", icon: Waves, img: "https://images.unsplash.com/photo-1560090500-16f5c88939c4?q=80&w=600&auto=format&fit=crop" },
                                            { name: "Fitness Center", size: "High Performance Lab", icon: Dumbbell, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" }
                                        ].map((sport, i) => (
                                            <div key={i} className="group relative aspect-3/4 rounded-4xl overflow-hidden shadow-2xl shadow-blue-900/10">
                                                <img src={sport.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
                                                <div className="absolute bottom-0 left-0 p-8 space-y-2">
                                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4">
                                                        <sport.icon className="w-5 h-5" />
                                                    </div>
                                                    <h4 className="text-xl font-black text-white uppercase italic tracking-tight leading-none">{sport.name}</h4>
                                                    <p className="text-[10px] font-black text-white/60 uppercase tracking-widest">{sport.size}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Library' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <section className="py-24 bg-slate-900 overflow-hidden relative">
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
                                                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop" className="aspect-4/3 rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1544640808-32ca72ac7f07?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                            </div>
                                            <div className="space-y-6 pt-12">
                                                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&auto=format&fit=crop" className="aspect-4/3 rounded-4xl object-cover" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-white text-center">
                    <div className="container mx-auto px-6 lg:px-20 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">
                                EXPERIENCE LIFE <br /> AT <span className="text-blue-600">JBS SCHOOL</span>
                            </h2>
                            <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Schedule a physical tour or explore our virtual campus</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/gallery" className="w-full sm:w-auto h-20 px-12 bg-slate-900 text-white rounded-4xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-slate-900/10 group">
                                Virtual Tour
                                <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </Link>
                            <Link href="/admissions" className="w-full sm:w-auto h-20 px-12 bg-white border-2 border-slate-900 text-slate-950 rounded-4xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-4 italic">
                                Admission Inquiry
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Facilities;
