'use server';
import { PDFLoader } from "langchain/document_loaders/fs/pdf";


export const pdfToPrompt = async (url: string) => {
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
        const loader = new PDFLoader(blob);

        const docs = await loader.load();
        const content = docs[0].pageContent.trim();
        return { text: content, status: 201 };

    } catch (error) {
        console.error("Error converting PDF to prompt:", error);
        return { error: "Error converting PDF to prompt", status: 500 };
    }
};