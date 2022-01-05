import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Image from 'next/image'

import Cards from '../components/cards'

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <Cards />
        </Layout>
    )
  }