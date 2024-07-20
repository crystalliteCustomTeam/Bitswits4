"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/TechStack.module.css"
//====== Images
import icon1 from "media/gameServices/frontend/frontend1.png"
import icon2 from "media/gameServices/frontend/frontend2.png"
import icon3 from "media/gameServices/frontend/frontend3.png"
import icon4 from "media/gameServices/frontend/frontend4.png"
import icon5 from "media/gameServices/frontend/frontend5.png"
import icon6 from "media/gameServices/frontend/frontend6.png"
import icon7 from "media/gameServices/frontend/frontend2.png"
import icon8 from "media/gameServices/frontend/frontend8.png"
import icon9 from "media/gameServices/frontend/frontend9.png"
import icon10 from "media/gameServices/frontend/frontend10.png"
//======
import icon11 from "media/gameServices/backend/backend1.png"
import icon12 from "media/gameServices/backend/backend2.png"
import icon13 from "media/gameServices/backend/backend3.png"
import icon14 from "media/gameServices/backend/backend4.png"
import icon15 from "media/gameServices/backend/backend5.png"
import icon16 from "media/gameServices/backend/backend6.png"
import icon17 from "media/gameServices/backend/backend7.png"
import icon18 from "media/gameServices/backend/backend8.png"
import icon19 from "media/gameServices/backend/backend9.png"
import icon20 from "media/gameServices/backend/backend10.png"
//======
import icon21 from "media/gameServices/project/project1.png"
import icon22 from "media/gameServices/project/project2.png"
import icon23 from "media/gameServices/project/project3.png"
import icon24 from "media/gameServices/project/project4.png"
import icon25 from "media/gameServices/project/project5.png"
import icon26 from "media/gameServices/project/project6.png"
import icon27 from "media/gameServices/project/project7.png"
import icon28 from "media/gameServices/project/project8.png"
//======
import icon29 from "media/gameServices/cloud/cloud1.png"
import icon30 from "media/gameServices/cloud/cloud2.png"
import icon31 from "media/gameServices/cloud/cloud3.png"
import icon32 from "media/gameServices/cloud/cloud4.png"
import icon33 from "media/gameServices/cloud/cloud5.png"
import icon34 from "media/gameServices/cloud/cloud6.png"
import icon35 from "media/gameServices/cloud/cloud7.png"
import icon36 from "media/gameServices/cloud/cloud8.png"
import icon37 from "media/gameServices/cloud/cloud9.png"
import icon38 from "media/gameServices/cloud/cloud10.png"
//======
import icon39 from "media/gameServices/framework/framework1.png"
import icon40 from "media/gameServices/framework/framework2.png"
import icon41 from "media/gameServices/framework/framework3.png"
import icon42 from "media/gameServices/framework/framework4.png"
import icon43 from "media/gameServices/framework/framework5.png"
import icon44 from "media/gameServices/framework/framework6.png"
import icon45 from "media/gameServices/framework/framework7.png"
import icon46 from "media/gameServices/framework/framework8.png"
import icon47 from "media/gameServices/framework/framework9.png"
import icon48 from "media/gameServices/framework/framework10.png"
//======
import icon49 from "media/gameServices/database/database1.png"
import icon50 from "media/gameServices/database/database2.png"
import icon51 from "media/gameServices/database/database3.png"
import icon52 from "media/gameServices/database/database4.png"
import icon53 from "media/gameServices/database/database5.png"
import icon54 from "media/gameServices/database/database6.png"
import icon55 from "media/gameServices/database/database7.png"

const tabs = [
    { id: "tab1", label: "Front-End" },
    { id: "tab2", label: "Back-End" },
    { id: "tab3", label: "Project Management Tools" },
    { id: "tab4", label: "Cloud Tools" },
    { id: "tab5", label: "Frameworks" },
    { id: "tab6", label: "Databases" }
];

const tabTechnologies = {
    tab1: [
        { src: icon1, name: 'Unity' },
        { src: icon2, name: 'Unreal Engine' },
        { src: icon3, name: 'HTML5' },
        { src: icon4, name: 'CSS3' },
        { src: icon5, name: 'JavaScript' },
        { src: icon6, name: 'C#' },
        { src: icon7, name: 'Visual Scripting' },
        { src: icon8, name: 'React' },
        { src: icon9, name: 'Angular' },
        { src: icon10, name: 'Phaser' },
    ],
    tab2: [
        { src: icon11, name: 'Node.JS' },
        { src: icon12, name: 'Python' },
        { src: icon13, name: 'Java' },
        { src: icon14, name: 'C++' },
        { src: icon15, name: 'Ruby' },
        { src: icon16, name: 'PHP' },
        { src: icon17, name: 'Go' },
        { src: icon18, name: 'Firebase' },
        { src: icon19, name: 'AWS Lambda' },
        { src: icon20, name: 'Azure' },
    ],
    tab3: [
        { src: icon21, name: 'Jira' },
        { src: icon22, name: 'Trello' },
        { src: icon23, name: 'Asana' },
        { src: icon24, name: 'Monday.com' },
        { src: icon25, name: 'Basecamp' },
        { src: icon26, name: 'Microsoft Project' },
        { src: icon27, name: 'GitLab Issues' },
        { src: icon28, name: 'Redmine' },
    ],
    tab4: [
        { src: icon29, name: 'AWS' },
        { src: icon30, name: 'GCP' },
        { src: icon31, name: 'Microsoft Azure' },
        { src: icon32, name: 'Firebase' },
        { src: icon33, name: 'Heroku' },
        { src: icon34, name: 'DigitalOcean' },
        { src: icon35, name: 'Linode' },
        { src: icon36, name: 'IBM Cloud' },
        { src: icon37, name: 'Alibaba Cloud' },
        { src: icon38, name: 'Oracle Cloud' },
    ],
    tab5: [
        { src: icon39, name: 'Phaser' },
        { src: icon40, name: 'Unity' },
        { src: icon41, name: 'Unreal Engine' },
        { src: icon42, name: 'React.js' },
        { src: icon43, name: 'Angular' },
        { src: icon44, name: 'Django' },
        { src: icon45, name: 'Flask' },
        { src: icon46, name: 'Spring Boot' },
        { src: icon47, name: 'Ruby on Rails' },
        { src: icon48, name: 'Vue.js' },
    ],
    tab6: [
        { src: icon49, name: 'MySQL' },
        { src: icon50, name: 'PostgreSQL' },
        { src: icon51, name: 'MongoDB' },
        { src: icon52, name: 'SQLite' },
        { src: icon53, name: 'Microsoft SQL' },
        { src: icon54, name: 'Firebase' },
        { src: icon55, name: 'DynamoDB' },
    ],
};

const TechStack = () => {

    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className={styles.TechStack}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='manrope font-bold mb-md-3'>Your <span className='newfycolr'>Tech Stack</span> Is Our Burden</h2>
                            <p className='manrope font16 font-medium pb-2 pb-md-4 mb-xl-4'>Our teams hold expertise in a multitude of programming aspects</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabList}>
                            <ul className={styles.tabList}>
                                {tabs.map(tab => (
                                    <li key={tab.id} className={`manrope font-medium ${styles.lists} ${activeTab === tab.id ? styles.active : styles.nonActive}`}
                                        onClick={() => handleTabClick(tab.id)}>
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            <div className={styles.tenchnologies}>
                                {activeTab && tabTechnologies[activeTab].map((tech, index) => (
                                    <div key={index}>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={tech.src} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>{tech.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default TechStack