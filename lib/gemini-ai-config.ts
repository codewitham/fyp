import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { pdfToPrompt } from "./pdf-reader";

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.API_KEY || "";

export async function generateChat(prompt: string, file?: string) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.1,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2000,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
        ],
    });

    let text = '';

    if (file) {
        const { text: extractedText } = await pdfToPrompt(file);

        if (extractedText !== undefined) {
            text = extractedText;
        }
    }

    // console.log("{text}: ", text);


    const result = await chat.sendMessage(`You are an AI capable of generating only html,css, js code inside html using script, style tags. No external css and js files and for images use div or placeholder images if needed.  Here is the brief description of the site: ${prompt}.${text ? "resume or docs:  " + text : ''}.`);
    const response = result.response;

    const code = response.text().replace(/```html|```/g, '');
    return code;
}
