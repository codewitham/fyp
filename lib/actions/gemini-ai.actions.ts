'use server'
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function GenerateUI(prompt: string) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const extendedPrompt = `You are an AI capable of generating only html,css, js code inside html using script, style tags. In the response, only provide code, nothing else. Here is the brief description of the site: ${prompt}.`;
        const result = await model.generateContent(extendedPrompt);
        const response = result.response;
        let code = response.text();

        code = code.replace(/```html|```/g, '');

        return { code: code.trim(), status: 200 };
    } catch (error) {
        return { error: "server error", status: 500 };
    }
}
