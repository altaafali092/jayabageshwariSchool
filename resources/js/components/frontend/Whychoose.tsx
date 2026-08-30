import React from 'react';
import {
    GraduationCap, Users, Lightbulb, ShieldCheck, Trophy, Laptop
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { admissions } from '@/routes';

const Whychoose = () => {

    const currentYear = new Date().getFullYear();
    const features = [
        {
            icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
            title: "Academic Excellence",
            description: "We provide a rigorous curriculum taught by experienced educators, ensuring our students reach their full academic potential."
        },
        {
            icon: <Users className="w-8 h-8 text-indigo-600" />,
            title: "Holistic Development",
            description: "Beyond academics, we focus on personality development, leadership skills, and emotional intelligence through various co-curricular activities."
        },
        {
            icon: <Laptop className="w-8 h-8 text-cyan-600" />,
            title: "Modern Infrastructure",
            description: "Equipped with digital classrooms, modern science labs, and a resource-rich library to support 21st-century learning."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Safe & Supportive",
            description: "A secure campus environment where every child feels valued, safe, and encouraged to explore their unique talents."
        },
        {
            icon: <Trophy className="w-8 h-8 text-amber-600" />,
            title: "Extracurricular Focus",
            description: "From sports to performing arts, we provide numerous platforms for students to excel in their areas of interest."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-rose-600" />,
            title: "Innovative Teaching",
            description: "We employ interactive teaching methods that foster critical thinking, creativity, and a lifelong love for learning."
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-50" />

            <div className="container relative z-10 px-6 mx-auto lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto mb-20 text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        Our Distinction
                    </span>
                    <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                        Why Choose <span className="text-blue-700 dark:text-blue-500">Jaya Bageshwari</span>?
                    </h2>
                    <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-400">
                        We are committed to nurturing the next generation of leaders through a perfect blend of traditional values and modern innovation.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 lg:odd:translate-y-4 lg:even:-translate-y-4 lg:hover:translate-y-0"
                        >
                            <div className="absolute top-0 left-0 w-2 h-0 transition-all duration-500 bg-blue-600 dark:bg-blue-500 group-hover:h-full rounded-l-3xl" />

                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                    {React.cloneElement(feature.icon as React.ReactElement, {
                                        className: `w-8 h-8 transition-colors duration-500 ${(feature.icon as React.ReactElement).props.className.replace('text-blue-600', 'text-blue-600 dark:text-blue-400').replace('text-indigo-600', 'text-indigo-600 dark:text-indigo-400').replace('text-cyan-600', 'text-cyan-600 dark:text-cyan-400').replace('text-emerald-600', 'text-emerald-600 dark:text-emerald-400').replace('text-amber-600', 'text-amber-600 dark:text-amber-400').replace('text-rose-600', 'text-rose-600 dark:text-rose-400')} group-hover:text-white`
                                    })}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600 dark:text-slate-400 text-lg">
                                        {feature.description}
                                    </p>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-6 p-6 md:p-4 bg-white dark:bg-slate-900 rounded-2xl  border border-gray-200 dark:border-slate-800 transition-all duration-300">
                        <div className="flex items-center gap-4 px-4 py-2 md:py-0">
                            <div className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 dark:bg-blue-500"></span>
                            </div>

                            <div className="text-left">
                                <h4 className="text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white leading-tight">
                                    Join 500+ Active Students
                                </h4>
                                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                                    Excellence in every structural step // {currentYear} Cohort
                                </p>
                            </div>
                        </div>


                        <div className="hidden md:block w-px h-10 bg-slate-200 dark:bg-slate-800" />

                        <Link
                            href={admissions()}
                            className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 bg-blue-700 dark:bg-blue-600 rounded-xl hover:bg-blue-800 dark:hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/10 active:scale-[0.98] w-full md:w-auto"
                        >
                            Enroll Your Child Today
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
