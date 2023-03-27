import React from 'react'
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from 'react';
import { allAvailableHotels } from '../services.js/api';
import { useNavigate,Link } from 'react-router-dom';
import "../components/styles.css"

export default function Home() {
    const navigate=useNavigate();
    const [hotel,setHotel]=useState([]);
    useEffect(() => {
        fetch();  
    }, [])
    
    const fetch=async()=>{
        const response=await allAvailableHotels();
        setHotel(response);
    }
  return (
    <div className='available'>
    {hotel.map((item)=>(
    <Card className='card'>
    <Card.Body>
        <Card.Img imd src='images/download3.jpg'></Card.Img>
      <Card.Title>{item.roomnumber}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.roomtype}</Card.Subtitle>
      <Card.Text>
        
      </Card.Text>
      <Link to="/book" onClick={()=>navigate("/book")}>Book Now</Link>
     
    </Card.Body>
  </Card>
  ))}
  </div>
  )
}


