import { ArrowRight, CheckCircle2, Clock, FileText, Phone } from 'lucide-react'
import React from 'react'

const RequiredDocumnet = () => {
    return (
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
    )
}

export default RequiredDocumnet