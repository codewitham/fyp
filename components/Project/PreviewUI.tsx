import { getProject } from '@/lib/actions/project.actions'
import React from 'react'

const PreviewUI = ({ project }: { project: Project }) => {
    return (
        <div className=' h-full w-full bg-gray-100 p-5 md:p-10 overflow-auto flex items-center justify-center'>
            <iframe
                title="code-preview"
                className="w-full h-full border-none bg-white"
                srcDoc={project?.code as string}
            />
        </div>
    )
}

export default PreviewUI