'use client';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { PaintBucket, Paperclip, SendHorizontal } from 'lucide-react';
import { pdfToPrompt } from '@/lib/pdf-reader';

interface PromptProps {
    onSubmit: (promptText: string, pdfFile: File | null) => void;
    loading: boolean;
}

const PromptComponent: React.FC<PromptProps> = ({ onSubmit, loading }) => {
    const [promptText, setPromptText] = useState('');
    const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const storePdf = (pdfFile: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(pdfFile);

        reader.onload = () => {
            setSelectedPdf(pdfFile);
        };

        reader.onerror = (error) => {
            console.error("Error reading PDF:", error);
        };
    };

    const handlePromptSubmit = async () => {
        // if (promptText.trim() !== '') {
        //     console.log(promptText, selectedPdf);
        // }
        try {
            if (selectedPdf) {
                const res = await pdfToPrompt("https://files.edgestore.dev/lzssx2sqap9nqg2p/publicFiles/_public/87b8d2ca-c0cd-404c-8f99-d5dfebbc5e61.pdf");
                console.log(res);
            }
        } catch (error) {
            console.error("Error submitting prompt:", error);
        }

        // if (promptText.trim() !== '') {
        //     onSubmit(promptText, selectedPdf);
        // }
    };

    const handleFileButtonClick = () => {
        // Trigger click event of the file input
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            setSelectedPdf(file);
            storePdf(file);
        }
    };

    return (
        <div className='w-full bg-gradient-to-t from-black/30 to-transparent'>
            <div className='container mx-auto p-5'>
                <div className='rounded-2xl border-t-4 border-orange-300 p-5 bg-white'>
                    <textarea
                        placeholder='Type prompt here....'
                        className='w-full outline-none bg-transparent'
                        style={{ fontFamily: "inherit", resize: "none" }}
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                    />
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="pdfInput"
                    />
                    {/* Use onClick to trigger file input */}

                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-4'>
                            <Button
                                variant={"secondary"}
                                size={"icon"}
                                className='rounded-full'
                                onClick={handleFileButtonClick}
                            >
                                <Paperclip className='h-4 w-4' />
                            </Button>

                            <Button variant={"secondary"} size={"icon"} className='rounded-full'>
                                <PaintBucket className='h-4 w-4' />
                            </Button>
                            {/* Other buttons */}
                        </div>
                        <Button
                            size={"icon"}
                            className={`rounded-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                            disabled={loading}
                            onClick={handlePromptSubmit}
                        >
                            <SendHorizontal className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptComponent;
