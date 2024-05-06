import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import MobileMenu from './MobileMenu'
import { LogIn } from 'lucide-react'
import AuthMenu from './AuthMenu'

const TransparentNavbar = () => {
    return (
        <header className='w-full'>
            <div className=' container mx-auto p-5 flex items-center justify-between'>
                <h1 className='text-3xl font-semibold'>Porto <span className=' text-orange-500'>AI</span></h1>

                <div className='hidden lg:flex items-center gap-5'>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Home
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            About
                        </Button>
                    </Link>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Contact
                        </Button>
                    </Link>
                    <AuthMenu />

                </div>
                <div className=' block lg:hidden'>
                    <MobileMenu />
                </div>
            </div>

        </header>
    )
}

const BgNavbar = () => {
    return (
        <header className='w-full bg-white'>
            <div className=' container mx-auto p-5 flex items-center justify-between '>
                <h1 className='text-3xl font-black'>Porto <span className=' text-orange-500'>AI</span></h1>

                <div className='hidden lg:flex items-center gap-5'>
                    <Link href={"/"}>
                        <Button variant={"ghost"}>
                            Home
                        </Button>
                    </Link>

                    <Link href={"/docs"}>
                        <Button variant={"ghost"}>
                            Docs
                        </Button>
                    </Link>
                    <AuthMenu />

                </div>
                <div className=' block lg:hidden'>
                    <MobileMenu />
                </div>
            </div>

        </header>
    )
}

export { TransparentNavbar, BgNavbar }