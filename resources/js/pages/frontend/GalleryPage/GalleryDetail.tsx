import React, { useState } from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Camera, ArrowLeft, Play, Images,
    Calendar, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Gallery } from '@/types/Frontend/Gallery';
import { galleryShow } from '@/actions/App/Http/Controllers/FrontController';

interface Props {
    gallery: Gallery;
    related: Gallery[];
}

const getEmbedUrl = (url: string) => {
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return m ? `https://www.youtube.com/embed/${m[1]}` : url;
};

const Lightbox = ({
    images,
    activeIndex,
    onClose,
    onPrev,
    onNext,
}: {
    images: string[];
    activeIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) => (
    <div
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center backdrop-blur-sm"
        onClick={onClose}
    >
        <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-600/20 flex items-center justify-center text-white transition-all duration-300"
        >
            <X className="w-6 h-6" />
        </button>

        <span className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/70 uppercase tracking-widest">
            {activeIndex + 1} of {images.length}
        </span>

        {activeIndex > 0 && (
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all duration-300 group"
            >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
        )}

        <img
            src={images[activeIndex]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        />

        {activeIndex < images.length - 1 && (
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all duration-300 group"
            >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
        )}
    </div>
);

export default function GalleryDetail({ gallery, related }: Props) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const images: string[] = Array.isArray(gallery.images) ? gallery.images : [];
    const isVideo = gallery.gallery_type === 'Video';
    const backToGallery = () => window.history.back();
    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const heroBg = images[0] ?? related[0]?.images?.[0] ?? null;

    return (
        <FrontLayout>
            <Head title={`${gallery.title} — Gallery | Jaya Bageshwori School`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── HERO SECTION ─────────────────────────────────────────── */}
                <section className="relative pt-16 pb-10 bg-blue-950 overflow-hidden">
                    {heroBg && (
                        <div className="absolute inset-0">
                            <img
                                src={heroBg}
                                alt=""
                                className="w-full h-full object-cover opacity-25 blur-sm scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-blue-950/40" />
                        </div>
                    )}

                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        <div onClick={backToGallery}

                            className="inline-flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors group hover:bg-blue-600/20 rounded-lg px-4 py-2 cursor-pointer"
                        >
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                            Back to Gallery
                        </div>

                        <div className="max-w-4xl space-y-8">
                            <div className="flex flex-wrap items-center gap-4 text-xs font-black text-slate-300 uppercase tracking-widest">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                                    {isVideo ? <Play className="w-3 h-3 fill-current" /> : <Images className="w-3 h-3" />}
                                    {gallery.gallery_type}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    {formatDate(gallery.created_at)}
                                </span>
                                {!isVideo && images.length > 0 && (
                                    <span className="flex items-center gap-2">
                                        <Camera className="w-4 h-4 text-blue-400" />
                                        {images.length} {images.length === 1 ? 'Photo' : 'Photos'}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-3xl lg:text-4xl font-black text-white">
                                {gallery.title}
                            </h1>

                            {gallery.description && (
                                <p className="text-slate-300 font-medium text-lg leading-relaxed max-w-3xl">
                                    {gallery.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── MAIN CONTENT ────────────────────────────────────────── */}
                <section className="py-16">
                    <div className="container mx-auto px-6 lg:px-20">

                        {/* VIDEO EMBED */}
                        {isVideo && gallery.video_url && (
                            <div className="max-w-5xl mx-auto mb-12">
                                <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-200 dark:border-slate-800 bg-black">
                                    <iframe
                                        src={getEmbedUrl(gallery.video_url)}
                                        title={gallery.title}
                                        className="w-full h-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        )}

                        {/* PHOTO GRID */}
                        {!isVideo && images.length > 0 && (
                            <div>
                                <div className="mb-8">
                                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-2">
                                        Gallery Collection
                                    </p>
                                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                        All <span className="text-blue-600">PHOTOS</span>
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {images.map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="group relative aspect-[7/5] overflow-hidden rounded-xl cursor-pointer bg-slate-100 dark:bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-800"
                                            onClick={() => setLightboxIndex(idx)}
                                        >
                                            <img
                                                src={img}
                                                alt={`${gallery.title} - ${idx + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Photo Number Badge */}
                                            <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                {idx + 1}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                </section>

                {/* ── RELATED GALLERIES ────────────────────────────────────── */}
                {related.length > 0 && (
                    <section className="py-14 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className="mb-12">
                                <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] block mb-2">
                                    Explore More
                                </span>
                                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                    RELATED <span className="text-blue-600">GALLERIES</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                {related.map((item) => {
                                    const thumb = Array.isArray(item.images) ? item.images[0] : null;
                                    const isVid = item.gallery_type === 'Video';

                                    return (
                                        <Link
                                            key={item.id}
                                            href={galleryShow(item.slug)}
                                            className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 block border border-slate-200 dark:border-slate-800"
                                        >
                                            {thumb ? (
                                                <img
                                                    src={thumb}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                    loading="lazy"
                                                />
                                            ) : isVid ? (
                                                <div className="w-full h-full bg-slate-950 flex items-center justify-center">
                                                    <Play className="w-10 h-10 text-white/40 group-hover:text-blue-500 transition-colors duration-300 fill-current" />
                                                </div>
                                            ) : null}

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                                <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-2">
                                                    {item.gallery_type}
                                                </span>
                                                <h4 className="text-sm font-black uppercase italic leading-snug tracking-wide line-clamp-2">
                                                    {item.title}
                                                </h4>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── LIGHTBOX ─────────────────────────────────────────────── */}
                {lightboxIndex !== null && !isVideo && (
                    <Lightbox
                        images={images}
                        activeIndex={lightboxIndex}
                        onClose={() => setLightboxIndex(null)}
                        onPrev={() => setLightboxIndex(lightboxIndex - 1)}
                        onNext={() => setLightboxIndex(lightboxIndex + 1)}
                    />
                )}

            </main>
        </FrontLayout>
    );
}