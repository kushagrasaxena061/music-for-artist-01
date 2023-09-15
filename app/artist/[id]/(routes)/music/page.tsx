import React from 'react'
import getSongs from "@/actions/getSongs"
import SongCard from '@/components/Songs/SongCard'
import getCurrentUser from '@/actions/getCurrentUser'


const Music = async ()   => {
  const songs = await getSongs()
  const currentUser = await getCurrentUser()
  return (
    <div className='mt-40 font-bold text-4xl p-40 bg-red-500 text-white'>
      {songs.map((song:any) => {
        return (
         <div>{song.title}</div>
        )
      })}
    </div>
  )
}

export default Music
