import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Container,Row,Col } from 'react-bootstrap'
import HomePage from './components/HomePage'
import AboutMe from './components/AboutMe'
import ContactPage from './components/ContactPage'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Container>
         <Row>
          <Navbar/>
          <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='/AboutMe' element={<AboutMe/>}/>
             <Route path='/ContactPage' element={<ContactPage/>}/>
             <Route path='/Project' element={<Project/>}/>  
          </Routes>
         </Row>




      </Container>


    </BrowserRouter>
  )
}

export default App
