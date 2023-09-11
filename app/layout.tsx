import React from 'react';
import './globals.css'
import AuthProvider from '@/providers/AuthProvider';
import LoginModal  from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import ClientOnly from '@/components/ClientOnly';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          
          <RegisterModal/>
          <LoginModal/>
          <ToasterProvider/>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
