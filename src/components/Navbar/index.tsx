import { faContactBook, faFile, faFolderOpen, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './index.scss'
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll= () => {
            const isScrolled= window.scrollY > 0
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
            <div className="link">
                <NavLink to="/">
                    <FontAwesomeIcon icon={faHome}/>
                </NavLink>
                <NavLink to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser}/>
                </NavLink>
                <NavLink to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faContactBook}/>
                </NavLink>
                <NavLink to="/resume" className="resume-link">
                    <FontAwesomeIcon icon={faFile}/>
                </NavLink>
                <NavLink to="/projects" className="projects-link">
                    <FontAwesomeIcon icon={faFolderOpen}/>
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar