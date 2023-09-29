import React from 'react'
import { Row, Col, Container, Image } from 'react-bootstrap'

const HomePage = () => {
  return (
    <>
       
       <h1 className='text-white text-center'>Hi, I'm Amir Smith.</h1>
       <h2 className='text-white text-center'>I'm a devoloper from California.</h2>

       <Container className='d-flex justify-content-center'>
         <Row className='p-3 mt-3'>
            <Col>
            <Image src='src/images/github-logo (1).png' className='bg-light p-3'/>
            </Col>
            <Col>
            <Image src='src/images/9039990_bootstrap_icon.png' className='bg-light p-3'/>
            </Col>
            <Col>
            <Image src='src/images/104453_html5_html_5_icon.png' className='bg-light p-3'/>
            </Col>
         </Row>
       </Container>




    </>
  )
}

export default HomePage