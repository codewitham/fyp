import DashboardComponent from '@/components/dashbaord/DashboardComponent'
import DashboardNavbar from '@/components/dashbaord/DashboardNavbar'
import React from 'react'

const page = () => {
    return (
        <div className=' h-screen flex flex-col bg-gray-100'>
            <DashboardNavbar />
            <DashboardComponent />
        </div>
    )
}

export default page