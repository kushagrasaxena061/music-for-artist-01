import React from 'react';
import './globals.css'
import AuthProvider from '@/providers/AuthProvider';
import LoginModal  from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import ClientOnly from '@/components/ClientOnly';
import Navbar from '@/components/Navbar/Navbar';
import getCurrentUser from '@/actions/getCurrentUser';
import ModalProvider from '@/providers/ModalProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ClientOnly>
          <Navbar currentUser={currentUser}/>
          <ModalProvider/>
          <RegisterModal/>
          <LoginModal/>
          <ToasterProvider/>
          </ClientOnly>
          <div className="pb-12 pt-16">
          {children}
        </div>
        </AuthProvider>
      </body>
    </html>
  )
}
