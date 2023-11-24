import "../styles/main.css";
import NavPage from "./NavPage/NavPage"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

function App() {
   return (
     <div className="App">

      <NavPage/>

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

      <Footer/>

     </div>
   );
 }
 
 export default App;