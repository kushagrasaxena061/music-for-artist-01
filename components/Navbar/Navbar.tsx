'use client'


import {User } from '@prisma/client'
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Container from './Container';
import { useSession } from "next-auth/react"



interface NavbarProps {
  currentUser?: User | null;
}


const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  //console.log({currentUser})
  const { data: session, status } = useSession()
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser}/>
        </div>
      </Container>
      <div>
        {session?.user?.name} 
      </div>
    </div>
  </div>
  );
}


export default Navbar;