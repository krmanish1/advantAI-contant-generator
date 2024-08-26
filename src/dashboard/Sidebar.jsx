/* eslint-disable no-unused-vars */
import Logo from '@/components/Logo'
import { History, House, Settings } from 'lucide-react'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            {/* Desktop sidebar */}
            <div className="hidden md:block w-40 h-screen bg-white border-r">
                <div className="h-full w-full flex flex-col justify-between">
                    <ul className="w-full space-y-2 p-2 flex items-center justify-center flex-col">
                        <li className="">
                            <div className="flex items-center justify-center border-b border-zinc-200">
                                <Logo />
                                <span className="font-bold text-4xl pb-3 text-zinc-800">vent</span>
                            </div>
                        </li>
                        <li className="pt-4 w-full">
                            <NavLink
                                to="home"
                                className={({ isActive }) =>
                                    `relative hover:bg-gray-200 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                    } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] pl-3 flex justify-start gap-2 items-center`
                                }
                            >
                                <House size={20} strokeWidth={2.6} /> Home
                            </NavLink>
                        </li>
                        {/* <li className="pt-1 w-full">
                            <NavLink
                                to="history"
                                className={({ isActive }) =>
                                    `relative hover:bg-gray-200 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                    } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] pl-3 flex justify-start gap-2 items-center`
                                }
                            >
                                <History size={20} strokeWidth={2.6} /> History
                            </NavLink>
                        </li> */}
                    </ul>
                    <ul className="space-y-2 p-2 flex items-center justify-center flex-col mb-2">
                        {/* <li className="w-full">
                            <NavLink
                                to="Settings"
                                className={({ isActive }) =>
                                    `relative hover:bg-gray-200 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                    } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] pl-3 flex justify-start gap-2 items-center`
                                }
                            >
                                <Settings size={20} strokeWidth={2.6} /> Settings
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>

            {/* Mobile bottom navigation */}
            <div className="md:hidden fixed bottom-0 w-full h-16 bg-white border-t">
                <ul className="flex justify-around mt-2">
                    <li>
                        <NavLink
                            to="home"
                            className={({ isActive }) =>
                                `relative hover:bg-gray-200 p-6 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] flex justify-center items-center`
                            }
                        >
                            <House size={20} strokeWidth={2.6} className='mr-2' />Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink
                            to="history"
                            className={({ isActive }) =>
                                `relative hover:bg-gray-200 p-6 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] flex justify-center items-center`
                            }
                        >
                            <History size={20} strokeWidth={2.6} className='mr-2' />History
                        </NavLink>
                    </li> */}
                    {/* <li>
                        <NavLink
                            to="Settings"
                            className={({ isActive }) =>
                                `relative hover:bg-gray-200 p-6 hover:text-indigo-500 ${isActive ? "bg-gray-200 text-indigo-500" : ""
                                } cursor-pointer rounded-lg w-full h-10 font-semibold text-[1rem] flex justify-center items-center`
                            }
                        >
                            <Settings size={20} strokeWidth={2.6} className='mr-2' />Setting
                        </NavLink>
                    </li> */}
                </ul>
            </div>
        </>
    );
}

export default Sidebar;