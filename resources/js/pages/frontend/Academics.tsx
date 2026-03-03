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
import { AcademicLevel } from '@/types/Frontend/Academics';
interface AcademicProps {
    levels: AcademicLevel[]
    academicLevel: AcademicLevel;
}


const Academics = ({ levels, academicLevel }: AcademicProps) => {


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


    return (
        <FrontLayout>
            <Head title=" Academics | Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Sparkles className="w-3 h-3" />
                            <span>{academicLevel.title}</span> {/* ✅ Shows current academic level */}
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            {academicLevel.title}
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            {academicLevel.description}
                        </p>
                    </div>
                </section>


                {/* ================= DYNAMIC CONTENT ================= */}


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
