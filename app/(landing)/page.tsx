import ClientSection from '@/components/ClientReviews/ClientSection'
import DetailsSection from '@/components/DetailsSection/DetailsSection'
import HeroSection from '@/components/HeroSection/HeroSection'
import { TransparentNavbar } from '@/components/Navbar/Navbar'
import OverviewSection from '@/components/OverviewSection/OverviewSection'
import FeatureSection from '@/components/features/FeatureSection'
import Footer from '@/components/footer/Footer'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className=' relative overflow-x-hidden min-h-screen flex flex-col'>
                <TransparentNavbar />
                <div className=' flex-1 flex flex-col'>
                    <HeroSection />
                </div>
                <div className="absolute  inset-0 pointer-events-none flex justify-center items-center">
                    <div className="absolute bg-pink-500 -z-10 rounded-full w-56 h-56 blur-3xl top-1/4 left-1/4 opacity-40 animate-bounce" />
                    <div className="absolute bg-pink-500 -z-10 rounded-full w-48 h-48 blur-3xl bottom-10 left-10 opacity-40 animate-accordion-up" />
                    <div className="absolute bg-pink-500 -z-10 md:z-0 rounded-full w-48 h-48 blur-2xl opacity-20 bottom-10 right-1/4 animate-bounce delay-200" />
                    <div className="absolute bg-yellow-500 -z-10 md:z-0 rounded-full w-48 h-48 blur-2xl opacity-20 top-1/2 left-1/2 animate-bounce delay-200" />
                    <div className="absolute bg-orange-500 -z-10 md:z-0 rounded-full w-56 h-56 blur-3xl bottom-1/4 right-1/4 opacity-40 animate-bounce delay-400" />
                    <div className="absolute bg-orange-500 -z-10 rounded-full w-48 h-48 blur-3xl top-10 right-10 opacity-40 animate-bounce delay-400" />
                </div>

            </div>

            <OverviewSection />
            <FeatureSection />
            <DetailsSection />
            <ClientSection />
            <Footer />
        </div>
    )
}



export default page