import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Homepage from './Components/Homepage';
import Reservation from './Components/Reservation'

function App() {
  return (
    <>
    <Router>
      <Nav />

        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/Reservation' element={<Reservation />}/>
        </Routes>

      <Footer />
    </Router>

    </>
  );
}

export default App;
