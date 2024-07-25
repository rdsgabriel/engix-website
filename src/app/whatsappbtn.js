import Image from "next/image";
import Whats from '../../public/images/whats.svg'

export default function Wpp() {
  return (
    <a href="https://wa.me/5521971899439?text=Olá%2C%20Gabriel%21%20Estou%20interessado%20nos%20serviços%20da%20Engix%2C%20podemos%20conversar%3F"
    className="fixed z-20 bottom-2 right-2 sm:bottom-5 sm:right-5 text-white bg-green-500 opacity-70 p-3 rounded-full shadow-lg hover:opacity-100 transition-colors animate-smooth-ping"
    target="_blank"
      rel="noopener noreferrer">
      <Image
    src={Whats}
    alt="Logo Minimizada"
    width={24}
    height={24}/>
    </a>
    
  );
}