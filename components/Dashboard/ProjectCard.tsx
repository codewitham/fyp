'use client';
import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Button } from '../ui/button'
import { deleteProject } from '@/lib/actions/project.actions'
import { Trash2 } from 'lucide-react'
import { toast } from '../ui/use-toast';

interface ProjectCard {
    id: string
    name: string,
    code: string,
    date: string,
}

const ProjectCard = ({ name, code, date, id }: ProjectCard) => {
    const handleDelete = async () => {
        const res = await deleteProject(id);
        if (res.error) {
            return toast({ title: res.error });
        }
        return toast({ title: "Project deleted!" })
    }

    return (
        <Card className=' overflow-hidden shadow-none border-none'>
            <div className=' h-48 w-full overflow-hidden'>
                <iframe
                    title="code-preview"
                    className="h-full w-full"
                    srcDoc={code as string}
                />
            </div>
            <CardContent className='flex justify-between items-center mt-5'>
                <div>
                    <Link href={"/project/" + id}>
                        <CardTitle className=' text-xl'>
                            {name}
                        </CardTitle>
                    </Link>
                    <CardDescription className='mt-2'>
                        {date}
                    </CardDescription>
                </div>
                <div>
                    <Button onClick={handleDelete} size={"icon"} variant={"ghost"}>
                        <Trash2 className=' h-4 w-4' />
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectCard