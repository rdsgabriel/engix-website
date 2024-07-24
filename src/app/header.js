'use client';

import Image from 'next/image';
import LogoMin from '../../public/images/LogoMin.svg';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-azul1 flex justify-between items-center px-8 py-4 md:py-10 sm:justify-center">
      <div className="flex-shrink-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-2 sm:y-10">
        <Image
          src={LogoMin}
          alt="Logo Minimizada"
          width={32}
          height={32}
        />
      </div>

      {/* Ícone do menu hambúrguer */}
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center w-7 h-7 my-auto sm:hidden"
        aria-label="Menu"
      >
        <span
          className={`bg-branco block transition-all duration-300 ease-out
              h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
        ></span>
        <span
          className={`bg-branco block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        ></span>
        <span
          className={`bg-branco block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
        ></span>
      </button>

      {/* Menu de navegação */}
      <ul
        className={`sm:flex sm:items-center sm:static absolute bg-azul1 bg-opacity-95 w-full left-0 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 top-16' : 'opacity-0 top-[-200px] hidden'
        }`}
        style={{
          height: isOpen ? 'auto' : '0',
          overflow: isOpen ? 'visible' : 'hidden',
        }}
      >
        <div className='px-4 font-sf-display'>
        <a href="#services"><li className="p-4 text-branco ">Serviços</li></a>
        <a href="#services"><li className="p-4 text-branco ">Sobre nós</li></a>
        <a href="#services"><li className="p-4 text-branco ">Contato</li></a>
        <a href="#services"><li className="p-4 text-branco ">Orçamento</li></a>
        </div>
      </ul>
    </div>
  );
}
