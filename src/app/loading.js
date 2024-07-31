
import Lottie from 'react-lottie-player';
import animationData from '../../public/images/logoanimada.json';


const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-preto">
    <Lottie
      loop
      animationData={animationData}
      play
      style={{ width: 600, height: 600 }} // Ajuste o tamanho conforme necessário
    />
  </div>
  );
};

export default Loading;
