import React, { useState } from 'react'
import Image from 'next/image'
import close from '../assets/close.svg'
import { Admin } from '@/app/admin/page'
import che from '../assets/Path.svg'


interface EditAdminProps {
  onClose: () => void
  admin: Admin | null
}

const Edit_admin = ({ onClose, admin }: EditAdminProps) => {
  const [name, setName] = useState(admin?.name || '')
  const [prenom, setPrenom] = useState(admin?.prenom || '')
  const [email, setEmail] = useState(admin?.email || '')
  const [statut, setStatut] = useState(admin?.statut) // Admin.statut par défaut

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log({ name, prenom, email, statut })
  }
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg w-[624px] h-[554px] '>
      <div className='flex justify-end'>
        <button
          // Ajout de l'action au clic
          onClick={onClose}
          className='text-gray-400 text-2xl'
        >
          <Image src={close} alt='close' />
        </button>
      </div>
      <h1 className='font-urbanist text-[30px] text-text font-bold leading-[40px] text-center mb-6'>
        Modifier un admin
      </h1>
      <form className='w-full flex flex-col gap-10 mt-10 items-center'>
        <div className='relative w-full flex items-center gap-[8px]'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Nom
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full py-3 px-4 font-Urbanist text-[16px] font-normal leading-[19.2px] border placeholder-gray border-blue_Gray rounded-full focus:outline-none focus:ring-2'
          />
        </div>

        <div className='relative w-full flex items-center gap-[8px]'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Prénom
          </label>
          <input
            value={prenom}
            onChange={(e) => setName(e.target.value)}
            id='prenom'
            className='w-full py-3 px-4 font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2'
          />
        </div>

        <div className='relative w-full'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Adresse e-mail
          </label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full py-3 px-4 border font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2'
          />
        </div>
        <div className='relative w-full'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Statut
          </label>
          <select
            value={statut}
            onChange={(e) => setStatut(e.target.value)}
            className='w-full py-3 px-4 border font-Urbanist appearance-none placeholder-gray text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2'
          >
            <option value='option1'>Actif</option>
            <option value='option2'>Bloqué</option>
          </select>
          <div className='absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none'>
               <Image src={che} alt='suivant' />

          </div>
        </div>

        <button
          type='submit'
          className='w-[240px] h-[40px] text-center bg-primary rounded-full text-white font-medium'
        >
          Modifier
        </button>
      </form>
    </div>
  )
}

export default Edit_admin
