import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav
    className='d-flex justify-content-center m-5'
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
  >
    <Nav.Item>
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to='/AboutMe'>About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to='/ContactPage'>Contact Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link as={Link} to='/Project'>Projects</Nav.Link>
    </Nav.Item>
    
  </Nav>
  )
}

export default Navbar