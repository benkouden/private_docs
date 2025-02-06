'use client'
import Image from 'next/image'
import Logo from '../../assets/Logo Private.svg'
import NavItem1 from '../../assets/home-2.svg'
import NavItem2 from '../../assets/document-text.svg'
import NavItem3 from '../../assets/profile-2user.svg'
import Oval from '../../assets/Oval.svg'
import Ovalr from '../../assets/ovalrouge.svg'
import che from '../../assets/Path.svg'
import View from '../../assets/view.svg'
import Edit from '../../assets/edit-2.svg'
import Trash from '../../assets/trash.svg'

import NavItem4 from '../../assets/archive.svg'
import NavItem5 from '../../assets/setting-2.svg'
import NavItem6 from '../../assets/logout1.svg'

import Search from '../../assets/Search.svg'
import Seeting from '../../assets/setting-3.svg'

import Case from '../../assets/Rectangle.svg'

import { equipes, users } from '@/constants'

import Hearder_desctop from '@/components/hearder_desctop'

const getInitials = (name) => {
  if (!name) return ''
  const words = name.split(' ')
  return words.length > 1
    ? `${words[0][0]}${words[1][0]}`.toUpperCase()
    : words[0][0].toUpperCase()
}

// Fonction pour générer une couleur de fond dynamique
const getColor = (name) => {
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-red-500',
    'bg-yellow-500',
    'bg-purple-500',
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

const Users = () => {
  return (
    <div className='flex w-full min-h-screen text-text font-Urbanist overflow-hidden'>
      {/* Sidebar */}
      <aside className='w-[80px] h-full p-[32px_10px] justify-between bg-white border-r border-blue_Gray flex flex-col py-4'>
        <div className='mb-40 pt-6'>
          <Image
            src={Logo}
            alt='Private Docs Logo'
            className='w-[163px] h-[36px]'
          />
        </div>
        <nav className='flex w-[80px] flex-col space-y-8'>
          <Image
            src={NavItem1}
            alt='item1'
            className='w-[72px] h-[26px] border-r-4 border-primary'
          />
          <Image src={NavItem2} alt='item2' className='w-[72px] h-[26px]' />
          <Image src={NavItem3} alt='item3' className='w-[72px] h-[26px]' />
          <Image src={NavItem4} alt='item4' className='w-[72px] h-[26px]' />
          <Image src={NavItem5} alt='item5' className='w-[72px] h-[26px]' />
        </nav>
        <div className='mt-[725px]'>
          <Image
            src={NavItem6}
            alt='Private Docs Logo'
            className='w-[72px] h-[26px]'
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 ml-5 p-8 overflow-auto'>
        {/* Header */}
        <Hearder_desctop />

        <div className='  flex   mt-16'>
          <div className='border border-gray rounded-xl w-[292px] h-[350px] pt-8 pl-8 pr-4 '>
            <div className='flex justify-between '>
              <span className='  font-urbanist text-center text-[16px] text-text font-semibold leading-[20px]'>
                Equipes
              </span>
              <div className=' text-center justify-center mx-2  items-center px-3 py-1 flex bg-primary  rounded-3xl   h-[25px] '>
                <span className='font-urbanist text-center text-white text-[12px] font-semibold leading-4'>
                  Ajouter
                </span>
              </div>
            </div>

            <div className='mt-8'>
              {equipes.map((equipe, index) => (
                <div
                  key={index}
                  className={`flex items-center my-1 py-2 px-3 rounded-lg  space-x-2 ${
                    equipe.name === 'Géneral' ? 'bg-gray' : 'bg-white'
                  }`}
                >
                  <Image
                    src={equipe.name == 'Comptes Bloqués' ? Ovalr : Oval}
                    alt='item5'
                    className=''
                  />
                  <span className='font-urbanist text-[14px] text-text w-[190px]  font-normal truncate leading-[18px]'>
                    {equipe.name}
                  </span>
                  <div
                    className={`border w-[24px] h-[22px] rounded-full text-center justify-center -p-0 items-center  border-gray ${
                      equipe.name === 'Géneral' ? 'bg-white' : 'bg-gray'
                    }`}
                  >
                    <span className='font-[Urbanist] text-[12px] text-light_text items-center  font-normal leading-[18px] text-center'>
                      {' '}
                      {equipe.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full h-[400]  px-12 pt-10 '>
            <div className=' flex  h-12 '>
              <div className=' gap-4 flex  h-12 '>
                <div className=' flex   '>
                  <Image
                    src={Case}
                    alt='item5'
                    className='w-[24px] mt-2 h-[24px]'
                  />
                  <div className='  items-center flex ml-4 justify-between  py-4 px-3  bg-gray rounded-3xl  w-[200px] h-[18px] '>
                    <span className='font-urbanist text-[14px] text-light_text font-semibold leading-[20px]'>
                      Sélectionner une action
                    </span>
                    <Image src={che} alt='item5' className='' />
                  </div>
                  <div className=' text-center ml-40 justify-center  items-center px-1 flex bg-primary  rounded-3xl  w-[200px] h-[40px] '>
                    <span className='font-urbanist text-center text-[14px] text-white font-semibold leading-[20px]'>
                      Ajouter un utilisateur
                    </span>
                  </div>
                </div>
                <div className=' w-[250px]  '>
                  <Image
                    src={Search}
                    alt='item5'
                    className=' z-30 absolute top-[202px] right-[245px]'
                  />
                  <input
                    type='text'
                    placeholder='              Rechercher un utilisateur                 '
                    className=' relative h-[40px] w-full   font-Urbanist text-[12px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                  />
                  <Image
                    src={Seeting}
                    alt='item5'
                    className=' z-30 absolute top-[200px] right-[40px]'
                  />
                </div>
              </div>
            </div>
            <div className=' mt-10 rounded-xl bg-gray  '>
              <table className='min-w-full'>
                <thead className=' border-gray rounded-t '>
                  <tr className='font-Urbanist text-sm text-left font-bold leading-6 '>
                    <th className='py-3 text-left  '></th>
                    <th className='py-3 text-left  '>Utilisateurs</th>
                    <th className='py-3  '>Adresse e-mail</th>
                    <th className='py-2 '>Rôle</th>
                    <th className='py-2 '>Statut</th>
                    <th className='py-2  '></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      key={index}
                      className='border-b-2 border-dotted bg-white border-gray'
                    >
                      <td>
                        <Image
                          src={Case}
                          alt='item5'
                          className='w-[24px] mt-2 h-[24px]'
                        />
                      </td>
                      <td className='py-3  flex items-center'>
                        <div className='flex items-center'>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${getColor(
                              user.name
                            )}`}
                          >
                            <span className='font-bold font-urbanist text-white'>
                              {getInitials(user.name)}
                            </span>
                          </div>
                          <span className='ml-2 font-urbanist text-sm font-medium leading-5'>
                            {user.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 font-urbanist text-sm font-medium leading-5 '>
                        {user.email}
                      </td>
                      <td className='py-3 font-urbanist text-sm font-medium leading-5'>
                        {user.role}
                      </td>
                      <td className='py-3'>
                        <span
                          className={`px-4 py-1 w-full font-Urbanist text-sm font-medium leading-4 rounded-full  ${
                            user.status === 'Actif'
                              ? 'bg-succes_light text-sucess'
                              : 'bg-gray text-light_text'
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className='py-3 items-end justify-end px-4 flex space-x-2'>
                        <Image
                          src={View}
                          alt='item5'
                          className='w-[24px] mt-2 h-[24px]'
                        />
                        <Image
                          src={Edit}
                          alt='item5'
                          className='w-[24px] mt-2 h-[24px]'
                        />
                        <Image
                          src={Trash}
                          alt='item5'
                          className='w-[24px] mt-2 h-[24px]'
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Users
