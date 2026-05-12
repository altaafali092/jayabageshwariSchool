import React, { useState, useEffect } from 'react';
import { Quote, Star, MessageSquare, ChevronRight, GraduationCap, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Testomonial } from '@/types/Frontend/Testomonial';
import parse from 'html-react-parser';



const Testimonials = ({ testomonials }: { testomonials: Testomonial[] }) => {

    const limitText = (html: any, limit: number) => {
        if (html.length <= limit) return html;
        return html.substring(0, limit) + "...";
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testomonials.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // Helper for visible items in the vertical slide
    const getVisibleItems = () => {
        return [testomonials[currentIndex]];
    };

    return (
        <section className="py-3 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Brand Story & CTA */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                                Voices From Our <br />
                                <span className="text-blue-700 dark:text-blue-500">School Community</span>
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-lg leading-relaxed">
                                Hear inspiring messages from our Chairman, dedicated teachers, and proud students
                                who together shape the learning culture of our school.
                            </p>

                        </div>

                    </div>

                    {/* Right Side: Vertical Auto-Sliding Cards */}
                    <div className="relative h-[400px] flex flex-col justify-center">
                        <div className="w-full">
                            {getVisibleItems().map((item) => (
                                <div
                                    key={`${item.id}-${currentIndex}`}
                                    className="w-full bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 flex gap-8 items-start transition-all duration-700 ease-in-out transform"
                                    style={{
                                        animation: 'slideInVertical 0.7s ease-out forwards'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-2xl object-cover shrink-0 border-4 border-slate-50 dark:border-slate-800 shadow-md"
                                    />
                                    <div className="space-y-4 flex-1">
                                        <div className="space-y-1">
                                            <h4 className="font-black text-slate-900 dark:text-white text-xl leading-none">{item.name}</h4>
                                            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em]">{item.role}</p>
                                        </div>

                                        <div className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed text-sm italic pr-4">
                                            {parse(limitText(item.description, 200))}
                                        </div>
                                        <div className="flex gap-1 pt-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-5 w-5 ${i < item.star ? "text-amber-500" : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes slideInVertical {
                    0% {
                        opacity: 0;
                        transform: translateY(15px) scale(0.97);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
