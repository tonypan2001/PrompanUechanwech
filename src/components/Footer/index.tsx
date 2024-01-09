import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { faFacebookSquare, faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div>
                <h1>Designed and Develope by Prompan Uechanwech In 2024</h1>
            </div>
            <div>
                <h1>Find Me On Socials</h1>
                <div className='icons'>
                    <NavLink target='_blank' to="">
                        <FontAwesomeIcon icon={faTwitterSquare} className='twitter'/>
                    </NavLink>
                    <NavLink target='_blank' to="">
                        <FontAwesomeIcon icon={faFacebookSquare} className='facebook'/>
                    </NavLink>
                    <NavLink target='_blank' to="">
                        <FontAwesomeIcon icon={faLinkedin} className='linkedin'/>
                    </NavLink>
                    <NavLink target='_blank' to="">
                        <FontAwesomeIcon icon={faGithubSquare} className='github'/>
                    </NavLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer