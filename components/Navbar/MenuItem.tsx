'use client';

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  const router = useRouter()
  const { data: session, status } = useSession()
  {/*
  if (status === "unauthenticated") router.push('/')
*/}
  return ( 
    <div 
      onClick={onClick} 
      className="
        px-4 
        py-3 
        hover:bg-neutral-100 
        transition
        font-semibold
      "
    >
      {label}
    </div>
   );
}
 
export default MenuItem;