import React, { useState, useMemo } from 'react';
import FrontLayout from '../Layouts/FrontLayout';
import { Head, Link } from '@inertiajs/react';
import { Users, Search, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { staffShow } from '@/actions/App/Http/Controllers/FrontController';
import { Staffs } from '@/types/Frontend/Index';

interface Props {
    staffs: Record<string, Staffs[]>;
    departments: Record<string, string[]>;
}

const StaffView = ({ staffs }: Props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeDept, setActiveDept] = useState<string>('All');
    const filteredStaffs = useMemo(() => {
        const result: Record<string, Staffs[]> = {};

        Object.entries(staffs).forEach(([dept, members]) => {
            if (activeDept !== 'All' && dept !== activeDept) return;

            const filteredMembers = members.filter(member =>
                member.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (member.department && member.department.toLowerCase().includes(searchQuery.toLowerCase()))
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

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                
                <section className="relative pt-24 pb-16 bg-blue-950 text-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6 lg:px-20 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                            <Users className="w-3 h-3" />
                            <span>Institutional Directory</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
                            THE <span className="text-blue-500">FACULTY</span> OF EXCELLENCE
                        </h1>
                        <p className="text-slate-400 font-bold max-w-xl mx-auto text-[10px] lg:text-xs uppercase tracking-[0.2em] leading-relaxed">
                            Meet the dedicated educators and professionals committed to shaping the leaders of tomorrow.
                        </p>
                    </div>
                </section>

              
                <section className="sticky top-[80px] z-40 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/40 dark:border-slate-800/40 py-4 px-6 lg:px-20">
                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        
                        {/* Tab Filter Links */}
                        <div className="w-full md:w-auto flex gap-2 overflow-x-auto no-scrollbar py-1">
                            <button
                                onClick={() => setActiveDept('All')}
                                className={cn(
                                    "px-6 py-2.5 rounded-xl text-xs font-bold uppercase transition whitespace-nowrap cursor-pointer",
                                    activeDept === 'All'
                                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                        : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                                )}
                            >
                                All Wings
                            </button>

                            {Object.keys(staffs).map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setActiveDept(dept)}
                                    className={cn(
                                        "px-6 py-2.5 rounded-xl text-xs font-bold uppercase transition whitespace-nowrap cursor-pointer",
                                        activeDept === dept
                                            ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                                            : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {dept || 'General'}
                                </button>
                            ))}
                        </div>

                     
                        <div className="relative w-full md:w-80">
                            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="w-4 h-4 text-slate-400" />
                            </span>
                            <input
                                type="text"
                                placeholder="SEARCH PERSONNEL..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-600 font-bold uppercase placeholder-slate-400 text-xs tracking-wider transition"
                            />
                        </div>

                    </div>
                </section>

             
                <section className="py-16">
                    <div className="container mx-auto px-6 lg:px-20">
                        {Object.entries(filteredStaffs).length > 0 ? (
                            <div className="space-y-24">
                                {Object.entries(filteredStaffs).map(([dept, members]) => (
                                    <div key={dept} className="space-y-10">
                                        
                                        {/* Row Group Header */}
                                        <div className="flex items-center gap-4">
                                            <div className="h-[2px] w-8 bg-blue-600 rounded-full" />
                                            <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                                {dept || 'General Wing'}
                                            </h2>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                                ({members.length} Members)
                                            </span>
                                        </div>

                                        {/* Standard Unified Grid Layout */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                            {members.map((member) => (
                                                <div
                                                    key={member.id}
                                                    className="group relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-900"
                                                >
                                                    {/* Profile Avatar Image */}
                                                    {member.image ? (
                                                        <img
                                                            src={member.image}
                                                            alt={member.full_name}
                                                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                                                            <Users className="w-12 h-12 text-slate-400" />
                                                        </div>
                                                    )}

                                                    {/* Dark overlay backdrop for lower labels visibility */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                                                    {/* Text Meta Container */}
                                                    <div className="absolute bottom-6 left-6 pr-20 space-y-0.5 pointer-events-none">
                                                        <h4 className="text-md text-white font-black uppercase italic tracking-tight line-clamp-1">
                                                            {member.full_name}
                                                        </h4>
                                                        <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest line-clamp-1">
                                                            {member.designation}
                                                        </p>
                                                    </div>

                                                    {/* Arrow Link Badge Button */}
                                                    <Link
                                                        href={staffShow(member.id)}
                                                        className="absolute bottom-6 right-6 z-10"
                                                    >
                                                        <span className="bg-white/90 backdrop-blur-sm font-bold text-slate-900 text-[10px] uppercase tracking-widest p-3 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                                                            <ArrowRight className="w-4 h-4" />
                                                        </span>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* Footer Counter Total Results Status */}
                                <div className="pt-6 border-t border-slate-100 dark:border-slate-900">
                                    <p className="text-xs uppercase text-slate-400 font-bold tracking-wider">
                                        Total filtered records: {totalResults} entries
                                    </p>
                                </div>
                            </div>
                        ) : (
                            /* State fallback screen when search fails */
                            <div className="text-center py-24 space-y-4">
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto">
                                    <Search className="w-6 h-6 text-slate-300 dark:text-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">
                                        No Personnel Located
                                    </h3>
                                    <button 
                                        onClick={() => { setSearchQuery(''); setActiveDept('All'); }}
                                        className="text-xs font-black uppercase tracking-wider text-blue-600 hover:text-blue-500 underline cursor-pointer"
                                    >
                                        Clear parameters
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

              
            </main>
        </FrontLayout>
    );
};

export default StaffView;