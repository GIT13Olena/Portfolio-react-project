import { useParams } from "react-router-dom";
import { projects } from "../helpers/projectsLists";
import { NavLink } from "react-router-dom";

import monitor from "../img/icons/monitor.svg"
import gitHubBlack from "../img/icons/gitHub-black.svg"
import arrow from "../img/icons/arrow.svg"


function ProjectPage () {
    const {id} = useParams()
    const project = projects[id]
    
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
                            <NavLink to="/projects">
                                <img src={arrow} alt="arrow" className="arrowSvg"/>
                            </NavLink>
                            {project.website && (
                                <a href={project.website} target="_blank" className="btn-outline">
                                    <img src={monitor} alt="svg monitor"/>
                                    Website
                                </a>
                            )}
                            {project.gitHubLink && (
                                <a href={project.gitHubLink} target="_blank" className="btn-outline">
                                    <img src={gitHubBlack} alt="svg gitHub"/>
                                    GitHub
                                </a>
                            )}
                       </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default ProjectPage;