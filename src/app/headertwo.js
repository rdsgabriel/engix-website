import Image from "next/image";
import LogoMin from '../../public/images/LogoMin.svg'

export default function HeaderTwo() {
  return (
   <div className="bg-branco gap-6 py-6 justify-center border-t border-gray-200 hidden sm:flex font-sf-display text-gray-400 text-sm tracking-wide border-b">
    <a href="" className="hover:text-azul1">Desenvolvimento</a>
    <a href="" className="hover:text-azul1">Marketing</a>
    <a href="" className="hover:text-azul1">Design</a>
    <a href="" className="hover:text-azul1">Sobre Nós</a>
    <a href="" className="hover:text-azul1">Clientes</a>
    <a href="" className="hover:text-azul1">Contato</a>
    <a href="" className="hover:text-azul1">Orçamento</a>
   </div>
  );
}
