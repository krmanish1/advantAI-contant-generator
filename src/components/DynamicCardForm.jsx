/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { LoaderCircle, Sparkles } from 'lucide-react'



function DynamicCardForm({ selectedTemplate, userFormInput, loading }) {

    const [formData, setformData] = useState();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        userFormInput(formData);

    }
    return (
        <>

            <div className='p-5 shadow-md border bg-white w-full rounded-lg'>
                <div className='w-16 h-16'>
                    <img className='w-full' src={selectedTemplate.icon} alt={selectedTemplate.name} />
                </div>
                <div className='flex gap-2 flex-col mt-6 mb-8'>
                    <h2 className='font-bold text-xl text-zinc-950'>{selectedTemplate.name}</h2>
                    <h2 className='text-gray-500 text-ellipsis line-clamp-3'>{selectedTemplate.desc}</h2>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        {selectedTemplate.form.map((item, idx) => (

                            <div key={idx} className=' w-full flex gap-2 flex-col  items-start '>
                                <label htmlFor="" className='font-medium'>{item.label}</label>
                                {item.field == 'input' ?
                                    <Input className='mb-4' name={item.name} required={item?.required} onChange={handleInputChange} /> : item.field == 'textarea' ? <Textarea name={item.name} required={item?.required} onChange={handleInputChange} /> : null}


                            </div>
                        )

                        )}

                        <Button type='submit' disabled={loading} className='w-full mt-10 text-[1rem] hover:bg-indigo-800 bg-indigo-600'> <Sparkles size={18} className='mr-2' />
                            {loading ? <LoaderCircle className='animate-spin' /> : " Generate"}

                        </Button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default DynamicCardForm
