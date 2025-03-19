import React,{ lazy } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
const Homepage = lazy(() => import('@/pages/HomePage/homepage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage/servicespage'));
const AboutPage = lazy(() => import('@/pages/AboutPage/aboutpage'));
import Footer from '@/components/Footer/footer'

function App() {
  return (
    <>
      <Header/> 
      <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/services" element={<ServicesPage/>}/>
          <Route exact path="/about" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </main>
    <Footer/>
    </>
  )
}

export default App
