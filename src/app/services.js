'use client'

import Image from 'next/image';

export default function Services() {
  return (
    <div id='services' className='max-w-screen bg-gradient-to-br from-branco to-blue-100  font-sf-display'>
       <div className="max-w-6xl px-6 py-10 mx-auto ">
    <span className=" inline-block py-1 px-4 rounded-full text-pink-600 bg-gradient-to-tl from-azul3 via-azul2 to-azul1 mr-3"><i ></i></span>
    

        <h1 className="mt-2 text-xl font-sf-display-bold text-preto lg:text-3xl">
            Nossos serviços
        </h1>

        
     
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-2'>


        <div
  className=" mx-auto mt-10 relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-azul3 to-azul1 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
  <div
    className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
    
    <h1 className="flex justify-center gap-1 mt-6 antialiased font-sf-display-bold text-xl tracking-wide lg:text-2xl text-branco">
      Desenvolvimento
    </h1>
    
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4 mb-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Sistemas Completos
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Websites 
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
           Apps Mobile
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Hospedagem 
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Suporte 24/7
        </p>
      </li>
    </ul>
  </div>
        </div> 

        <div
  className=" mx-auto mt-10 relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-azul1 to-azul3 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
  <div
    className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
    
    <h1 className="flex justify-center gap-1 mt-6 antialiased font-sf-display-bold tracking-wide text-white text-xl lg:text-2xl ">
     Design
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4 mb-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Equipe de UX
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Equipe de UI
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Motion Design
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Branding 
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Alterações gratuitas <span className='font-sans text-sm pl-1'>* (1 mês)</span>
        </p>
      </li>
    </ul>
  </div>
        </div>

        <div
  className="mx-auto mt-10 relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-azul1 to-azul3 text-white shadow-gray-900/20 shadow-md w-full max-w-[20rem] p-8">
  <div
    className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none bg-clip-border border-white/10">
   
    <h1 className="flex justify-center gap-1 mt-6 antialiased font-sf-display-bold tracking-wide text-white text-xl lg:text-2xl ">
      Data Science
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4 mb-4">
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Análise de Dados
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Modelagem Preditiva
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Machine Learning
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
          Business Intelligence
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-3 h-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
          </svg></span>
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
           Soluções via IA
        </p>
      </li>
    </ul>
  </div>
        </div> 
        
        
        </div>
        

        
    </div>
    </div>
   

  );
}
