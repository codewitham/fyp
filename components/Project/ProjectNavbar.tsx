'use client';
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowLeft, Download, Share, Share2, Trash2 } from 'lucide-react'
import { deleteProject } from '@/lib/actions/project.actions'
import { toast } from '../ui/use-toast';
import { redirect } from 'next/navigation';

const ProjectNavbar = ({ id }: { id: string }) => {
    const handleDelete = async () => {
        const res = await deleteProject(id);
        if (res.error) {
            return toast({ title: res.error });
        }
        redirect("/dashboard")
        return toast({ title: "Project deleted!" })
    }
    return (
        <div className=' w-full p-4 bg-white flex items-center gap-5 justify-between border-b' >
            <Link href={"/dashboard"}>
                <Button variant={"outline"}>
                    <ArrowLeft className=' h-4 w-4 mr-2' />  back
                </Button>
            </Link>

            <div className=' flex items-center gap-4'>
                <Button onClick={handleDelete} size={"icon"} variant={"outline"}>
                    <Trash2 className=' h-4 w-4' />
                </Button>
                <Button variant={"outline"} size={"icon"}>
                    <Share2 className=' h-4 w-4' />
                </Button>
                <Button className=' bg-orange-500 hover:bg-orange-600' size={"icon"}>
                    <Download className=' h-4 w-4' />
                </Button>
            </div>
        </div>
    )
}

export default ProjectNavbar