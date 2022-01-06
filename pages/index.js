import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'

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
                    SKILLS
                </div>
            </div>
        </div>
    </Layout>
  )
}
