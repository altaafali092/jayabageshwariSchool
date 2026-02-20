import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Form, Head } from '@inertiajs/react';
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
import FormInput from '@/components/frontend/Admission/FormInput';
import FormSelect from '@/components/frontend/Admission/FormSelect';
import RequiredDocumnet from '@/components/frontend/Admission/RequiredDocumnet';


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
                                                <FormInput label="First Name *" name="first_name" required />
                                                <FormInput label="Last Name *" name="last_name" required />
                                                <FormInput label="Date of Birth *" type="date" name="dob" required />

                                                <FormSelect
                                                    label="Gender *"
                                                    name="gender"
                                                    required
                                                    options={["Male", "Female", "Other"]}
                                                />

                                                <FormSelect
                                                    label="Grade Applying *"
                                                    name="grade"
                                                    required
                                                    options={["Grade 8", "Nursery", "Grade 11"]}
                                                />

                                                <FormInput
                                                    label="Nationality *"
                                                    name="nationality"
                                                    defaultValue="Nepalese"
                                                />

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
                                                <FormInput label="Father's Name" name="father_name" />
                                                <FormInput label="Mother's Name" name="mother_name" />
                                                <FormInput label="parent's Phone" name="parent_phone" />
                                                <FormInput label="parent's Email" name="parent_email" />
                                                <div className="md:col-span-2 space-y-2" >
                                                    <FormInput label="permanent Address" name="permanent_address" />
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/3 dark:shadow-black/50 overflow-hidden group/sec transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
                                        <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-emerald-50/50 dark:from-emerald-900/20 to-transparent border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-500 group-hover/sec:bg-emerald-600 dark:group-hover/sec:bg-emerald-500 group-hover/sec:text-white transition-all duration-500">
                                                    <BookOpen className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Previous School Information</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Pervious Infromation</p>
                                                </div>
                                            </div>
                                            <span className="text-4xl font-black text-slate-100 dark:text-slate-800 italic group-hover/sec:text-orange-50 dark:group-hover/sec:text-orange-900/50 transition-colors">03</span>
                                        </div>

                                        <div className="p-8 lg:p-12">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">

                                                <div className="md:col-span-2 space-y-2">
                                                    <FormInput label="Previous School Name *" name="pervious_school" />
                                                    <FormInput label="Last Grade Completed *" name="last_grade" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-900/3 dark:shadow-black/50 overflow-hidden group/sec transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5">
                                        <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-green-50/50 dark:from-green-900/20 to-transparent border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center text-green-600 dark:text-green-500 group-hover/sec:bg-green-600 dark:group-hover/sec:bg-green-500 group-hover/sec:text-white transition-all duration-500">
                                                    <AlertCircle className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Additional Information</h3>

                                                </div>
                                            </div>
                                            <span className="text-4xl font-black text-slate-100 dark:text-slate-800 italic group-hover/sec:text-orange-50 dark:group-hover/sec:text-orange-900/50 transition-colors">04</span>
                                        </div>

                                        <div className="p-8 lg:p-12">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                                <div className="md:col-span-2 space-y-2">
                                                    <FormInput label="Medical Information (if any)" name="medical" />
                                                    <FormInput label="Require Special Attention (if any)" name="medical" />

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <button className="w-80 h-12  bg-slate-900 dark:bg-blue-600 text-white font-black rounded-[2.5rem] flex items-center justify-center gap-4 hover:bg-blue-600 dark:hover:bg-blue-700 shadow-2xl shadow-slate-900/10 dark:shadow-black/50 active:scale-[0.98] transition-all duration-500 uppercase tracking-[0.2em] italic group">
                                        Submit Application
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </div>

                            {/* SIDEBAR: DOCUMENTS & HELP */}
                            <RequiredDocumnet />
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout >
    );
};

export default Admissions;