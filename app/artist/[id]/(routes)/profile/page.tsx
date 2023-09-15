import React from 'react'
import Component from './Component'
import getCurrentUser from '@/actions/getCurrentUser'


const Profile = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div>
       <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="min-h-96 relative flex flex-1 shrink-0 items-baseline justify-end overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center" />

            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-baseline p-4 sm:max-w-xl">
              <p className="mb-4 text-baseline text-lg text-indigo-200 sm:text-xl md:mb-8">ARTIST</p>
              <h1 className="mb-8 text-baseline text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">{currentUser?.name}</h1>
            </div>
          </section>
        </div>
      </div>
      <Component currentUser={currentUser}/>
    </div>
  )
}

export default Profile
