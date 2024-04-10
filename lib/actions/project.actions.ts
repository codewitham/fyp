'use server';
import { revalidatePath } from "next/cache";
import prisma from "../db";
import { currentUser } from "@clerk/nextjs/server";
import { generateChat } from "../gemini-ai-config";
import { pdfToPrompt } from "../pdf-reader";

export async function editProject({ id, name, prompt, code, file, manual }: { name?: string, id: string, file?: string, prompt: string, code: string, manual: boolean }) {
    try {
        const user = await currentUser();

        console.log("server: ", code, file, manual);



        if (!manual) {
            const genCode = await generateChat(prompt, file);

            const project = await prisma.project.update({
                where: { id: id, userId: user?.id }, data: {
                    prompt: prompt,
                    code: genCode,
                    file: file,
                }
            })
            revalidatePath("/")
            return { project: project, status: 201 };
        }



        const project = await prisma.project.update({
            where: { id: id, userId: user?.id }, data: {
                prompt: prompt,
                code: code,
                name: name
            }
        })

        revalidatePath("/")

        return { project: project, status: 201 };
    } catch (error) {
        console.log(error);
        return { error: "server error", status: 500 };
    }
}

export async function createProject(name: string) {
    try {
        const user = await currentUser();
        const newProject = await prisma.project.create({ data: { name: name, userId: user?.id as string } })
        console.log(newProject);
        revalidatePath("/")
        return { message: "project created", status: 201 };
    } catch (error) {
        console.log(error);
        return { error: "server error", status: 500 };
    }
}

export async function getProjects() {
    try {
        const user = await currentUser();
        const projects = await prisma.project.findMany({ where: { userId: user?.id as string } })

        return { projects, status: 200 };
    } catch (error) {
        console.log(error);

        return { error: "server error", status: 500 };
    }
}

export async function getProject(id: string) {
    try {
        const user = await currentUser();
        const project = await prisma.project.findUnique({ where: { userId: user?.id as string, id: id } })

        if (!project) {
            return { error: "Project not found", status: 404 };
        }

        return { project: project, status: 200 };
    } catch (error) {
        console.log(error);
        return { error: "server error", status: 500 };
    }
}

export async function deleteProject(id: string) {
    try {
        const user = await currentUser();
        const project = await prisma.project.delete({ where: { userId: user?.id as string, id: id } })
        revalidatePath("/")
        return { message: "project deleted!", status: 200 };
    } catch (error) {
        console.log(error);

        return { error: "server error", status: 500 };
    }
}