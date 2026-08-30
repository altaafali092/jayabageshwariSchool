
import React, { useState } from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import { Page, PageCategory } from '@/types/Frontend/Page';
import parse from 'html-react-parser';
import PageHero from '@/components/frontend/PageHero';
import { ArrowRight, Layers } from 'lucide-react';
import { pages } from '@/routes';

interface PageProps {
    categories: PageCategory[];
    pageCategory: PageCategory & { pages?: Page[] };
}


const MissionVision = ({ categories, pageCategory }: PageProps) => {
    const sortedPages = React.useMemo(() => {
        if (!pageCategory?.pages) return [];
        return [...pageCategory.pages].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
    }, [pageCategory?.pages]);

    // Active tab index based on sorted array
    const [activeTab, setActiveTab] = useState<number>(0);
    const activePage = sortedPages[activeTab];

    return (
        <FrontLayout>
            <Head title={`${pageCategory.title}`} />

            <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
                <PageHero
                    title={pageCategory.title}
                    description={pageCategory.description}
                />

                <section className="py-16 lg:py-24 border-t border-slate-100 dark:border-slate-900">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Categories List */}
                            <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
                                {categories && categories.length > 0 ? (
                                    <div className="flex flex-col border-l-2 border-slate-100 dark:border-slate-900">
                                        {categories.map((cat) => {
                                            const isActive = pageCategory.id === cat.id;

                                            return (
                                                <Link
                                                    key={cat.id}
                                                    href={pages(cat.slug)}
                                                    className={`text-left pl-6 py-4 border-l-2 transition-all duration-300 relative group flex items-center justify-between gap-2 w-full ${isActive
                                                        ? 'border-blue-600 text-slate-900 dark:text-white font-black bg-slate-50/50 dark:bg-slate-900/30'
                                                        : 'border-transparent text-slate-400 dark:text-slate-500 font-bold hover:text-slate-700 dark:hover:text-slate-300'
                                                        }`}
                                                >
                                                    {isActive && (
                                                        <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-blue-600" />
                                                    )}
                                                    <span className="text-xs uppercase tracking-wider font-bold">
                                                        {cat.title}
                                                    </span>
                                                    <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive
                                                        ? 'text-blue-600 translate-x-0'
                                                        : 'text-slate-300 dark:text-slate-800 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                                                        }`} />
                                                </Link>
                                            );
                                        })}
                                    </div>
                                ) : (
                                    <p className="text-xs uppercase font-bold tracking-wider text-slate-400 italic px-2">
                                        No structural categories found.
                                    </p>
                                )}
                            </div>

                            {/* Right Content Area */}
                            <div className="lg:col-span-8 space-y-8">

                                {/* Sub-Page Tabs */}
                                {sortedPages.length > 1 && (
                                    <div className="flex flex-wrap gap-2 pb-4 border-b border-slate-100 dark:border-slate-900/60">
                                        {sortedPages.map((subItem, idx) => (
                                            <button
                                                key={subItem.id}
                                                onClick={() => setActiveTab(idx)}
                                                className={`text-[11px] font-black uppercase tracking-wider px-4 py-2 rounded-xl transition-all border ${activeTab === idx
                                                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                                    : 'bg-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 border-slate-100 dark:border-slate-900'
                                                    }`}
                                            >
                                                {subItem.title}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Main Active Page Display */}
                                {activePage ? (
                                    <div className="space-y-8 animate-fadeIn">
                                        {activePage.images && activePage.images.length > 0 && (
                                            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 aspect-[16/9]">
                                                <img
                                                    src={activePage.images[0]}
                                                    alt={activePage.title}
                                                    title={activePage.title}
                                                    className="w-full h-full object-cover opacity-95 hover:grayscale-0 dark:opacity-80 dark:hover:opacity-100 transition-all duration-700 ease-in-out"
                                                />
                                            </div>
                                        )}

                                        <div className="space-y-4 max-w-3xl">
                                            <h3 className="text-3xl lg:text-4xl font-black italic uppercase text-slate-900 dark:text-white tracking-tighter leading-none">
                                                {activePage.title}
                                            </h3>

                                            {activePage?.description && (
                                                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium antialiased match-page-content pt-2">
                                                    {parse(activePage.description)}
                                                </div>
                                            )}
                                        </div>

                                        {/* Secondary Gallery */}
                                        {activePage.images && activePage.images.length > 1 && (
                                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-slate-900/40">
                                                {activePage.images.slice(1).map((image: string, imgIndex: number) => (
                                                    <div key={imgIndex} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900">
                                                        <img
                                                            src={image}
                                                            alt={`${activePage.title} asset ${imgIndex}`}
                                                            title={activePage.title}
                                                            className="w-full h-full transition-all duration-500"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="py-24 text-center rounded-[2.5rem] border border-dashed border-slate-200 dark:border-slate-900">
                                        <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-300 dark:text-slate-700 italic">
                                            No page segments populated under this category
                                        </span>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default MissionVision;
