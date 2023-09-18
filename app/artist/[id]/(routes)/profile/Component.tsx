import ClientOnly from '@/components/ClientOnly'
import { User } from '@prisma/client'
import React from 'react'
import Link from 'next/link'
import { SafeSongs } from '@/types'
import getCurrentUser from '@/actions/getCurrentUser'
import SoloEdit from './SoloEdit'


interface ComponentProps {
  songs: SafeSongs[]
  currentUser?:User | null
}


const Component: React.FC<ComponentProps> = async ({  songs }) => {
  const currentUser = await getCurrentUser()
  return (
    <div>
      <ClientOnly>
        <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-xl px-4 ">
                    <div className="mb-6 ">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">MUSIC</h2>
                        <div className='flex space-x-20'>
                            <Link href={`/artist/${currentUser?.id}/profile/songs`} >
                                <p className="  font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer  text-center text-indigo-500 md:text-lg">Songs</p>
                            </Link>
                            <Link href={`/artist/${currentUser?.id}/profile/`} >
                                <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Releases</p>
                            </Link>
                            <Link href={`/artist/${currentUser?.id}/profile/playlists`} >
                                <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Playlists</p>
                            </Link>
                            <Link href={`/artist/${currentUser?.id}/profile/upcomings`} >
                                <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Upcomings</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

          <div className="bg-white lg:py-4">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
              <div className="mb-4">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Blog</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          {songs.map((fetchsong: any) => {
            return (
              <SoloEdit
                key={fetchsong.key}
                data={fetchsong}
                currentUser={currentUser}
              />
            )
          })}
        </div>
      </ClientOnly>
    </div>
  )
}

export default Component
