import download from "../../img/icons/download CV.svg"


function Header () {
   return (
      <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hello, my name is <em>Olena</em></strong><br/>
                  I'm a Full Stack developer
              </h1>
              <div className="header__text">
                  <p>My projects are creative magic that creates the future.</p>
              </div>
              <a href="https://drive.google.com/file/d/1YXInH9sqUVy9gQM-ZI-TEgSaVB03BZFg/view?usp=sharing" className="btn">
                  <img src={download} alt="Link" />
                  Download CV 
              </a>
          </div>
      </header>
   )
}

export default Header;