'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Home, Settings, Code, Book, Download, CopyIcon } from 'lucide-react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { setSidebar } from '@/store/reducers/ProjectSlice'
import { RootState } from '@/store/store';
// import { useAppDispatch } from '@/lib/hooks';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import GenerationForm from './GenerationForm';
import CodeEditor from './CodeEditor';
import { copyCodeToClipboard } from '@/lib/hooks';
import { UserButton } from '@clerk/nextjs';

const ProjectSidebar = ({ project }: { project: Project }) => {
    const dispatch = useDispatch()
    const sidebar = useSelector((state: RootState) => state.project.sidebar);

    const handleSidebarChange = (sidebarValue: number) => {
        dispatch(setSidebar(sidebarValue));
        console.log(sidebar);

    };

    const MobileSidebarComponent = () => {
        return (

            <div className='flex lg:hidden flex-col gap-3'>
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button size={"icon"} variant={"ghost"} className='text-white hover:text-orange-500'>
                            <Settings className='h-4 w-4' />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className='p-5 h-[550px] overflow-hidden'>
                        <div className=' overflow-y-auto'>
                            <GenerationForm project={project} />
                        </div>
                    </DrawerContent>
                </Drawer >
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button size={"icon"} variant={"ghost"} className='text-white hover:text-orange-500'>
                            <Code className='h-4 w-4' />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className='p-5 h-[550px] overflow-hidden'>
                        <div className=' overflow-y-auto'>
                            <CodeEditor project={project} />
                        </div>
                    </DrawerContent>
                </Drawer >
            </div >

        )
    }

    return (
        <div className='p-2 py-5 flex flex-col gap-3 bg-orange-500 h-full w-fit'>
            <Link href={"/dashboard"}>
                <Button size={"icon"} variant={"outline"} className='text-orange-500 hover:text-orange-500'>
                    <Home className='h-4 w-4' />
                </Button>
            </Link>
            <div className='hidden lg:flex flex-col gap-3'>
                <Button onClick={() => handleSidebarChange(1)} size={"icon"} variant={"ghost"} className='text-white hover:text-orange-500'>
                    <Settings className='h-4 w-4' />
                </Button>
                <Button onClick={() => handleSidebarChange(2)} size={"icon"} variant={"ghost"} className='text-white hover:text-orange-500'>
                    <Code className='h-4 w-4' />
                </Button>
            </div>

            <MobileSidebarComponent />
            <Link href={"/dashboard"}>
                <Button size={"icon"} variant={"ghost"} className='text-white hover:text-orange-500'>
                    <Book className='h-4 w-4' />
                </Button>
            </Link>
            <Button onClick={() => copyCodeToClipboard(project.code)} variant={"ghost"} className=' text-white hover:text-orange-500' size={"icon"}>
                <CopyIcon className=' h-4 w-4' />
            </Button>
            <div className=' mb-0 mt-auto mx-auto'>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}

export default ProjectSidebar
