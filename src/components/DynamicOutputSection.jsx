/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from "@/components/ui/button"
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';

function DynamicOutputSection({ aiOutput }) {

    const editorRef = useRef();


    useEffect(() => {
        const editorInstance = editorRef.current.getInstance();
        editorInstance.setMarkdown(aiOutput)
    }, [aiOutput])


    const copyOutput = useCallback(() => {
        // editorRef.current?.select();
        if (aiOutput) {
            window.navigator.clipboard.writeText(aiOutput);
            toast.success("Result Copied Succesfully!", { theme: "colored", })
        }
    }, [aiOutput])

    return (
        <div className=' bg-white rounded-lg shadow-lg border'>
            <div className='flex justify-between items-center  p-2'>
                <h2 className='font-bold ml-4'>Your Result</h2>
                <Button onClick={copyOutput} className=' text-[1rem] hover:bg-indigo-800 bg-indigo-600 '> <Copy size={18} className='mr-1' /> Copy </Button>

            </div>
            <Editor
                ref={editorRef}
                initialValue="Your result will apear here. "
                initialEditType='wysiwyg'
                height="500px"
                useCommandShortcut={true}
                onChange={() => console.log(editorRef.current.getInstance().getMarkdown())
                }
            />

        </div>
    )
}

export default DynamicOutputSection
