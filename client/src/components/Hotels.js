import React, { useState } from 'react';
import "./styles.css"
import { doBooking } from '../services.js/api';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';

function BookHotel({hotel,start,end,routeData}) {
  const location = useLocation()
  const item=location?.state?.state;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        userId:"642476c044d19321341c1d92",
        roomId:item._id,
        startDate:start,
        endDate : end,
        type:item.type,
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
        console.log(formData);
        const response=await doBooking(formData,item._id);
          alert(response.message);
        routeData(location.pathname);
    };

    return (
        <div className='back'>
        <Form onSubmit={handleSubmit} className='form-section'>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
        
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control  required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Mobile</Form.Label>
          <Form.Control required type="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Checkin Date</Form.Label>
          <Form.Control type="date"   min={new Date().toISOString().split("T")[0]} name="checkin" value={formData.startDate} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Checkout date</Form.Label>
          <Form.Control type="date"   min={new Date().toISOString().split("T")[0]} name="checkout" value={formData.endDate} />
        </Form.Group>
        {/* <Form.Group className="mb-3" >
          <Form.Label>Room number</Form.Label>
          <Form.Control type="text" name="roomnumber" value={formData.roomnumber}/>
        </Form.Group> */}
        <Form.Group className="mb-3" >
          <Form.Label>type</Form.Label>
          <Form.Control type="text" name="roomnumber" value={formData.type}/>
        </Form.Group>
        <Button variant="primary" type="submit" 
        // onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
      </div>
    );
}

export default BookHotel;



