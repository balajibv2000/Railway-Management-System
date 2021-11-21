import './App.css';
import Home from './components/Home';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Passenger from './components/Passenger';
import Employee from './components/Employee'
import Trains from './components/Trains';
import Stations from './components/Stations';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/passenger" element={<Passenger />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/train" element={<Trains />} />
        <Route path="/stations" element={<Stations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
