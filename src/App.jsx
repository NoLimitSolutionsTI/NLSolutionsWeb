import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
import Homepage from '@/pages/HomePage/homepage.jsx'
import Footer from '@/components/Footer/footer'
import ServicesPage from './pages/ServicesPage/servicespage'
import AboutPage from "@/pages/AboutPage/aboutpage.jsx";

function App() {
  return (
    <>
      <Header/> 
      <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="services" element={<ServicesPage/>}/>
          <Route exact path="about" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </main>
    <Footer/>
    </>
  )
}

export default App
