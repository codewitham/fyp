import DashboardPage from '@/components/Dashboard/DashboardPage'
import { BgNavbar } from '@/components/Navbar/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen bg-gray-100'>
            <BgNavbar />
            <DashboardPage />
        </div>
    )
}

export default page