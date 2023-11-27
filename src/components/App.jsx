import { Routes, Route } from "react-router-dom";


import NavPage from "./NavPage/NavPage"
import Footer from "./Footer/Footer"
import HomePage from "../pages/HomePage"
import ProjectsPage from "../pages/ProjectsPage";
import ProjectPage from "../pages/ProjectPage";

import ScrollToTop from "../utils/scrollToTop";



import "../styles/main.css";

function App() {


  return ( 
     <div className="App">
       <ScrollToTop/>
        <NavPage/>
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/project/:id" element={<ProjectPage/>} />
        </Routes>
        
        <Footer/>
     </div>
   );
 }
 
 export default App;
