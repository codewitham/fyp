import ProjectPage from '@/components/Project/ProjectPage'
import { getProject } from '@/lib/actions/project.actions';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {

    const id = params.id;
    const { project, status, error } = await getProject(id) as { project?: Project; status: number; error: string };

    if (!project || error) {
        return redirect("/dashboard");
    }

    return (
        <ProjectPage project={project} />
    )
}

export default page