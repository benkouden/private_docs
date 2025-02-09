'use client'
import Header from '@/components/header'
import React, { useState } from 'react'
import { LuEye, LuEyeOff } from 'react-icons/lu'

const Page = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className='flex flex-col items-center w-full max-w-[1440px] h-[1024px] bg-blue_Gray overflow-hidden'>
      <Header />

      <main className='flex flex-col items-center justify-center absolute top-[318px] left-1/2 transform -translate-x-1/2 w-[624px] h-[388px] p-[48px_64px] gap-[40px] rounded-lg bg-white shadow-lg'>
        <h2 className='w-[389px] h-[40px] font-Urbanist text-text text-[30px] font-bold leading-[40px]'>
          Changez votre mot de passe
        </h2>

        <form className='w-full flex flex-col gap-8 items-center'>
          <div className='relative w-full '>
            <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
              Nouveau mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='new-password'
              className='w-full py-4 px-4 border  font-Urbanist text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2 '
              placeholder='Entrez un nouveau mot de passe'
            />

            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500'
            >
              {showPassword ? <LuEye size={30} /> : <LuEyeOff size={30} />}
            </button>
          </div>

          <div className='relative w-full'>
            <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
              Confirmation de mot de passe
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='confirm-password'
              className='w-full py-4 px-4 border bg-white font-Urbanist text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2'
              placeholder='Confirmer le mot de passe'
            />

            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500'
            >
              {showPassword ? <LuEye size={30} /> : <LuEyeOff size={30} />}
            </button>
          </div>

          <button
            type='submit'
            className='w-[240px] h-[40px] text-center bg-primary rounded-full text-white font-medium'
          >
            Valider
          </button>
        </form>
      </main>

      <p className='absolute top-[976px] left-[675px] font-urbanist font-bold'>
        Version 0.0.1
      </p>
    </div>
  )
}

export default Page
