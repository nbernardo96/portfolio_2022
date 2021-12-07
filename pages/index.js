import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
            <h4 className={utilStyles.jobTitle}>Junior Software Engineer</h4>
            <h5>Hi there! I'm a Junior Software Engineer with experience creating and maintaining responsive, minimal, user-friendly sites in</h5>
            <h5>order to provide users with a seamless way to interact with their clients, products, orders, and more.</h5>
        </section>
    </Layout>
  )
}
