import logo from './logo.svg';
import './App.css';
import Hotels from './components/Hotels';
import Caraousel from './components/Caraousel';
import Navbars from './components/Navbar';
import BookHotel from './components/Hotels';
import Home from './pages/Home';
import MyBooking from './pages/MyBooking';
import { allAvailableHotels } from './services.js/api';
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import { useEffect,useState } from 'react';
import { getDateWithoutTime } from './services.js/utils';

function App() {
 
  const [hotel,setHotel]=useState([]);
 
  const [routeData, setRouteData] = useState(null);

  const [data, setData] = useState({
    type:"1bhk",
    start:getDateWithoutTime(),
    end:getDateWithoutTime()
  });

  function handleChildData(childData) {
    setData(childData);
  }

    useEffect(() => {
        fetch();      
    }, [data,routeData]);

  
  

    const fetch=async()=>{
        const response=await allAvailableHotels(data.type,data.start,data.end);
        setHotel(response);
    }
     
  return (
    <div className="App">
      <BrowserRouter>
          <Navbars onData={handleChildData}/>
          <Caraousel/>
      <Routes>
          <Route path="/" element={<Home hotel={hotel}/>}></Route>
           <Route path="/book" element={<BookHotel routeData={setRouteData} hotel={hotel} start={data.start} end={data.end}/>}></Route>
           <Route path='mybooking' element={<MyBooking/>}></Route>   
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
