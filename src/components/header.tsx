import React from 'react'
import Image from 'next/image';
import Logo from "../assets/logo.svg";


const Header = () => {
  return (
    <header className="flex items-center justify-center w-[1440px] h-[70px] p-[20px_80px] gap-[10px] bg-white shadow-lg">
        <h1 className="flex items-center gap-2 text-lg font-semibold">
          <Image src={Logo} alt="Private Docs Logo" className="w-[163px] h-[30px]" />
        </h1>
      </header>
  )
}

export default Header