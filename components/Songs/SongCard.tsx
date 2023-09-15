'use client'

import { SafeSongs } from '@/types'
import { Song, User } from '@prisma/client'
import React from 'react'

interface SongCardProps {
    data: Song
    //data:SafeSongs
    //currentUser?: User | null
}

const SongCard: React.FC<SongCardProps> = ({data}) => {
  return (
    <div>
      
    </div>
  )
}

export default SongCard
