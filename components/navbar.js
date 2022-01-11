import styles from './styles/navbar.module.css'
import layoutStyles from './styles/layout.module.css'

export default function Navbar({ scrollToSection }) {
    return (
        <div className={styles.container}>
            <nav className={`${layoutStyles.navbarContainer} col navbar navbar-expand-lg navbar-dark`}>
                <div className={`container-fluid`}>
                    <h1 className={`navbar-brand`} id="navbarAltBrand">NICOLE</h1>
                    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className={`navbar-toggler-icon`}></span>
                    </button>
                    <div className={`collapse navbar-collapse`} id="navbarNavAltMarkup" data-bs-target=".navbar-collapse.show">
                    <div className={`navbar-nav`}>
                        <button className={`${styles.navbarButton} nav-link`} onClick={() => scrollToSection('experienceRef')}>EXPERIENCE</button>
                        <button className={`${styles.navbarButton} nav-link`} onClick={() => scrollToSection('projectsRef')}>PROJECTS</button>
                        <a className={`${styles.navbarButton} nav-link`} href='/files/resume.pdf' target='_blank' rel='noopener noreferrer'>RESUME</a>
                        <button className={`${styles.navbarButton} nav-link`} onClick={() => scrollToSection('connectRef')}>CONNECT</button>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}