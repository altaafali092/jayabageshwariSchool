import React, { useState, useMemo } from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link, InfiniteScroll } from '@inertiajs/react';
import { Camera, Play, ArrowRight, Loader2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Gallery } from '@/types/Frontend/Gallery';
import { galleryShow } from '@/actions/App/Http/Controllers/FrontController';

interface PaginatedGalleries {
    data: Gallery[];
    next_page_url: string | null;
    prev_page_url: string | null;
    current_page: number;
    links: any[];
    total: number;
}

interface GalleryProps {
    galleries: PaginatedGalleries;
    galleryTypes: { value: string; label: string }[];
}

const GalleryPage = ({ galleries, galleryTypes }: GalleryProps) => {
    const [activeTab, setActiveTab] = useState<string>('All');
    const tabs = galleryTypes;

    // Filter items based on selected tab over the loaded chunk elements
    const filteredItems = useMemo(() => {
        return activeTab === 'All'
            ? galleries.data
            : galleries.data.filter(item => item.gallery_type === activeTab);
    }, [activeTab, galleries.data]);

    const getYoutubeThumbnail = (url: string) => {
        const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?#\/\s]+)/;
        const match = url.match(regExp);
        return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : "/assets/video-placeholder.jpg";
    };

    return (
        <FrontLayout>
            <Head title="Campus Gallery - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* HERO SECTION */}
                <section className="relative pt-16 pb-12 bg-blue-950 overflow-hidden text-center">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                            <Camera className="w-3 h-3" />
                            <span>Visual Journey</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                            OUR <span className="text-blue-500">CAMPUS</span> IN FRAME
                        </h1>
                    </div>
                </section>

                {/* TABS */}
                <section className="sticky top-[80px] z-40 bg-white dark:bg-slate-950 border-b border-slate-200/40 dark:border-slate-800/40 py-4 px-6 lg:px-0">
                    <div className='flex gap-2 mx-6 overflow-x-auto no-scrollbar'>
                        <button
                            onClick={() => setActiveTab('All')}
                            className={cn(
                                "px-6 py-2 rounded-xl text-xs font-bold uppercase transition whitespace-nowrap cursor-pointer",
                                activeTab === 'All'
                                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                    : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                            )}
                        >
                            All
                        </button>

                        {tabs.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setActiveTab(type.value)}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-xs font-bold uppercase transition whitespace-nowrap cursor-pointer",
                                    activeTab === type.value
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                        : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                                )}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* GALLERY GRID */}
                <section className="py-12">
                    <div className="container mx-auto px-6 lg:px-20">
                        
                        {/* * Pass `disable` prop to stop automatic background viewport triggers.
                          * We explicitly pull `loadNext` out of the render callback props loop.
                        */}
                        <InfiniteScroll data="galleries" onlyNext disable>
                            {({ loadingNext, loadNext }) => (
                                <>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {filteredItems.map((item) => {
                                            const image = Array.isArray(item.images)
                                                ? item.images[Math.floor(Math.random() * item.images.length)]
                                                : item.images;
                                            const isVideo = item.gallery_type === "Video";
                                            const videoSrc = isVideo ? item.video_url : null;

                                            return (
                                                <div
                                                    key={item.id}
                                                    className="group relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 hover:shadow-2xl transition-all duration-500"
                                                >
                                                    {/* PHOTO */}
                                                    {!isVideo && image && (
                                                        <img
                                                            src={image}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                    )}

                                                    {/* VIDEO THUMBNAIL */}
                                                    {isVideo && videoSrc && (
                                                        <div className="relative w-full h-full">
                                                            <img
                                                                src={getYoutubeThumbnail(videoSrc)}
                                                                alt={item.title}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                loading="lazy"
                                                            />
                                                            <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors duration-300">
                                                                <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300">
                                                                    <Play className="w-6 h-6 fill-white ml-0.5" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                                    {/* Bottom Info */}
                                                    <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500 pr-24">
                                                        <h4 className="text-lg text-white font-bold line-clamp-1">
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                    
                                                    <Link 
                                                        href={galleryShow(item.slug)} 
                                                        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500"
                                                    >
                                                        <span className="bg-white/90 backdrop-blur-sm font-bold text-slate-900 text-xs uppercase tracking-widest px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                                                            View More <ArrowRight className="w-3 h-3" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Manual Trigger Section */}
                                    <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                                        <p className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                                            Showing {filteredItems.length} of {galleries.total} items
                                        </p>

                                        {/* Show manual click button only if a next page url exists in the paginated collection */}
                                        {galleries.next_page_url && (
                                            <button
                                                onClick={() => loadNext()}
                                                disabled={loadingNext}
                                                className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-xl transition-all disabled:opacity-50 cursor-pointer"
                                            >
                                                {loadingNext ? (
                                                    <>
                                                        <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                                                        Loading...
                                                    </>
                                                ) : (
                                                    <>
                                                        Load More
                                                        <Plus className="w-4 h-4" />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </InfiniteScroll>

                        {filteredItems.length === 0 && (
                            <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-wider">
                                No elements found.
                            </div>
                        )}

                    </div>
                </section>

            </main>
        </FrontLayout>
    );
};

export default GalleryPage;