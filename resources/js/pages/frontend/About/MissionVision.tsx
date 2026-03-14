import React from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Target,
    Eye,
    Heart,
    Shield,
    Star,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Page, PageCategory } from '@/types/Frontend/Page';
import parse from 'html-react-parser';
import { admissions } from '@/routes';
import PageHero from '@/components/frontend/PageHero';




interface PageProps {
    Categories: PageCategory[];
    pageCategory: Page;
}
const MissionVision = ({ Categories, pageCategory }: PageProps) => {

    const limitText = (html: any, limit: number) => {
        if (html.length <= limit) return html;
        return html.substring(0, limit) + "...";
    };

    return (
        <FrontLayout>
            <Head title={`${pageCategory.title}`} />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= HERO SECTION ================= */}
                <PageHero
                    title={pageCategory.title}
                    description={pageCategory.description}
                    badgeText="Purpose & Values"
                />

                {/* ================= MISSION & VISION GRID ================= */}
                <section className="py-16 bg-gray-50 dark:bg-slate-900">
                    <div className="container mx-auto px-6 lg:px-20 space-y-20">

                        {pageCategory?.pages?.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 "
                            >

                                {/* Content */}
                                <div className="space-y-8">

                                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
                                        {item.title}
                                    </h3>

                                    {item?.description && (
                                        <div className="text-sm lg:text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed">
                                            {parse(item.description)}
                                        </div>
                                    )}

                                </div>

                                {/* Image */}
                                <div>
                                    {item.images?.map((image: string, index: number) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={item.title}
                                            className="w-full h-[300px] mb-6 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
                                        />
                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>
                </section>


                {/* ================= FINAL CTA ================= */}
                <section className="py-24 text-center bg-gray-200 dark:bg-slate-950">
                    <div className="container mx-auto px-6 lg:px-20 space-y-10">

                        <h2 className="text-4xl lg:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                            READY TO EXPLORE <br /><span className="text-blue-600">WITH  US</span>
                        </h2>
                        <div className="flex justify-center">
                            <Link href={admissions()} className="h-12 px-10 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 dark:hover:bg-blue-700 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-slate-900/10 mb-2">
                                Enrollment Open 2026-27
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout>
    );
};

export default MissionVision;
