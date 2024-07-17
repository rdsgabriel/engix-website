import Image from "next/image";
import LogoMin from '../../public/images/LogoMin.svg'

export default function Header() {
  return (
   <div className="bg-branco flex justify-between sm:justify-center ">
    <div className="py-2 pl-8 md:py-4 md:pl-0">
    <Image
    src={LogoMin}
    alt="Logo Minimizada"
    width={32}
    height={32}/>
    </div>
    <div className="w-7 h-7 bg-azul1 my-auto mr-8 sm:hidden"></div>
    
   </div>
  );
}
