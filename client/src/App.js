import logo from './logo.svg';
import './App.css';
import Hotels from './components/Hotels';
import Caraousel from './components/Caraousel';
import Navbars from './components/Navbar';
import BookHotel from './components/Hotels';
import Home from './pages/Home';
import MyBooking from './pages/MyBooking';
import { allAvailableHotels } from './services.js/api';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { useEffect,useState } from 'react';
function App() {
  const [hotel,setHotel]=useState([]);
    useEffect(() => {
        fetch();  
    }, [])
    
    const fetch=async()=>{
        const response=await allAvailableHotels();
        setHotel(response);
    }
  return (
    <div className="App">
      <BrowserRouter>
          <Navbars/>
          <Caraousel/>
      <Routes>
          <Route path="/" element={<Home hotel={hotel}/>}></Route>
           <Route path="/book" element={<BookHotel hotel={hotel}/>}></Route>
           <Route path='mybooking' element={<MyBooking/>}></Route>   
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
