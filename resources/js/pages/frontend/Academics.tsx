import React, { useState, useEffect } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    BookOpen,
    GraduationCap,
    Trophy,
    Users,
    ChevronRight,
    ArrowRight,
    Library,
    Microscope,
    Calculator,
    Languages,
    Music,
    Palette,
    Heart,
    Star,
    Zap,
    Target,
    Award,
    Sparkles,
    CheckCircle2,
    ChevronDown,
    Building2,
    Stethoscope,
    Hammer,
    Briefcase,
    Gavel,
    Plane
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Academics = () => {
    const [activeTab, setActiveTab] = useState('Primary');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const level = params.get('level');
        if (level) {
            const tabMap: Record<string, string> = {
                'primary': 'Primary',
                'secondary': 'Secondary',
                'higher-secondary': 'Higher Secondary'
            };
            if (tabMap[level]) setActiveTab(tabMap[level]);
        }
    }, []);

    const tabs = ['Primary', 'Secondary', 'Higher Secondary'];

    const academicContent = {
        'Primary': {
            badge: "Building Foundations",
            title: "Nurturing Young Minds",
            subtitle: "Grades 1 - 5",
            description: "Our primary education program focuses on building strong foundations for lifelong learning through innovative teaching methods and holistic development approaches.",
            highlights: [
                { title: "Nurturing Minds", desc: "Balanced academic program with modern teaching methodologies.", icon: Heart },
                { title: "Small Class Sizes", desc: "Student-teacher ratio of 20:1 for personalized learning.", icon: Users },
                { title: "Creative Arts", desc: "Regular art, music, and drama activities to foster self-expression.", icon: Palette },
                { title: "Physical Education", desc: "Daily sports activities for healthy development and teamwork.", icon: Trophy }
            ],
            curriculum: [
                { subject: "Languages", desc: "Reading, writing, grammar, and communication skills in English & Nepali.", icon: Languages },
                { subject: "Mathematics", desc: "Problem-solving, logical thinking, and numerical skills.", icon: Calculator },
                { subject: "Science", desc: "Environmental studies and basic scientific concepts through observation.", icon: Microscope },
                { subject: "Digital Literacy", desc: "Basic computer skills and introduction to the digital world.", icon: Library }
            ],
            dayInLife: [
                { time: "Morning Assembly", activity: "Daily prayers, exercises, and positive start with announcements." },
                { time: "Academic Sessions", activity: "Interactive learning in core subjects including Math and Science." },
                { time: "Break & Lunch", activity: "Nutritious meals and recreational time for social interaction." },
                { time: "Creative Studio", activity: "Art, music, and drama sessions for holistic development." },
                { time: "Guided Study", activity: "Teacher-assisted homework and reinforcement sessions." }
            ]
        },
        'Secondary': {
            badge: "Excellence Driven",
            title: "Advanced Learning Hub",
            subtitle: "Grades 6 - 10",
            description: "Our secondary program provides comprehensive education that prepares students for national board examinations (SEE) and future academic challenges.",
            highlights: [
                { title: "Academic Rigor", desc: "Rigorous curriculum aligned with national board standards.", icon: Award },
                { title: "Career Guidance", desc: "Workshops and counseling to help students find their true calling.", icon: Target },
                { title: "STEM Focus", desc: "Advanced science and mathematics preparation for technical fields.", icon: Sparkles },
                { title: "Research Hub", desc: "Independent and group projects to foster critical inquiry.", icon: Microscope }
            ],
            streams: [
                { name: "Science Stream", desc: "Physics, Chemistry, and Biology focus for medical and research aspiratns.", icon: Microscope },
                { name: "Mathematics Stream", desc: "Advanced calculus and physics for future engineers and innovators.", icon: Calculator },
                { name: "Management Stream", desc: "Economics and accountancy base for entrepreneurs and leaders.", icon: Briefcase }
            ],
            features: [
                "Modernized Science & IT Labs",
                "Smart Classrooms with Digital Tools",
                "Advanced Public Speaking Training",
                "Mock SEE Board Examinations",
                "Inter-school Academic Competitions"
            ]
        },
        'Higher Secondary': {
            badge: "Professional Gateway",
            title: "Career-Focused Growth",
            subtitle: "Grades 11 - 12",
            description: "Offering specialized streams that prepare students for university education and global professional careers through advanced skill development.",
            highlights: [
                { title: "Entrance Prep", desc: "Intensive coaching for medical, engineering, and C.A. entrance exams.", icon: Zap },
                { title: "Career Readiness", desc: "Focus on practical skills, industry exposure, and professional ethics.", icon: Briefcase },
                { title: "Leadership", desc: "Student councils and community projects to build real-world leaders.", icon: Users },
                { title: "Global Vision", desc: "International best practices in pedagogy and research methodology.", icon: BookOpen }
            ],
            pathways: [
                { field: "Medical Field", career: "MBBS, BDS, Nursing, Pharmacy & Allied Sciences", icon: Stethoscope },
                { field: "Engineering", career: "Civil, Mechanical, Electrical & IT Disciplines", icon: Hammer },
                { field: "Business & Finance", career: "BBA, MBA, Chartered Accountancy & Finance", icon: Briefcase },
                { field: "Legal Services", career: "LLB, Civil Services & Legal Consultancy", icon: Gavel },
                { field: "Tech & Aero", career: "Software Engineering, AI & Aviation Industries", icon: Plane }
            ],
            specializedStreams: [
                { name: "Science", details: "Physics, Chem, Biology/Math with advanced lab research." },
                { name: "Management", details: "Business Studies, Economics, Accountancy & Math." },
                { name: "Law", details: "Legal Studies, Political Science & Sociology focus." }
            ]
        }
    };

    const current = academicContent[activeTab as keyof typeof academicContent];

    return (
        <FrontLayout>
            <Head title={`${activeTab} Level - Academics | Jaya Bageshwori`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Sparkles className="w-3 h-3" />
                            <span>{current.badge}</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            {current.title.split(' ').map((word, i) => (
                                <span key={i} className={i === 1 ? 'text-blue-500' : ''}>{word} </span>
                            ))}
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            {current.description}
                        </p>
                    </div>
                </section>

                {/* ================= LEVEL SELECTOR ================= */}
                <section className="sticky top-[70px] lg:top-[80px] z-40 border-b border-slate-100 dark:border-slate-800 py-4 lg:py-0 shadow-lg shadow-blue-900/5 backdrop-blur-md bg-slate-50/90 dark:bg-slate-900/90 overflow-hidden transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="flex items-center justify-center lg:justify-between">
                            <div className="hidden lg:flex items-center">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={cn(
                                            "px-8 py-6 text-[10px] font-black uppercase tracking-widest transition-all relative group",
                                            activeTab === tab ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                                        )}
                                    >
                                        {tab}
                                        <span className={cn(
                                            "absolute bottom-0 left-0 right-0 h-1 bg-blue-600 dark:bg-blue-400 transition-transform duration-300",
                                            activeTab === tab ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                        )} />
                                    </button>
                                ))}
                            </div>

                            <div className="lg:hidden w-full relative">
                                <select
                                    value={activeTab}
                                    onChange={(e) => setActiveTab(e.target.value)}
                                    className="w-full h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 font-black text-[10px] uppercase tracking-widest appearance-none outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all text-slate-900 dark:text-white"
                                >
                                    {tabs.map(tab => <option key={tab} value={tab}>{tab}</option>)}
                                </select>
                                <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>

                            <Link href="/admissions" className="hidden lg:flex items-center gap-3 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest hover:gap-5 transition-all italic">
                                Enrollment Open 2026-27 <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ================= DYNAMIC CONTENT ================= */}
                <div className="min-h-[800px]">
                    {/* Common Header Info */}
                    <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 transition-colors duration-300">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <div className="space-y-10">
                                    <div className="space-y-6">
                                        <p className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">{current.subtitle}</p>
                                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                            EVERY CHILD HAS A <br /><span className="text-blue-600 dark:text-blue-500">UNIQUE SPARK</span>
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {current.highlights.map((item, i) => (
                                            <div key={i} className="p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-4 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-black/50 transition-all">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-600 dark:text-blue-400 border border-transparent dark:border-slate-700">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{item.title}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-4/5 rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/20 dark:shadow-black/50 border-8 border-white dark:border-slate-800 group transition-colors duration-300">
                                        <img
                                            src={
                                                activeTab === 'Primary'
                                                    ? "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop"
                                                    : activeTab === 'Secondary'
                                                        ? "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                                                        : "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
                                            }
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                            alt=""
                                        />
                                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    {/* Sub-features for Higher/Secondary */}
                                    {activeTab !== 'Primary' && (
                                        <div className="absolute -bottom-10 -left-10 bg-slate-900 dark:bg-slate-800 p-8 rounded-[3rem] shadow-2xl border border-white/10 dark:border-slate-700 space-y-4 max-w-[280px] transition-colors duration-300">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Board Pass Rate: 100%</span>
                                            </div>
                                            <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-relaxed">Consistently ranked Top 3 in the regional academic standings.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Specific Academic Content Sections */}
                    {activeTab === 'Primary' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Curriculum Grid */}
                            <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                                <div className="container mx-auto px-6 lg:px-20 text-center mb-16 space-y-4">
                                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                        CORE <span className="text-blue-600 dark:text-blue-400">SUBJECTS</span>
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Balanced academic program for holistic development</p>
                                </div>
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {(current as any).curriculum.map((sub: any, i: number) => (
                                            <div key={i} className="group p-10 bg-white dark:bg-slate-800 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-900/5 dark:shadow-black/50 hover:-translate-y-2 transition-all duration-500">
                                                <div className="w-16 h-16 rounded-3xl bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                    <sub.icon className="w-7 h-7" />
                                                </div>
                                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-3">{sub.subject}</h4>
                                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tight">{sub.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Day in Life Timeline */}
                            <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="max-w-4xl mx-auto">
                                        <div className="text-center mb-20 space-y-4">
                                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                                A DAY IN <span className="text-blue-600 dark:text-blue-500">PRIMARY</span>
                                            </h2>
                                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Structured activities for optimal learning & engagement</p>
                                        </div>
                                        <div className="space-y-4">
                                            {(current as any).dayInLife.map((step: any, i: number) => (
                                                <div key={i} className="group flex flex-col sm:flex-row items-center gap-8 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-900/5 dark:hover:shadow-black/50 transition-all">
                                                    <div className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest italic shrink-0">
                                                        {step.time}
                                                    </div>
                                                    <p className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight text-center sm:text-left">
                                                        {step.activity}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Secondary' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Streams Grid */}
                            <section className="py-24 bg-slate-950 dark:bg-black text-white overflow-hidden relative transition-colors duration-300">
                                <div className="absolute top-0 right-0 p-32 opacity-10 dark:opacity-5">
                                    <Building2 className="w-80 h-80 text-blue-500 dark:text-blue-400" />
                                </div>
                                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                                    <div className="text-center mb-20 space-y-4">
                                        <h2 className="text-3xl lg:text-5xl font-black text-white uppercase italic tracking-tighter">
                                            ACADEMIC <span className="text-blue-500 dark:text-blue-400">STREAMS</span>
                                        </h2>
                                        <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Pre-Board preparation and stream specialization</p>
                                    </div>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                        {(current as any).streams.map((stream: any, i: number) => (
                                            <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 dark:border-slate-800 hover:bg-white/10 dark:hover:bg-slate-900 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all group">
                                                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 text-blue-500 dark:text-blue-400 flex items-center justify-center mb-10 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all">
                                                    <stream.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-2xl font-black text-white uppercase italic tracking-tight mb-4">{stream.name}</h4>
                                                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 leading-relaxed uppercase tracking-tight">{stream.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Key Features for Secondary */}
                            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop" className="aspect-3/4 rounded-4xl object-cover sm:-translate-y-8" alt="" />
                                        </div>
                                        <div className="space-y-10">
                                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight">
                                                WHY SECONDARY <br /> AT <span className="text-blue-600 dark:text-blue-500">JBS SCHOOL?</span>
                                            </h2>
                                            <div className="space-y-6">
                                                {(current as any).features.map((feature: any, i: number) => (
                                                    <div key={i} className="flex items-center gap-6 group">
                                                        <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0 border border-transparent dark:border-slate-800">
                                                            <CheckCircle2 className="w-5 h-5" />
                                                        </div>
                                                        <p className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'Higher Secondary' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Professional Pathways */}
                            <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="text-center mb-20 space-y-4">
                                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                            CAREER <span className="text-blue-600 dark:text-blue-400">PATHWAYS</span>
                                        </h2>
                                        <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">Preparing students for diverse professional fields</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {(current as any).pathways.map((path: any, i: number) => (
                                            <div key={i} className="p-10 bg-white dark:bg-slate-800 rounded-4xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-900/5 dark:shadow-black/50 hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-500 group">
                                                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white transition-all">
                                                    <path.icon className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight mb-2 group-hover:text-white transition-colors">{path.field}</h4>
                                                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest group-hover:text-white/60 transition-colors leading-relaxed">{path.career}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* Specialized Streams */}
                            <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                                <div className="container mx-auto px-6 lg:px-20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                        <div className="space-y-12">
                                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-tight">
                                                GLOBAL <span className="text-blue-600 dark:text-blue-500">STANDARDS</span> <br /> IN PEDAGOGY
                                            </h2>
                                            <div className="space-y-8">
                                                {(current as any).specializedStreams.map((stream: any, i: number) => (
                                                    <div key={i} className="p-10 border-l-4 border-blue-600 dark:border-blue-500 bg-slate-50 dark:bg-slate-900 rounded-r-4xl space-y-2 transition-colors duration-300">
                                                        <h4 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{stream.name}</h4>
                                                        <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tight">{stream.details}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-6 relative">
                                            <div className="space-y-6">
                                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=600&auto=format&fit=crop" className="aspect-4/5 rounded-4xl object-cover" alt="" />
                                            </div>
                                            <div className="space-y-6 pt-12">
                                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop" className="aspect-4/5 rounded-4xl object-cover" alt="" />
                                                <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop" className="aspect-square rounded-4xl object-cover" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </div>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-slate-900 dark:bg-black text-center relative overflow-hidden transition-colors duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)]" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-12">
                        <div className="space-y-4 text-center">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                SECURE YOUR <br /> <span className="text-blue-500 dark:text-blue-400">ACADEMIC FUTURE</span>
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest max-w-2xl mx-auto">Take the first step towards excellence by enrolling in our 2026-27 session. Limited seats available for specialized streams.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/admissions" className="w-full sm:w-auto h-20 px-12 bg-blue-600 dark:bg-blue-600 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-blue-600 dark:hover:text-white transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20 dark:shadow-blue-900/40 group">
                                Apply for Admission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                            <Link href="/contact" className="w-full sm:w-auto h-20 px-12 bg-white/5 dark:bg-slate-900/50 border border-white/10 dark:border-slate-800 text-white rounded-4xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl">
                                Request Prospectus
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default Academics;
