

import { login } from '@/routes'
import { SharedData } from '@/types'

import { Link, usePage } from '@inertiajs/react'
import { Facebook, Globe, Instagram, Mail, Phone, User, Youtube } from 'lucide-react'


const TopNav = () => {
    const { officeSettings } = usePage<SharedData>().props;
    return (
        <div className="hidden lg:flex bg-blue-950 text-slate-300 py-2.5 px-4 lg:px-6 xl:px-8 border-b border-blue-900/30 relative z-60">
            <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Phone className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span>{officeSettings.office_phone || ''}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group border-l border-white/10 pl-8">
                        <Mail className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span>{officeSettings.office_email || ''}</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-8">

                        <a href={officeSettings.fb_url} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                        </a>


                        <a href={officeSettings.insta_url} target="_blank" rel="noopener noreferrer">
                            <Instagram className="h-3.5 w-3.5 hover:text-pink-500 transition-all cursor-pointer hover:scale-110" />
                        </a>


                        <a href={officeSettings.yt_url} target="_blank" rel="noopener noreferrer">
                            <Youtube className="h-3.5 w-3.5 hover:text-red-500 transition-all cursor-pointer hover:scale-110" />
                        </a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopNav