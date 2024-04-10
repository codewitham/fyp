import { put } from "@vercel/blob";
import { v4 as uuidv4 } from 'uuid';

export async function uploadFile(file: Blob) {
    try {

        console.log(file);

        const fileId = uuidv4(); // Generate a random UUID
        const { url } = await put(`pdfs/${fileId}`, file, { access: 'public' });
        console.log(url);
        return url as string;
    } catch (error) {
        console.error("File upload error:", error);
        return null;
    }
}