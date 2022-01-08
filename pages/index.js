import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import Skills from '../components/skills'
import Work from '../components/work'

export default function Home() {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div>
            <div className={`row g-0`}>
                <div className={`col`}>
                    <Intro />
                </div>
            </div>
            <div className={`row g-0`}>
                <div className={`col`}>
                    <Skills />
                </div>
            </div>
            <div className={`row g-0`}>
                <div className={`col`}>
                    <Work />
                </div>
            </div>
        </div>
    </Layout>
  )
}
