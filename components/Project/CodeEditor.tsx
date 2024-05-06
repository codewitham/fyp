'use client';
import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { atomoneInit } from '@uiw/codemirror-theme-atomone';
import { tags as t } from '@lezer/highlight';
import { editProject } from '@/lib/actions/project.actions';
import { toast } from '../ui/use-toast';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';

interface GenerationProps {
    code: string;
    loading: boolean;
}

const CodeEditor = ({ project }: { project: Project }) => {
    const [editorValue, setEditorValue] = useState(project.code || "");
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(project.name || "");

    // useEffect(() => {
    //     setEditorValue(project?.code || "");
    //     setName(project?.name || "");

    //     const handleKeyDown = (event: KeyboardEvent) => {
    //         // Check if Command (⌘) key is pressed along with 'S'
    //         if (event.metaKey && event.key === 's') {
    //             event.preventDefault(); // Prevent the default action (saving the page)
    //             saveCode(); // Call the saveCode function
    //         }
    //     };

    //     // Add event listener for keydown event
    //     window.addEventListener('keydown', handleKeyDown);

    //     // Cleanup function to remove event listener
    //     return () => {
    //         window.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, [project, editorValue, name]); // Add project, editorValue, and name to dependency array

    const saveCode = async () => {
        try {
            if (name.length <= 3) {
                return toast({ title: "please add atleast 4 characters in name." })
            }
            setLoading(true); // Set loading state to true while saving
            const res = await editProject({ id: project.id, prompt: project.prompt || "", code: editorValue, manual: true, name: name });
            if (res.error) {
                return toast({ title: res.error, variant: "destructive" });
            }
            return toast({ title: "Code updated!" });
        } catch (error) {
            console.log(error);
            return toast({ title: "Error" });
        } finally {
            setLoading(false); // Reset loading state after saving
        }
    }

    return (
        <div className='flex flex-col gap-5 h-full'>
            <div className='flex flex-col gap-2 mb-5'>
                <Label htmlFor='name'>Project Name*</Label>
                <Input type='text' name='name' placeholder='Project name...' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='overflow-hidden'>
                <CodeMirror
                    value={editorValue}
                    onChange={async (value, viewUpdate) => {
                        setEditorValue(value);
                    }}
                    className='max-h-[500px] h-full w-full overflow-auto'
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
            </div>
            <Button className='mt-2 w-full' disabled={loading} onClick={saveCode}>Save</Button>
        </div>
    )
}

export default CodeEditor;
