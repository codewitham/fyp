"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
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
import { Textarea } from "../ui/textarea"
import { editProject, getProject } from "@/lib/actions/project.actions"
import { toast } from "../ui/use-toast"

const formSchema = z.object({
    prompt: z.string().min(10, {
        message: "prompt must be at least 10 characters.",
    }),
})

const GenerationForm = ({ project }: { project: Project }) => {






    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: project?.prompt || "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        const res = await editProject({ id: project.id, prompt: values.prompt, code: project.code, manual: false });
        if (res.error) {
            return toast({ title: res.error, variant: "destructive" })
        }
        return toast({ title: "ui updated!" });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=' flex flex-col gap-5  h-full '>
                <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prompt</FormLabel>
                            <FormControl>
                                <Textarea rows={10} placeholder="generate a site for my interview portfolio..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Briefly Explain Your Site.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

export default GenerationForm