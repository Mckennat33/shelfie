import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Layout from './components/Layout'
import Footer from './components/Header'
import Profile from './pages/Profile'
// import Books from './pages/CurrentlyReading'
import Readbooks from './pages/Finished'
import BookDashBoard from './components/BookDashboard'
import AllBooks from './pages/AllBooks'
import CurrentlyReading from './pages/CurrentlyReading';
import Finished from './pages/Finished';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profile" element={<Profile />} />
          <Route path='/' element={<BookDashBoard />}>
            <Route index element={<AllBooks />} />
            <Route path="/currentlyreading" element={<CurrentlyReading />} />
            <Route path="/finished" element={<Finished />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;