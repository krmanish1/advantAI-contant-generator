/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { template } from '@/Data/templateData'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

function TemplateListSection({ userSearchInput }) {

    const [templateList, setTemplateList] = useState(template)
    useEffect(() => {
        if (userSearchInput) {
            const filterTemplateData = template.filter(item => item.name.toLowerCase().includes(userSearchInput.toLowerCase()));
            setTemplateList(filterTemplateData);
        } else {
            setTemplateList(template);
        }

    }, [userSearchInput])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 '>
            {
                templateList.map((item, index) => {
                    return <TemplateCard {...item} key={index} />
                })
            }
        </div>
    )
}

export default TemplateListSection
