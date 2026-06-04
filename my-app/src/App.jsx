import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import EmployeeForm from "./components/EmployeeForm.jsx";
import FavoriteCar from "./components/FavoriteCar.jsx";
import Header from "./components/Header";
import Home from "./components/Home.jsx";
import List from "./components/List.jsx";
import Office from "./components/Office";
import Patient from "./components/Patient.jsx";
import StopWatch from "./components/StopWatch.jsx";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <>
        <h1>Get started - Welcome to React </h1>
        {/* <Office/> */}
        {/* <Header/> */}
        {/* <FavoriteCar/> */}
        {/* <Patient/> */}
        {/* <List/> */}
        {/* <StopWatch/> */}
        {/* <EmployeeForm/> */}

        {/* <Home/>
        <About/>
        <Contact/> */}

        
        <BrowserRouter>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/about">About Page</Link></li>
          <li><Link to="/contact-us">Contact page</Link></li>
        </ul>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/contact-us' element={ <Contact/> } />
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
