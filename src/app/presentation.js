export default function Presentation() {
  return (
    <div className="bg-white sm:rounded-xl sm:-mt-24 min-h-full mx-auto sm:min-h-96 min-w-screen md:mx-auto md:max-w-2xl lg:mx-auto 2xl:mx-auto xs:mx-40 sm:max-w-xl sm:mx-auto lg:max-w-4xl 2xl:max-w-7xl flex justify-center items-center text-azul3 sm:mb-14">
      <div className="relative">
        <video 
          src="/images/compo.webm" 
          width="100%" 
          autoPlay 
          muted 
          loop 
          className="hide-controls sm:custom-shadow"
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
}
