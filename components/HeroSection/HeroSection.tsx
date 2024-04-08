'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { SendIcon } from 'lucide-react';
import ClientStack from './ClientStack';

const HeroSection: React.FC = () => {
    const [typedText, setTypedText] = useState<string>('');
    const text: string = "A Website of man standing under a tree.";
    const typingSpeed: number = 100; // milliseconds per character
    const delayAfterTyping: number = 5000; // 5 seconds delay after typing completion

    useEffect(() => {
        let currentIndex: number = 0;
        let intervalId: NodeJS.Timeout;

        const typeText = () => {
            intervalId = setInterval(() => {
                setTypedText(text.slice(0, currentIndex));
                currentIndex++;

                if (currentIndex > text.length) {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        currentIndex = 0;
                        setTypedText('');
                        typeText(); // Restart typing
                    }, delayAfterTyping);
                }
            }, typingSpeed);

            return () => clearInterval(intervalId);
        };

        typeText();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container mx-auto flex-1 px-5 py-20 flex flex-col lg:flex-row gap-10 overflow-hidden'>
            <div className=' w-full flex flex-col gap-10 justify-between'>
                <div>
                    <h1 className='text-4xl lg:text-8xl font-semibold gradient-text-2 pb-10'>
                        Porto AI to transform your digital presence.
                    </h1>
                    <p className='text-muted-foreground'>
                        Let AI be your guide as you embark on a journey to redefine what's possible in the digital landscape.
                    </p>

                </div>
                <div className=' rounded-3xl p-5 bg-gray-200/50 flex flex-col gap-5 backdrop-blur-lg border-t-2 border-l-2 border-orange-500/30'>
                    <p className='mb-8'>
                        {typedText}
                        <span className="cursor-animation">|</span>
                    </p>
                    <Button className='bg-orange-500  rounded-full py-3 px-6 w-fit'>
                        <SendIcon className='h-4 w-4 mr-2' /> Generate
                    </Button>
                </div>
            </div>
            <div className='w-full relative rounded-3xl overflow-hidden'>
                <img src="https://www.inovex.de/wp-content/uploads/generative-ai-hero.jpg" alt="avtar" className='min-h-[400px] h-full w-full object-cover' />

                <div className=' absolute m-5 bottom-0 left-0 right-0 '>
                    <div className=' w-full rounded-2xl p-5 bg-white/80 backdrop-blur-lg border-t-4 border-orange-300'>
                        <h1 className=' md:text-xl font-medium gradient-text mb-4'>Over 5k+ happy clients </h1>
                        <ClientStack />
                    </div>
                </div>
            </div>
        </div>
    );
};





export default HeroSection;

