import styles from './styles/work.module.css'
import utilStyles from '../styles/utils.module.css'
import { useState } from 'react'

export default function Work() {
    const jobExperience = [
        {   
            company: 'Cloud Peak Law',
            title: 'Junior Software Developer',
            date: 'May 2021 - December 2021',
            description: [
                'Enhance company site using Python and Django by working on tasks assigned through Jira',
                'Work with tools such as Amazon Workspaces, Pycharm, Github and Bitbucket to maintain and add features to codebase',
                'Actively troubleshoot bugs and add features to company site such as adding an edit custom email modal allowing users to edit their custom email before sending over to lead',
                'Implementing responsive UI designs for order form page with Vue.js, HTML, JS and CSS',
                'Research and create documentation for various automated multi browser testing platforms for team to implement on website'
            ]
        },
        {
            company: 'Sunshine Life & Health Advisors',
            title: 'Software Engineer Intern',
            date: 'September 2020 - December 2020',
            description: [
                'Designed and created a web application that allows users to place orders for business cards and flyers using React, Bootstrap, Python and Django', 
                'Designed a clock in site that allows employees to clock in when working from home. Used React and Bootstrap to create the frontend',
                'Worked with open sourced code such as Tiledesk and Chatwoot (chat boxes) to implement on company website'
            ]

        }
    ]

    const [jobTitle, setJobTitle] = useState(jobExperience[0].title);
    const [jobDate, setJobDate] = useState(jobExperience[0].date);
    const [jobDesc, setJobDesc] = useState(jobExperience[0].description);

    function displayWorkDetails(job) {
        let temp = [];
        setJobTitle(job.title);
        setJobDate(job.date);

        for(const desc of job.description) {
            temp.push(desc)
        }

        setJobDesc(temp);
    }

    return (
        <div className={styles.container}>
            <div className={styles.workHeaderContainer}>
                <h1>WORK</h1>
            </div>
            <div className={styles.workDetailsContainer}>
                <div className={`${utilStyles.noBulletPoints} ${styles.workTitlesContainer}`}>
                    {jobExperience.map((job) => (
                        <button key={job.company} onClick={() => displayWorkDetails(job)}>{job.company}</button>
                    ))}
                </div>
                <div className={styles.workDescriptionContainer}>
                    <h1>{jobTitle}</h1>
                    <h4 className={utilStyles.lightText}>{jobDate}</h4>
                    {jobDesc.map((desc) => (
                        <div key={desc} className={styles.jobExperienceContainer}>
                        <span className={`${styles.arrowIcon} material-icons`}>keyboard_double_arrow_right</span>
                        <p>                            
                            {desc}
                        </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}