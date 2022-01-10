import styles from './styles/connect.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Skills() {
    return (
        <div className={styles.container}>
            <h1 className={styles.connectTitle}>Let's Connect!</h1>
            {/* <i className={`${styles.emailIcon} far fa-envelope`}></i> */}
            <h3 className={`${styles.email}`}>nicolebernardo96@gmail.com</h3>
            <a className={`${styles.linkedInButton} ${styles.buttonHover} ${utilStyles.transitionButton} fab fa-linkedin`} href="https://www.linkedin.com/in/nicole-bernardo/" target="_blank"></a>
            <a className={`${styles.githubButton} ${styles.buttonHover} ${utilStyles.transitionButton} fab fa-github`} href="https://github.com/nbernardo96" target="_blank"></a>
            <a className={`${styles.igButton} ${styles.buttonHover} ${utilStyles.transitionButton} fab fa-instagram`} href="https://www.instagram.com/nicole.aestheticreations/" target="_blank"></a>
        </div>
    )
}