import { NavLink } from "react-router-dom";

function NavPage () {

   const activeLink = 'nav-list__link nav-list__link--active'
   const normalLink = 'nav-list__link '

   return (
      <nav className="nav">
         <div className="container">
            <div className="nav-row">
               <NavLink to="/" className="logo">
                  <strong>My Portfolio</strong>
               </NavLink>
               
               <ul className="nav-list">
                  <li className="nav-list__item">
                     <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink }>
                        Home
                     </NavLink>
                  </li>
                  
                  <li className="nav-list__item">
                     <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink }>
                        Projects
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default NavPage;