import React, { useState } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Camera, ArrowLeft, ArrowRight, Play, Images,
    Calendar, Tag, Share2, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Gallery } from '@/types/Frontend/Gallery';
import { Button } from '@/components/ui/button';
import { galleryShow } from '@/actions/App/Http/Controllers/FrontController';


interface Props {
    gallery: Gallery;
    related: Gallery[];
}

// ─── YouTube embed helper ─────────────────────────────────────────────────────
const getEmbedUrl = (url: string) => {
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return m ? `https://www.youtube.com/embed/${m[1]}?autoplay=1` : url;
};


// ─── Lightbox ────────────────────────────────────────────────────────────────
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
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        onClick={onClose}
    >
        {/* Close */}
        <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
        >
            <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <span className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] font-black text-white/50 uppercase tracking-widest">
            {activeIndex + 1} / {images.length}
        </span>

        {/* Prev */}
        {activeIndex > 0 && (
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all"
            >
                <ChevronLeft className="w-7 h-7" />
            </button>
        )}

        {/* Image */}
        <img
            src={images[activeIndex]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
        />

        {/* Next */}
        {activeIndex < images.length - 1 && (
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-all"
            >
                <ChevronRight className="w-7 h-7" />
            </button>
        )}
    </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GalleryDetail({ gallery, related }: Props) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const images: string[] = Array.isArray(gallery.images) ? gallery.images : [];
    const isVideo = gallery.gallery_type === 'Video';


    const formatDate = (d: string) =>
        new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Hero: first image for photo galleries, first image from related as fallback
    const heroBg = images[0] ?? related[0]?.images?.[0] ?? null;
    const handleBack = () => window.history.back()

    return (
        <FrontLayout>
            <Head title={`${gallery.title} — Gallery | Jaya Bageshwori`} />



            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">

                {/* ── HERO ─────────────────────────────────────────────────── */}
                <section className="relative pt-10 pb-24 bg-slate-900 overflow-hidden">
                    {/* blurred background */}
                    {heroBg && (
                        <div className="absolute inset-0">
                            <img
                                src={heroBg}
                                alt=""
                                className="w-full h-full object-cover opacity-25 blur-sm scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />
                        </div>
                    )}

                    <div className="container relative z-10 mx-auto px-6 lg:px-20">
                        {/* Back */}
                        <Button onClick={handleBack}

                            className="inline-flex items-center bg-white p-2 rounded-2xl gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-12 hover:text-gray-600 transition-colors group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Gallery
                        </Button>

                        <div className="max-w-4xl space-y-6">
                            {/* Type badge */}
                            <div className="flex flex-wrap items-center gap-4">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                                    {isVideo ? <Play className="w-3 h-3 fill-current" /> : <Images className="w-3 h-3" />}
                                    {gallery.gallery_type}
                                </span>
                                <span className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                    <Calendar className="w-4 h-4 text-blue-400" />
                                    {formatDate(gallery.created_at)}
                                </span>
                                {!isVideo && images.length > 0 && (
                                    <span className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                        <Camera className="w-4 h-4 text-blue-400" />
                                        {images.length} Photo{images.length !== 1 ? 's' : ''}
                                    </span>
                                )}
                            </div>

                            <h1 className="text-2xl lg:text-4xl font-black text-white leading-[1.05] tracking-tighter uppercase italic">
                                {gallery.title}
                            </h1>

                            {gallery.description && (
                                <p className="text-slate-400 font-bold text-sm uppercase tracking-wider leading-relaxed max-w-2xl">
                                    {gallery.description}
                                </p>
                            )}
                        </div>
                    </div>
                </section>

                {/* ── CONTENT ──────────────────────────────────────────────── */}
                <section className="py-20">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                            {/* ── MAIN COLUMN ───────────────────────────────── */}
                            <div className="lg:col-span-8 space-y-10">

                                {/* VIDEO */}
                                {isVideo && gallery.video_url && (
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-100 dark:border-slate-800 bg-black">
                                        <iframe
                                            src={getEmbedUrl(gallery.video_url)}
                                            title={gallery.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                )}

                                {/* PHOTO GRID */}
                                {!isVideo && images.length > 0 && (
                                    <div className="relative">
                                        <div className="flex gap-6 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth pb-4">
                                            {images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex-shrink-0 w-[400px] h-[420px] cursor-pointer"
                                                    onClick={() => setLightboxIndex(idx)}
                                                >
                                                    <img
                                                        src={img}
                                                        alt={gallery.title}
                                                        className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* ── SIDEBAR ───────────────────────────────────── */}
                            <aside className="lg:col-span-4 space-y-8">

                                {/* Quick info */}
                                <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 space-y-6 sticky top-32">
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                        Gallery Info
                                    </h3>

                                    <dl className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                                                <Tag className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <dt className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Type</dt>
                                                <dd className="text-sm font-black text-slate-900 dark:text-white uppercase italic">{gallery.gallery_type}</dd>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <dt className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Added</dt>
                                                <dd className="text-sm font-black text-slate-900 dark:text-white uppercase italic">{formatDate(gallery.created_at)}</dd>
                                            </div>
                                        </div>

                                        {!isVideo && (
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-500 shrink-0">
                                                    <Camera className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <dt className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Photos</dt>
                                                    <dd className="text-sm font-black text-slate-900 dark:text-white uppercase italic">{images.length} image{images.length !== 1 ? 's' : ''}</dd>
                                                </div>
                                            </div>
                                        )}
                                    </dl>

                                    {/* Share */}
                                    <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Share</p>
                                        <div className="flex gap-3">
                                            {[1, 2, 3].map((i) => (
                                                <button
                                                    key={i}
                                                    className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                                                >
                                                    <Share2 className="w-4 h-4" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>


                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* ── RELATED ──────────────────────────────────────────────── */}
                {related.length > 0 && (
                    <section className="py-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors">
                        <div className="container mx-auto px-6 lg:px-20">
                            <div className="flex items-end justify-between mb-16">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em]">
                                        More Like This
                                    </span>
                                    <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                        RELATED <span className="text-blue-600 dark:text-blue-500">GALLERIES</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-6 justify-start">
                                {related.map((item) => {
                                    const thumb = Array.isArray(item.images) ? item.images[0] : null;
                                    const isVid = item.gallery_type === 'Video';

                                    return (
                                        <Link
                                            key={item.id}
                                            href={galleryShow(item.slug)}
                                            className="group relative w-[300px] h-[250px] rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 block"
                                        >
                                            {thumb && (
                                                <img
                                                    src={thumb}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            )}

                                            {!thumb && isVid && (
                                                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                                    <Play className="w-8 h-8 text-white" />
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">
                                                    {item.gallery_type}
                                                </span>
                                                <h4 className="text-sm font-black text-white uppercase italic leading-tight">
                                                    {item.title}
                                                </h4>
                                            </div>

                                            {isVid && (
                                                <div className="absolute top-3 left-3">
                                                    <span className="bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-full">
                                                        VIDEO
                                                    </span>
                                                </div>
                                            )}
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
