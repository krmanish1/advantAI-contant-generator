/* eslint-disable no-unused-vars */
import Logo from '@/components/Logo'
import { User } from 'lucide-react'
import React from 'react'

function Navbar() {
    return (
        <div className='w-full h-16 border-b flex justify-between items-center px-12 p-3 border-zinc-200'>
            <div className='flex items-center justify-center'>
                <Logo /><span className='font-bold text-4xl pb-3 text-zinc-800'>vent</span>
            </div>
            <div className=' w-32 cursor-pointer hover:text-indigo-600  text-gray-400 flex items-center justify-center gap-3 border-l border-zinc-200 pl-4'>
                <User size={18} className=' ' /> <span className=' '>Get Started</span>
            </div>
        </div>
    )
}

export default Navbar
