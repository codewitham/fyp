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
                <DialogContent className=' rounded-lg h-[400px] overflow-hidden'>
                    <DialogHeader>
                        <DialogTitle>Generate UI</DialogTitle>
                    </DialogHeader>
                    <div className=' overflow-y-auto '>
                        <GenerationForm project={project} />
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog>
                <DialogTrigger asChild>
                    <Button variant={"outline"} size={"icon"}>
                        <Code className='h-4 w-4' />
                    </Button>
                </DialogTrigger>
                <DialogContent className=' h-[400px] overflow-hidden rounded-lg'>
                    <DialogHeader>
                        <DialogTitle>Source Code</DialogTitle>
                    </DialogHeader>
                    <div className=' overflow-y-auto'>
                        <CodeEditor project={project} />
                    </div>
                </DialogContent>
            </Dialog>



        </div>
    )
}

export default MobileProjectNavbar