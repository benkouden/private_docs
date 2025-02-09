'use client'
import { useState } from 'react'
import Image from 'next/image'
import Edit from '../../assets/edit-2.svg'
import che from '../../assets/Path.svg'
import cheleft from '../../assets/chevron_left.svg'
import cheright from '../../assets/chevron-right.svg'
import Trash from '../../assets/trash.svg'
import Search from '../../assets/Search.svg'
import Seeting from '../../assets/setting-3.svg'
import Case from '../../assets/Rectangle.svg'
import { admins } from '@/constants'
import Hearder_desctop from '@/components/hearder_desctop'
import Add_admin from '@/components/add_admin'
import Delete_admin from '@/components/delete_admin'
import Edit_admin from '@/components/edit_admin'
import Sidebar from '@/components/sidebar'


export interface Admin {
    name: string;
    prenom:string
    email: string;
    statut: string;
  
  }


const getInitials = (name: string, prenom: string): string => {
    if (!name || !prenom) return '';
    return `${name[0]}${prenom[0]}`.toUpperCase();
  };

const ITEMS_PER_PAGE = 12

const Admin = () => {
  //pagination
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(admins.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentData = admins.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )
  //les modals
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true) // Ouvrir le modal
  const closeModal = () => setIsModalOpen(false) // Fermer le modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [adminToDelete, setAdminToDelete] = useState<Admin | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [adminToEdit, setAdminToEdit] = useState<Admin | null>(null);


  const closeDeleteModal = () => setIsDeleteModalOpen(false) // Fermer le modal de suppression
  const openDeleteModal = (admin: Admin) => {
    setAdminToDelete(admin);
    setIsDeleteModalOpen(true);
  };

  const closeEditModal = () => setIsEditModalOpen(false) // Fermer le modal de suppression
  const openEditModal = (admin: Admin) => {
    setAdminToEdit(admin);
    setIsEditModalOpen(true);
  };

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
            <div className=' flex  h-12 px-4 '>
              <div className=' gap-4 flex  h-12 '>
                <div className=' flex   '>
                  <Image
                    src={Case}
                    alt='case'
                    className='w-[24px] mt-1 h-[24px]'
                  />
                  <div className='  items-center flex ml-4 justify-between  py-4 px-3  bg-gray rounded-3xl  w-[200px] h-[18px] '>
                    <span className='font-urbanist text-[14px] text-light_text font-semibold leading-[20px]'>
                      Sélectionner une action
                    </span>
                    <Image src={che} alt='che' className='' />
                  </div>
                  <button
                    onClick={openModal} // Ouvrir le modal
                    className='text-center ml-96 justify-center items-center px-1 flex bg-primary rounded-3xl w-[200px] h-[40px]'
                  >
                    <span className='font-urbanist text-center text-[14px] text-white font-semibold leading-[20px]'>
                      Ajouter un admin
                    </span>
                  </button>
                </div>
                <div className=' flex items-center bg-white border border-gray h-[40px] rounded-full px-2  shadow-sm  '>
                  <Image
                    src={Search}
                    alt='seach'
                    className=' '
                  />
                  <input
                    type='text'
                    placeholder='    Rechercher une organisation                 '
                    className=' w-[320px]   font-Urbanist text-[12px] font-normal leading-[19.2px]  focus:outline-none '
                  />
                  <Image
                    src={Seeting}
                    alt='seeting'
                    className=' '
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
                    <th className='py-3 text-left  '>Administrateurs</th>
                    <th className='py-2 '>Adresse e-mail</th>
                    <th className='py-2  '>Statut</th>
                    <th className='py-2  '></th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.map((admin, index) => (
                    <tr
                      key={index}
                      className='border-b-2 border-dotted bg-white border-gray'
                    >
                      <td>
                        <Image
                          src={Case}
                          alt='case'
                          className='w-[24px] mt-2 h-[24px]'
                        />
                      </td>
                      <td className='py-3  flex items-center'>
                        <div className='flex items-center'>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-blue_Gray `}
                          >
                            <span className='font-bold font-urbanist text-primary'>
                              {getInitials(admin.name,admin.prenom)}
                            </span>
                          </div>
                          <span className='ml-2 font-urbanist text-[16px] font-medium leading-5'>
                            {admin.name}    {admin.prenom}
                          </span>
                        </div>
                      </td>
                      
                      <td className='py-3 font-urbanist text-[16px] font-medium leading-5 '>
                        {admin.email}
                      </td>
                      <td className='py-3'>
                        <span
                          className={`px-4 py-1 font-Urbanist text-sm font-medium leading-4 rounded-full text-center inline-block w-[100px]
                            ${
                              admin.statut === 'Actif'
                                ? 'bg-succes_light text-sucess'
                                : 'bg-danger_light text-danger'
                                 
                            }
                            `}
                        >
                          {admin.statut}
                        </span>
                      </td>

                      <td className='py-3 items-end justify-end px-4 flex space-x-2 '>
                      
                        
                        <button onClick={() => openEditModal(admin)}>
                            <Image
                            src={Edit}
                            alt='item5'
                            className='w-[24px] mt-2 h-[24px]'
                            />
                        </button>
                        <button onClick={() => openDeleteModal(admin)}>
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
       {/* Modal add admin */}
       {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-bgmodal z-50'>
          <Add_admin onClose={closeModal} />
        </div>
      )}
      {/* Modal Supprimer admin */}
       {isDeleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-bgmodal z-50">
            <Delete_admin onClose={closeDeleteModal} admin={adminToDelete} />
          </div>
        )}

         {/* Modal Edit admin */}
       {isEditModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-bgmodal z-50">
            <Edit_admin onClose={closeEditModal} admin={adminToEdit} />
          </div>
        )}
      
    </div>
  )
}

export default Admin
