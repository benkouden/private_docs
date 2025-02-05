"use client";
import Image from "next/image";
import Logo from "../assets/Logo Private.svg";
import NavItem1 from "../assets/home-2.svg";
import NavItem2 from "../assets/document-text.svg";
import NavItem3 from "../assets/profile-2user.svg";
import NavItem4 from "../assets/archive.svg";
import NavItem5 from "../assets/setting-2.svg";
import NavItem6 from "../assets/logout1.svg";


import Folder from "../assets/Document.svg";
import Pdf from "../assets/prime_file-pdf.svg";
import Dots from "../assets/Menu Dots.svg";
import Star1 from "../assets/star1.svg";
import Star2 from "../assets/star2.svg";
import { recentFolders } from "@/constants";
import { recentDocuments } from "@/constants";
import Hearder_desctop from "@/components/hearder_desctop";












const Dashboard = () => {
  return (
    <div className="flex w-full min-h-screen text-text font-Urbanist overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[80px] h-full p-[32px_10px] justify-between bg-white border-r border-blue_Gray flex flex-col py-4">
        <div className="mb-40 pt-6">
          <Image src={Logo} alt="Private Docs Logo" className="w-[163px] h-[36px]" />
        </div>
        <nav className="flex w-[80px] flex-col space-y-8">
          <Image src={NavItem1} alt="item1" className="w-[72px] h-[26px] border-r-4 border-primary" />
          <Image src={NavItem2} alt="item2" className="w-[72px] h-[26px]" />
          <Image src={NavItem3} alt="item3" className="w-[72px] h-[26px]" />
          <Image src={NavItem4} alt="item4" className="w-[72px] h-[26px]" />
          <Image src={NavItem5} alt="item5" className="w-[72px] h-[26px]" />
        </nav>
        <div className="mt-[725px]">
          <Image src={NavItem6} alt="Private Docs Logo" className="w-[72px] h-[26px]" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-5 p-8 overflow-auto">
        {/* Header */}
        <Hearder_desctop/>

        {/* Recent Folders */}
        <section className="mb-8 mt-24">
          <h2 className="font-urbanist text-[20px] text-text font-bold leading-[26px] mb-4">Dossiers récents</h2>
          <div className="grid grid-cols-5 gap-x-4 gap-y-12 mt-8 ml-4">
            {recentFolders.map((folder, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Image src={Folder} alt="item5" className="w-[24px] h-[20] " />
                <span className="font-urbanist text-[18px] text-text font-medium leading-[20px] truncate">{folder}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Documents */}
        <section className="mt-12">
          <h2 className="font-urbanist text-[20px] text-text font-bold leading-[26px] mb-4">Documents récents</h2>
          <div className="bg-white  pl-5  rounded-lg overflow-hidden">
      <table className=" text-left  border-collapse">
        
        <tbody>
          {recentDocuments.map((doc, index) => (
            <tr key={index} className="border-y">
              <td className="py-4 px-0  w-[400px] flex items-center space-x-4">
                <Image src={Pdf} alt="pdf" className="w-[32px] h-[32px]" />
                <span className="font-urbanist text-[16px]  font-normal truncate ">{doc.name}</span>
              </td>
              <td className="font-urbanist text-light_text text-[16px] font-normal leading-[24px] w-72 ">{doc.author}</td>
              <td className="font-urbanist text-light_text text-[16px] font-normal leading-[24px] w-64">{doc.date}</td>
              <td className="font-urbanist text-light_text text-[16px] font-normal leading-[24px] w-32">{doc.size}</td>
              <td className="">
              <Image 
                src={doc.starred ? Star2 : Star1} 
                alt="star" 
                className="w-[24px] h-[24px]" 
              />
              </td>
              <td className="bg-white">
                <Image src={Dots} alt="pdf" className="w-[24px] h-[24px]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
