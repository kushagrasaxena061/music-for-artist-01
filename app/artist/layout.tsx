import React from 'react';
import { Nunito } from 'next/font/google'
import Navbar from '@/components/Navbar/Navbar';
import getCurrentUser from '@/actions/getCurrentUser';
import ClientOnly from '@/components/ClientOnly';
import Browse from './page';


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({ 
  subsets: ['latin'], 
});


export default async function BrowseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
          <ClientOnly>

        <Browse currentUser={currentUser}/>
          </ClientOnly>
       
      </body>
    </html>
  )
}