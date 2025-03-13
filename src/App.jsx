import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '@/components/Header/header'
import Homepage from '@/pages/HomePage/homepage.jsx'
import Footer from '@/components/Footer/footer'

function App() {
  return (
    <>
      <Header/> 
      <main>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
        </Routes>
      </Router>
    </main>
    <Footer/>
    </>
  )
}

export default App
