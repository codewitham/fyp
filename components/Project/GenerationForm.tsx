'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEdgeStore } from "@/lib/edgestore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { editProject } from "@/lib/actions/project.actions";
import { toast } from "../ui/use-toast";

const formSchema = z.object({
    prompt: z.string().min(10, {
        message: "Prompt must be at least 10 characters.",
    }),
});

const GenerationForm = ({ project }: { project: Project }) => {
    const [file, setFile] = React.useState<File>();
    const [loading, setLoading] = useState(false);
    const { edgestore } = useEdgeStore();
    const [fileUrl, setFileUrl] = useState<string>(project?.file || "")

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: project?.prompt || "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setLoading(true);
            console.log(values);
            if (file) {
                const res = await edgestore.publicFiles.upload({
                    file,
                    onProgressChange: (progress) => {
                        // you can use this to show a progress bar
                        console.log(progress);
                    },
                });
                console.log(res);

                setFileUrl(res.url);

                const code = await editProject({
                    id: project.id,
                    file: res.url,
                    prompt: values.prompt,
                    code: project.code,
                    manual: false
                });

                console.log(code);
                return toast({ title: "UI Updated!" })

            }

            const code = await editProject({
                id: project.id,
                file: fileUrl || "",
                prompt: values.prompt,
                code: project.code,
                manual: false
            });

            console.log(code);

            return toast({ title: "UI updated!" });

        } catch (error) {
            console.error("Submission error:", error);
            return toast({ title: "Submission failed.", variant: "destructive" });
        } finally {
            setLoading(false);
        }
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5 h-full'>
                <FormField
                    control={form.control}
                    name="prompt"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Prompt</FormLabel>
                            <FormControl>
                                <Textarea rows={10} placeholder="Generate a site for my interview portfolio..." {...field} />
                            </FormControl>
                            <FormDescription>
                                Briefly explain your site.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Input
                    type="file"
                    onChange={(e) => {
                        setFile(e.target.files?.[0]);
                    }}
                />

                {fileUrl &&
                    <Input type="text" value={`prev. ${fileUrl}`} readOnly />
                }


                <Button type="submit" disabled={loading}>Submit</Button>
            </form>
        </Form>
    );
};

export default GenerationForm;
