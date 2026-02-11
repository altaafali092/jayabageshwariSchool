import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, Users, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        badge: "Excellence in Education",
        badgeIcon: <GraduationCap className="w-4 h-4" />,
        title: "Nurturing Minds, Building Futures",
        description: "Join a community dedicated to academic rigor and holistic development, where every child's potential is realized.",
        primaryCta: "Apply for 2026",
        secondaryCta: "Watch Video",
        color: "blue"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        badge: "Modern Campus",
        badgeIcon: <Sparkles className="w-4 h-4" />,
        title: "State-of-the-Art Learning Spaces",
        description: "From advanced science labs to digital libraries, we provide the tools for tomorrow's leaders.",
        primaryCta: "Explore Facilities",
        secondaryCta: "Virtual Tour",
        color: "indigo"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2070&auto=format&fit=crop",
        badge: "Holistic Growth",
        badgeIcon: <Users className="w-4 h-4" />,
        title: "A Vibrant Community for Everyone",
        description: "Beyond academics, we foster creativity through arts, sports, and leadership programs.",
        primaryCta: "Join the Team",
        secondaryCta: "Meet Faculty",
        color: "cyan"
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div
            className="relative h-[650px] md:h-[750px] w-full overflow-hidden group bg-slate-900"
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out",
                        index === current ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
                    )}
                >
                    {/* Background Image with Ken Burns Effect */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={cn(
                                "w-full h-full object-cover transition-transform duration-10000 ease-linear",
                                index === current ? "scale-110" : "scale-100"
                            )}
                        />
                        {/* Multi-layered Overlays */}
                        <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent md:bg-linear-to-t md:from-slate-950/60" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="container mx-auto px-6 md:px-12 lg:px-20">
                            <div className="max-w-3xl space-y-8">
                                {/* Badge */}
                                <div className={cn(
                                    "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 backdrop-blur-md transition-all duration-700 delay-300",
                                    index === current && isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                                )}>
                                    {slide.badgeIcon}
                                    <span className="text-xs font-black uppercase tracking-widest">{slide.badge}</span>
                                </div>

                                {/* Title */}
                                <h1 className={cn(
                                    "text-5xl md:text-7xl font-black text-white leading-[1.1] transition-all duration-700 delay-500",
                                    index === current && isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )}>
                                    {slide.title.split(' ').map((word, i) => (
                                        <span key={i} className={cn(i % 2 === 1 && "text-blue-500")}>{word} </span>
                                    ))}
                                </h1>

                                {/* Description */}
                                <p className={cn(
                                    "text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed transition-all duration-700 delay-700",
                                    index === current && isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )}>
                                    {slide.description}
                                </p>

                                {/* CTAs */}
                                <div className={cn(
                                    "flex flex-wrap items-center gap-6 pt-4 transition-all duration-700 delay-900",
                                    index === current && isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                )}>
                                    <button className="group relative px-8 py-4 bg-blue-600 text-white font-black rounded-2xl overflow-hidden transition-all hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-95">
                                        <span className="relative z-10 flex items-center gap-2">
                                            {slide.primaryCta}
                                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-linear-to-r from-blue-400/0 via-white/20 to-blue-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </button>

                                    <button className="flex items-center gap-3 px-8 py-4 text-white font-bold bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl hover:bg-white/10 transition-all active:scale-95 group">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-transform group-hover:rotate-12">
                                            <ChevronRight className="w-5 h-5" />
                                        </div>
                                        {slide.secondaryCta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Premium Controls */}
            <div className="absolute inset-x-12 bottom-12 z-30 flex items-center justify-between">
                {/* Dots Navigation with Progress Effect */}
                <div className="flex gap-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className="group relative h-1.5 transition-all"
                        >
                            <div className={cn(
                                "h-full rounded-full bg-white/20 transition-all duration-300",
                                index === current ? "w-20" : "w-10 group-hover:bg-white/40"
                            )} />
                            {index === current && (
                                <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full animate-hero-progress" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-4">
                    <button
                        onClick={prevSlide}
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl transition-all hover:bg-blue-600 hover:border-blue-500 active:scale-90"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-xl transition-all hover:bg-blue-600 hover:border-blue-500 active:scale-90"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <style>{`
                @keyframes hero-progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
                .animate-hero-progress {
                    animation: hero-progress 5s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default HeroCarousel;

