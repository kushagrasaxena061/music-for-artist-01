"use client"

import StoreModal from '@/components/Modals/StoreModal'
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    },[])

    if (!isMounted) return null
  return (
    <div>
      <StoreModal/>
    </div>
  )
}

export default ModalProvider
