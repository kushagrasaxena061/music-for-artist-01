import Header from '@/components/Browse/Header';
import ListItem from '@/components/Browse/ListItem';
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
      <Header currentUser={currentUser}>
        <div className="mb-2">
          <h1 
            className="
            text-white 
              text-3xl 
              font-semibold
            ">
              Welcome back, <p className="text-indigo-500"> {currentUser?.name} </p>
          </h1>
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            <ListItem 
              name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            />
          </div>
        </div>
      </Header>
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
