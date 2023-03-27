import React, { useState } from 'react';
import "./styles.css"
import { doBooking } from '../services.js/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BookHotel() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        checkin: '',
        checkout: '',
        roomnumber: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response=await doBooking(formData);
        console.log(formData);  
    };

    return (
        <div className='back'>
        <Form className='form-section'>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control type="number" name="mobile" value={formData.mobile} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Checkin Date</Form.Label>
          <Form.Control type="date" name="checkin" value={formData.checkin} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Checkout date</Form.Label>
          <Form.Control type="date" name="checkout" value={formData.checkout} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Room number</Form.Label>
          <Form.Control type="text" name="roomnumber" value={formData.roomnumber} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      </div>
    );
}

export default BookHotel;



