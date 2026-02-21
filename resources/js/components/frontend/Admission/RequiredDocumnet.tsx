import {
    ArrowRight,
    CheckCircle2,
    Clock,
    FileText,
    Phone,
    HelpCircle
} from "lucide-react";

const RequiredDocumnet = () => {
    const requiredDocuments = [
        "Passport size photograph (3 copies)",
        "Birth certificate",
        "Previous school transfer certificate",
        "Last academic progress report",
        "Citizenship certificate of parents",
        "Student citizenship certificate",
        "Medical certificate",
        "Duly filled application form",
    ];
    return (
        <div className="lg:col-span-4 space-y-10">

            {/* ================= REQUIRED DOCUMENTS ================= */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-2xl">
                <div className="p-10 space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-600/15 flex items-center justify-center text-blue-400">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-black uppercase italic tracking-tight">
                            Required Documents
                        </h3>
                    </div>

                    <ul className="space-y-4">
                        {requiredDocuments.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                            >
                                <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0" />
                                <span className="text-xs font-semibold leading-relaxed tracking-wide">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* subtle background glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_60%)]" />
            </div>

            {/* ================= HELP & SUPPORT ================= */}
            <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 shadow-xl space-y-8">

                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        <h3 className="text-2xl font-black uppercase italic tracking-tight text-slate-900 dark:text-white">
                            Need Help?
                        </h3>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Our admission team is ready to assist you
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                Call Counselor
                            </p>
                            <p className="text-sm font-black italic text-slate-900 dark:text-white">
                                +977-081-533337
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                Office Hours
                            </p>
                            <p className="text-sm font-black italic text-slate-900 dark:text-white">
                                Sun – Fri: 9AM – 5PM
                            </p>
                        </div>
                    </div>
                </div>

                <button className="group w-full h-14 rounded-2xl bg-slate-900 dark:bg-blue-600 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-blue-600 dark:hover:bg-blue-700 transition">
                    View FAQ
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default RequiredDocumnet;
