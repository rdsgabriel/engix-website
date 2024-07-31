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
        path: '/images/logoanimada.json' 
      });
    }
  }, []);

  return (
    <div
      ref={animationContainer}
      className="w-full h-screen py-auto bg-preto"
    ></div>
  );
}