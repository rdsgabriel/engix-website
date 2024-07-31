'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Loading() {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/images/logoanimada.json' // Ajuste o caminho conforme necessário
      });
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      style={{ width: '100%', height: '100vh' }} // Ajuste o tamanho conforme necessário
    ></div>
  );
}
