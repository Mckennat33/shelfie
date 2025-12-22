import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Header'

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
