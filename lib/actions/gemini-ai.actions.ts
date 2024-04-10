'use server'
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export async function GenerateUI(prompt: string) {
    try {
        const model = new ChatGoogleGenerativeAI({
            modelName: "gemini-1.0-pro",
            maxOutputTokens: 2048,
            apiKey: process.env.API_KEY
        });

        const res = await model.invoke([
            [
                "human",
                `generate html, css and js code as html one file no external css, js files. based on description: ${prompt}.`,
            ],
        ]);

        if (res && res.content) {
            const code = res.content.toString();
            console.log(code);

            const trimmedCode = code.replace(/```html|```/g, '');

            return { code: trimmedCode.trim(), status: 200 };
        } else {
            return { error: "api issue", status: 400 };
        }
    } catch (error) {
        console.error("Error:", error);
        return { error: "server error", status: 500 };
    }
}

