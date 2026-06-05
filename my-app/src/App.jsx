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
import User from "./components/User.jsx";
import OldPatients from "./components/OldPatients.jsx";
import NewPatients from "./components/NewPatients.jsx";


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
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/user/3">User 3</Link></li>
          <li><Link to="/user/4">User 4</Link></li>
          <li><Link to="/patient-type/old_patients">Old Patients</Link></li>
          <li><Link to="/patient-type/new_patients">New Patients</Link></li>
        </ul>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/contact-us' element={ <Contact/> } />
                <Route path='/user/:id' element={ <User/> } />
                <Route  path="/patient-type">
                 <Route path='old_patients' element={ <OldPatients/> } />
                <Route path='new_patients' element={ <NewPatients/> } />
                </Route>
                
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;
