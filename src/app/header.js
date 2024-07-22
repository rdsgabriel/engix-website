import Image from "next/image";
import LogoMin from '../../public/images/LogoMin.svg'
import Burguer from '../../public/images/burguer.svg'

export default function Header() {
  return (
   <div className="bg-azul1 flex justify-between sm:justify-center ">
    <div className="py-4 pl-8 md:pt-6 md:pl-0">
    <Image
    src={LogoMin}
    alt="Logo Minimizada"
    width={32}
    height={32}/>
    </div>
    <div className="w-7 h-7 my-auto mr-8 sm:hidden">
      <Image
      src={Burguer}
      alt="Menu"/>
    </div>
   </div>
  );
}
