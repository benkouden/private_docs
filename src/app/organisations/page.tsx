'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from '../../assets/Logo Private.svg'
import NavItem1 from '../../assets/home-2.svg'
import NavItem2 from '../../assets/document-text.svg'
import NavItem3 from '../../assets/profile-2user.svg'

import che from '../../assets/Path.svg'
import cheleft from '../../assets/chevron_left.svg'
import cheright from '../../assets/chevron-right.svg'

import Trash from '../../assets/trash.svg'

import NavItem4 from '../../assets/archive.svg'
import NavItem5 from '../../assets/setting-2.svg'
import NavItem6 from '../../assets/logout1.svg'

import Search from '../../assets/Search.svg'
import Seeting from '../../assets/setting-3.svg'

import Case from '../../assets/Rectangle.svg'

import { organisations } from '@/constants'

import Hearder_desctop from '@/components/hearder_desctop'
import Add_organisation from '@/components/add_organisation'
import Delete_organisations from '@/components/delete_organisations'
const getInitials = (name: string): string => {
  if (!name) return ''
  const words = name.split(' ')
  return words.length > 1
    ? `${words[0][0]}${words[1][0]}`.toUpperCase()
    : words[0][0].toUpperCase()
}
const ITEMS_PER_PAGE = 12

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const totalPages = Math.ceil(organisations.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = organisations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )
  const openModal = () => setIsModalOpen(true) // Ouvrir le modal
  const closeModal = () => setIsModalOpen(false) // Fermer le modal

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [organisationToDelete, setOrganisationToDelete] = useState(null);

  const closeDeleteModal = () => setIsDeleteModalOpen(false) // Fermer le modal de suppression
  const openDeleteModal = (organisation: any) => {
    setOrganisationToDelete(organisation);
    setIsDeleteModalOpen(true);
  };

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

        <div className='   mt-10'>
          <div className='w-full h-[400]  pt-8 '>
            <div className=' flex  h-12 px-4 '>
              <div className=' gap-4 flex  h-12 '>
                <div className=' flex   '>
                  <Image
                    src={Case}
                    alt='item5'
                    className='w-[24px] mt-1 h-[24px]'
                  />
                  <div className='  items-center flex ml-4 justify-between  py-4 px-3  bg-gray rounded-3xl  w-[200px] h-[18px] '>
                    <span className='font-urbanist text-[14px] text-light_text font-semibold leading-[20px]'>
                      Sélectionner une action
                    </span>
                    <Image src={che} alt='item5' className='' />
                  </div>
                  <button
                    onClick={openModal} // Ouvrir le modal
                    className='text-center ml-96 justify-center items-center px-1 flex bg-primary rounded-3xl w-[200px] h-[40px]'
                  >
                    <span className='font-urbanist text-center text-[14px] text-white font-semibold leading-[20px]'>
                      Ajouter une organisation
                    </span>
                  </button>
                </div>
                <div className=' w-full  '>
                  <Image
                    src={Search}
                    alt='item5'
                    className=' z-30 absolute top-[170px] right-[350px]'
                  />
                  <input
                    type='text'
                    placeholder='              Rechercher une organisation                 '
                    className=' relative h-[40px] w-[320px]   font-Urbanist text-[12px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2'
                  />
                  <Image
                    src={Seeting}
                    alt='item5'
                    className=' z-30 absolute top-[165px] right-[70px]'
                  />
                </div>
              </div>
            </div>
            <hr className='mt-8 border-2 border-gray' />
            <div className=' mt-10 rounded-xl bg-gray  '>
              <table className='min-w-full'>
                <thead className=' border-gray rounded-t '>
                  <tr className='font-Urbanist text-sm text-left font-bold leading-6 '>
                    <th className='py-3 text-left  '></th>
                    <th className='py-3 text-left  '>Organisations</th>
                    <th className='py-3  '>Utilisateurs</th>
                    <th className='py-2 '>Adminstrateurs</th>
                    <th className='py-2 '>Adresse e-mail</th>
                    <th className='py-2  '>Statut</th>
                    <th className='py-2  '></th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((organisation, index) => (
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
                          <span className=' font-urbanist text-[16px] font-medium leading-5'>
                            {organisation.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 font-urbanist text-[16px] font-medium leading-5 '>
                        {organisation.users}
                      </td>
                      <td className='py-3  flex items-center'>
                        <div className='flex items-center'>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue_Gray `}
                          >
                            <span className='font-bold font-urbanist text-primary'>
                              {getInitials(organisation.name)}
                            </span>
                          </div>
                          <span className='ml-2 font-urbanist text-[16px] font-medium leading-5'>
                            {organisation.name}
                          </span>
                        </div>
                      </td>
                      <td className='py-3 font-urbanist text-[16px] font-medium leading-5 '>
                        {organisation.email}
                      </td>
                      <td className='py-3'>
                        <span
                          className={`px-4 py-1 font-Urbanist text-sm font-medium leading-4 rounded-full text-center inline-block w-[100px]
                            ${
                              organisation.statut === 'Actif'
                                ? 'bg-succes_light text-sucess'
                                : organisation.statut === 'Bloqué'
                                ? 'bg-danger_light text-danger'
                                : organisation.statut === 'Inactif'
                                ? 'bg-gray text-light_text'
                                : 'bg-info_light text-info' // En attente
                            }
                            `}
                        >
                          {organisation.statut}
                        </span>
                      </td>

                      <td className='py-3 items-end justify-end px-4 '>
                         {/* Ouvrir le modal */}
                        <button onClick={() => openDeleteModal(organisation)}>
                          <Image src={Trash} alt='Supprimer' className='mt-2' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className='flex space-x-2 mt-6 justify-end'>
              <button
                className='w-[38px] h-[38px] flex items-center justify-center text-light_text'
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <Image src={cheleft} alt='précédent' />
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`w-[38px] h-[38px] flex items-center justify-center ${
                    currentPage === i + 1
                      ? 'bg-blue_Gray text-primary rounded-lg'
                      : 'text-light_text'
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className='w-[38px] h-[38px] flex items-center justify-center text-light_text'
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <Image src={cheright} alt='suivant' />
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Modal add organisations */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-bgmodal z-50'>
          <Add_organisation onClose={closeModal} />
        </div>
      )}
      {/* Modal Supprimer Organisation */}
      {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-bgmodal z-50">
            <Delete_organisations onClose={closeDeleteModal} organisation={organisationToDelete} />
          </div>
        )}
    </div>
  )
}

export default Dashboard
