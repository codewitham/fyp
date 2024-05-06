'use client';
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowLeft, CopyIcon, Download, Share, Share2, Trash2 } from 'lucide-react'
import { deleteProject } from '@/lib/actions/project.actions'
import { toast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';
import { copyCodeToClipboard } from '@/lib/hooks';

const ProjectNavbar = ({ project }: { project: Project }) => {
    const router = useRouter()

    const handleDelete = async () => {
        const res = await deleteProject(project.id);
        if (res.error) {
            return toast({ title: res.error });
        }
        toast({ title: "Project deleted!" })
        return router.push("/dashboard");
    }



    return (
        <div className=' w-full p-4 bg-white flex items-center gap-5 justify-between border-b' >
            <h1 className=' font-semibold text-3xl'>Porto <span className=' text-orange-500'>AI</span></h1>

            <div className=' flex items-center gap-4'>
                <Button onClick={handleDelete} size={"icon"} variant={"outline"}>
                    <Trash2 className=' h-4 w-4' />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                    <Share2 className=' h-4 w-4' />
                </Button>
                <Button onClick={() => copyCodeToClipboard(project.code)} className=' bg-orange-500 hover:bg-orange-600' size={"icon"}>
                    <CopyIcon className=' h-4 w-4' />
                </Button>
            </div>
        </div>
    )
}

export default ProjectNavbar