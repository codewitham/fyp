'use client';
import React, { useEffect, useRef } from 'react'
import ProjectNavbar from './ProjectNavbar'
import GenerationForm from './GenerationForm'
import PreviewUI from './PreviewUI'
import CodeEditor from './CodeEditor'
import ProjectSidebar from './ProjectSidebar'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store';

const ProjectPage = ({ project }: { project: Project }) => {

    const sidebar = useSelector((state: RootState) => state.project.sidebar)

    useEffect(() => {
        console.log("Sidebar value:", sidebar);
    }, [sidebar])

    return (
        <div className='h-screen flex bg-gray-100 overflow-hidden'>
            <ProjectSidebar project={project} />
            <div className='flex-1 flex flex-col overflow-hidden'>
                <ProjectNavbar project={project} />
                <div className='h-full w-full grid grid-cols-3 lg:grid-cols-4 gap-5'>
                    <div className='px-5 py-10 hidden lg:block bg-white h-full'>
                        {sidebar === 1 ?
                            <GenerationForm project={project} />
                            :
                            <CodeEditor project={project} />
                        }
                    </div>
                    <div className='col-span-3'>
                        <PreviewUI project={project} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage
