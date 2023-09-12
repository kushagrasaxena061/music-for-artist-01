
import React from 'react'
import getCurrentUser from '@/actions/getCurrentUser';

export const revalidate = 0;

const Browse = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div className='text-white'>
       <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >

      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Newest songs
          </h1>
        </div>
        <div>
          List of Songs
        </div>
      </div>
    </div>
    </div>
  )
}

export default Browse
