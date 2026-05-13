import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Image as ImageIcon, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Gallery } from '@/types/Frontend/Gallery';


interface Props {
    galleries: Gallery[]
}
const GallerySlider = ({ galleries }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isAutoplay, setIsAutoplay] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % galleries.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + galleries.length) % galleries.length);
    };

    useEffect(() => {
        if (isAutoplay && !selectedImage) {
            const timer = setInterval(nextSlide, 5000);
            return () => clearInterval(timer);
        }
    }, [isAutoplay, nextSlide, selectedImage]);

    // Handle smooth scrolling for the track
    useEffect(() => {
        if (scrollContainerRef.current) {
            const itemWidth = scrollContainerRef.current.offsetWidth / 3; // Show 3 items on desktop
            scrollContainerRef.current.scrollTo({
                left: currentIndex * itemWidth,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header - Matching NoticeCarousel Style */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 rounded-lg">
                            <ImageIcon className="w-4 h-4" />
                            <span>Visual Journey</span>
                        </div>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                            School <span className="text-blue-600 dark:text-blue-500">Gallery</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            A glimpse into the vibrant life, modern infrastructure, and memorable moments at Jaya Bageshwori School.
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-sm active:scale-95"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all shadow-sm active:scale-95"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Gallery Track */}
                <div
                    className="relative overflow-hidden group"
                    onMouseEnter={() => setIsAutoplay(false)}
                    onMouseLeave={() => setIsAutoplay(true)}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex transition-transform duration-500 ease-in-out gap-6 snap-x snap-mandatory overflow-x-hidden"
                    >
                        {galleries?.map((gallery) => (
                            gallery?.images?.map((image, idx) => {
                                const imgSrc = typeof image === 'string' ? image : (image as any)?.url || image;
                                return (
                                    <div
                                        key={`${gallery.id}-${idx}`}
                                        onClick={() => setSelectedImage(imgSrc)}
                                        className="cursor-pointer min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-start group/item relative h-80 rounded-[2rem] overflow-hidden shadow-xl"
                                    >
                                        <img
                                            src={imgSrc}
                                            alt={gallery.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                                        />

                                        {/* Overlay on Hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                            <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover/item:opacity-100 transition-all duration-500 hover:bg-white/40">
                                                <Maximize2 className="w-5 h-5 text-white" />
                                            </div>

                                            <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
                                                {gallery.gallery_type}
                                            </span>

                                            <h3 className="text-white text-xl font-bold mb-4">
                                                {gallery.title}
                                            </h3>

                                        </div>
                                    </div>
                                )
                            })
                        ))}
                    </div>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-2 mt-10">
                    {galleries.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={cn(
                                "h-2 transition-all duration-300 rounded-full",
                                currentIndex === index ? "w-8 bg-blue-600" : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox / Preview Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 transition-all animate-in fade-in zoom-in duration-300">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-all border border-white/20"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src={selectedImage}
                            alt="Full preview"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default GallerySlider;