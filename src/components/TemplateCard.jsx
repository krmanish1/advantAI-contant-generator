/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function TemplateCard(item) {



    return (
        <Link to={`/dashboard/content/${item.slug}`}>
            <div className=' p-4 h-56 shadow-md rounded-md border bg-white border-zinc-200 flex flex-col flex-wrap gap-3 cursor-pointer hover:scale-105 transition-all'>
                <div className='w-16 h-16'>
                    <img className='w-full' src={item.icon} alt={item.name} />
                </div>
                <div className='flex gap-2 flex-col '>
                    <h2 className='font-semibold text-zinc-950'>{item.name}</h2>
                    <h2 className='text-gray-500 text-ellipsis line-clamp-3'>{item.desc}</h2>
                </div>
            </div>
        </Link>
    )
}

export default TemplateCard
