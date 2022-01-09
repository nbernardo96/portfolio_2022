import Image from 'next/image'
import styles from './styles/projects.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Projects() {
    const projectName = 'Sunpunch';
    return (
        <div className={styles.container}>
            <div className={styles.projectsHeader}>PROJECTS</div>

            <div className={styles.projectsContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/sunpunch-full.png"
                        className={`${styles.projectImage} img-fluid`}
                        height={427}
                        width={800}
                        alt={projectName}
                        priority
                        responsive="true"
                    />
                </div>
                <h1 className={styles.projectTitle}>Sunpunch</h1>
                <p className={styles.projectTechnologies}>React &nbsp; NodeJS &nbsp; Express &nbsp; KnexJS</p>
                <i className={`${styles.projectLinks} fab fa-github`}></i>
                <div className={styles.projectDetailsContainer}>
                    <h1>Sunpunch</h1>
                    <p className={styles.projectDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className={styles.projectTechnologiesInner}>React &nbsp; NodeJS &nbsp; Express &nbsp; KnexJS</p>
                    <i className={`${styles.projectLinksInner} fab fa-github`}></i>
                </div>
            </div>

            <div className={`${styles.projectsContainer} ${utilStyles.mirrored}`}>
                <div className={`${styles.imageContainer} ${utilStyles.mirrored}`}>
                    <Image
                        src="/images/sunpunch-full.png"
                        className={`${styles.projectImage} img-fluid`}
                        height={427}
                        width={800}
                        alt={projectName}
                        priority
                        responsive="true"
                    />
                </div>
                <h1 className={`${styles.projectTitle} ${utilStyles.mirrored}`}>Sunpunch</h1>
                <p className={`${styles.projectTechnologiesFlipped} ${utilStyles.mirrored}`}>React &nbsp; NodeJS &nbsp; Express &nbsp; KnexJS</p>
                <i className={`${styles.projectLinksFlipped} ${utilStyles.mirrored} fab fa-github`}></i>
                <div className={`${styles.projectDetailsContainer} ${utilStyles.mirrored} ${utilStyles.alignTextStart}`}>
                    <h1>Sunpunch</h1>
                    <p className={`${styles.projectDetails}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className={styles.projectTechnologiesInner}>React &nbsp; NodeJS &nbsp; Express &nbsp; KnexJS</p>
                    <i className={`${styles.projectLinksInner} fab fa-github`}></i>
                </div>
            </div>
        </div>
    )
}