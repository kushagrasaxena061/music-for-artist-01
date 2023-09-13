import getCurrentUser from '@/actions/getCurrentUser'
import React from 'react'

const page = async () => {
  const currentUser = await getCurrentUser()
  return (
    <div>
        {currentUser?.email}
    </div>
  )
}

export default page
