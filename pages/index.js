import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import Skills from '../components/skills'

export default function Home() {
  return (
    <Layout home>
        <Head>
            <title>{siteTitle}</title>
        </Head>
        <div>
            <div class="row">
                <div class="col">
                    <Intro />
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <Skills />
                </div>
            </div>
        </div>
    </Layout>
  )
}
