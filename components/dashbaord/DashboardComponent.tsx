'use client';
import React, { useState } from 'react';
import GenerationComponent from './GenerationComponent';
import PromptComponent from './PromptComponent';
import { generateChat } from '@/lib/gemini-ai-config';

const DashboardComponent: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [generatedCode, setGeneratedCode] = useState<string>('');

    const handleSubmit = async (promptText: string) => {
        setLoading(true);

        console.log(promptText);

        const result = await generateChat(promptText);
        console.log(result);


        setGeneratedCode(result);

        setLoading(false);
    };

    return (
        <>
            <div className='relative flex-1 h-full w-full flex flex-col overflow-hidden'>
                <div className='flex-1 w-full flex flex-col overflow-hidden h-[70%]'>
                    <GenerationComponent code={generatedCode} loading={loading} />
                </div>
            </div>
            <div className=' h-auto'>
                <PromptComponent onSubmit={handleSubmit} loading={loading} />
            </div>
        </>
    );
};

export default DashboardComponent;
