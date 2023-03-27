import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "../components/styles.css"

function Navbars() {
 
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link className='navs' to="/">Hotel Bookings</Link>
          <Nav className="me-auto">
            <Link className='navs' to="/">Home</Link>
            <Link className='navs' to="/book">Book hotel</Link>
            <Link  className='navs'to="/mybooking">Pricing</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;