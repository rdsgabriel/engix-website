'use client'
import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import LogoMin from '../../public/images/LogoMin.svg'


const Lets = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    phoneNumber: '',
    segment: '',
    description: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://mail-comece.onrender.com/api/v1/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Formulário enviado com sucesso.')
        setStatus('success')
      })
      .catch(error => {
        setStatus('error');
      });
  };

  const [expanded, setExpanded] = useState(false);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
      window.scrollTo({ top: window.scrollY+1000, behavior: 'smooth' });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  }, [status]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="bg-branco aos " data-aos='fade-up'>
       
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 appear-animation'>
      {expanded ? (
        <div className='transition-all duration-1000 ease-in-out'>
          <div className="relative">
  <button
    className="absolute top-0 right-0 text-sm font-medium text-branco pr-3 pt-2"
    onClick={toggleExpand}
  >
    <svg
      className="h-4 w-4 md:h-6 md:w-5 transform rotate-180"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </button>
</div>
<div  className="flex items-center gap-4 rounded-lg bg-azul1 shadow-lg transition-all duration-500 p-6 md:p-20">
{isModalOpen && <div id="successModal" tabIndex="-1" aria-hidden="true" className="bg-preto bg-opacity-70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 justify-center flex w-full h-full animate-fade-up duration-500 pt-64 md:pt-80">
  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
    <div className="relative p-4 text-center bg-gray-100 rounded-lg shadow dark:bg-gray-800 sm:p-5">
      <a type="button" className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        onClick={closeModal}
        href='https://www.instagram.com/agencia_comece/'>
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </a>
      <div className="w-12 h-12 rounded-full bg-green-100 p-2 flex items-center justify-center mx-auto mb-3.5">
        <svg aria-hidden="true" className="w-8 h-8 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      </div>
      <p className="mb-4 text-lg font-semibold text-gray-900">Formulário enviado com sucesso!</p>
      <p className='text-gray-700 font-medium'>Agora é só aguardar nosso time da <span className='text-rosa font-semibold'>Comece</span> entrar em contato.</p>
    </div>
  </div>
</div>}
  <div className='md:w-1/2 hidden md:flex pr-4'>
  <Image
            src={LogoMin}
            alt="Logo"
            width={450}
            height={450}
          />
  </div>
  <div className='md:w-1/2 text-branco font-sf-display-bold'>
  <h3 className="text-2xl tracking-tight leading-tight text-center text-branco md:text-4xl pb-4 ">
      Nossa equipe entrará em contato o mais rápido possível.
    </h3>
  <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
    <input
      type="text"
        required
          name="fullName"
          placeholder="Nome completo"
          className="border border-branco rounded-full px-4 py-2 text-preto w-full"
          value={formData.fullName}
          onChange={handleChange}
          
    />
    <input
        required
        type="email"
        name="email"
        placeholder="Digite seu email"
        className="border border-branco rounded-full px-4 py-2 text-preto w-full"
        value={formData.email}
        onChange={handleChange}
         pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    />
    <input
        required
       type="tel"
       name="phoneNumber"
       placeholder="Digite seu DDD + número de telefone"
       className="border border-branco rounded-full px-4 py-2 text-preto w-full"
       value={formData.phoneNumber}
       onChange={handleChange}
       maxLength={12}
        pattern="[0-9]*"
    />
    <form class="w-full">
      <label for="segment" class="block mb-2 text-lg font-bold text-branco text-center">Qual o seu segmento?</label>
      <select id="segment"
            name="segment"
            className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-full focus:ring-rosa focus:border-rosa block w-full p-2.5"
            value={formData.segment}
            onChange={handleChange}>
       <option value="" disabled>Selecione um segmento</option>
            <option value="SERVICO">Serviço</option>
            <option value="VAREJO">Varejo</option>
            <option value="INDUSTRIA">Indústria</option>
            <option value="ECOMMERCE">E-commerce</option>
            <option value="FOOD_SERVICE">Food Service</option>
            <option value="EDUCACAO">Educação</option>
            <option value="IMOBILIARIO">Imobiliário</option>
            <option value="SAAS">SAAS</option>
            <option value="FINANCAS">Finanças</option>
            <option value="FRANQUIA">Franquia</option>
            <option value="TELECOM">Telecom</option>
            <option value="ENERGIA_SOLAR">Energia Solar</option>
            <option value="TURISMO">Turismo</option>
            <option value="STARTUP">Startup</option>
            <option value="OUTRO">Outro</option>
      </select>
    </form>

<label for="description" class="block text-lg text-branco pt-2 font-bold">Se apresente rapidinho pra gente :)</label>
<textarea id="description"
            name="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Escreva sua mensagem aqui..."
            value={formData.description}
            onChange={handleChange}></textarea>

    <button
      type="submit"
      className="inline-flex items-center gap-2 rounded-full border border-branco bg-rosa px-8 py-1 text-branco hover:bg-azul2 hover:text-rosa focus:outline-none focus:ring active:bg-rosa/90"
    >
      Enviar
    </button>

  {status === 'error' && <p className="text-branco font-black mt-4 text-center ">Ocorreu um erro ao enviar o formulário. Tente novamente.</p>}
  </form>
  </div>
    
</div>

        </div>
       
       
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-lg bg-azul1 shadow-lg sm:flex-row sm:justify-between transition-all duration-500 p-6 text-branco font-sf-display">
            <strong className="text-xl font-sf-display-bold text-white lg:text-2xl">Faça um orçamento gratuito!</strong>
            <a
            id='lets'
              className="inline-flex items-center gap-2 rounded-full border border-branco bg-azul1 px-8 py-3 text-branco hover:bg-branco hover:text-azul1 focus:outline-none focus:ring active:bg-rosa/90"
              onClick={toggleExpand}
            >
              <button className="text-sm font-medium">Vamos lá </button>
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        )}

    
  </div>
</footer>
  );
};

export default Lets;
