import Mao from '../../public/images/mao.png'
import Image from 'next/image';

export default function Services() {
  return (
    <div className='max-w-screen bg-azul1'>
       <div className="max-w-6xl px-6 py-10 mx-auto">
    <span className=" inline-block py-1 px-2 rounded-full text-pink-600 bg-azul3 mr-3"><i ></i></span>

        <h1 className="mt-2 text-xl font-sf-display-bold text-white lg:text-3xl">
            Nossos serviços
        </h1>

        <main className="relative z-10 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div className="absolute w-full bg-azul3 -z-10 md:h-96 rounded-2xl"></div>
            
            <div className="w-full px-6 pb-4 py-1 bg-azul3 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <Image
                src={Mao}
                alt="Logo Minimizada"
                className=" hidden md:block h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[28rem] md:w-80 lg:h-[27rem] lg:w-[24rem] md:rounded-2xl"
                />
                
                <div className="mt-2 md:mx-6 mb-4">
                <span className=" inline-block py-0.5 px-5 rounded-full  bg-azul1 mr-3"><i ></i></span>
                    <p className="mt-4 text-base font-sf-display leading-relaxed text-white md:text-xl">  As ferramentas digitais possibilitam a coleta e análise de dados sobre o comportamento dos consumidores, permitindo que sua empresa tome decisões mais informadas e estratégicas. Em um mundo cada vez mais orientado por informações, dados são o novo petróleo.</p>
                    
                    
                </div>
            </div>
        </main>
    </div>
    </div>
   

  );
}
