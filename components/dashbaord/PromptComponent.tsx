'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { PaintBucket, Paperclip, SendHorizonal } from 'lucide-react';

interface PromptProps {
    onSubmit: (promptText: string) => void;
    loading: boolean;
}

const PromptComponent: React.FC<PromptProps> = ({ onSubmit, loading }) => {
    const [promptText, setPromptText] = useState('');

    const handlePromptSubmit = () => {
        if (promptText.trim() !== '') {
            onSubmit(promptText);
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
                    <div className='flex items-center gap-5 justify-between'>
                        <div className='flex items-center gap-4'>
                            <Button variant={"secondary"} size={"icon"} className='rounded-full'>
                                <PaintBucket className='h-4 w-4' />
                            </Button>
                            <Button variant={"secondary"} size={"icon"} className='rounded-full'>
                                <Paperclip className='h-4 w-4' />
                            </Button>
                        </div>
                        <Button
                            size={"icon"}
                            className={`rounded-full ${loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}`}
                            disabled={loading}
                            onClick={handlePromptSubmit}
                        >
                            <SendHorizonal className='h-4 w-4' />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptComponent;

