import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    CheckCircle2,
    Star,
    Zap,
    Target,
    Smile,
    Users,
    ArrowRight,
    TrendingUp,
    ShieldCheck
} from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Academic Excellence",
            desc: "Consistent 100% pass rate in national board examinations with top-tier rankings in the region.",
            icon: TrendingUp,
            color: "blue"
        },
        {
            title: "Value-Based Education",
            desc: "We prioritize moral character and social ethics as much as academic achievements.",
            icon: ShieldCheck,
            color: "emerald"
        },
        {
            title: "Modern Infrastructure",
            desc: "Smart classrooms, advanced labs, and a tech-integrated campus for future-ready learning.",
            icon: Zap,
            color: "orange"
        },
        {
            title: "Experienced Faculty",
            desc: "Over 85+ highly qualified and dedicated teachers who mentor students with personalized care.",
            icon: Users,
            color: "purple"
        },
        {
            title: "Holistic Development",
            desc: "Extensive extracurricular programs including sports, arts, music, and leadership clubs.",
            icon: starIcon,
            color: "red"
        },
        {
            title: "Global Perspective",
            desc: "International exchange programs and a curriculum that meets global standards.",
            icon: Target,
            color: "pink"
        }
    ];

    return (
        <FrontLayout>
            <Head title="Why Choose Us - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Star className="w-3 h-3" />
                            <span>The JBS Advantage</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            WHY <span className="text-blue-500">JBS</span> IS THE RIGHT <br />CHOICE FOR YOU
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Empowering students through innovation, tradition, and a commitment to excellence.
                        </p>
                    </div>
                </section>

                {/* ================= FEATURES GRID ================= */}
                <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {reasons.map((reason, i) => (
                                <div key={i} className="group p-10 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500 relative overflow-hidden">
                                    <div className="relative z-10 space-y-6">
                                        <div className="w-16 h-16 rounded-3xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                            {reason.icon && <reason.icon className="w-7 h-7" />}
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">{reason.title}</h3>
                                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed italic">
                                                {reason.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="absolute top-10 right-10 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 dark:group-hover:opacity-[0.07] transition-opacity">
                                        {reason.icon && <reason.icon className="w-24 h-24 dark:text-white" />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= TESTIMONIALS PREVIEW ================= */}
                <section className="py-24 bg-slate-900 dark:bg-black relative overflow-hidden transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <Smile className="w-16 h-16 text-blue-500 dark:text-blue-400 mx-auto" />
                            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase italic tracking-tighter leading-tight">
                                "THE TEACHERS AT JBS DON'T JUST TEACH; THEY MENTOR AND INSPIRE."
                            </h2>
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-blue-400 dark:text-blue-300 uppercase tracking-[0.3em]">Arun Sharma</p>
                                <p className="text-[10px] font-black text-slate-500 dark:text-slate-600 uppercase tracking-widest italic">Alumni, Batch of 2018</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ================= COMPARISON SECTION ================= */}
                <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-center transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 space-y-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                            UNMATCHED <span className="text-blue-600 dark:text-blue-500">STANDARDS</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { label: "Teacher-Student Ratio", val: "1:20" },
                                { label: "Practical Sessions", val: "Weekly" },
                                { label: "Board Results", val: "100%" },
                                { label: "ECA Participation", val: "Mandatory" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 space-y-3 transition-colors duration-300">
                                    <h4 className="text-3xl font-black text-slate-900 dark:text-white italic tracking-tighter leading-none">{item.val}</h4>
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-blue-600 dark:bg-blue-700 text-center transition-colors duration-300">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-10">
                        <h2 className="text-4xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-tight">
                            CHOOSE THE <br />RIGHT PATH <br /><span className="text-slate-950 dark:text-blue-950">FOR YOUR FUTURE</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/admissions" className="w-full sm:w-auto h-20 px-12 bg-slate-950 dark:bg-black text-white rounded-4xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 dark:hover:text-white transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-black/20 group">
                                Start Your Application
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

const starIcon = (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);

const Link = ({ href, children, className }: any) => (
    <a href={href} className={className}>{children}</a>
);

export default WhyChooseUs;
