"use client"

import React, { useCallback, useEffect } from 'react'
import { ModalSetup } from '@/components/Modals/ModalSetup';
import { useStoreModal } from '@/hooks/use-store-modal';
import {useRouter} from "next/navigation"
import { User } from '@prisma/client';
import useLoginModal from '@/hooks/useLoginModal';

interface BrowseProps {
  currentUser? :User |null
}

export const revalidate = 0;

const Browse: React.FC<BrowseProps> = ({currentUser}) => {
  const router = useRouter()
  const onOpen = useLoginModal((state) => state.onOpen)
  if (!currentUser) onOpen()
  
  return (
    <div>
      (HOME)  BROWSER PROPS && {currentUser?.email} && {currentUser?.id}
    </div>
  )
}

export default Browse

