"use client"

import React, { useState } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import { createProject } from '@/lib/actions/project.actions'
import { toast } from '../ui/use-toast'

const CreateProject = () => {

    const formSchema = z.object({
        name: z.string().min(2, {
            message: "name must be at least 2 characters.",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const res = await createProject(values.name);
        if (res.error) {
            return toast({ title: res.error, variant: "destructive" });
        }
        return toast({ title: res.message });
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=' bg-orange-500 hover:bg-orange-600' size={"icon"}>
                    <Plus className=' h-4 w-4 ' />
                </Button>
            </DialogTrigger>
            <DialogContent className=' rounded-lg'>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose asChild>
                            <Button type="submit">create</Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default CreateProject