import React from 'react';
import {
    GraduationCap,
    Users,
    Lightbulb,
    ShieldCheck,
    Trophy,
    Laptop
} from 'lucide-react';

const Whychoose = () => {
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
        <section className="relative py-20 overflow-hidden bg-slate-50">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50" />

            <div className="container relative z-10 px-6 mx-auto lg:px-12">
                {/* Section Header */}
                <div className="max-w-3xl mx-auto mb-20 text-center">
                    <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full">
                        Our Distinction
                    </span>
                    <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                        Why Choose <span className="text-blue-700">Jaya Bageshwori</span>?
                    </h2>
                    <p className="text-xl leading-relaxed text-slate-600">
                        We are committed to nurturing the next generation of leaders through a perfect blend of traditional values and modern innovation.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 lg:odd:translate-y-4 lg:even:-translate-y-4 lg:hover:translate-y-0"
                        >
                            <div className="absolute top-0 left-0 w-2 h-0 transition-all duration-500 bg-blue-600 group-hover:h-full rounded-l-3xl" />

                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                                    {React.cloneElement(feature.icon as React.ReactElement, {
                                        className: `w-8 h-8 transition-colors duration-500 ${(feature.icon as React.ReactElement).props.className} group-hover:text-white`
                                    })}
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="leading-relaxed text-slate-600 text-lg">
                                        {feature.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:gap-4">
                                        <span className="relative">
                                            Discover More
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA or Metric */}
                <div className="mt-20 text-center">
                    <div className="inline-flex flex-col md:flex-row items-center gap-8 p-8 md:p-4 bg-white rounded-3xl shadow-lg border border-slate-100">
                        <div className="flex items-center gap-4 px-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                                        <div className="w-full h-full bg-linear-to-br from-blue-400 to-indigo-500" />
                                    </div>
                                ))}
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-slate-900">Join 500+ Students</p>
                                <p className="text-xs text-slate-500">Excellence in every step</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-12 bg-slate-200" />

                        <a
                            href="/admissions"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-blue-700 rounded-2xl hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200 active:scale-95"
                        >
                            Enroll Your Child Today
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whychoose;
