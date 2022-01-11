import Head from 'next/head'
import React, { useRef } from 'react'
import Layout, { siteTitle } from '../components/layout'
import Intro from '../components/intro'
import Skills from '../components/skills'
import Work from '../components/work'
import Projects from '../components/projects'
import Connect from '../components/connect'
import Navbar from '../components/navbar'

export default function Home() {
    const projectsRef = useRef();
    const experienceRef = useRef();
    const connectRef = useRef();
    
    const scrollToSection = (section) => {
        if (section === 'projectsRef') {
            projectsRef.current.scrollIntoView({behavior: 'smooth'})
        } else if (section === 'experienceRef') {
            experienceRef.current.scrollIntoView({behavior: 'smooth'})
        } else if (section === 'connectRef') {
            connectRef.current.scrollIntoView({behavior: 'smooth'})
        }
        
    }

    return (
        <Layout>
            <Navbar scrollToSection={scrollToSection}/>
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
                <div className={`row g-0`} ref={experienceRef}>
                    <div className={`col`}>
                        <Work />
                    </div>
                </div>
                <div className={`row g-0`}>
                    <div className={`col`} ref={projectsRef}>
                        <Projects/>
                    </div>
                </div>
                <div className={`row g-0`}>
                    <div className={`col`} ref={connectRef}>
                        <Connect />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
