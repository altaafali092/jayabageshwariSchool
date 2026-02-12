import Footer from '@/components/frontend/Footer'
import Navbar from '@/components/frontend/Navbar'
import React from 'react'


const FrontLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default FrontLayout