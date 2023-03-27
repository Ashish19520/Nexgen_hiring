import logo from './logo.svg';
import './App.css';
import Hotels from './components/Hotels';
import Caraousel from './components/Caraousel';
import Navbars from './components/Navbar';
import BookHotel from './components/Hotels';
import Home from './pages/Home';
import MyBooking from './pages/MyBooking';
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbars/>
          <Caraousel/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
           <Route path="/book" element={<BookHotel/>}></Route>
           <Route path='mybooking' element={<MyBooking/>}></Route>   
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
