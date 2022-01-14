// Code written by Therese Bruzell
// Executing document
// Imports
import Navigation from './components/layout/Navigation';
import './App.css';
import Atoz from './pages/Atoz';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/Start';
import Addnew from './pages/Addnew';
import Footer from './components/layout/Footer';
import LoginButton from './components/layout/LoginButton';

// Executing function
function App() {
  return (
    <>
      <Navigation />
      <LoginButton />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/a-z/*" element={<Atoz />} />
        <Route path="/addnew" element={<Addnew />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
