/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ onSearchInput }) {

    return (
        <div className='w-full flex items-center bg-indigo-500 h-56'>
            <div className='w-full flex items-center justify-center flex-col gap-5'>
                <div className='flex items-center flex-col justify-center gap-2'>
                    <h2 className='font-bold text-3xl  text-white'>Browse All Templates</h2>
                    <p className='text-[1.1rem] text-gray-200'>What would like to create today?</p>
                </div>

                <div className=' flex w-full  justify-center'>
                    <div className='flex gap-2 lg:w-[40%] md:w-full items-center p-2 border rounded-md bg-white  '>
                        <Search className='text-indigo-600' />
                        <input onChange={(e) => onSearchInput(e.target.value)} type='text' placeholder='Search' className='bg-transparent outline-none text-gray-700' />

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchSection
