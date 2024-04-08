import React from 'react'
import { Button } from '../ui/button'
import { Code, Settings } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import GenerationForm from './GenerationForm'
import CodeEditor from './CodeEditor'

const MobileProjectNavbar = ({ project }: { project: Project }) => {
    return (
        <div className=' flex xl:hidden items-center p-4 gap-4'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                        <Settings className='h-4 w-4' />
                    </Button>
                </DialogTrigger>
                <DialogContent className=' rounded-lg'>
                    <DialogHeader>
                        <DialogTitle>Generate UI</DialogTitle>
                    </DialogHeader>
                    <GenerationForm project={project} />
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                        <Code className='h-4 w-4' />
                    </Button>
                </DialogTrigger>
                <DialogContent className='  rounded-lg'>
                    <DialogHeader>
                        <DialogTitle>Source Code</DialogTitle>
                    </DialogHeader>
                    <div className=' overflow-hidden'>
                        <CodeEditor project={project} />
                    </div>
                </DialogContent>
            </Dialog>



        </div>
    )
}

export default MobileProjectNavbar