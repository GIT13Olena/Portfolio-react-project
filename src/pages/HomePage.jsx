import Header from "../components/Header/Header"

function HomePage () {
   return (
      <>
         <Header/>

         <main className="section">
            <div className="container">

                     <ul className="content-list">
                        <li className="content-list__item">
                           <h2 className="title-2">Frontend</h2>
                           <p>HTML, CSS, SASS, JavaScript, React, React Native, Redux, Redux Thunk, NPM, REST API, 
                                 Parcel, Webpack</p>
                        </li>
                        <li className="content-list__item">
                           <h2 className="title-2">Backend</h2>
                           <p>Node.js, Express, MongoDB, Mongoose, JSON Web Token, Swagger, MockApi</p>
                        </li> 
                        <li className="content-list__item">
                           <h2 className="title-2">General</h2>
                           <p>GIT, GitHub, Visual Studio, Figma (Software), Trello, Teamwork, Time Management, 
                                 Team Organization, Scrum Master</p>
                        </li> 
                     </ul>

            </div>
         </main>
      </>
   )
}

export default HomePage;

