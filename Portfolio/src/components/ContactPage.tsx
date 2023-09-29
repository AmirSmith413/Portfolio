import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactPage = () => {
  return (
    <>
    <h1 className='text-center text-white'>Feel free to contact me and I will get to you when I can.</h1>
    <Form>
      <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
        <Form.Label className='text-white'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formPhoneNumber">
        <Form.Label className='text-white'>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </>
  )
}

export default ContactPage