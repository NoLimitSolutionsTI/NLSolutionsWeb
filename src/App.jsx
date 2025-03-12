import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
import HomePage from '@/pages/HomePage/homepage'
import Footer from '@/components/Footer/footer'

function App() {
  return (
    <>
      <Header/> 
      <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        </Routes>
      </Router>
    </main>
    <Footer/>
    </>
  )
}

export default App
