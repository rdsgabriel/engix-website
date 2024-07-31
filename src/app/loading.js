
import Image from 'next/image';
import loading from '../../public/images/loading.gif'


const Loading = () => {
  return (
    <div className="flex bg-preto items-center justify-center min-h-screen">
      <Image src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;