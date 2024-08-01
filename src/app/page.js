'use client'
import React, { Suspense, lazy, useState, useEffect } from 'react';
import Loading from './loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load components
const Header = lazy(() => import('./header'));
const HeaderTwo = lazy(() => import('./headertwo'));
const Video = lazy(() => import('./video'));
const Presentation = lazy(() => import('./presentation'));
const Why = lazy(() => import('./why'));
const Services = lazy(() => import('./services'));
const Wpp = lazy(() => import('./whatsappbtn'));
const Lets = lazy(() => import('./lets'));
const AboutUs = lazy(() => import('./aboutus'));
const Footer = lazy(() => import('./footer'));

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1600, offset:200, once: true });
  }, []);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <Suspense fallback={<Loading/>}> 
      <Header />
      <HeaderTwo />
      <Video />
      <Presentation />
      <Why />
      <Services />
      <Wpp />
      <Lets />
      <AboutUs />
      <Footer />
    </Suspense>
  );
}
