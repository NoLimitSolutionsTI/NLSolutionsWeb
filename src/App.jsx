import React,{ lazy, useEffect } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Homepage = lazy(() => import('@/pages/HomePage/homepage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/servicespage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/aboutpage'));
const ContactPage = lazy(() => import('@/pages/ContactPage/contactpage'));
import Footer from '@/components/Footer/footer'


function App() {
    useEffect(() => {
    AOS.init({
      easing: 'ease-in-out-sine',
      duration: 500,
      delay: 0,
      offset: 30,
      anchorPlacement: 'top-bottom',
    });
    }, []);
  return (
    <>
      <Header/> 
      <main>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/services" element={<ServicesPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </Router>
    </main>
    <Footer/>
    </>
  )
}

export default App
