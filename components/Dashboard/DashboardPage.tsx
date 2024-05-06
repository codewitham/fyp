import React from 'react'
import { Input } from '../ui/input'
import ProjectCard from './ProjectCard'
import moment from "moment"
import CreateProject from './CreateProject'
import { getProjects } from '@/lib/actions/project.actions'



const DashboardPage = async () => {
    const { projects } = await getProjects();

    return (
        <div className=' container py-20 mx-auto px-5'>
            <div className=' flex items-center gap-2 justify-between max-w-full '>
                <Input type='text' placeholder='search...' className=' w-fit' />
                <CreateProject />
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {projects?.map((item, index) => (
                    <ProjectCard key={index} name={item.name} code={item.code as string} date={moment(item.createdAt).fromNow()} id={item.id} />
                ))}
            </div>
        </div>
    )
}

export default DashboardPage