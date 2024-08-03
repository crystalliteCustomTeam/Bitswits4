"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/YourTech.module.css"
// Images 
import TechOne from "media/services/cms1.svg"
import TechTwo from "media/services/cms2.svg"
import TechThree from "media/services/cms3.svg"
import TechFour from "media/services/cms4.svg"
import TechFive from "media/services/cms5.svg"
import TechSix from "media/services/cms6.svg"
import TechSeven from "media/services/cms7.svg"
import TechEight from "media/services/cms8.svg"
import TechNine from "media/services/cms9.svg"
import TechTen from "media/services/cms10.svg"
import TechEleven from "media/services/frontend-1.svg"
import TechTwelve from "media/services/frontend-2.svg"
import TechThirteen from "media/services/frontend-3.svg"
import TechFourteen from "media/services/frontend-4.svg"
import TechFifteen from "media/services/frontend-5.svg"
import TechSixteen from "media/services/frontend-6.svg"
import TechSeventeen from "media/services/backend-1.svg"
import TechEighteen from "media/services/backend-2.svg"
import TechNineteen from "media/services/backend-3.svg"
import TechTwenty from "media/services/backend-4.svg"
import TechTwentyOne from "media/services/backend-5.svg"
import TechTwentyTwo from "media/services/backend-6.svg"
import TechTwentyThree from "media/services/backend-7.svg"
import TechTwentyFour from "media/services/backend-8.svg"
import TechTwentyFive from "media/services/backend-9.svg"
import TechTwentySix from "media/services/backend-10.svg"
import TechTwentySeven from "media/services/mobile-1.svg"
import TechTwentyEight from "media/services/mobile-2.svg"
import TechTwentyNine from "media/services/mobile-3.svg"
import TechThirty from "media/services/mobile-4.svg"
import TechThirtyOne from "media/services/mobile-5.svg"
import TechThirtyTwo from "media/services/mobile-6.svg"
import TechThirtyThree from "media/services/mobile-7.svg"
import TechThirtyFour from "media/services/mobile-8.svg"
import TechThirtyFive from "media/services/data-base-1.svg"
import TechThirtySix from "media/services/data-base-2.svg"
import TechThirtySeven from "media/services/data-base-3.svg"
import TechThirtyEight from "media/services/data-base-4.svg"
import TechThirtyNine from "media/services/data-base-5.svg"
import TechFourty from "media/services/data-base-6.svg"
import TechFourtyOne from "media/services/cloud-1.svg"
import TechFourtyTwo from "media/services/cloud-2.svg"
import TechFourtyThree from "media/services/cloud-3.svg"
import TechFourtyFour from "media/services/tools-1.svg"
import TechFourtyFive from "media/services/tools-2.svg"
import TechFourtySix from "media/services/tools-3.svg"
import TechFourtySeven from "media/services/tools-4.svg"
import TechFourtyEight from "media/services/tools-5.svg"
import TechFourtyNine from "media/services/tools-6.svg"
import TechFifty from "media/services/tools-7.svg"
import TechFiftyOne from "media/services/tools-8.svg"
import TechFiftyTwo from "media/services/tools-9.svg"
import TechFiftyThree from "media/services/tools-10.svg"
import TechFiftyFour from "media/services/tools-11.svg"
import TechFiftyFive from "media/services/tools-12.svg"
import TechFiftySix from "media/services/tools-13.svg"
import TechFiftySeven from "media/services/pms-1.svg"
import TechFiftyEight from "media/services/pms-2.svg"
import TechFiftyNine from "media/services/pms-3.svg"
import TechSixty from "media/services/pms-4.svg"
import TechSixtyOne from "media/services/pms-5.svg"
import TechSixtyTwo from "media/services/pms-6.svg"
import TechSixtyThree from "media/services/pms-7.svg"
import TechSixtyFour from "media/services/pms-8.svg"

const YourTech = ({
    title = "Our <span class='newfycolr'>3D Game Development</span> Technology Stack",
    desc = "We select for you the right database, language, and framework for an ideal gaming experience.",
    tabsData = [
        ["Game Engines",
            "tab1",
            [
                [TechOne, "Unity"],
                [TechTwo, "Unreal Engine"],
                [TechThree, "Godot"],
                [TechFour, "CryEngine"]
            ]],
        ["Programming Languages",
            "tab2",
            [
                [TechEleven, "C++"],
                [TechTwelve, "C#"],
                [TechThirteen, "Python"],
                [TechFourteen, "JavaScript"]
            ]],
        ["Graphics & Design Tools",
            "tab3",
            [
                [TechSeventeen, "Autodesk Maya"],
                [TechEighteen, "Blender"],
                [TechNineteen, "Adobe Photoshop"],
                [TechTwenty, "Substance Painter"]
            ]],
        ["Databases",
            "tab4",
            [
                [TechThirtyFive, "MySQL"],
                [TechFourty, "PostgreSQL"],
                [TechThirtyEight, "SQLite"],
                [TechThirtySeven, "MongoDB"]
            ]],
        ["Frameworks & Libraries",
            "tab5",
            [
                [TechThirtyFive, "Three.js"],
                [TechThirtySix, "Babylon.js"],
                [TechThirtySeven, "OpenGL"],
                [TechThirtyEight, "Vulkan"]
            ]],
        ["Testing & QA Tools",
            "tab6",
            [
                [TechFourtyOne, "Jenkins"],
                [TechFourtyTwo, "Selenium"],
                [TechFourtyThree, "JIRA"],
                [TechFourtyThree, "TestRail"]
            ]],
    ]
}) => {
    // Tabs
    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <section className={styles.YourTechSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='manrope font-bold mb-md-3' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='manrope font16 font-medium pb-2 pb-md-4 mb-xl-4'>{desc}</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabList}>
                            <ul className={styles.tabList}>
                                {tabsData.map(([tabName, tabId, items]) => (
                                    <li
                                        key={tabId}
                                        className={`manrope font-medium ${styles.lists} ${activeTab1 === tabId ? styles.active : styles.nonActive}`}
                                        onClick={() => fun1(tabId)}>
                                        {tabName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            {tabsData.map(([tabName, tabId, items]) => (
                                activeTab1 === tabId && (
                                    <div key={tabId} className={styles.tenchnologies}>
                                        {items.map(([img, title], i) => (
                                            <div key={i} className={styles.tech}>
                                                <div className={styles.techImage}>
                                                    <Image src={img} alt={title} className='img-fluid' />
                                                </div>
                                                <div className={styles.techTxt}>
                                                    <p className='manrope'>{title}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default YourTech