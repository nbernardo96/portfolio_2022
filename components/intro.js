import Image from 'next/image'
import { name } from '../components/layout'
import styles from './styles/intro.module.css'
import utilStyles from '../styles/utils.module.css'


export default function Intro() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                src="/images/profile.jpg"
                className={`${utilStyles.borderCircle} ${styles.portfolioImage} img-fluid`}
                height={400}
                width={400}
                alt={name}
                priority
                responsive="true"
                />
            </div>
            <div className={styles.textContainer}>
                <p className={styles.introText}>
                Hi, my name is Nicole Bernardo. I’m a Software Engineer with a passion 
                for building and maintaining sites both frontend and backend, and a knack 
                for creating things outside the world of software engineering.
                </p>
            </div>
        </div>
    )
}