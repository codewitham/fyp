import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import AuthMenu from './AuthMenu'


const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                    <Menu className=' h-4 w-4' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>PortoAI</SheetTitle>
                </SheetHeader>
                <div className=' flex flex-col mt-5'>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className=' w-full'>
                            Home
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className=' w-full'>
                            About
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"} className=' w-full'>
                            Contact
                        </Button>
                    </Link>

                    <div className=' mt-2 mx-auto'>

                        <AuthMenu />
                    </div>
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default MobileMenu