import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../components/styles.css"
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Navbars({ onData }) {

  const [type,setType]=useState('1bhk');
   const [start,setStart]=useState(new Date());
   const [end,setEnd]=useState(new Date());

   const [data,setData]=useState();

  const changeHandler=(event)=>{
    setType(event.target.value)
  }
 const handleChange = (event) => {
  setStart(event.target.value)
  }; 
  const handleChange2 = (event) => {
    setEnd(event.target.value)
}
const handleSearch=()=>{
  const updatedData = { type: type, start: start, end: end };
  setData(updatedData);
  onData(updatedData);
}
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className='navs' to="/">Hotel Bookings</Link>
          <Nav className="me-auto">
            <Link className='navs' to="/">Home</Link>
            {/* <Link className='navs' to="/book">Book hotel</Link>  */}
            <Form.Select onChange={changeHandler} size="sm">
              <option >select type</option>
              <option value="1bhk">One BHK</option>
              <option value="2bhk">Two BHK</option>
              <option value="3bhk">Three BHK</option>    
            </Form.Select>
           <input
              type="date"
                onChange={handleChange}
                 min={new Date().toISOString().split("T")[0]}

                />
          <input
        type="date"
        onChange={handleChange2}
        min={new Date().toISOString().split("T")[0]}
    
      />
            <button  className='navs'style={{color:"black"}} onClick={handleSearch}>Search</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;