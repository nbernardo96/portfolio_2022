import Image from 'next/image'
import { name } from '../components/layout'
import styles from './styles/skills.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Skills() {
    const skills = ['Javascript', 'Vue', 'Django', 'MySQL', 'Node.js', 'React', 'Python', 'Figma']

    return (
        <div className={styles.container}>
            <div className={styles.skillsListContainer}>
                <ul>
                    {skills.map((skill) => (
                        <li>
                            <span className={`${styles.arrowIcon} material-icons`}>keyboard_double_arrow_right</span>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.skillsHeaderContainer}>
                <h1 className={styles.skillsTitle}>SKILLS</h1>
                <h3 className={`${styles.skillsDescription} ${utilStyles.lightText}`}>Technologies I've been working with recently</h3>
            </div>
        </div>
    )
}