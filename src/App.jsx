import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Test from './pages/Test';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>

      <GlobalStyles />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Test />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
