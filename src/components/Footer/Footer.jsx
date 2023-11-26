import instagram from "../../img/icons/instagram.svg"
import github from "../../img/icons/gitHub.svg"
import linkedIn from "../../img/icons/linkedIn.svg"
import telegram from "../../img/icons/telegram.svg"

function Footer () {
   return(
      <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="contacts">
                      <li>🌍 Ukraine,  Lviv</li>
                      <li><a href="tel:+380683489383">📞 +38 (068) 348-93-83</a></li>
                      <li><a href="mailto:girnyak.1olena@gmail.com">📬 girnyak.1olena@gmail.com</a></li>
                  </ul>
                  <ul className="social">
                      <li className="social__item"><a href="https://www.instagram.com/t_m_olena_/" target="_blank"  rel="noreferrer"><img src={instagram} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://github.com/GIT13Olena" target="_blank"  rel="noreferrer"><img src={github} alt="Link"/></a></li>
                      <li className="social__item"><a href="http://www.linkedin.com/in/olenagirnyak" target="_blank"  rel="noreferrer"><img src={linkedIn} alt="Link"/></a></li>
                      <li className="social__item"><a href="https://t.me/Black_13_soul" target="_blank"  rel="noreferrer"><img src={telegram} alt="Link"/></a></li>
                  </ul>
              </div>
          </div>
      </footer>
   )
}

export default Footer