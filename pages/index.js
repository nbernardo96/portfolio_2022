import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../components/styles/layout.module.css'

export default function Home() {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div class="container-fluid">
            <div class="row">
                <div className={`${layoutStyles.sectionContainer} ${layoutStyles.introContainer} col`}>
                    <Intro />
                </div>
            </div>
            <div class="row">
                <div className={`${layoutStyles.sectionContainer} ${layoutStyles.skillsContainer} col`}>
                    SKILLS
                </div>
            </div>
            <div class="row">
                <div className={`${layoutStyles.sectionContainer} ${layoutStyles.workContainer} col`}>
                    WORK
                </div>
            </div>
            <div class="row">
                <div className={`${layoutStyles.sectionContainer} ${layoutStyles.projectContainer} col`}>
                    PROJECTS
                </div>
            </div>
            <div class="row">
                <div className={`${layoutStyles.sectionContainer} ${layoutStyles.connectContainer} col`}>
                    LET'S STAY CONNECTED
                </div>
            </div>
        </div>
    </Layout>
  )
}
