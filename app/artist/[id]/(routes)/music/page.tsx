import React from 'react'
import getSongs from "@/actions/getSongs"
import SongCard from '@/components/Songs/SongCard'
import getCurrentUser from '@/actions/getCurrentUser'
import Image from "next/image"



const Music = async () => {
  const songs = await getSongs()
  const currentUser = await getCurrentUser()
  return (
    <div>
      HELLO
    </div>
  )
}

export default Music
