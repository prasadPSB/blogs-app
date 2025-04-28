import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard.js';
import Blogs from './Components/Blogs/Blogs.js';
import Header from './Components/Header/Header.js';
import Login from './Components/Login/Login.js';
import Register from './Components/Register/Register.js';
import HomePage from './Components/HomePage/HomePage.js';


function App() {
  return (
    <BrowserRouter>
    {<Header/>}
    <Routes>
    <Route path="/" element={<Blogs/>} />
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/HomePage' element={<HomePage/>}/>
    
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
