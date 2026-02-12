import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import React from 'react'


const FrontLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default FrontLayout