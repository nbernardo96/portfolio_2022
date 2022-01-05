import Head from 'next/head'
import Image from 'next/image'
import styles from './styles/cards.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export default function Cards({ children }) {
    const router = useRouter();
    return (
        <div class="container">
            <div className={styles.cardRow}>
                <h1 className={`${styles.projectHeader} col`}>Recent Work</h1>
            </div>
            <div className={styles.cardRow}>
                <div class="col">
                    <div className={`${styles.projectCard} card`}>
                        <Image
                            src="/images/sunpunch-full.png"
                            // just put the original width and height of the original image, in order to provide the right aspect ratio
                            // Next.js will automatically reduce the size if the rendered image needs to be smaller.
                            width={1680}
                            height={896}
                            layout="responsive"
                            className={`card-img-top`}
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sunpunch</h5>
                            <p className="card-text">A clock in site built to help keep track of punch in times from employees working from home.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className={`${styles.projectCard} card`}>
                        <Image 
                            src="/images/sunpunch-full.png"
                            // just put the original width and height of the original image, in order to provide the right aspect ratio
                            // Next.js will automatically reduce the size if the rendered image needs to be smaller.
                            width={1680}
                            height={896}
                            layout="responsive"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Sunpunch</h5>
                            <p className="card-text">A clock in site built to help keep track of punch in times from employees working from home.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardRow}>
                <div class="col">
                    <div className={`${styles.projectCard} card`}>
                        <Image 
                            src="/images/tonys-queue-full.png"
                            // just put the original width and height of the original image, in order to provide the right aspect ratio
                            // Next.js will automatically reduce the size if the rendered image needs to be smaller.
                            width={1680}
                            height={896}
                            layout="responsive"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Tony's Queue</h5>
                            <p className="card-text">A site dedicated for clients who want to place an order for a customized Flyer or Business Card.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div className={`${styles.projectCard} card`}>
                        <Image 
                            src="/images/tonys-queue-full.png"
                            // just put the original width and height of the original image, in order to provide the right aspect ratio
                            // Next.js will automatically reduce the size if the rendered image needs to be smaller.
                            width={1680}
                            height={896}
                            layout="responsive"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Tony's Queue</h5>
                            <p className="card-text">A site dedicated for clients who want to place an order for a customized Flyer or Business Card.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}