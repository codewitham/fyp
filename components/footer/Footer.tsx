import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Facebook, Github, Youtube } from 'lucide-react'

const Footer = () => {
    return (
        <div className=' w-full'>
            <div className=' container mx-auto px-5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className=' col-span-1 md:col-span-2 lg:col-span-4'>
                    <h1 className=' text-2xl font-bold'>Porto <span className=' text-orange-500'>AI</span></h1>
                </div>
                <div>
                    <h1 className='text-2xl lg:text-4xl font-semibold mb-4 gradient-text'>
                        Explore more about new Gen AI tool. Go Premium Now.
                    </h1>
                </div>
                <div className=' flex flex-col gap-2 text-left text-muted-foreground'>
                    <h1 className=' font-bold text-lg mb-5 text-primary'>Quick Links</h1>
                    <Link href={"/"} className=' hover:underline'>
                        Home
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        About
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        Pricing
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        Contact
                    </Link>
                </div>

                <div className=' flex flex-col gap-2 text-left text-muted-foreground'>
                    <h1 className=' font-bold text-lg mb-5 text-primary'>About</h1>
                    <Link href={"/"} className=' hover:underline'>
                        Terms & Conditions
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        Privicy Policy
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        Docs
                    </Link>
                    <Link href={"/"} className=' hover:underline'>
                        Pricing
                    </Link>
                </div>
                <div className=' flex flex-col gap-2 text-left text-muted-foreground'>
                    <h1 className=' font-bold text-lg mb-5 text-primary'>Support</h1>
                    <div className=' flex items-center gap-4'>
                        <Link href={"/"}>
                            <Button variant={"ghost"} size={"icon"}>
                                <Youtube className=' h-4 w-4' />
                            </Button>
                        </Link>
                        <Link href={"/"}>
                            <Button variant={"ghost"} size={"icon"}>
                                <Facebook className=' h-4 w-4' />
                            </Button>
                        </Link>
                        <Link href={"/"}>
                            <Button variant={"ghost"} size={"icon"}>
                                <Github className=' h-4 w-4' />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer