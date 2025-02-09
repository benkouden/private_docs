"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../assets/Logo Private.svg";
import BuildingIcon, { HomeIcon, UsersGroupIcon, LogoutIcon } from "@/constants/icone";

const Sidebar = () => {
  const pathname = usePathname();

  // Fonction pour vérifier si une route est active
  const isActive = (paths: string[]) => paths.includes(pathname);

  return (
    <aside className="w-[80px] h-full bg-white border-r border-blue_Gray flex flex-col py-4">
      {/* Logo */}
      <div className="mb-40 flex justify-center pt-6">
        <Image src={Logo} alt="Private Docs Logo" className="w-[163px] h-[36px]" />
      </div>

      <nav className="flex flex-col space-y-2 w-full flex-1">
        <Link
          href="/dashboard"
          className={`flex justify-center items-center w-full py-4 ${
            isActive(["/dashboard"]) ? "border-r-4 border-primary text-primary" : "text-light_text"
          }`}
        >
          <HomeIcon className="w-6 h-6" />
        </Link>

        <Link
          href="/organisations"
          className={`flex justify-center items-center w-full py-4 ${
            isActive(["/organisations"]) ? "border-r-4 border-primary text-primary" : "text-light_text"
          }`}
        >
          <BuildingIcon className="w-6 h-6" />
        </Link>

        <Link
          href="/admin"
          className={`flex justify-center items-center w-full py-4 ${
            isActive(["/admin","/organisations/profil", "/organisations/modifier-profil", "/organisations/modifier-profil-bloquer"])
              ? "border-r-4 border-primary text-primary"
              : "text-light_text"
          }`}
        >
          <UsersGroupIcon className="w-6 h-6" />
        </Link>
      </nav>

      {/* Logout toujours en bas */}
      <div className=" mt-36 ">
        <Link
          href="/logout"
          className={`flex justify-center items-center w-full py-4 ${
            isActive(["/logout"]) ? "border-r-4 border-blue-500 text-blue-500" : "text-light_text"
          }`}
        >
          <LogoutIcon className="w-6 h-6" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
