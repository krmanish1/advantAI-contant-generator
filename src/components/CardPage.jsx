/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import DynamicCardForm from './DynamicCardForm'
import DynamicOutputSection from './DynamicOutputSection'
import { Link, useLocation } from 'react-router-dom';
import { template } from '@/Data/templateData';
import { Button } from "@/components/ui/button"
import { ChevronLeft } from 'lucide-react';
import { chatSession } from '../../utils/Gemini';

function CardPage() {
    const location = useLocation();
    const path = location.pathname;
    const segments = path.split('/');
    const slug = segments[segments.length - 1];
    const selectedTemplate = template.find((item) => item.slug === slug)

    const [loading, setLoading] = useState(false);

    const [aiOutput, setAIOutput] = useState("");

    const GenerateAIContent = async (formData) => {
        try {
            setLoading(true);
            const selectedPrompts = selectedTemplate.aiPrompt;
            const FinalAIPrompts = JSON.stringify(formData) + ", " + selectedPrompts;

            const result = await chatSession.sendMessage(FinalAIPrompts);

            setAIOutput(result.response.text());
            setLoading(false);
        } catch (error) {
            setError(error.message); // Catch and set the error message
            setLoading(false);
        }
    };


    return (
        <>

            <Link to='/dashboard/home' className='pl-6'>
                <Button variant="outline" className=' mt-4 text-[1rem] text-indigo-500 '> <ChevronLeft size={18} className='mr-1' /> Back</Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
                <DynamicCardForm
                    loading={loading}
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v) => GenerateAIContent(v)}
                />
                <div className='col-span-2'>
                    <DynamicOutputSection aiOutput={aiOutput} />
                </div>
            </div>
        </>
    )
}

export default CardPage
