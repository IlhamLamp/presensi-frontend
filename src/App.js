import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import LoginGuru from './pages/Guru/LoginGuru'
import Kelas from './pages/Kelas/Kelas'
import Kehadiran from './pages/Kehadiran/Kehadiran'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginGuru}/>
        <Route path="/kelas" component={Kelas} />
        <Route path="/kehadiran" component={Kehadiran} />
        {/* <Route component={NotFoundPage} /> */}
      </Routes>
    </Router>
  );
};

export default App;
