

import { login } from '@/routes'

import { Link } from '@inertiajs/react'
import { Facebook, Globe, Instagram, Mail, Phone, User, Youtube } from 'lucide-react'


const TopNav = () => {
    return (
        <div className="hidden lg:flex bg-blue-950 text-slate-300 py-2.5 px-4 lg:px-6 xl:px-8 border-b border-blue-900/30 relative z-60">
            <div className="container mx-auto flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
                        <Phone className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span>+977-01-4444444</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group border-l border-white/10 pl-8">
                        <Mail className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                        <span>info@jayaschool.edu.np</span>
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 border-r border-white/10 pr-8">
                        <Facebook className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                        <Instagram className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                        <Youtube className="h-3.5 w-3.5 hover:text-blue-500 transition-all cursor-pointer hover:scale-110" />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                            <Globe className="h-3 w-3 text-blue-500" /> English
                        </button>
                        <Link href={login()} className="flex items-center gap-2 bg-blue-600/10 hover:bg-blue-600 px-4 py-1.5 rounded-full text-white transition-all border border-blue-600/30">
                            <User className="h-3 w-3" /> Login
                        </Link>
                      

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav