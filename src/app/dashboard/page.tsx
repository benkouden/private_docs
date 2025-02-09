'use client'
import { useState } from 'react'
import Image from 'next/image'
import { card } from '@/constants'
import cheleft from '../../assets/chevron_left.svg'
import cheright from '../../assets/chevron-right.svg'
import Trash from '../../assets/trash.svg'
import Case from '../../assets/Rectangle.svg'
import { organisations } from '@/constants'
import Hearder_desctop from '@/components/hearder_desctop'
import Card from '@/components/card'
import Sidebar from '@/components/sidebar'

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
  const totalPages = Math.ceil(organisations.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = organisations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )
  const filteredData = currentData.filter(
    (organisation) =>
      organisation.statut === 'Actif' || organisation.statut === 'En attente'
  )

  return (
    <div className='flex w-full min-h-screen text-text font-Urbanist overflow-hidden'>
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className='flex-1 ml-5 p-8 overflow-auto'>
        {/* Header */}
        <Hearder_desctop />

        <div className='   mt-10'>
          <div className='w-full h-[400]  pt-8 '>
            <div className='flex space-x-4 py-4'>
              {card.map((elmt, index) => (
                <Card
                  key={index}
                  icon={elmt.icon}
                  title={elmt.name}
                  value={elmt.total}
                />
              ))}
            </div>

            <h2 className='font-urbanist text-[20px]  py-3 text-text font-bold leading-[26px] mt-3'>
              Dernières organisations actives{' '}
            </h2>

            <div className=' mt-6 rounded-xl bg-gray  '>
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
                  {filteredData.map((organisation, index) => (
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
                        <Image src={Trash} alt='trash' className=' mt-2' />
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
    </div>
  )
}

export default Dashboard
