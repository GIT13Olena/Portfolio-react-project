import download from "../../img/icons/download CV.svg"
import resume from "../../img/ResumePdf/Resume Hirniak_Olena_Frontend_Developer.pdf"

function Header () {
   return (
      <header className="header">
          <div className="header__wrapper">
              <h1 className="header__title">
                  <strong>Hello, my name is <em>Olena</em></strong><br/>
                  I'm a Frontend developer
              </h1>
              <div className="header__text">
                  <p>My projects are creative magic that creates the future.</p>
              </div>
              <a href={resume} download="Resume Hirniak_Olena_Frontend_Developer" className="btn">
                  <img src={download} alt="Link" />
                  Download CV 
              </a>
          </div>
      </header>
   )
}

export default Header;