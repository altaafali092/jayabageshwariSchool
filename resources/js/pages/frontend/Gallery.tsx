import React, { useState } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Camera,
    Play,
    Maximize2,
    ArrowRight,
    Image as ImageIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Gallery } from '@/types/Frontend/Gallery';
import { gallery } from '@/routes';
import { galleryShow } from '@/actions/App/Http/Controllers/FrontController';


interface GalleryProps {
    galleries: Gallery[]
    galleryTypes: { value: string; label: string }[]
}

const GalleryPage = ({ galleries, galleryTypes }: GalleryProps) => {

    const [activeTab, setActiveTab] = useState<string>('All');
    const tabs = galleryTypes;
    const video = galleries.filter(item => item.gallery_type === 'Video');
    const photo = galleries.filter(item => item.gallery_type === 'Photo');

    const filteredItems =
        activeTab === 'All'
            ? galleries
            : galleries.filter(item => item.gallery_type === activeTab);

    return (
        <FrontLayout>
            <Head title="Campus Gallery - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* HERO SECTION */}
                <section className="relative pt-24 pb-20 bg-blue-950 overflow-hidden text-center">
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                            <Camera className="w-3 h-3" />
                            <span>Visual Journey</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                            OUR <span className="text-blue-500">CAMPUS</span> IN FRAME
                        </h1>
                    </div>
                </section>

                {/* TABS */}
                <section className="sticky top-[80px] z-40 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 py-6 px-6 lg:px-0">
                    {/* All Button */}
                    <div className='flex gap-2 mx-6'>
                        <button
                            onClick={() => setActiveTab('All')}
                            className={cn(
                                "px-6 py-2 rounded-xl text-xs font-bold uppercase transition",
                                activeTab === 'All'
                                    ? "bg-slate-900 text-white"
                                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                            )}
                        >
                            All
                        </button>

                        {/* Enum Tabs */}
                        {tabs.map((type) => (
                            <button
                                key={type.value}
                                onClick={() => setActiveTab(type.value)}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-xs font-bold uppercase transition",
                                    activeTab === type.value
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                )}
                            >
                                {type.value}
                            </button>
                        ))}
                    </div>
                </section>

                {/* GALLERY GRID */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {filteredItems.map((item) => {

                                // ✅ Pick random image from images array
                                const image = Array.isArray(item.images)
                                    ? item.images[Math.floor(Math.random() * item.images.length)]
                                    : item.images;
                                const isVideo = item.gallery_type === "Video";
                                const videoSrc = isVideo ? item.video_url : null;

                                const getEmbedUrl = (url: string) => {
                                    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
                                    const match = url.match(regExp);
                                    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
                                };
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

                                        {/* VIDEO */}
                                        {isVideo && videoSrc && (
                                            <iframe
                                                src={getEmbedUrl(videoSrc)}
                                                title={item.title}
                                                className="w-full h-full object-cover"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        )}

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                                        {/* Bottom Info */}
                                        <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition duration-500">

                                            <h4 className="text-lg text-white font-bold">
                                                {item.title}
                                            </h4>
                                        </div>
                                        <Link href={galleryShow(item.slug)} className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition duration-500">
                                            <span className="bg-white/90 backdrop-blur-sm font-bold text-slate-900 text-xs uppercase tracking-widest px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors">
                                                View More <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </Link>


                                    </div>
                                );
                            })}

                        </div>

                        {/* META */}
                        <div className="mt-16 flex justify-between items-center">
                            <p className="text-xs uppercase text-slate-400 font-bold">
                                Showing {filteredItems.length} of {galleries.length}
                            </p>
                            <button className="flex items-center gap-2 text-xs uppercase font-bold">
                                Load More
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </section>

            </main>
        </FrontLayout>
    );
};

export default GalleryPage;