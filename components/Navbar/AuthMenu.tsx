
import React from 'react'
import { SignOutButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { redirect, useRouter } from 'next/navigation';


const AuthMenu = async () => {
    const user = await currentUser();

    if (!user) return (
        <Link href={"/sign-in"}>
            <Button className=' w-full lg:w-fit rounded-full'>Sign In</Button>
        </Link>
    );

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className=' cursor-pointer'>
                        <AvatarImage src={user?.imageUrl} alt={user?.firstName || ""} />
                        <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className=' w-52'>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href={"/dashboard"}>
                        <DropdownMenuItem>
                            Dashboard
                        </DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                    <SignOutButton signOutCallback={() => redirect("/")}>
                        <DropdownMenuItem>sign out</DropdownMenuItem>
                    </SignOutButton>
                </DropdownMenuContent>
            </DropdownMenu >
        </>
    );
}

export default AuthMenu