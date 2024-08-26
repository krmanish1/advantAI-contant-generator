import Logo from '@/components/Logo'

import { useLocation } from 'react-router-dom';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

function TopNavbar() {
    const location = useLocation();

    let text = 'Dashboard';
    if (location.pathname.includes('home')) {
        text = 'Dashboard';
    } else if (location.pathname.includes('history')) {
        text = 'History';
    } else if (location.pathname.includes('content')) {
        text = 'Generate Content';
    } else if (location.pathname.includes('setting')) {
        text = 'Setting';
    }

    return (
        <div className='w-full h-16 border-b flex justify-between items-center px-8 bg-white  border-zinc-200'>
            <span className='block md:hidden'>
                <div className="flex items-center justify-center border-zinc-200">
                    <Logo />
                    <span className="font-bold text-3xl pb-2 text-zinc-800">vent</span>
                </div>
            </span>
            <span className='hidden md:block font-bold text-2xl text-zinc-800'>{text}</span>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default TopNavbar