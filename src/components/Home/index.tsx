import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faLaravel, faReact, faSass, faVuejs } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <>
        <div className="container">
            <div className="content">
                <h1>
                    Hi There! ✋🏼
                </h1>
                <h2>
                    I'm <span>Prompan Uechanwech</span>
                </h2>
                <h3>
                    <span className='one'>
                        Frontend Developer
                    </span>&nbsp;/&nbsp;
                    <span className='two'>
                        JS Master
                    </span>&nbsp;/&nbsp;
                    <span className='three'>
                        Graphics Designer
                    </span>
                </h3>

                <div className='contact-btn'>
                    <Link to="/contact">
                        CONTACT ME
                    </Link>
                </div>

            </div>
            <div className="graphics">
                <div className="circle">
                    <img src="/person.svg" alt="" />
                </div>
            </div>

            <a href="#overview" className="rolling">
                <div className="ball"></div>
                <div className="frame"></div>
            </a>
        </div>

        <div className='second-container' id='overview'>
            <div className='content'>
                <label>INTRODUCTION</label>
                <h1>
                    Overview.
                </h1>
                <p>
                    I'm a Kasetsart University student studying computer science. Additionally, I have a strong interest in graphic design, games, and web development. I'm a skilled software developer with experience in HTML, CSS, JavaScript and TypeScript, and I have been practicing in frameworks like Vue.js, Nuxt.js, Laravel and React.
                </p>
                <div className='skill-container'>
                    <FontAwesomeIcon icon={faHtml5} />
                    <FontAwesomeIcon icon={faCss3} />
                    <FontAwesomeIcon icon={faJs} />
                    <FontAwesomeIcon icon={faSass} />
                    <FontAwesomeIcon icon={faVuejs} />
                    <FontAwesomeIcon icon={faLaravel} />
                    <FontAwesomeIcon icon={faReact} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home