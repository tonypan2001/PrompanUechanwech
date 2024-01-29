import { faBars, faContactBook, faFile, faFolderOpen, faHome, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [toggle, setToggle] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <Link to="/" onClick={() => window.scroll(0,0)}>
                <img src="/logo.svg" alt="Logo" />
                <h1>
                    Rompan. <br /> | <span>The Frontend Master</span>
                </h1>
            </Link>
            <div className="burger-menu" onClick={() => setToggle(!toggle)}>
                <div className={`burger ${toggle ? 'open' : 'close'}`}>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
                <div className={`open-burger ${toggle ? 'close' : 'open'}`}>
                    <FontAwesomeIcon icon={faX}/>
                </div>
            </div>
            <div className={`link ${toggle ? 'slideout' : 'slidein'}`}>
                <NavLink to="/" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                {/* <NavLink to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink> */}
                <NavLink to="/contact" className="contact-link" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faContactBook}/>
                </NavLink>
                {/* https://shorturl.at/esNQ5 */}
                <NavLink to="/resume" className="resume-link" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faFile}/>
                </NavLink>
                <NavLink to="/projects" className="projects-link" onClick={() => setToggle(!toggle)}>
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar