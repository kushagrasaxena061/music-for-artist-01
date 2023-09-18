'use client'

import { SafeSongs, SafeUser } from '@/types'
import React from 'react'
import {useRouter} from "next/navigation"
import { User } from '@prisma/client'


interface SoloEditProps {
    data: SafeSongs
    currentUser?: User | null
}


const SoloEdit: React.FC<SoloEditProps> = ({data,currentUser}) => {
    const router = useRouter()
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-1 mx-auto">
              <div className="mx-auto max-w-screen-2xl  md:px-1">
                <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
                  <div className="flex space-x-5">
                    <img  src={data.artworkimage} width="70" height="70"/>
                    <h2 className="text-xl font-bold text-indigo-500 md:text-2xl">{data.title}</h2>
                  </div>
                  <button onClick={() => router.push(`/artist/edit/${data?.id}`)} className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">{data.postingdate}</button>
                </div>
              </div>
            </div>
            <div>
            </div>
            
    </div>
  )
}

export default SoloEdit
