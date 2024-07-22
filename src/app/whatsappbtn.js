import Image from "next/image";
import Whats from '../../public/images/whats.svg'

export default function Wpp() {
  return (
    <a href=""
    className="fixed z-20 bottom-2 right-2 sm:bottom-5 sm:right-5 text-white bg-green-500 opacity-70 p-3 rounded-full shadow-lg hover:opacity-100 transition-colors"
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