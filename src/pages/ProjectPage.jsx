import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsLists";
import { NavLink } from "react-router-dom";

import monitor from "../img/icons/monitor.svg"
import gitHubBlack from "../img/icons/gitHub-black.svg"
import arrow from "../img/icons/arrow.svg"
import arrowUp from "../img/icons/arrowUp.svg"


function ProjectPage () {
    const {id} = useParams()
    const project = projects[id]
    
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
    return ( 
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                    <div className="detalis-button">
                        <div className="project-details__desc">
                            <p>Skills: {project.skills}</p>
                            <p>Execution: {project.execution}</p>
                            <p>Project status: {project.projectStatus}</p>
                        </div>

                        <div className="link-button">
                            
                                
                            
                            {project.website && (
                                <a href={project.website} target="_blank" rel="noreferrer" className="btn-outline">
                                    <img src={monitor} alt="svg monitor"/>
                                    Website
                                </a>
                            )}
                            {project.gitHubLink && (
                                <a href={project.gitHubLink} target="_blank" rel="noreferrer" className="btn-outline">
                                    <img src={gitHubBlack} alt="svg gitHub"/>
                                    GitHub
                                </a>
                            )}
                       </div>
                    </div>

                    <div className="btnSvg">
           <NavLink to="/projects">
             <img src={arrow} alt="arrow" className="arrowSvg"/>
            </NavLink>
            <img src={arrowUp} onClick={handleClick} alt="arrow" className="arrowUpSvg"/>
        </div>
                </div>
            </div>
        </main>
     );
}
 
export default ProjectPage;