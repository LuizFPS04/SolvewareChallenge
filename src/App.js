import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import { Header } from './components/Header/index';
import { Footer } from './components/Footer/index';
import { Main } from './pages/main';
import { Doctors } from './pages/pageDoctor/index';

const App = () => {
  const [selectSpeciality, setSelectSpeciality] = useState('');
  const [selectCity, setSelectCity] = useState('');
  const [checkCrm, setCheckCrm] = useState('');
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main setSelectSpeciality={setSelectSpeciality} setSelectCity={setSelectCity} setCheckCrm={setCheckCrm}/>} /> 
        <Route path="/doctors" element={<Doctors selectSpeciality={selectSpeciality} selectCity={selectCity} checkCrm={checkCrm} setCheckCrm={setCheckCrm}/>} /> 
      </Routes>
      <Footer />
    </Router>
    </>
  )


}

export default App;
