'use client';
import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { atomoneInit } from '@uiw/codemirror-theme-atomone';
import { tags as t } from '@lezer/highlight';
import { editProject, getProject } from '@/lib/actions/project.actions';
import { toast } from '../ui/use-toast';
import { Button } from '../ui/button';

interface GenerationProps {
    code: string;
    loading: boolean;
}

const CodeEditor = ({ project }: { project: Project }) => {
    const [editorValue, setEditorValue] = useState("");

    useEffect(() => {
        setEditorValue(project?.code || "")
    }, [project])

    const saveCode = async () => {
        const res = await editProject({ id: project.id, prompt: project.prompt || "", code: editorValue, manual: true })
        if (res.error) {
            return toast({ title: res.error, variant: "destructive" })
        }
        return toast({ title: "code updated!" })
    }



    return (
        <div className=' h-full w-full text-left'>
            <CodeMirror
                value={editorValue}
                onChange={async (value, viewUpdate) => {
                    setEditorValue(value);
                }}
                className=' max-h-[500px] h-full w-full overflow-auto'
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

            <Button className=' mt-2 w-full' onClick={saveCode}>save</Button>
        </div>
    )
}

export default CodeEditor