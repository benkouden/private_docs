import React from 'react'
import Image from 'next/image';
import close from "../assets/close.svg";

interface DeleteOrganisationsProps {
    onClose: () => void;
    organisation: Organisation | null;
  }

const Delete_organisations =  ({ onClose, organisation }: DeleteOrganisationsProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[624px] h-[272px] ">
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
         Supprimer une organisation
      </h1>
    
    <p className=" font-urbanist text-base font-medium leading-6 text-center my-10">Voulez-vous supprimer l&apos;organisation <span className="font-urbanist text-base font-bold leading-6">{organisation?.name}</span> ?</p>
    <div className="flex justify-center space-x-4">
        <button className="bg-gray text-light_text w-[240px] h-[40px] text-center rounded-full">Annuler</button>
        <button className="bg-danger text-white w-[240px] h-[40px] text-center  rounded-full">Supprimer</button>
    </div>
</div>
  )
}

export default Delete_organisations