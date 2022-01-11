import Image from 'next/image'
import styles from './styles/projects.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Projects() {
    const projects = [
        {
            title: 'Portfolio',
            technologies: 'NextJS \u00A0\u00A0 NodeJS \u00A0\u00A0 Bootstrap \u00A0\u00A0 CSS',
            image: '/images/portfolio.png',
            details: 'My most recent personal project - an updated version of my portfolio. Designed using Figma and implemented using NextJS.',
            github: 'https://github.com/nbernardo96/portfolio',
            figma: 'https://www.figma.com/file/uKbXYG74DFR3kfaExJAvhe/Portfolio-Design?node-id=0%3A1'
        },
        {
            title: 'Sunpunch',
            technologies: 'React \u00A0\u00A0 NodeJS \u00A0\u00A0 Express \u00A0\u00A0 KnexJS',
            image: '/images/sunpunch-full.png',
            details: 'A clock in site built for Sunshine Life & Health Advisors that allows employees to punch in when working from home. Designed and implemented frontend for the login, signup, and dashboard pages.',
            github: 'https://github.com/nbernardo96/sunpunch',
            figma: ''
        },
        {
            title: 'Tony\'s Queue',
            technologies: 'Python \u00A0\u00A0 Django (Backend) \u00A0\u00A0 React (Frontend)',
            image: '/images/tonys-queue-full.png',
            details: 'A site dedicated for clients who want to place an order for a customized Flyer or Business Card. Designed and implemented home, business card form and flyer form pages. Also implemented database tables and connected it to the frontend.',
            github: 'https://github.com/nbernardo96/queuesite',
            figma: ''
        },
        {
            title: 'NoteKeeper',
            technologies: 'Xcode 11 \u00A0\u00A0 Figma',
            image: '/images/notekeeper.png',
            details: 'An iOS app designed to help students keep track of their notes from class lectures by allowing them to store, type, or share with each other. Designed using Figma and implemented with Xcode11.',
            github: 'https://github.com/nbernardo96/notekeeper-ios-app',
            figma: ''
        },
        {
            title: 'Gator Media',
            technologies: 'MySQL 8.0 \u00A0\u00A0 Node 13.8 \u00A0\u00A0 Javascript \u00A0\u00A0 HTML \u00A0\u00A0 CSS',
            image: '/images/gator-media-full.png',
            details: 'An e-commerce platform where San Francisco State students and faculty can purchase/sell digital media for extra income. Designed and implemented frontend of the main and content view pages along with a team of 6.',
            github: 'https://github.com/nbernardo96/gator-media',
            figma: ''
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.projectsHeader}>PROJECTS</div>
                {projects.map((project, idx) => (
                    idx % 2 == 0 ?
                        <div key={project.title} className={styles.projectsContainer}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={project.image}
                                    className={`${styles.projectImage} img-fluid`}
                                    height={427}
                                    width={800}
                                    alt={project.title}
                                    priority
                                    responsive="true"
                                />
                            </div>
                            <h1 className={styles.projectTitle}>{project.title}</h1>
                            <p className={styles.projectTechnologies}>{project.technologies}</p>
                            <div className={`${styles.projectLinks}`}>
                                {project.figma != '' ? 
                                    ( <a aria-hidden aria-hidden className={`fab fa-figma`} href={project.figma} target="_blank"></a> ) : (<div></div>)
                                }
                                <a aria-hidden className={`fab fa-github`} href={project.github} target="_blank"></a>
                            </div>
                            <div className={styles.projectDetailsContainer}>
                                <h1>{project.title}</h1>
                                <p className={styles.projectDetails}>{project.details}</p>
                                <p className={styles.projectTechnologiesInner}>{project.technologies}</p>
                                <div className={`${styles.projectLinksInner}`}>
                                    {project.figma != '' ? 
                                        ( <a aria-hidden className={`fab fa-figma`} href={project.figma} target="_blank"></a> ) : (<div></div>)
                                    }
                                    <a aria-hidden className={`fab fa-github`} href={project.github} target="_blank"></a>
                                </div>
                            </div>
                        </div>
                    :
                        <div key={idx} className={`${styles.projectsContainer} ${utilStyles.mirrored} ${utilStyles.marginBottom}`}>
                            <div className={`${styles.imageContainerFlipped} ${utilStyles.mirrored}`}>
                                <Image
                                    src={project.image}
                                    className={`${styles.projectImage} img-fluid`}
                                    height={427}
                                    width={800}
                                    alt={project.title}
                                    priority
                                    responsive="true"
                                />
                            </div>
                            <h1 className={`${styles.projectTitleFlipped} ${utilStyles.mirrored}`}>{project.title}</h1>
                            <p className={`${styles.projectTechnologiesFlipped} ${utilStyles.mirrored}`}>{project.technologies}</p>
                            <div className={`${styles.projectLinksFlipped}`}>
                                {project.figma != '' ? 
                                    ( <a aria-hidden className={`fab fa-figma`} href={project.figma} target="_blank"></a> ) : (<div></div>)
                                }
                                <a aria-hidden className={`fab fa-github`} href={project.github} target="_blank"></a>
                            </div>
                            <div className={`${styles.projectDetailsContainer} ${utilStyles.mirrored}`}>
                                <h1>{project.title}</h1>
                                <p className={`${styles.projectDetails}`}>{project.details}</p>
                                <p className={styles.projectTechnologiesInner}>{project.technologies}</p>
                                <div className={`${styles.projectLinksInner}`}>
                                    {project.figma != '' ? 
                                        ( <a aria-hidden className={`fab fa-figma`} href={project.figma} target="_blank"></a> ) : (<div></div>)
                                    }
                                    <a aria-hidden className={`fab fa-github`} href={project.github} target="_blank"></a>
                                </div>
                            </div>
                        </div>
                ))}
        </div>
    )
}