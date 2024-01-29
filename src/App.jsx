import './App.css';
import '@fontsource/inter';
import React from 'react';
import Home from './pages/Home';
import ResponsiveAppBar from './components/AppBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Buses from './Buses/bus';
import Cabs from './Cabs/cab';
import HolidayPackage from './HolidayPackage/holiday';
import HolidayPlace from './HolidayPlace/holidayplace';
import AdminMain from './Admin/main';

function App() {
  return (
    <div>
      <Router>
        <ResponsiveAppBar />   
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/bus/book' element={<Buses />} />
          <Route path='/cab/book' element={<Cabs />} />
          <Route path='/holiday/book' element={<HolidayPackage />} />
          <Route path='/holiday/place' element={<HolidayPlace/>} />
          <Route path='/admin/main' element={<AdminMain/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
