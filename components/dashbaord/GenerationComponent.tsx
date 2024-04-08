'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '../ui/button';
import { Code, Eye } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { atomoneInit } from '@uiw/codemirror-theme-atomone';
import { tags as t } from '@lezer/highlight';

interface GenerationProps {
    code: string;
    loading: boolean;
}

const GenerationComponent: React.FC<GenerationProps> = ({ code, loading }) => {
    const [editorValue, setEditorValue] = useState(code);

    useEffect(() => {
        setEditorValue(code);
    }, [loading])

    return (
        <div className='h-full w-full'>
            <div className='container p-5 mx-auto h-full overflow-auto'>
                <Tabs defaultValue="preview" className="w-full h-full">
                    <TabsList>
                        <TabsTrigger value="preview" asChild>
                            <Button variant={"ghost"} size={"icon"}>
                                <Eye className='h-4 w-4' />
                            </Button>
                        </TabsTrigger>
                        <TabsTrigger className='ml-2' value="code" asChild>
                            <Button variant={"ghost"} size={"icon"}>
                                <Code className=' h-4 w-4' />
                            </Button>
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className=' h-full w-full'>
                        {loading ? (
                            <div className="flex items-center justify-center h-full">
                                Loading...
                            </div>
                        ) : (
                            <iframe
                                title="code-preview"
                                className="w-full h-full border-none bg-white"
                                srcDoc={editorValue}
                            />
                        )}
                    </TabsContent>
                    <TabsContent className=' w-full h-full ' value="code">
                        <CodeMirror
                            value={editorValue}
                            onChange={(value, viewUpdate) => {
                                setEditorValue(value);
                            }}
                            height='100%'
                            theme={atomoneInit({
                                settings: {
                                    caret: '#c6c6c6',
                                    fontFamily: 'monospace',
                                },
                                styles: [
                                    { tag: t.comment, color: '#6272a4' },
                                ]
                            })}
                            extensions={[javascript({ jsx: true })]}
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default GenerationComponent;
