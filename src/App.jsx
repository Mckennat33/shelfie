import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Books from './pages/Books'
import Readbooks from './pages/Readbooks'
import BookDashBoard from './components/BookDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/profile" element={<Profile />} /> 
          <Route path='/' element={<Home />}>
          </Route> 
          <Route path='/Dashboard' element={<BookDashBoard />} />
          <Route path='/books' element={<Books />} />
          <Route path='/readbooks' element={<Readbooks />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;