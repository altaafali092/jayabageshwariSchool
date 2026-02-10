import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

const slides = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
        title: "Welcome to Jaya Bageshwori",
        description: "Empowering students to achieve their full potential through quality education and holistic development.",
        primaryCta: "Admissions Open",
        secondaryCta: "Learn More"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        title: "State-of-the-Art Facilities",
        description: "Providing a modern learning environment with advanced laboratories, libraries, and sports facilities.",
        primaryCta: "Take a Tour",
        secondaryCta: "View Gallery"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1577896333050-59852b4a7e6e?q=80&w=2070&auto=format&fit=crop",
        title: "Dedicated Faculty",
        description: "Learn from experienced and passionate educators committed to your academic success.",
        primaryCta: "Meet Our Team",
        secondaryCta: "Contact Us"
    }
];

const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div 
            className="relative h-[500px] md:h-[600px] w-full overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={cn(
                        "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    )}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 via-blue-900/40 to-transparent z-10" />
                    <img 
                        src={slide.image} 
                        alt={slide.title} 
                        className="w-full h-full object-cover"
                    />
                    
                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex items-center">
                        <div className="container mx-auto px-4 md:px-8 lg:px-16">
                            <div className="max-w-3xl text-white">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl opacity-90 leading-relaxed drop-shadow-md">
                                    {slide.description}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 text-sm rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        {slide.primaryCta}
                                    </button>
                                    <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-semibold py-2 px-6 text-sm rounded-full transition-all backdrop-blur-sm">
                                        {slide.secondaryCta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={cn(
                            "w-3 h-3 rounded-full transition-all",
                            index === current 
                                ? "bg-white w-8" 
                                : "bg-white/50 hover:bg-white/80"
                        )}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
