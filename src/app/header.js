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
    <div className="bg-azul1 flex justify-between items-center px-8 py-4 md:py-10 sm:justify-center relative">
      <div className="flex-shrink-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-2 sm:y-10 z-10">
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
        className={`sm:flex sm:items-center sm:static absolute bg-azul1 bg-opacity-95 w-full left-0 pl-4 font-sf-display transition-transform duration-700 ease-in-out ${
          isOpen ? 'opacity-100 top-12 translate-y-0' : 'opacity-0 top-[-50px] translate-y-[-20px]'
        }`}
        style={{
          height: isOpen ? 'auto' : '0',
          overflow: isOpen ? 'visible' : 'hidden',
          zIndex: 5
        }}
      >
        <li className="p-4 text-branco pt-8">
          <a onClick={handleClick} href="#services" className="block">Serviços</a>
        </li>
        <li className="p-4 text-branco">
          <a onClick={handleClick} href="#aboutus" className="block">Sobre nós</a>
        </li>
        <li className="p-4 text-branco">
          <a onClick={handleClick} href="https://wa.me/5521971899439?text=Olá%2C%20Gabriel%21%20Estou%20interessado%20nos%20serviços%20da%20Engix%2C%20podemos%20conversar%3F" className="block">Contato</a>
        </li>
        <li className="p-4 text-branco pb-8">
          <a onClick={handleClick} href="#orcamento" className="block">Orçamento</a>
        </li>
      </ul>
    </div>
  );
}
