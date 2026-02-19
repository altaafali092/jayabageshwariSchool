import { Clock, Facebook, Instagram, Twitter, User2Icon, Youtube } from 'lucide-react'
import React from 'react'

const SocialContact = () => {
    return (
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <User2Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Key Contacts</h4>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs font-black text-slate-900 dark:text-white">Mrs. Presanna Raj Bhandari</p>
                            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Founder</p>
                        </div>
                        <div>
                            <p className="text-xs font-black text-slate-900 dark:text-white">Mrs. Bidya Man Raj Bhandari</p>
                            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase">Principal</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Office Hours</h4>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-slate-600 dark:text-slate-400 group">Sun - Thu:</span>
                            <span className="font-black text-slate-900 dark:text-white">9AM - 5PM</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-slate-600 dark:text-slate-400">Friday:</span>
                            <span className="font-black text-slate-900 dark:text-white">9AM - 2PM</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px]">
                            <span className="font-bold text-slate-600 dark:text-slate-400">Saturday:</span>
                            <span className="font-black text-red-500 dark:text-red-400 italic uppercase">Closed</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect:</p>
                <div className="flex gap-4">
                    {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                        <button key={i} className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all duration-300 border border-transparent dark:border-slate-800">
                            <Icon className="w-4 h-4" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SocialContact