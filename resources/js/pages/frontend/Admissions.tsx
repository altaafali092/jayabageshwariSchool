import React from 'react';
import FrontLayout from './Layouts/FrontLayout';
import { Head, useForm } from '@inertiajs/react';
import {
    GraduationCap,
    FileText,
    CheckCircle2,
    ClipboardCheck,
    Users,
    User,
    AlertCircle,
    Send,
    BookOpen
} from 'lucide-react';
import FormInput from '@/components/frontend/Admission/FormInput';
import FormSelect from '@/components/frontend/Admission/FormSelect';
import RequiredDocumnet from '@/components/frontend/Admission/RequiredDocumnet';
import { admissionForm } from '@/actions/App/Http/Controllers/FrontController';
import InputError from '@/components/input-error';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
interface Props {
    grades: Record<string, string>;
    genders: Record<string, string>;
}
const Admissions = ({ grades, genders }: Props) => {
    const { data, setData, post, reset, errors, processing } = useForm({
        full_name: "",
        date_of_birth: "",
        gender: "",
        grade_applying_for: "",
        nationality: "",
        father_name: "",
        mother_name: "",
        parent_phone: '',
        parent_email: '',
        parent_address: '',
        previous_school_name: '',
        previous_last_grade: '',
        medical_info: '',
        require_attend: '',
        remarks: "",
        documents: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(admissionForm().url, {
            onSuccess: () => {
                toast.success('Admission form submitted successfully');
                reset();
            },
            preserveScroll: true
        });
    };



    return (
        <FrontLayout>
            <Head title="Admission Portal | Jaya Bageshwori" />

            <main className="flex-1 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden text-slate-900 dark:text-slate-100">
                {/* ================= PREMIUM HERO ================= */}
                <section className="relative pt-24 pb-12 bg-blue-950 overflow-hidden text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent" />
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

                {/* ================= INTERACTIVE PROCESS ================= */}
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

                {/* ================= APPLICATION WORKSPACE ================= */}
                <section className="py-24 bg-slate-50/30 dark:bg-slate-950/30 relative">
                    <div className="container mx-auto px-6 lg:px-20 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                            <div className="lg:col-span-8 flex flex-col gap-12">
                                <div className="space-y-6 text-center lg:text-left">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <FileText className="w-3.5 h-3.5" />
                                        Online Enrollment Form
                                    </div>
                                    <h2 className="text-5xl lg:text-7xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
                                        APPLY <span className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]">NOW</span>
                                    </h2>
                                    <p className="text-slate-400 font-bold text-xs lg:text-sm uppercase tracking-widest">
                                        Please provide precise data to accelerate your admission journey.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-20">
                                    {/* SECTION: STUDENT */}
                                    <div className="relative group/card">
                                        <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-3xl shadow-slate-900/5 dark:shadow-black/60 overflow-hidden">
                                            <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-blue-50/50 dark:from-blue-600/10 to-transparent border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/card:bg-blue-600 group-hover/card:text-white transition-all duration-500">
                                                        <User className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Student Details</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Mandatory Identification</p>
                                                    </div>
                                                </div>
                                                <span className="text-5xl font-black text-slate-100 dark:text-slate-800 italic opacity-50">01</span>
                                            </div>
                                            <div className="p-8 lg:p-12">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                                    <div className="space-y-1">
                                                        <FormInput label="Full Name *" name="full_name" value={data.full_name} onChange={e => setData('full_name', e.target.value)} disabled={processing} placeholder="As per documents" />
                                                        <InputError message={errors.full_name} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <FormInput label="Date of Birth *" name="date_of_birth" type="date" value={data.date_of_birth} onChange={e => setData('date_of_birth', e.target.value)} disabled={processing} />
                                                        <InputError message={errors.date_of_birth} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <FormSelect label="Gender *" name="gender" value={data.gender} onChange={e => setData('gender', e.target.value)}
                                                            options={Object.entries(genders).map(([key, value]) => ({ value: key, label: value }))} disabled={processing} />
                                                        <InputError message={errors.gender} />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <FormSelect label="Grade Applying *" name="grade_applying_for" value={data.grade_applying_for} onChange={e => setData('grade_applying_for', e.target.value)}
                                                            options={Object.entries(grades).map(([key, value]) => ({ value: key, label: value }))}
                                                            disabled={processing} />
                                                        <InputError message={errors.grade_applying_for} />
                                                    </div>
                                                    <div className="md:col-span-2 space-y-1">
                                                        <FormInput label="Nationality *" name="nationality" value={data.nationality} onChange={e => setData('nationality', e.target.value)} disabled={processing} placeholder="e.g. Nepalese" />
                                                        <InputError message={errors.nationality} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SECTION: PARENT */}
                                    <div className="relative group/card">
                                        <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-3xl shadow-slate-900/5 dark:shadow-black/60 overflow-hidden">
                                            <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-orange-50/50 dark:from-orange-600/10 to-transparent border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-orange-600 dark:text-orange-500 group-hover/card:bg-orange-600 group-hover/card:text-white transition-all duration-500">
                                                        <Users className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Guardian Contact</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Emergency & Communication</p>
                                                    </div>
                                                </div>
                                                <span className="text-5xl font-black text-slate-100 dark:text-slate-800 italic opacity-50">02</span>
                                            </div>
                                            <div className="p-8 lg:p-12">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                                    <div className="space-y-1"><FormInput label="Father's Name" name="father_name" value={data.father_name} onChange={e => setData('father_name', e.target.value)} disabled={processing} /><InputError message={errors.father_name} /></div>
                                                    <div className="space-y-1"><FormInput label="Mother's Name" name="mother_name" value={data.mother_name} onChange={e => setData('mother_name', e.target.value)} disabled={processing} /><InputError message={errors.mother_name} /></div>
                                                    <div className="space-y-1"><FormInput label="Parent's Phone" name="parent_phone" value={data.parent_phone} onChange={e => setData('parent_phone', e.target.value)} disabled={processing} /><InputError message={errors.parent_phone} /></div>
                                                    <div className="space-y-1"><FormInput label="Parent's Email" name="parent_email" value={data.parent_email} onChange={e => setData('parent_email', e.target.value)} disabled={processing} /><InputError message={errors.parent_email} /></div>
                                                    <div className="md:col-span-2 space-y-1"><FormInput label="Permanent Address" name="parent_address" value={data.parent_address} onChange={e => setData('parent_address', e.target.value)} disabled={processing} /><InputError message={errors.parent_address} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SECTION: ACADEMIC */}
                                    <div className="relative group/card">
                                        <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-3xl shadow-slate-900/5 dark:shadow-black/60 overflow-hidden">
                                            <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-emerald-50/50 dark:from-emerald-600/10 to-transparent border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-500 group-hover/card:bg-emerald-600 group-hover/card:text-white transition-all duration-500">
                                                        <BookOpen className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Academic Background</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Previous Institution Records</p>
                                                    </div>
                                                </div>
                                                <span className="text-5xl font-black text-slate-100 dark:text-slate-800 italic opacity-50">03</span>
                                            </div>
                                            <div className="p-8 lg:p-12">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                                    <div className="space-y-1"><FormInput label="Previous School Name *" name="previous_school_name" value={data.previous_school_name} onChange={e => setData('previous_school_name', e.target.value)} disabled={processing} /><InputError message={errors.previous_school_name} /></div>
                                                    <div className="space-y-1"><FormInput label="Last Grade Completed *" name="previous_last_grade" value={data.previous_last_grade} onChange={e => setData('previous_last_grade', e.target.value)} disabled={processing} /><InputError message={errors.previous_last_grade} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SECTION: ADDITIONAL */}
                                    <div className="relative group/card">
                                        <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-white/10 shadow-3xl shadow-slate-900/5 dark:shadow-black/60 overflow-hidden">
                                            <div className="px-8 lg:px-12 py-10 bg-linear-to-r from-purple-50/50 dark:from-purple-600/10 to-transparent border-b border-slate-50 dark:border-white/5 flex items-center justify-between">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-white/10 flex items-center justify-center text-purple-600 dark:text-purple-500 group-hover/card:bg-purple-600 group-hover/card:text-white transition-all duration-500">
                                                        <AlertCircle className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase italic tracking-tight">Final Details</h3>
                                                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">Documents & Remarks</p>
                                                    </div>
                                                </div>
                                                <span className="text-5xl font-black text-slate-100 dark:text-slate-800 italic opacity-50">04</span>
                                            </div>
                                            <div className="p-8 lg:p-12">
                                                <div className="grid grid-cols-1 gap-10">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                                                        <div className="space-y-1"><FormInput label="Medical Information (if any)" name="medical_info" value={data.medical_info} onChange={e => setData('medical_info', e.target.value)} disabled={processing} /><InputError message={errors.medical_info} /></div>
                                                        <div className="space-y-1"><FormInput label="Special Attention (if any)" name="require_attend" value={data.require_attend} onChange={e => setData('require_attend', e.target.value)} disabled={processing} /><InputError message={errors.require_attend} /></div>
                                                    </div>
                                                    <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-white/5 group/file transition-colors hover:border-blue-500/50">
                                                        <div className="flex items-center gap-4 mb-4">
                                                            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 flex items-center justify-center">
                                                                <FileText className="w-5 h-5" />
                                                            </div>
                                                            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Supporting Documents Upload</Label>
                                                        </div>
                                                        <input
                                                            name="documents"
                                                            type="file"
                                                            multiple
                                                            onChange={e => setData('documents', Array.from(e.target.files || []))}
                                                            disabled={processing}
                                                            className="w-full text-xs font-bold text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-[10px] file:font-black file:uppercase file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer disabled:opacity-50"
                                                        />
                                                        <InputError message={errors.documents} />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <Label className='text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1'>Additional Remarks</Label>
                                                        <Textarea
                                                            value={data.remarks}
                                                            onChange={e => setData('remarks', e.target.value)}
                                                            disabled={processing}
                                                            rows={5}
                                                            className="resize-none bg-slate-50 dark:bg-slate-800/50 border-none rounded-3xl p-6 focus:ring-4 focus:ring-blue-600/10 transition-all font-medium text-sm disabled:opacity-50 disabled:pointer-events-none"
                                                            placeholder='Is there anything else we should know about the student?'
                                                        />
                                                        <InputError message={errors.remarks} />
                                                    </div>
                                                </div>
                                                <div className="flex justify-end mt-12">
                                                    <button
                                                        type="submit"
                                                        disabled={processing}
                                                        className="w-full lg:w-80 h-12 bg-slate-900 dark:bg-blue-600 text-white font-black rounded-[2.5rem] flex items-center justify-center gap-4 hover:bg-blue-600 dark:hover:bg-blue-700 shadow-2xl shadow-slate-900/10 dark:shadow-black/50 active:scale-[0.98] transition-all duration-500 uppercase tracking-[0.2em] italic group disabled:opacity-50"
                                                    >
                                                        {processing ? (
                                                            <span className="flex items-center gap-3">
                                                                <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                                PROCESSING...
                                                            </span>
                                                        ) : (
                                                            <>
                                                                Submit Application
                                                                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </form>
                            </div>

                            <aside className="lg:col-span-4 relative">
                                <div className="sticky top-40">
                                    <RequiredDocumnet />
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
        </FrontLayout >
    );
};

export default Admissions;