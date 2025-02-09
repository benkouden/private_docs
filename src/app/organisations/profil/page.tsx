'use client'
import sms from '../../../assets/sms.svg'
import Personnelcard from '../../../assets/personalcard.svg'
import Docu from '../../../assets/Docu.svg'
import Prof2 from '../../../assets/profile-2user2.svg'
import Taille from '../../../assets/taille.svg'
import heure from '../../../assets/Line Duotone.svg'
import Hearder_desctop from '@/components/hearder_desctop'
import Card_min from '@/components/card_min'
import Card_min2 from '@/components/card_min2'
import Sidebar from '@/components/sidebar'
import Link from 'next/link'


const Profil_org = () => {
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
            <Link href="/organisations/modifier-profil">
            <button
              type='submit'
              className='w-[101px] h-[40px]   text-center bg-primary rounded-full text-white font-medium'
            >
              Modifier
            </button>
            </Link>
          </div>
          <h2 className="font-urbanist text-[16px] mx-4  py-3 text-text font-bold leading-[26px] mt-3">Détails de l’admin </h2>
          <div className='flex space-x-16'>
            <Card_min icon={sms} title="Adresse e-mail" value="bcharles@pentatonic.com"/>
            <Card_min icon={Personnelcard} title="Prénoms" value="Charles"/>
            <Card_min  title="Nom" value="Baudélaire"/>
          </div>
          <hr className='mt-8 border-2 border-gray' />
          <div className='flex space-x-16 mt-16'>
            <Card_min2 icon={Docu} title="Documents" value="123"/>
            <Card_min2 icon={Prof2} title="Utilisateurs" value="24"/>
            <Card_min2 icon={Taille}  title="Taille des fichiers" value="3.41 GB"/>
            <Card_min2 icon={heure} title="Dernières utilisations" value="26 Jan 2024 - 14h15"/>

          </div>

        </div>
      </main>
    </div>
  )
}

export default Profil_org
