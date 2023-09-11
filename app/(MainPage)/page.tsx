"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Hero from './components/Hero'


const MainPage =  () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  
  if (status === "loading") {
    return <div>LOADING...</div>
  }
  if(status==="authenticated") {
    router.push('/browse')
    router.refresh()
  }

  if (status === "unauthenticated"){
    return (
      <div>
        <Hero/>
      </div>
    )
  }
}

export default MainPage
