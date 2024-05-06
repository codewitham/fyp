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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";
import { Bird, Rabbit, Turtle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(4, {
        message: "name must contain 4 characters."
    }),
    prompt: z.string().min(10, {
        message: "Prompt must be at least 10 characters.",
    }),
    framework: z.string({
        required_error: "Please select an framework to generate code.",
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
            name: project.name,
            prompt: project?.prompt || "",
            framework: "",
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

                return toast({ title: "UI Updated!" })

            }

            const code = await editProject({
                id: project.id,
                file: fileUrl,
                prompt: values.prompt,
                code: project.code,
                manual: false
            });


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
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-5 h-full '>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        Settings
                    </legend>
                    <div className="grid gap-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Generate a site for my interview portfolio..." {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        change name of project.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Label htmlFor="model">Model</Label>
                        <Select>
                            <SelectTrigger
                                id="model"
                                className="items-start [&_[data-description]]:hidden"
                            >
                                <SelectValue placeholder="Select a model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="genesis">
                                    <div className="flex items-start gap-3 text-muted-foreground">
                                        <Rabbit className="size-5" />
                                        <div className="grid gap-0.5">
                                            <p>
                                                Neural{" "}
                                                <span className="font-medium text-foreground">
                                                    Genesis
                                                </span>
                                            </p>
                                            <p className="text-xs" data-description>
                                                Our fastest model for general use cases.
                                            </p>
                                        </div>
                                    </div>
                                </SelectItem>
                                <SelectItem value="explorer">
                                    <div className="flex items-start gap-3 text-muted-foreground">
                                        <Bird className="size-5" />
                                        <div className="grid gap-0.5">
                                            <p>
                                                Neural{" "}
                                                <span className="font-medium text-foreground">
                                                    Explorer
                                                </span>
                                            </p>
                                            <p className="text-xs" data-description>
                                                Performance and speed for efficiency.
                                            </p>
                                        </div>
                                    </div>
                                </SelectItem>
                                <SelectItem value="quantum">
                                    <div className="flex items-start gap-3 text-muted-foreground">
                                        <Turtle className="size-5" />
                                        <div className="grid gap-0.5">
                                            <p>
                                                Neural{" "}
                                                <span className="font-medium text-foreground">
                                                    Quantum
                                                </span>
                                            </p>
                                            <p className="text-xs" data-description>
                                                The most powerful model for complex
                                                computations.
                                            </p>
                                        </div>
                                    </div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* <div className="grid gap-3">
                        <Label htmlFor="temperature">Temperature</Label>
                        <Input id="temperature" type="number" placeholder="0.4" />
                    </div> */}
                </fieldset>

                <fieldset className="grid gap-6 rounded-lg border p-4">
                    <legend className="-ml-1 px-1 text-sm font-medium">
                        prompt
                    </legend>
                    <div className="grid gap-3">


                        <FormField
                            control={form.control}
                            name="framework"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Framework</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={"tailwind"}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a framework" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="tailwind">tailwind css</SelectItem>
                                            <SelectItem value="bootstrap">bootstrap css</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        Please select a framework.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                    </div>
                </fieldset>
                <div className=" pb-5">

                    <Button type="submit" disabled={loading}>Submit</Button>
                </div>
            </form>
        </Form>
    );
};

export default GenerationForm;
