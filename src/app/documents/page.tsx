"use client";
import Image from "next/image";
import Logo from "../../assets/Logo Private.svg";
import NavItem1 from "../../assets/home-2.svg";
import NavItem2 from "../../assets/document-text.svg";
import NavItem3 from "../../assets/profile-2user.svg";
import NavItem4 from "../../assets/archive.svg";
import NavItem5 from "../../assets/setting-2.svg";
import NavItem6 from "../../assets/logout1.svg";
import Eye from "../../assets/eye-slash.svg";
import Add from "../../assets/add.svg";
import Search from "../../assets/Search.svg";
import Seeting from "../../assets/setting-3.svg";
import element3 from "../../assets/element-3.svg";
import row from "../../assets/row-vertical.svg";
import chevron from "../../assets/chevron-down-outline.svg";
import Dots3 from "../../assets/Dots3.svg";
import Folderg from "../../assets/Folder G.svg";
import Add2 from "../../assets/add2.svg";
import Pdf2 from "../../assets/prime_file2-pdf.svg";


import { recentDocuments } from "@/constants";













import Folder from "../../assets/Document.svg";

import { recentFolders } from "@/constants";
import Hearder_desctop from "@/components/hearder_desctop";












const Documents = () => {
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

        <div className="flex w-full h-[100px] justify-between mt-24">
           <div className=" border justify-between items-center px-1 flex bg-gray border-white rounded-3xl my-6 w-[445px] h-[40px] opacity-50">
             <button className="bg-white my-3 mx-4 px-8 rounded-full font-Urbanist text-[14px] py-1 font-semibold  text-center">Tous</button>
             <button className=" m-4 px-4 rounded-full font-Urbanist text-[14px] py-1 font-semibold  text-center">Partagés</button>
             <button className=" m-4 px-4 rounded-full font-Urbanist text-[14px] py-1 font-semibold  text-center">Favoris</button>

           </div>
           <div className=" justify-between flex gap-x-4  ">
              <div className="  items-center px-1 flex bg-gray rounded-3xl my-6 w-[250px] h-[40px] ">
                 <Image src={Eye} alt="item5" className="w-[32px] h-[32px] mx-2" />
                 <span className="font-urbanist text-[16px] text-text font-semibold leading-[20px]">Cacher les dossiers</span>
              </div>
              <div className=" text-center justify-center  items-center px-1 flex bg-primary  rounded-3xl my-6 w-[200px] h-[40px] ">
               <span className="font-urbanist text-center text-[16px] text-white font-semibold leading-[20px]">Créer un dossier</span>
              </div>
           </div>
        </div>
        <div className=" flex  h-12 mt-2">
           <div className=" w-[750px]  h-12 ">
           </div>
           <div className=" gap-4 flex w-[600px]  h-12 ">
             <div className=" bg-primary items-center p-2 justify-center h-[40px] w-[40px] rounded-full">
               <Image src={Add} alt="item5" className="  items-center justify-center" />
             </div>
             <div>
               <Image src={Search} alt="item5" className=" z-30 absolute top-[305px] right-[460px]" />
                <input 
                    type="text" 
                    placeholder="         Rechercher un document                 "
                    id="email"
                    className="w-[350px] relative py-3  px-4 font-Urbanist text-[16px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2"
                />
               <Image src={Seeting} alt="item5" className=" z-30 absolute top-[300px] h-[24px] w-[24px] right-[160px]" />
            </div>
             <div className=" w-[100px] h-full flex ">
                <div className="h-full flex-1 bg-gray rounded-l-2xl  items-center justify-center">
                  <Image src={element3} alt="item5" className="m-3 w-[24px] h-[24px]" />
                </div>
                <div className="h-full flex-1 bg-white rounded-r-2xl border border-gray">
                  <Image src={row} alt="item5" className="m-3 w-[24px] h-[24px]" />
                </div>
             </div>
           </div>
        </div>
        <div className="  flex  h-[600] mt-6">
           <div className="border border-gray rounded-xl w-[400px]  h-full pt-8 pl-8 ">
            <span className="  font-urbanist text-center text-[16px] text-text font-semibold leading-[20px]">Dossiers</span>
            <div className="mt-8">
                {recentFolders.map((folder, index) => (
                <div key={index} className="flex items-center my-6 space-x-2">
                    <Image src={Folder} alt="item5" className="w-[24px] h-[20] " />
                    <span className="font-urbanist w-[190px] text-[16px] text-text font-medium leading-[20px] truncate">{folder}</span>
                    <Image src={chevron} alt="item5" className="w-[24px] h-[20] " />
                </div>
                
                ))}
          </div>
           </div>
           <div className="w-full h-[400] ml-4 grid grid-cols-5 gap-x-4 gap-y-4  ">
            {recentFolders.map((folder, index) => (
                 <div key={index} className="h-[180px]  text-center items-center rounded-xl border pt-2 border-gray">
                 <Image src={Dots3} alt="item5" className="w-[24px] ml-32 h-[20] " />
                 <Image src={Folderg} alt="item5" className="ml-10 mb-6 " />
                 <span className="font-urbanist text-[14px] text-center  text-text font-semibold truncate">{folder}</span>
                </div>
                
            ))}
            
            <div  className="h-[180px]  text-center items-center rounded-xl border pt-2 border-gray">
                 <Image src={Add2} alt="item5" className="ml-10 mt-4 mb-6 " />
                 <span className="font-urbanist text-[14px] text-center  text-text font-semibold truncate">Nouveau dossier</span>
            </div>

           </div>
        </div>
        <div className="  flex  h-[600] mt-6">
           <div className=" w-[400px]  h-full  ">
           
           </div>
           <div className="w-full h-[400]">
           <h2 className="font-urbanist text-[20px] pl-4 py-3 text-text font-bold leading-[26px] mb-4">Documents </h2>

           <div className=" ml-4 grid grid-cols-5 gap-x-4 gap-y-4  ">
            {recentDocuments.map((doc, index) => (
                 <div key={index} className="h-[150px]  text-center items-center rounded-xl border pt-2 border-gray">
                 <Image src={Dots3} alt="item5" className="w-[24px] ml-32 h-[20] " />
                 <Image src={Pdf2} alt="item5" className="ml-10 mb-6 " />
                 <span className="font-urbanist w-4 text-[12px] items-center text-center justify-center font-normal leading-[16px] truncate">{doc.name}</span>
                </div>
                
            ))}
            
            

           </div>
           </div>
        </div>

        

       
      </main>
    </div>
  );
};

export default Documents;
