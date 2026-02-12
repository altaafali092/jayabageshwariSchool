import React from 'react';
import { CheckCircle2, MoveRight, Star, Award, BookOpen } from 'lucide-react';

const AboutSchool = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Soft decorative background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 dark:bg-slate-900/50 skew-x-12 translate-x-1/2 z-0" />

            <div className="container relative z-10 px-6 mx-auto lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Text Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg">
                                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                                <span>30+ Years of Academic Excellence</span>
                            </div>
                            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl lg:leading-tight">
                                Shaping Bright <span className="text-blue-700 dark:text-blue-500">Futures</span> Since 1992
                            </h2>
                        </div>

                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                            At Jaya Bageshwori School, we believe every child has a unique spark. Our legacy is built on nurturing that spark through a balanced approach of rigorous academics, character building, and creative exploration.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />, text: "Ranked Top in Region" },
                                { icon: <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />, text: "Global Curriculum" },
                                { icon: <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />, text: "Expert Faculty" },
                                { icon: <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />, text: "Digital Learning" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800">
                                    {item.icon}
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <a
                                href="/about/history"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-slate-900 dark:bg-blue-600 rounded-2xl hover:bg-slate-800 dark:hover:bg-blue-700 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-blue-900/20 active:scale-95 group"
                            >
                                Explore Our Story
                                <MoveRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>

                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 border-2 border-white dark:border-slate-800 rounded-full bg-slate-200 dark:bg-slate-700" />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <span className="block font-bold text-slate-900 dark:text-white">10k+ Alumni</span>
                                    <span className="text-slate-500 dark:text-slate-500 text-xs">Leading across industries</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Video Section */}
                    <div className="relative group lg:ml-10">
                        {/* Decorative Frames */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-blue-600/30 rounded-tr-3xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-blue-600/30 rounded-bl-3xl -z-10" />

                        <div className="relative overflow-hidden shadow-2xl rounded-4xl aspect-video ring-8 ring-white dark:ring-slate-900">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/Yyn4D5LOaWI?autoplay=1&mute=1&loop=1&playlist=Yyn4D5LOaWI&controls=0&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3"
                                title="School promotional video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>

                            {/* Ambient Overlay - Subtle darkening only at edges */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                            {/* Live Badge */}
                            <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full animate-pulse shadow-lg">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                Virtual Tour
                            </div>
                        </div>

                        {/* Floating Metric */}
                        <div className="absolute -bottom-10 -right-6 md:right-10 bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-slate-900 dark:text-white leading-none">98%</p>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Success Rate</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSchool;