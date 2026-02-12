import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head } from '@inertiajs/react';
import {
    GraduationCap,
    FileText,
    CheckCircle2,
    ClipboardCheck,
    Users,
    ChevronRight,
    User,
    AlertCircle,
    Phone,
    Mail,
    Send,
    ArrowRight,
    Clock,
    BookOpen
} from 'lucide-react';

const Admissions = () => {
    return (
        <FrontLayout>
            <Head title="Admissions - Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-300">
                {/* ================= MINIMAL HERO ================= */}
                <section className="relative pt-24 pb-12 bg-blue-950 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
                    <div className="container relative z-10 mx-auto px-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                <GraduationCap className="w-3 h-3" />
                                <span>2026 Academic Session</span>
                            </div>
                            <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                                ADMISSION <span className="text-blue-500">PROCESS</span>
                            </h1>
                            <p className="text-slate-400 font-bold max-w-xl mx-auto text-xs lg:text-sm uppercase tracking-[0.2em] leading-relaxed">
                                Simple and transparent admission process for your convenience
                            </p>
                        </div>
                    </div>
                </section>

                {/* ================= STEP-BY-STEP PROCESS ================= */}
                <section className="py-20 bg-white dark:bg-slate-950 border-b border-slate-50 dark:border-slate-900 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { id: "01", icon: FileText, title: "Application Form", desc: "Fill out the online application form with accurate information" },
                                { id: "02", icon: ClipboardCheck, title: "Submit Documents", desc: "Provide required documents and pay application fee" },
                                { id: "03", icon: Users, title: "Entrance Test", desc: "Appear for entrance examination and interview" },
                                { id: "04", icon: CheckCircle2, title: "Admission Confirmation", desc: "Receive admission offer and complete enrollment" }
                            ].map((step, i) => (
                                <div key={i} className="group p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-blue-950/5 dark:hover:shadow-black/50 transition-all duration-500">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                            <step.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-3xl font-black text-blue-600/10 italic group-hover:text-blue-600/20 transition-colors">{step.id}</span>
                                    </div>
                                    <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic mb-3 leading-tight">{step.title}</h4>
                                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed uppercase tracking-tight">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= APPLICATION FORM SECTION ================= */}
                <section className="py-24 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
                    <div className="container mx-auto px-6 lg:px-20 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                            {/* FORM AREA */}
                            <div className="lg:col-span-8 flex flex-col gap-12">
                                <div className="space-y-4">
                                    <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">
                                        Online <span className="text-blue-600 dark:text-blue-500">Application</span> Form
                                    </h2>
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        Please fill in all the required fields carefully
                                    </div>
                                </div>

                                <div className="space-y-12">
                                    {/* SECTION: STUDENT */}
                                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/3 dark:shadow-black/50 overflow-hidden group/sec transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
                                        <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-blue-50/50 dark:from-blue-900/20 to-transparent border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/sec:bg-blue-600 dark:group-hover/sec:bg-blue-500 group-hover/sec:text-white transition-all duration-500">
                                                    <User className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Student Details</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Personal Identification</p>
                                                </div>
                                            </div>
                                            <span className="text-4xl font-black text-slate-100 dark:text-slate-800 italic group-hover/sec:text-blue-50 dark:group-hover/sec:text-blue-900/50 transition-colors">01</span>
                                        </div>
                                        <div className="p-8 lg:p-12">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                                {[
                                                    { label: "First Name *", type: "text", placeholder: "e.g. Sujit" },
                                                    { label: "Last Name *", type: "text", placeholder: "e.g. Bhandari" },
                                                    { label: "Date of Birth *", type: "date" },
                                                    { label: "Gender *", type: "select", options: ["Male", "Female", "Other"] },
                                                    { label: "Grade Applying *", type: "select", options: ["Grade 8", "Nursery", "Grade 11"] },
                                                    { label: "Nationality *", type: "text", value: "Nepalese" }
                                                ].map((field, i) => (
                                                    <div key={i} className="group/input relative space-y-2">
                                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1 group-focus-within/input:text-blue-600 dark:group-focus-within/input:text-blue-400 transition-colors">{field.label}</label>
                                                        <div className="relative">
                                                            {field.type === 'select' ? (
                                                                <select className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all appearance-none cursor-pointer">
                                                                    {field.options?.map(opt => <option key={opt}>{opt}</option>)}
                                                                </select>
                                                            ) : (
                                                                <input type={field.type} defaultValue={field.value} placeholder={field.placeholder} className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" />
                                                            )}
                                                            {field.type === 'select' && <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* SECTION: PARENT */}
                                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/3 dark:shadow-black/50 overflow-hidden group/sec transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
                                        <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-orange-50/50 dark:from-orange-900/20 to-transparent border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover/sec:bg-orange-600 dark:group-hover/sec:bg-orange-500 group-hover/sec:text-white transition-all duration-500">
                                                    <Users className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Guardian Information</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Contact & Legal Records</p>
                                                </div>
                                            </div>
                                            <span className="text-4xl font-black text-slate-100 dark:text-slate-800 italic group-hover/sec:text-orange-50 dark:group-hover/sec:text-orange-900/50 transition-colors">02</span>
                                        </div>
                                        <div className="p-8 lg:p-12">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                                {[
                                                    { label: "Father's Name *", type: "text" },
                                                    { label: "Mother's Name *", type: "text" },
                                                    { label: "Parent's Phone *", type: "tel", placeholder: "+977" },
                                                    { label: "Parent's Email *", type: "email", placeholder: "example@mail.com" },
                                                    { label: "Permanent Address *", type: "text", full: true }
                                                ].map((field, i) => (
                                                    <div key={i} className={field.full ? "md:col-span-2 space-y-2" : "space-y-2"}>
                                                        <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">{field.label}</label>
                                                        <input type={field.type} placeholder={field.placeholder} className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-orange-600 dark:focus:border-orange-500 focus:ring-4 focus:ring-orange-600/5 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* SECTION: ACADEMIC & HEALTH */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-10 space-y-8 shadow-xl shadow-slate-900/2 dark:shadow-black/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Academic</h3>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Previous School</label>
                                                    <input type="text" className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Last Grade</label>
                                                    <input type="text" className="w-full h-14 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-blue-600 dark:focus:border-blue-500 transition-all" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-10 space-y-8 shadow-xl shadow-slate-900/2 dark:shadow-black/50 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-slate-800 flex items-center justify-center text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/50">
                                                    <AlertCircle className="w-5 h-5" />
                                                </div>
                                                <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Special Needs</h3>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Medical (if any)</label>
                                                    <textarea rows={1} className="w-full py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-purple-600 dark:focus:border-purple-500 transition-all resize-none" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Requirements</label>
                                                    <textarea rows={1} className="w-full py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-5 font-bold text-slate-900 dark:text-white outline-none focus:bg-white dark:focus:bg-slate-900 focus:border-purple-600 dark:focus:border-purple-500 transition-all resize-none" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-full h-20 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-[2.5rem] flex items-center justify-center gap-4 hover:bg-blue-600 dark:hover:bg-blue-700 shadow-2xl shadow-slate-900/10 dark:shadow-black/50 active:scale-[0.98] transition-all duration-500 uppercase tracking-[0.2em] italic group">
                                        Finalize & Submit Application
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* SIDEBAR: DOCUMENTS & HELP */}
                            <div className="lg:col-span-4 space-y-12">
                                {/* Documents Checklist */}
                                <div className="p-10 bg-slate-900 dark:bg-slate-900 rounded-[3rem] border dark:border-slate-800 text-white relative overflow-hidden group transition-colors duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                                        <FileText className="w-40 h-40" />
                                    </div>
                                    <h3 className="text-2xl font-black uppercase italic tracking-tighter mb-8 relative z-10">Required <br />Documents</h3>
                                    <ul className="space-y-5 relative z-10">
                                        {[
                                            "Passport size photograph (3 copies)",
                                            "Birth certificate",
                                            "Previous school transfer certificate",
                                            "Last academic progress report",
                                            "Citizenship certificate of parents",
                                            "Student's citizenship certificate",
                                            "Medical certificate",
                                            "Duly filled application form"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-all">
                                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white shrink-0 mt-0.5">
                                                    <CheckCircle2 className="w-3 h-3" />
                                                </div>
                                                <span className="text-[11px] font-bold leading-tight uppercase tracking-tight opacity-90">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Help & Support */}
                                <div className="p-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-xl shadow-slate-950/5 dark:shadow-black/50 space-y-8 transition-colors duration-300">
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">Need Help with <br />Admission?</h3>
                                        <p className="text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-tight">Our admission team is here to assist you throughout the process</p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Call Counselor</p>
                                                <p className="text-sm font-black text-slate-950 dark:text-white italic">+977-081-533337</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Office Hours</p>
                                                <p className="text-sm font-black text-slate-950 dark:text-white italic">Sun - Fri: 9AM - 5PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full h-14 border-2 border-slate-900/5 dark:border-slate-800 rounded-2xl flex items-center justify-center gap-3 font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs hover:bg-slate-900 dark:hover:bg-blue-600 hover:text-white transition-all">
                                        View FAQ
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout >
    );
};

export default Admissions;