import getCurrentUser from '@/actions/getCurrentUser'
import Link from 'next/link'
import React from 'react'

const Console = async () => {
    const currentUser = await getCurrentUser()
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-xl px-4 ">
                        <div className="mb-6 ">
                            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">MUSIC</h2>
                            <div className='flex space-x-20'>
                                <Link href={`/artist/${currentUser?.id}/music/songs`} >
                            <p className="  font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer  text-center text-indigo-500 md:text-lg">Songs</p>
                                </Link>
                                <Link href={`/artist/${currentUser?.id}/music/releases`} >
                            <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Releases</p>
                                </Link>
                                <Link href={`/artist/${currentUser?.id}/music/playlists`} >
                            <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Playlists</p>
                                </Link>
                                <Link href={`/artist/${currentUser?.id}/music/upcomings`} >
                            <p className=" font-bold max-w-screen-md border-indigo-700 border-b-4 cursor-pointer text-center text-indigo-500 md:text-lg">Upcomings</p>
                                  </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Console
