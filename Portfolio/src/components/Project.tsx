import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


const Project = () => {
  return (
    <>
      <h1 className='text-center text-white'>Here are some of the things i've made!</h1>
      <Container>
        <Row className='d-flex justify-content-center'>
          <Col xs={6} md={4}>
          <Image src='src/images/Screenshot 2023-09-14 203312.png' thumbnail/>
          </Col>
          <Col xs={6} md={4}>
          <Image src='src/images/Screenshot 2023-09-14 203801.png' thumbnail/>
          </Col>
        </Row>
        <Row className='mt-3 d-flex justify-content-center'>
          <Col xs={6} md={4}>
          <Image src='src/images/Screenshot 2023-09-14 204741.png' thumbnail/>
          </Col>
          <Col xs={6} md={4}>
          <Image src='src/images/Screenshot 2023-09-14 210211.png' thumbnail/>
          </Col>
        </Row>



      </Container>






    </>
  )
}

export default Project