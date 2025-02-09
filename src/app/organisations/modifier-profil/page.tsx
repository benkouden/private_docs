'use client'
import { useState } from 'react'
import Hearder_desctop from '@/components/hearder_desctop'
import Reset_passwords from '@/components/reset_password'
import Bloquer from '@/components/bloquer'
import Update_Sucess from '@/components/update_sucess'
import Sidebar from '@/components/sidebar'

const Modi_Profil_org = () => {
  const [name, setName] = useState('Pentatonic')
  const [prenom, setPrenom] = useState('Charles')
  const [email, setEmail] = useState('bcharles@pentatonic.com')
  const [nom, setNom] = useState('Baudélaire')

  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true) // Ouvrir le modal
  const closeModal = () => setIsModalOpen(false) // Fermer le modal

  const [isBloquerModalOpen, setIsBloquerModalOpen] = useState(false)
  const openBloquerModal = () => setIsBloquerModalOpen(true) // Ouvrir le modal
  const closeBloquerModal = () => setIsBloquerModalOpen(false) // Fermer le modal

  const [isSucessModalOpen, setIsSucessModalOpen] = useState(false)
  const openSucessModal = () => setIsSucessModalOpen(true) // Ouvrir le modal
  const closeSucessModal = () => setIsSucessModalOpen(false) // Fermer le modal

  return (
    <div className='flex w-full min-h-screen text-text font-Urbanist overflow-hidden'>
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <main className='flex-1 ml-5 p-8 overflow-auto'>
        {/* Header */}
        <Hearder_desctop />

        <div className=' border border-gray  mt-10 pb-[400px]'>
          <div className='h-[88px]  pr-10 flex bg-blue_Gray items-center justify-end space-x-96'>
            <span className='mr-[100px]'>Pentatonic</span>
            <button
              type='submit'
              className='w-[101px] h-[40px]   text-center bg-gray rounded-full text-light_text font-medium'
            >
              Annuler
            </button>
          </div>
          <form className='w-full mt-20 ml-8 space-y-10'>
            <div className='flex gap-x-12'>
              <div className='relative w-[466px] flex items-center gap-[8px]'>
                <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
                  Nom de l&apos;organisation
                </label>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full py-3 px-4 font-Urbanist text-[16px] font-normal leading-[19.2px] border placeholder-gray border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                />
              </div>
              <div className='relative w-[466px]'>
                <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
                  Adresse e-mail de l &apos;admin
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full py-3 px-4 border font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='flex gap-x-12'>
              <div className='relative w-[466px] flex items-center gap-[8px]'>
                <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
                  Nom de l&apos;admin
                </label>
                <input
                  type='text'
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  id='nom'
                  className='w-full py-3 px-4 font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                />
              </div>
              <div className='relative w-[466px] flex items-center gap-[8px]'>
                <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
                  Prénom de l&apos;admin
                </label>
                <input
                  type='text'
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  id='prenom'
                  className='w-full py-3 px-4 font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                />
              </div>
            </div>
          </form>
          <div className='flex space-x-8 mt-8 ml-8'>
            <button
              onClick={openSucessModal}
              className='w-[101px] h-[40px] font-Urbanist text-center bg-primary rounded-full text-white font-medium'
            >
              Modifier
            </button>
            <button
              onClick={openModal} // Ouvrir le modal
              className='w-[133px] font-Urbanist h-[40px] text-center border border-primary rounded-full text-primary font-medium'
            >
              Mot de passe
            </button>
            <button
              onClick={openBloquerModal} // Ouvrir le modal
              className='w-[96px] h-[40px] font-Urbanist text-center bg-danger rounded-full text-white font-medium'
            >
              Bloquer
            </button>
          </div>
        </div>
      </main>
      {/* Modal Reset Password */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-bgmodal z-50'>
          <Reset_passwords onClose={closeModal} />
        </div>
      )}

      {/* Modal Bloquer  */}
      {isBloquerModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-bgmodal z-50'>
          <Bloquer onClose={closeBloquerModal} />
        </div>
      )}

       {/* Modal Sucess Update  */}
       {isSucessModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-bgmodal z-50'>
          <Update_Sucess onClose={closeSucessModal} />
        </div>
      )}
    </div>
  )
}

export default Modi_Profil_org
