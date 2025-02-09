import React from 'react';
import Image from 'next/image';
import close from "../assets/close.svg";


const Add_admin = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-lg w-[624px] h-[472px]'>
      <div className='flex justify-end'>
        <button
          onClick={onClose} // Ajout de l'action au clic
          className='text-gray-400 text-2xl'
        >
          <Image src={close} alt='close' />

        </button>
      </div>
      <h1 className='font-urbanist text-[30px] text-text font-bold leading-[40px] text-center mb-6'>
        Ajouter un admin
      </h1>
      <form className='w-full flex flex-col gap-10 mt-10 items-center'>
        <div className='relative w-full flex items-center gap-[8px]'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Nom de l&apos;admin
          </label>
          <input
            type='text'
            placeholder="  Nom de l&apos;admin"
            className='w-full py-3 px-4 font-Urbanist text-[16px] font-normal leading-[19.2px] border placeholder-gray border-blue_Gray rounded-full focus:outline-none focus:ring-2'
          />
        </div>
        
        <div className='relative w-full flex items-center gap-[8px]'>
          <label className='absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text'>
            Prénom
          </label>
          <input
            type='text'
            placeholder="Prénom de l&apos;admin "
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
            id='email'
            className='w-full py-3 px-4 border font-Urbanist placeholder-gray text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2'
            placeholder="Adresse e-mail de l&apos;admin"
          />
        </div>

        <button
          type='submit'
          className='w-[240px] h-[40px] text-center bg-primary rounded-full text-white font-medium'
        >
          Créer le compte
        </button>
      </form>
    </div>
  );
};

export default Add_admin;
