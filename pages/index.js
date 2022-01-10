import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import Skills from '../components/skills'
import Work from '../components/work'
import Projects from '../components/projects'
import Connect from '../components/connect'

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
            <div className={`row g-0`}>
                <div className={`col`}>
                    <Projects />
                </div>
            </div>
            <div className={`row g-0`}>
                <div className={`col`}>
                    <Connect />
                </div>
            </div>
        </div>
    </Layout>
  )
}
