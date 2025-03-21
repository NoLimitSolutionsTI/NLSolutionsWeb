import React,{ lazy } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
const Homepage = lazy(() => import('@/pages/HomePage/homepage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/servicespage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/aboutpage'));
const ContactPage = lazy(() => import('@/pages/ContactPage/contactpage'));
import Footer from '@/components/Footer/footer'


function App() {
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
