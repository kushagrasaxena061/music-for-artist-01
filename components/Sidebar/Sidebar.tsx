"use client"

import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from './Box';
import SidebarItem from "./SidebarItem";
import Library from './Library';
import {User } from '@prisma/client'


interface Sidebarprops {
    children: React.ReactNode
    currentUser?: User | null;
}

const Sidebar: React.FC<Sidebarprops> = ({ children, currentUser }) => {
    const pathname = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/browse'
        },
        {
            icon: BiSearch,
            label: 'Search',
            href: '/search',
            active: pathname === '/search'
        },
    ], [pathname]);
    return (
        <div className='flex h-full'>
            <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 '>
                <Box>
                    <div className="flex flex-col gap-y-4 px-5 py-4">
                        {routes.map((item) => (
                            <SidebarItem key={item.label} {...item} />
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full ">
                    <Library/>
                </Box>
            </div>
            <main className='h-full flex-1 overflow-y-auto py-2'>
                {children}
            </main>
        </div>
    )
}

export default Sidebar
