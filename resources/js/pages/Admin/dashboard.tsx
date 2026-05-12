import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Users, FileText, Bell, MessageSquare, Quote, BookOpen, Image as ImageIcon, Images, Video, SlidersHorizontal } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/actions/App/Http/Controllers/Admin/DashboardController';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard({ metrics }: { metrics: any }) {
    const stats = [
        { title: 'Admission Queries', value: metrics?.total_admission_queries || 0, icon: BookOpen, color: 'text-blue-500' },
        { title: 'Staff Members', value: metrics?.total_staff || 0, icon: Users, color: 'text-green-500' },
        { title: 'News & Events', value: metrics?.total_news_events || 0, icon: FileText, color: 'text-purple-500' },
        { title: 'Notices', value: metrics?.total_notices || 0, icon: Bell, color: 'text-amber-500' },
        { title: 'Contact Messages', value: metrics?.total_contacts || 0, icon: MessageSquare, color: 'text-rose-500' },
        { title: 'Testimonials', value: metrics?.total_testimonials || 0, icon: Quote, color: 'text-indigo-500' },
        { title: 'Sliders', value: metrics?.total_sliders || 0, icon: SlidersHorizontal, color: 'text-cyan-500' },
        { title: 'Total Galleries', value: metrics?.total_galleries || 0, icon: Images, color: 'text-teal-500' },
        { title: 'Image Galleries', value: metrics?.total_image_galleries || 0, icon: ImageIcon, color: 'text-pink-500' },
        { title: 'Video Links', value: metrics?.total_video_galleries || 0, icon: Video, color: 'text-red-500' },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-1 flex-col gap-8 p-6 lg:p-8">

                <div className="pb-2 border-b border-sidebar-border">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Welcome back, Admin</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Here's a quick overview of what's happening on your website.</p>
                </div>

                {/* Metrics Cards */}
                <div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4">Overview Metrics</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex items-center p-6 bg-white dark:bg-sidebar rounded-xl border border-sidebar-border shadow-sm hover:shadow-md transition-shadow">
                                <div className={`p-4 rounded-full bg-slate-100 dark:bg-slate-800 mr-6 ${stat.color}`}>
                                    <stat.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.title}</p>
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions / Getting Started */}
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white dark:bg-sidebar rounded-xl border border-sidebar-border shadow-sm p-6">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-indigo-500" /> Need to post something?
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                Publish a new <strong>Notice</strong> to alert the students and teachers.
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                Add a <strong>News & Event</strong> update to showcase recent school activities.
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                Upload memories to the <strong>Gallery</strong> to keep the community engaged.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-sidebar rounded-xl border border-sidebar-border shadow-sm p-6">
                        <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-green-500" /> Community Management
                        </h2>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                Manage <strong>Staff Members</strong> easily from the staff directory.
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                                Reply to <strong>Contact Messages</strong> and <strong>Admission Queries</strong>.
                            </li>
                            <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                Approve and display <strong>Testimonials</strong> from happy parents/students.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
