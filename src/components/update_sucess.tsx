import React from 'react'
import Image from 'next/image'
import close from '../assets/close.svg'
import sucess from '../assets/Variant8.svg'

const Update_Sucess = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='bg-white p-6 rounded-lg items-center shadow-lg w-[624px] h-[272px]  '>
      <div className='flex justify-end '>
        <button
          // Ajout de l'action au clic
          onClick={onClose}
          className='text-gray-400 text-2xl'
        >
          <Image src={close} alt='close' />
        </button>
      </div>
      <div className='h-[120px] ml-[230px] w-[120px] flex justify-center items-center  rounded-full bg-gray'>
        <Image
          src={sucess}
          alt='User profile'
          width={70}
          height={70}
          className='rounded-full cursor-pointer '
        />
      </div>

      <p className=' font-urbanist w-[496px] ml-8 text-base font-medium leading-6 text-center my-10'>
         Vos informations ont bien été mises à jour !
      </p>
      
    </div>
  )
}

export default Update_Sucess
