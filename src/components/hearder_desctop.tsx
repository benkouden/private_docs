'use client'
import Notification from '../assets/Notification Icon.svg'
import Vector from '../assets/Vector.svg'
import profil from '../assets/profile.svg'
import Logout from '../assets/logout.svg'
import Avatar from '../assets/Avatar.svg'
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'

const Hearder_desctop = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='flex justify-between items-center mb-8'>
      <h1
        className='w-[250px] h-[32px] font-Urbanist text-text text-[30px]  leading-[32px] tracking-[-0.25px]
             font-medium'
      >
        Bienvenue, Ken B.
      </h1>
      <div className='relative flex gap-x-2'>
        <Image
          src={Notification}
          alt='item5'
          className=' border rounded-xl h-10 w-10 p-1 border-bg_2  '
        />
        <Image
          src={Avatar}
          alt='User profile'
          width={70}
          height={70}
          className='rounded-full cursor-pointer -mt-4'
        />
        <Image
          src={Vector}
          alt='item5'
          className='w-[16px] h-[16] mt-3 cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
        />

        {menuOpen && (
          <div className='absolute right-0 mt-12 w-40 bg-white border border-gray z-40 rounded-lg shadow-lg'>
            <Link href='/organisations/profil'>
              <button className='w-full gap-4 flex text-left px-4 py-2  text-[14px] font-Urbanist text-light_text hover:bg-gray-100'>
                <Image src={profil} alt='item5' className='w-[20px] h-[20] ' />
                Profil
              </button>
            </Link>
            <button className='w-full gap-4 flex text-left px-4 py-2   text-[14px] font-Urbanist text-danger hover:bg-gray-100'>
              <Image src={Logout} alt='item5' className='w-[20px] h-[20] ' />
              Déconnexion
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default Hearder_desctop
