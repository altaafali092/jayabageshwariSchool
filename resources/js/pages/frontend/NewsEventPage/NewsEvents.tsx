import React, { useState, useMemo } from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link, InfiniteScroll } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    ArrowRight,
    Search,
    Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { News } from '@/types/Frontend/Index';
import { newsShow } from '@/actions/App/Http/Controllers/FrontController';
import PageHero from '@/components/frontend/PageHero';
import parse from 'html-react-parser';

// Structured to accept Inertia's paginated data type payload
interface PaginatedNews {
    data: News[];
    next_page_url: string | null;
    prev_page_url: string | null;
    current_page: number;
    links: any[];
}

interface NewsEventProps {
    newsEvents: PaginatedNews;
}

const NewsEvents = ({ newsEvents }: NewsEventProps) => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const limitText = (html: string | null, limit: number) => {
        if (!html) return '';
        if (html.length <= limit) return html;
        return html.substring(0, limit) + "...";
    };

    const resolveDisplayImage = (rawImage: any): string => {
        if (!rawImage) return '/placeholder-image.jpg';

        let imagesArray: string[] = [];
        if (Array.isArray(rawImage)) {
            imagesArray = rawImage;
        } else if (typeof rawImage === 'string') {
            if (rawImage.startsWith('[') && rawImage.endsWith(']')) {
                try {
                    imagesArray = JSON.parse(rawImage);
                } catch (e) {
                    imagesArray = [rawImage];
                }
            } else {
                imagesArray = [rawImage];
            }
        }

        if (imagesArray.length === 0) return '/placeholder-image.jpg';
        return imagesArray[0]; // Returns first index photo reliably
    };

    // Derived category lists out of the global loaded paginated pipeline feed
    const categories = useMemo(() => {
        const unique = Array.from(
            new Set(newsEvents.data.map(item => item.category))
        ).filter(Boolean);
        return ['All', ...unique];
    }, [newsEvents.data]);

    // Computed internal search-and-filter logic run on current view items
    const filteredNews = useMemo(() => {
        return newsEvents.data.filter(item => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch = item.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  item.description?.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery, newsEvents.data]);

    return (
        <FrontLayout>
            <Head title="News & Events - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                <PageHero
                    badgeText='Stay Informed'
                    title="News & Events"
                    description="Stay informed about the latest happenings, achievements, and upcoming activities."
                />

                {/* ── FILTER & SEARCH BAR ───────────────────────────────── */}
                <section className="sticky top-[80px] z-40 border-b border-slate-100 dark:border-slate-800 py-6 shadow-lg backdrop-blur-md bg-slate-50/90 dark:bg-slate-950/90">
                    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Categories */}
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full lg:w-auto">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer",
                                        activeCategory === cat
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar Input */}
                        <div className="relative w-full lg:w-72">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="SEARCH ARTICLES..."
                                className="w-full h-12 pl-12 pr-4 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-bold outline-none focus:border-blue-600 transition-all uppercase tracking-widest"
                            />
                        </div>
                    </div>
                </section>

                {/* ── MAIN PAGINATED ARTICLES GRID ──────────────────────── */}
                <section className="py-24 bg-slate-50/50 dark:bg-slate-950/50">
                    <div className="container mx-auto px-6 lg:px-20">
                        
                        {/* Native Inertia Infinite Scroll Engine Wrapper */}
                        <InfiniteScroll data="newsEvents" onlyNext buffer={400}>
                            {({ loadingNext }) => (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                                        {filteredNews.map((item) => {
                                            const selectedImage = resolveDisplayImage(item.image);

                                            return (
                                                <Link
                                                    key={item.id}
                                                    href={newsShow(item.slug)}
                                                    className="group flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                                                >
                                                    <div className="relative aspect-[3/2] overflow-hidden">
                                                        <img
                                                            src={selectedImage}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                        <div className="absolute top-4 left-4">
                                                            <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 text-[8px] font-black uppercase tracking-widest shadow-sm">
                                                                {item.category}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="p-6 flex flex-col flex-1">
                                                        <div className="flex items-center gap-3 mb-4 text-slate-400">
                                                            <span className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest">
                                                                <Calendar className="w-3 h-3" />
                                                                {new Date(item.created_at).toLocaleDateString('en-US', {
                                                                    year: 'numeric', month: 'long', day: 'numeric'
                                                                })}
                                                            </span>
                                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                            <span className="flex items-center gap-1 text-[8px] font-black uppercase tracking-widest">
                                                                <Clock className="w-3 h-3" />
                                                                {new Date(item.created_at).toLocaleTimeString('en-US', {
                                                                    hour: 'numeric', minute: 'numeric'
                                                                })}
                                                            </span>
                                                        </div>

                                                        <h3 className="text-lg font-black italic mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                            {limitText(item.title, 20)}
                                                        </h3>

                                                        <div className="text-[12px] font-bold text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                                                            {parse(limitText(item.description, 30))}
                                                        </div>

                                                        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                                                            <div className="flex items-center justify-between w-full">
                                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                                    Read Full Article
                                                                </span>
                                                                <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* Appended Loading Spinner at base layer */}
                                    {loadingNext && (
                                        <div className="flex items-center justify-center gap-2 py-12 text-slate-500 text-xs font-bold uppercase tracking-widest">
                                            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                                            Loading more articles...
                                        </div>
                                    )}
                                </>
                            )}
                        </InfiniteScroll>

                        {filteredNews.length === 0 && (
                            <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-wider">
                                No articles found.
                            </div>
                        )}

                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default NewsEvents;