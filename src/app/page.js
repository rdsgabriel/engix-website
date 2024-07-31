'use client'
import { useState, useEffect } from 'react';
import Header from './header';
import HeaderTwo from './headertwo';
import Video from './video';
import Presentation from './presentation';
import Why from './why';
import Services from './services';
import Wpp from './whatsappbtn';
import Lets from './lets';
import AboutUs from './aboutus';
import Footer from './footer';
import Loading from './loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
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
    </>
  );
}