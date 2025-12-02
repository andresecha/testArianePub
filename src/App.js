import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import 'mapbox-gl/dist/mapbox-gl.css'

import HomePage from './Pages/HomePage';

import { MantineProvider } from '@mantine/core';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Footer/>
      </MantineProvider>
    </BrowserRouter>
  );
}

