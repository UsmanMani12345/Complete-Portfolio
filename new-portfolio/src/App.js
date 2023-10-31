import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from "./Header/Header";
import About from "./About/About";
import Skill from "./Skills/Skill";
import Project from "./Project/Project";
import Client from "./Client/Client";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Aboutus from "./About/Aboutus";
import Skillus from "./Skills/Skillus";
import OurProject from "./Project/OurProject";
import Contactus from "./Contact/Contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OtherComponent />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/skill" element={<Skillus/>} />
        <Route path="/project" element={<OurProject/>} />
        <Route path="/contactus" element={<Contactus/>} />

       

      </Routes>
    </Router>
  );
}






function OtherComponent() {
  return (
    <div className="App">

<Header/>
<About/>
<Skill/>
<Project/>
<Client/>
<Contact/>
<Footer/>
   </div>
  );
}




export default App;
