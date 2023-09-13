"use client"

import { User } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

interface SearchProps{
    currentUser? : User | null
}

const Search: React.FC<SearchProps> = ({currentUser}) => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>

            <Link href={`/artist`} >
            <div className='text-sm font-semibold px-6'>
                Home
            </div>
            </Link>
            <Link href={`/artist/${currentUser?.id}/music`} >
            <div className='text-sm font-semibold px-6'>
                Music
            </div>
            </Link>
            <Link href={`/artist/${currentUser?.id}/audience`} >
            <div className='text-sm font-semibold px-6'>
                Audience
            </div>
            </Link>
            <Link href={`/artist/${currentUser?.id}/profile`} >
            <div className='text-sm font-semibold px-6'>
                Profile
            </div>
            </Link>
           
          
        </div>
    </div>
  )
}

export default Search
