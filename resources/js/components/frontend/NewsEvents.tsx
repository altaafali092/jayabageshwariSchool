import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Calendar, ArrowRight, Clock, MapPin, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { News } from '@/types/Frontend/Index';

interface EventProps {
    events: News[];
}

const NewsEvents = ({ events = [] }: EventProps) => {
    // Memoize filtered results to avoid recalculation on every render
    const filterNews = useMemo(() => events.filter(event => event.category === 'News'), [events]);
    const filterEvents = useMemo(() => events.filter(event => event.category === 'Event'), [events]);


    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slideCount = filterNews.length;

    const nextSlide = useCallback(() => {
        if (slideCount === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, [slideCount]);

    const prevSlide = useCallback(() => {
        if (slideCount === 0) return;
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideCount) % slideCount);
    }, [slideCount]);

    // Autoplay functionality
    useEffect(() => {
        if (!isPaused && slideCount > 1) {
            const interval = setInterval(nextSlide, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused, nextSlide, slideCount]);

    // Reset index if data changes and current index is out of bounds
    useEffect(() => {
        if (currentIndex >= slideCount && slideCount > 0) {
            setCurrentIndex(0);
        }
    }, [slideCount, currentIndex]);

    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return dateString;
        }
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
            <div className="container px-6 mx-auto lg:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-700 dark:text-blue-400 uppercase bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            What's Happening
                        </span>
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                            Latest <span className="text-blue-700 dark:text-blue-500">News & Events</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="/news"
                            className="group hidden md:inline-flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors mr-6"
                        >
                            View All News
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </a>
                        <div className="flex gap-2">
                            <button
                                onClick={prevSlide}
                                aria-label="Previous news"
                                disabled={slideCount <= 1}
                                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transition-all border border-slate-100 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                aria-label="Next news"
                                disabled={slideCount <= 1}
                                className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-blue-700 dark:hover:bg-blue-600 hover:text-white transition-all border border-slate-100 dark:border-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* News Slider Section */}
                    <div
                        className="lg:col-span-8 overflow-hidden relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {slideCount > 0 ? (
                            <>
                                <div
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                >
                                    {filterNews.map((item) => (
                                        <div key={item.id} className="w-full shrink-0 px-2 lg:px-0">
                                            <article className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-500 mx-1">
                                                <div className="grid grid-cols-1 md:grid-cols-2 h-full md:min-h-[450px]">
                                                    <div className="relative h-64 md:h-full overflow-hidden">
                                                        <img
                                                            src={item.image}
                                                            alt={item.title}
                                                            loading="lazy"
                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                        />
                                                        <div className="absolute top-4 left-4">
                                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-xs font-bold text-blue-700 dark:text-blue-400 shadow-sm border border-white/20 dark:border-slate-800">
                                                                <Tag className="w-3 h-3" />
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="p-8 md:p-12 flex flex-col">
                                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-4">
                                                            <Calendar className="w-4 h-4" />
                                                            {formatDate(item.created_at)}
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-2 min-h-[4rem]">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-4 overflow-hidden text-lg italic">
                                                            {item.description}
                                                        </p>
                                                        <div className="mt-auto">
                                                            <a href={`/news/${item.id}`} className="inline-flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold group/link">
                                                                Read Full Story
                                                                <div className="w-6 h-px bg-slate-900 dark:bg-slate-100 transition-all group-hover/link:w-10" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                </div>

                                {/* Progress Dots */}
                                {slideCount > 1 && (
                                    <div className="flex justify-center gap-2 mt-8">
                                        {filterNews.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentIndex(idx)}
                                                aria-label={`Go to slide ${idx + 1}`}
                                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx
                                                    ? 'w-8 bg-blue-700 dark:bg-blue-500'
                                                    : 'w-2 bg-slate-300 dark:bg-slate-700'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="h-full flex items-center justify-center p-12 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
                                <p className="text-slate-500 dark:text-slate-400 font-medium">No recent news available.</p>
                            </div>
                        )}
                    </div>

                    {/* Events Section */}
                    <div className="lg:col-span-4">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 h-full flex flex-col">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                                Upcoming Events
                            </h3>

                            <div className="space-y-6 flex-1">
                                {filterEvents.length > 0 ? (
                                    filterEvents.map((event) => (
                                        <div key={event.id} className="group flex gap-6 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300 border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                                            <div className="shrink-0 w-16 h-20 bg-blue-700 dark:bg-blue-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg shadow-blue-200 dark:shadow-blue-900/40 transition-transform group-hover:scale-105">
                                                <span className="text-xl font-black leading-none">{event.event_date?.split('-')[2] || '??'}</span>
                                                <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-80">
                                                    {event.event_date ? new Date(event.event_date).toLocaleDateString(undefined, { month: 'short' }) : '---'}
                                                </span>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
                                                    {event.title}
                                                </h4>
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                        <Clock className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400" />
                                                        {event.event_time || 'TBD'}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                                                        <MapPin className="w-3.5 h-3.5 text-red-500 dark:text-red-400" />
                                                        {event.event_location || 'Campus'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="py-12 text-center">
                                        <p className="text-slate-500 dark:text-slate-400 text-sm">No upcoming events scheduled.</p>
                                    </div>
                                )}
                            </div>

                            <button className="w-full mt-10 py-4 px-6 rounded-2xl border-2 border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-900 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white hover:border-slate-900 dark:hover:border-blue-600 transition-all duration-300 active:scale-[0.98]">
                                View Event Calendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
