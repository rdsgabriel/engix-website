'use client';

import Image from 'next/image';
import { useState } from 'react';
import nextsvg from '../../public/images/next.svg'; // Seu SVG importado

export default function AboutUs() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <section className="bg-branco">
      <div id='aboutus' className="max-w-6xl px-6 py-10 mx-auto">
        <span className="inline-block py-1 px-2 rounded-full bg-azul1 mr-3">
          <i></i>
        </span>

        <h1 className="mt-2 text-xl font-sf-display-bold text-preto lg:text-3xl">
          Quem Somos
        </h1>

        <main className="relative z-10 w-full mt-8 md:flex md:flex-col xl:mt-12">
          <div className="absolute inset-0 -z-10 rounded-2xl"></div>

          <div className="w-full px-6 py-4 rounded-2xlmd:p-0 lg:px-12">
            {/* Section Toggle Buttons */}
            <div className="mb-4">
              <button
                onClick={() => toggleSection('mission')}
                className={`w-full text-xl font-sf-display text-white text-left bg-azul1 p-4 rounded-md flex items-center justify-between hover:bg-azul2 transition-colors duration-300 ${activeSection === 'mission' ? 'rounded-b-none' : ''}`}
              >
                Nossa Missão
                <Image
                  src={nextsvg}
                  alt="Toggle"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${activeSection === 'mission' ? 'rotate-90' : 'rotate-0'}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'mission' ? 'max-h-screen' : 'max-h-0'}`}>
                {activeSection === 'mission' && (
                  <div className="bg-gradient-to-br from-azul1 to-azul3 p-4 rounded-b-md">
                    <p className="text-base font-sf-display leading-relaxed text-white md:text-lg">
                      Nossa missão é ser a força propulsora por trás das inovações tecnológicas que moldam o futuro. Com uma abordagem proativa e adaptável, estamos aqui para superar obstáculos e oferecer soluções que não apenas atendem, mas definem os padrões de excelência em nossa indústria.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleSection('team')}
                className={`w-full text-xl font-sf-display text-white text-left bg-azul1 p-4 rounded-md flex items-center justify-between hover:bg-azul2 transition-colors duration-300 ${activeSection === 'team' ? 'rounded-b-none' : ''}`}
              >
                Nossa Equipe
                <Image
                  src={nextsvg}
                  alt="Toggle"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${activeSection === 'team' ? 'rotate-90' : 'rotate-0'}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'team' ? 'max-h-screen' : 'max-h-0'}`}>
                {activeSection === 'team' && (
                  <div className="bg-gradient-to-br from-azul1 to-azul3 p-4 rounded-b-md">
                    <p className="text-base md:text-lg font-sf-display leading-relaxed text-white ">
                      Nossa equipe é formada por visionários e solucionadores de problemas, cada um trazendo uma combinação única de experiência e criatividade. Juntos, cultivamos um ambiente onde a inovação é a norma e a excelência é um hábito. Nosso compromisso é ir além do esperado para entregar resultados excepcionais.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleSection('values')}
                className={`w-full text-xl font-sf-display text-white text-left bg-azul1 p-4 rounded-md flex items-center justify-between hover:bg-azul2 transition-colors duration-300 ${activeSection === 'values' ? 'rounded-b-none' : ''}`}
              >
                Nossos Valores
                <Image
                  src={nextsvg}
                  alt="Toggle"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${activeSection === 'values' ? 'rotate-90' : 'rotate-0'}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'values' ? 'max-h-screen' : 'max-h-0'}`}>
                {activeSection === 'values' && (
                  <div className="bg-gradient-to-br from-azul1 to-azul3 p-4 rounded-b-md">
                    <ul className="list-disc list-inside text-base font-sf-display leading-relaxed text-white md:text-lg">
                      <li>Inovação: Desafiamos o status quo e buscamos constantemente novas soluções criativas.</li>
                      <li>Excelência: Acreditamos que a excelência é um hábito, e não uma meta, permeando cada aspecto do nosso trabalho.</li>
                      <li>Adaptabilidade: Estamos prontos para enfrentar qualquer desafio e encontrar a melhor solução.</li>
                      <li>Colaboração: Trabalhamos juntos para transformar desafios em oportunidades e ideias em realidade.</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <button
                onClick={() => toggleSection('history')}
                className={`w-full text-xl font-sf-display text-white text-left bg-azul1 p-4 rounded-md flex items-center justify-between hover:bg-azul2 transition-colors duration-300 ${activeSection === 'history' ? 'rounded-b-none' : ''}`}
              >
                Nossa História
                <Image
                  src={nextsvg}
                  alt="Toggle"
                  className={`h-5 w-5 text-white transition-transform duration-300 ${activeSection === 'history' ? 'rotate-90' : 'rotate-0'}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${activeSection === 'history' ? 'max-h-screen' : 'max-h-0'}`}>
                {activeSection === 'history' && (
                  <div className="bg-gradient-to-br from-azul1 to-azul3 p-4 rounded-b-md">
                    <p className="text-base font-sf-display leading-relaxed text-white md:text-lg">
                      Desde a nossa fundação, a Engix Tech tem se destacado por sua capacidade de inovar e se adaptar a um mundo em constante evolução. Com um lema que reflete nosso compromisso com a excelência, estamos sempre prontos para dar o próximo passo e criar soluções que definem o futuro da tecnologia.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
