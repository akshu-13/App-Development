// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import Homepage from './components/Homepage';
import Services from './components/Services';
import Blog from './components/Blog';
import Packages from './components/Packages';
import ContactUs from './components/ContactUs';
import TourismPlaces from './components/TourismPlaces';
import AddressMapComponent from './components/AddressMapComponent';
import Workshops from './components/Workshops';
import Student from './components/Student';
import CheckoutAddress from './components/CheckoutAddress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/tourism-places/cbe" element={<TourismPlaces />} />
        <Route path="/address-map" element={<AddressMapComponent />} />
        <Route path="/workshops" element={<Workshops />} />
        <Route path="/student" element={<Student />} />
        <Route path="/feedback" element={<CheckoutAddress />} />
       
      </Routes>
    </Router>
  );
}

export default App;
