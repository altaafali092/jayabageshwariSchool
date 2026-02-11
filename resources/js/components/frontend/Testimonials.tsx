import React, { useState, useEffect } from 'react';
import { Quote, Star, MessageSquare, ChevronRight, GraduationCap, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
    {
        id: 1,
        name: "Mr. Bharat Sharma",
        role: "School Chairman",
        message: "Our vision is to provide a world-class education that empowers students to lead with integrity, innovation, and a global perspective.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    },
    {
        id: 2,
        name: "Ms. Sarita Sharma",
        role: "Senior Secondary Teacher",
        message: "At Jaya Bageshwori, we cultivate curiosity. Seeing students transform into confident critical thinkers is our greatest reward.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    },
    {
        id: 3,
        name: "Aaryan Adhikari",
        role: "Grade 10 Student",
        message: "The robotics lab and mentored environment helped me discover my passion and reach for my wildest academic dreams.",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // Helper for visible items in the vertical slide
    const getVisibleItems = () => {
        return [testimonials[currentIndex]];
    };

    return (
        <section className="py-16 bg-slate-100 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Brand Story & CTA */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                                Voices From Our <br />
                                <span className="text-orange-600">School Community</span>
                            </h2>

                            <p className="text-lg text-slate-600 font-medium max-w-lg leading-relaxed">
                                Hear inspiring messages from our Chairman, dedicated teachers, and proud students
                                who together shape the learning culture of our school.
                            </p>

                        </div>

                        <div className="flex">
                            <button className="h-14 px-8 bg-orange-600 text-white font-black text-base rounded-2xl shadow-xl shadow-orange-600/20 hover:bg-slate-900 transition-all active:scale-95 flex items-center gap-3">
                                Become a Member
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Awards/Logos section */}
                        <div className="space-y-4 pt-8 border-t border-slate-200">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Our Excellence Recognized By</p>
                            <div className="flex flex-wrap gap-6 items-center opacity-60">
                                <div className="flex items-center gap-2 text-slate-800">
                                    <GraduationCap className="w-5 h-5" />
                                    <span className="font-black text-base tracking-tighter">MOE Nepal</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-800">
                                    <Users className="w-5 h-5" />
                                    <span className="font-black text-base tracking-tighter">PABSON</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Vertical Auto-Sliding Cards */}
                    <div className="relative h-[400px] flex flex-col justify-center">
                        <div className="w-full">
                            {getVisibleItems().map((item) => (
                                <div
                                    key={`${item.id}-${currentIndex}`}
                                    className="w-full bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-8 items-start transition-all duration-700 ease-in-out transform"
                                    style={{
                                        animation: 'slideInVertical 0.7s ease-out forwards'
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 rounded-2xl object-cover shrink-0 border-4 border-slate-50 shadow-md"
                                    />
                                    <div className="space-y-4 flex-1">
                                        <div className="space-y-1">
                                            <h4 className="font-black text-slate-900 text-xl leading-none">{item.name}</h4>
                                            <p className="text-xs font-bold text-orange-600 uppercase tracking-[0.2em]">{item.role}</p>
                                        </div>
                                        <p className="text-slate-600 font-bold leading-relaxed text-sm italic pr-4">
                                            "{item.message}"
                                        </p>
                                        <div className="flex gap-1 pt-1">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-orange-500 text-orange-500" />)}
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
