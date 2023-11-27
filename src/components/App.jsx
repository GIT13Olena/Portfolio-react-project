import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import NavPage from "./NavPage/NavPage"
import Footer from "./Footer/Footer"
import HomePage from "../pages/HomePage"
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";

import ScrollToTop from "../utils/scrollToTop";

import arrow from "../img/icons/arrow.svg"
import arrowUp from "../img/icons/arrowUp.svg"

import "../styles/main.css";

function App() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return ( 
     <div className="App">
       <ScrollToTop/>
        <NavPage/>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/project/:id" element={<ProjectPage/>} />
        </Routes>
        <div className="btnSvg">
           <NavLink to="/projects">
             <img src={arrow} alt="arrow" className="arrowSvg"/>
            </NavLink>
            <img src={arrowUp} onClick={handleClick} alt="arrow" className="arrowUpSvg"/>
        </div>
        <Footer/>
     </div>
   );
 }
 
 export default App;
