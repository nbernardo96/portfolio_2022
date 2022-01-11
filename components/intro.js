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
                Hi! I'm Nicole Bernardo. I’m a Software Engineer with experience creating and maintaining responsive, 
                minimal, user-friendly sites in order to provide users with a seamless way to interact with their clients, 
                products, orders, and more. When I'm not coding, you can find me playing the latest games from Nintendo, 
                doodling on my iPad, going on food adventures, or catching up on my endless queue of shows/movies! 
                </p>
            </div>
        </div>
    )
}