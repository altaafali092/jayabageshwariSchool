import React, { useState, useMemo } from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import {
    Users,
    Mail,
    Phone,
    Linkedin,
    Facebook,
    Instagram,
    Search,
    ChevronRight,
    Briefcase,
    GraduationCap,
    Heart,
    ChevronLeft,
    Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Staff } from '@/types/admin/Staff';
import { staffShow } from '@/actions/App/Http/Controllers/FrontController';
import { staff } from '@/routes';

interface Props {
    staffs: Record<string, Staff[]>;
    departments: Record<string, string[]>;
}

const StaffView = ({ staffs, departments }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDept, setActiveDept] = useState<string | null>(null);

    // Flatten staff for searching but keep structure for viewing
    const filteredStaffs = useMemo(() => {
        const result: Record<string, Staff[]> = {};

        Object.entries(staffs).forEach(([dept, members]) => {
            // Filter by department if one is selected
            if (activeDept && dept !== activeDept) return;

            const filteredMembers = members.filter(member =>
                member.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.department.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (filteredMembers.length > 0) {
                result[dept] = filteredMembers;
            }
        });

        return result;
    }, [staffs, searchQuery, activeDept]);

    const totalResults = useMemo(() =>
        Object.values(filteredStaffs).reduce((acc, curr) => acc + curr.length, 0),
        [filteredStaffs]);

    return (
        <FrontLayout>
            <Head title="Our Faculty & Staff - Jaya Bageshwori" />

            <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
                {/* ================= HERO SECTION ================= */}
                <section className="relative pt-32 pb-24 bg-blue-950 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-8">
                            <Users className="w-3 h-3" />
                            <span>Institutional Directory</span>
                        </div>
                        <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
                            THE <span className="text-blue-500">FACULTY</span> <br />OF EXCELLENCE
                        </h1>
                        <p className="text-slate-400 font-bold max-w-2xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                            Meet the dedicated educators and professionals committed to shaping the leaders of tomorrow.
                        </p>
                    </div>
                </section>

                {/* ================= SEARCH & FILTERS ================= */}
                <div className="sticky top-20 z-40 bg-gray-200 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 py-8">
                    <div className="container mx-auto px-6 lg:px-20 space-y-8">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            {/* Search */}
                            <div className="relative flex-1 max-w-xl">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by name, designation, or role..."
                                    className="h-14 pl-14 pr-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border-none text-xs font-bold uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-blue-600 transition-all"
                                />
                            </div>

                            {/* Result Count */}
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    Displaying {totalResults} Staff Members
                                </span>
                                {(searchQuery || activeDept) && (
                                    <button
                                        onClick={() => { setSearchQuery(''); setActiveDept(null); }}
                                        className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline"
                                    >
                                        Clear Filters
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Department Chips */}
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setActiveDept(null)}
                                className={cn(
                                    "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all",
                                    activeDept === null
                                        ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                                        : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 hover:border-blue-600"
                                )}
                            >
                                All Divisions
                            </button>
                            {Object.keys(departments).map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDept(dept)}
                                    className={cn(
                                        "px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all",
                                        activeDept === dept
                                            ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20"
                                            : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 hover:border-blue-600"
                                    )}
                                >
                                    {dept}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= STAFF GRID ================= */}
                <div className="container mx-auto px-6 lg:px-20 py-20">
                    {Object.entries(filteredStaffs).length > 0 ? (
                        <div className="space-y-32">
                            {Object.entries(filteredStaffs).map(([dept, members]) => (
                                <section key={dept} className="space-y-12">
                                    {/* Department Category Header */}
                                    <div className="flex items-center gap-4">
                                        <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                                        <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                            {dept || 'General Wing'}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                        {members.map((member) => (
                                            <div key={member.id} className="group relative bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 p-5">
                                                {/* Portrait - Smaller & Centered Badge Style */}
                                                <div className="relative aspect-square overflow-hidden rounded-[2rem] mb-6">
                                                    <img
                                                        src={member.image}
                                                        alt={member.full_name}
                                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                                    />
                                                    {/* Sophisticated Hover Tint */}
                                                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                                    {/* Quick View Link (Overlay) */}
                                                    <Link
                                                        href={staffShow(member.id)}
                                                        className="absolute inset-0 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                                                    >
                                                        <div className="px-6 py-3 bg-white rounded-xl text-[9px] font-black uppercase tracking-widest text-slate-900">
                                                            View Profile
                                                        </div>
                                                    </Link>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="space-y-1">
                                                        <h3 className="text-sm lg:text-base font-black text-slate-900 dark:text-white uppercase italic tracking-tight leading-none group-hover:text-blue-600 transition-colors line-clamp-1">
                                                            {member.full_name}
                                                        </h3>
                                                        <p className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                                                            {member.designation}
                                                        </p>
                                                    </div>

                                                    <div className="pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                                            <span className="text-[8px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                                                                {dept || 'Faculty'}
                                                            </span>
                                                        </div>
                                                        {member.phone && (
                                                            <span className="text-[8px] font-bold text-slate-400 dark:text-slate-500">
                                                                {member.phone}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    ) : (
                        <div className="py-32 text-center space-y-8">
                            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                                <Search className="w-10 h-10 text-slate-200 dark:text-slate-800" />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">No Personnel Found</h2>
                                <p className="text-slate-400 font-bold text-xs uppercase tracking-widest max-w-xs mx-auto">We couldn't find any staff matching "{searchQuery}" in our directory.</p>
                                <Button
                                    variant="ghost"
                                    onClick={() => { setSearchQuery(''); setActiveDept(null); }}
                                    className="text-[10px] font-black text-blue-600 uppercase tracking-widest"
                                >
                                    Reset Search Filters
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* ================= FINAL CTA ================= */}
                <section className="py-24 bg-slate-900 dark:bg-black text-center transition-colors">
                    <div className="container mx-auto px-6 lg:px-20 space-y-12">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-3xl lg:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                                JOIN OUR <br /><span className="text-blue-500">FACULTY TEAM</span>
                            </h2>
                            <p className="text-slate-400 dark:text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Are you passionate about education? We're always looking for talent.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="/contact" className="h-20 px-12 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-4 italic shadow-2xl shadow-blue-600/20">
                                Careers at JBS
                                <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </FrontLayout>
    );
};

export default StaffView;