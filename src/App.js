import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import './App.css';

import Menu from './components/menu/menu';
import Navbar from './components/navbar/navbar';
import Nosotros from './components/nosotros/nosotros';
import Reservacion from './components/reservacion/reservacion';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={ <Menu/> }
          />
          <Route
            path="/menu"
            element={ <Menu /> }
          />
          <Route
            path="/reservations"
            element={ < Reservacion /> }
          />
          <Route
            path="/about-us"
            element={ <Nosotros /> }
          />

        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App