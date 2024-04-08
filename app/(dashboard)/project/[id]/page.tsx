import ProjectPage from '@/components/Project/ProjectPage'
import React from 'react'

const page = ({ params }: { params: { id: string } }) => {

    return (
        <ProjectPage id={params.id} />
    )
}

export default page