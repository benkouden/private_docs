import React from 'react';
import Image from 'next/image';

interface CardProps {
  icon?: string; // L'icône est maintenant optionnelle
  title: string;
  value: string | null;
}

const Card_min2 = ({ icon, title, value }: CardProps) => {
  return (
    <div className="flex items-center w-[284px] h-[76px] bg-white rounded-lg p-4">
      {/* Affichage de l'icône uniquement si elle existe */}
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-blue_Gray rounded-lg">
          <Image src={icon} alt={title} className="w-[40px] h-[40px]" />
        </div>
      )}
      
      {/* Ajustement du texte en fonction de la présence de l'icône */}
      <div className={`${icon ? 'ml-4' : ''}`}>
        <div className=" text-[14px] font-bold text-text font-urbanist">{title}</div>
        <div className=" text-[16px] text-light_text font-normal font-urbanist">{value}</div>
      </div>
    </div>
  );
};

export default Card_min2;
