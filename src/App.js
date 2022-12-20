import React from 'react';
import {Link,Route,Routes} from 'react-router-dom';
import './css/App.css';
import Home from './components/Home';
import Admin from './components/Admin';
import Sprovider from './components/Sprovider';
import Footer from './components/Footer';

function App() {
  return (
    <div id="body">
      <div className="flexContainer">
        <div className="flexItem"><h1>Auximate</h1></div>
        <div className="flexItem">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/sprovider">Service provider</Link></li>     
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/sprovider" element={<Sprovider/>}></Route>
      </Routes>
      <Footer/>
    </div>
    );
}
export default App;
