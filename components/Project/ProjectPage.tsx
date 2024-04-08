import React from 'react'
import ProjectNavbar from './ProjectNavbar'
import GenerationForm from './GenerationForm'
import PreviewUI from './PreviewUI'
import CodeEditor from './CodeEditor'
import MobileProjectNavbar from './MobileProjectNavbar'
import { getProject } from '@/lib/actions/project.actions'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const ProjectPage = async ({ id }: { id: string }) => {

    const { project } = await getProject(id) as { project: Project };

    return (
        <div className=' h-screen flex flex-col bg-gray-100 overflow-hidden'>
            <ProjectNavbar id={project.id} />
            <MobileProjectNavbar project={project} />
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={15} className=' hidden xl:block px-5 py-10 bg-white'>
                    <GenerationForm project={project} />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={70} className='col-span-4'>
                    <PreviewUI project={project} />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={15} className=' hidden xl:block px-5 py-10 bg-white'>
                    <CodeEditor project={project} />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default ProjectPage