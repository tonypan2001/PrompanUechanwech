import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='madeby'>
                <h1>Designed and Develope by Prompan Uechanwech In 2024</h1>
            </div>
            <div className='socials-container'>
                <h1>Find Me On Socials</h1>
                <div className='icons'>
                    <NavLink target='_blank' to="https://twitter.com/PantechPrompan">
                        <FontAwesomeIcon icon={faTwitterSquare} className='twitter'/>
                    </NavLink>
                    <NavLink target='_blank' to="https://www.facebook.com/luvtonypan">
                        <FontAwesomeIcon icon={faFacebookSquare} className='facebook'/>
                    </NavLink>
                    <NavLink target='_blank' to="https://www.linkedin.com/in/prompan-uechanwech-78b44b2b0">
                        <FontAwesomeIcon icon={faLinkedin} className='linkedin'/>
                    </NavLink>
                    <NavLink target='_blank' to="https://github.com/tonypan2001">
                        <FontAwesomeIcon icon={faGithubSquare} className='github'/>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer