import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate,Link } from 'react-router-dom';
import "../components/styles.css"

export default function Home({hotel}) {
    const navigate=useNavigate();
   
  return (
    <div className='available'>
    {hotel?.map((item,i)=>(

    <Card className='card' key={i}>
    <Card.Body>
        <Card.Img imd src='images/download3.jpg'></Card.Img>
      <Card.Title>Room number:{item.roomNumber}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">room-type:{item.type}</Card.Subtitle>
      <Card.Subtitle className="mb-2 text-muted">price:{item.price}$</Card.Subtitle>
      <Card.Text>
        
      </Card.Text>
      <Link to="/book" state={{state:item}} onClick={()=>navigate("/book")}>Book Now</Link>
     
    </Card.Body>
  </Card>
  ))}
  </div>
  )
}


