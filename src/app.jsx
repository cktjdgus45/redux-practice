import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;