import logo from './logo.svg';
import './App.css';
import Hotels from './components/Hotels';
import Caraousel from './components/Caraousel';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Caraousel/>
     <Hotels/>

    </div>
  );
}

export default App;
