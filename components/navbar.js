import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/navbar.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Navbar({ children }) {
    return (
        <div className={styles.container}>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse navbarContents" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                        <a class="nav-link" href="/projects">Projecets</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}