import styles from './styles/navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from './styles/layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export default function Navbar({ children }) {
    const router = useRouter();
    console.log('ROUTER: ', router);
    return (
        <div className={styles.container}>
            <nav className={`${layoutStyles.navbarContainer} col navbar navbar-expand-lg navbar-dark`}>
                <div class="container-fluid">
                    <a class="navbar-brand" id="navbarAltBrand" href="#">NICOLE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a className={router.pathname == "/" ? "nav-link active currentPage" : "nav-link"} aria-current="page" href="/">ABOUT</a>
                        <a class="nav-link" href="#">EXPERIENCE</a>
                        <a class="nav-link" href="#">PROJECTS</a>
                        <a class="nav-link" href="#">RESUME</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}