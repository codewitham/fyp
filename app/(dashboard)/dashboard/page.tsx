import DashboardPage from '@/components/Dashboard/DashboardPage'
import { BgNavbar } from '@/components/Navbar/Navbar'
import { getProjects } from '@/lib/actions/project.actions';
import React from 'react'

const page = async () => {
    const { projects } = await getProjects() as { projects: Project[] };
    return (
        <div className='min-h-screen bg-gray-100'>
            <BgNavbar />
            <DashboardPage projects={projects} />
        </div>
    )
}

export default page
