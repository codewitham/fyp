import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft } from 'lucide-react'
import AuthMenu from '../Navbar/AuthMenu'

const DashboardNavbar = () => {
    return (
        <div className=' w-full'>
            <div className="container mx-auto p-5 flex items-center justify-between">
                <Link href={"/"}>
                    <Button variant={"outline"}>
                        <ArrowLeft className=' h-4 w-4' /> Home
                    </Button>
                </Link>

                <AuthMenu />
            </div>
        </div>
    )
}

export default DashboardNavbar