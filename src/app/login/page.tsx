"use client"
import Header from "@/components/header";
import React, { useState } from "react";
import { LuEye , LuEyeOff  } from "react-icons/lu";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("ruddysutton@gmail.com")
  

  return (
    <div className="flex flex-col items-center w-[1440px] h-[1024px] bg-blue_Gray">
      <Header/>

      <main className="flex flex-col items-center justify-center absolute top-[318px] left-[408px] w-[624px] h-[388px] p-[48px_64px] gap-[40px] rounded-lg bg-white shadow-lg">
        <h2 className="w-[143px] h-[40px] text-text font-Urbanist text-[30px] font-bold leading-[40px]">
          Connexion
        </h2>

        <form className="w-full flex flex-col gap-6 items-center">
          <div className="relative w-full  flex items-center gap-[8px]">
            <label className="absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text">E-mail</label>
            <input 
                type="text" 
                placeholder="  Entrez votre e-mail"
                id="email"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 font-Urbanist text-[16px] font-normal leading-[19.2px] border border-blue_Gray rounded-full focus:outline-none focus:ring-2"
            />
          </div>

          <div className="relative w-full">
            <label className="absolute -top-3 left-3 font-Urbanist text-[12px] font-bold leading-[25px] bg-white px-1 text-xs text-light_text">Mot de passe</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full py-3 px-4 border  font-Urbanist text-[16px] font-normal leading-[19.2px] border-blue_Gray rounded-full focus:outline-none focus:ring-2 "
              placeholder="Entrez votre mot de passe"
            />
           
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <LuEyeOff size={30} /> : <LuEye size={30} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-[240px] h-[40px] text-center bg-primary rounded-full text-white  font-medium "
          >
            Connexion
          </button>
        </form>
      </main>

      <p className="absolute top-[976px] left-[675px] font-urbanist font-bold">
        Version 0.0.1
      </p>
    </div>
  );
};

export default Page;
