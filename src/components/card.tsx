import React from 'react'
import Image from 'next/image'

interface CardProps {
  icon: string
  title: string
  value: string
}

const Card = ({ icon, title, value }: CardProps) => {
  return (
    <div className='flex items-center w-[300px] h-[108px] shadow-lg bg-white rounded-lg  p-4 border border-primary'>
      <div className='flex items-center justify-center w-12 h-12 bg-blue_Gray rounded-lg'>
        <Image src={icon} alt={title} className='w-6 h-6' />
      </div>
      <div className='ml-4'>
        <div className='text-light_text text-lg font-Urbanist'>{title}</div>
        <div className='text-black text-xl font-bold font-Urbanist'>{value}</div>
      </div>
    </div>
  )
}

export default Card
