import React from 'react'
import Music from '../page'
import getSongs from '@/actions/getSongs';
import SongCard from '@/components/Songs/SongCard';
import ClientOnly from '@/components/ClientOnly';
import Link from 'next/link';
import getCurrentUser from '@/actions/getCurrentUser';
import Console from '../Console';


const Songs = async () => {
    const fetchsongs = await getSongs()
    return (
        <ClientOnly>
            <div>
                <Console/>
            </div>
            <div>
                {fetchsongs.map((fetchsong: any) => {
                    return (
                        <SongCard
                            key={fetchsong.key}
                            data={fetchsong}
                        />
                    )
                })}
            </div>
        </ClientOnly>
    )
}

export default Songs
