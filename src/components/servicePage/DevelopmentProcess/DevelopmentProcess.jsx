"use client"
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/DevelopmentProcess.module.css"
// Images
import Tab1 from "media/services/tab1.svg"
import Image from 'next/image'

const DevelopmentProcess = ({
    title="Our <span class='newfycolr'>3D Game Development</span>  Process",
    desc="Our 3D game development process ensures inconceivable success through a detailed workflow. We prioritize intuitive UI/UX, robust scalable solutions, and comprehensive QA tests to deliver quality-driven results from conceptualization to launch.",
    tabData = [
        ["Conceptualization",
            "tab1",
            "Our 3D game development services begin with thorough conceptualization, involving detailed research and analysis. We brainstorm ideas to create an initial game concept, focusing on an intuitive UI/UX. Our 3D game developers work closely with clients to polish the concept, ensuring it aligns with their vision and goals, setting the foundation for a successful project."],
        ["Design Documentation",
            "tab2",
            "We create a comprehensive Game Design Document (GDD) during this phase. This includes storyboarding, concept art, wireframes, and UX flow. Our 3D game developers detail the game’s mechanics, basic core loop, and cut scenes, ensuring a clear and structured plan that guides the entire development process."],
        ["3D Game Design",
            "tab3",
            "Our 3D game design phase brings concepts to life with high-quality visuals and engaging gameplay mechanics. We focus on creating immersive environments, detailed characters, and dynamic animations. Using advanced tools, our 3D game developers ensure each element complements the game's overall aesthetic and enhances the player experience."],
        ["3D Game Development",
            "tab4",
            "During development, we build the game using robust and scalable solutions. As one of the best 3D game development companies, our technical teams integrate art assets, codes, and modules within the chosen game engines. We prioritize structured code and optimization, ensuring the game runs smoothly across all platforms. This phase transforms the design into a playable reality."],
        ["System Integrity Check",
            "tab5",
            "A crucial technical stage, the system integrity check involves a thorough review of all codes, modules, and systems. Our 3D game developers conduct extensive QA tests to ensure robust performance and eliminate bugs. This process guarantees that the game’s infrastructure is solid and ready for further testing."],
        ["Testing",
            "tab6",
            "Our standard game testing phase includes multiple rounds of quality assurance to identify and fix any issues. We conduct gameplay tests, performance analysis, and user feedback sessions. This comprehensive testing ensures the game is polished, user-friendly, and free from technical glitches before its official launch."],
        ["Launch Preparation",
            "tab7",
            "In the final phase, we focus on launch preparation, optimizing the game for release. Our experts handle post-launch strategies, live-ops support, and retention rate analysis. We ensure a seamless transition from development to live gameplay, providing continuous support to maximize the game's success in the market."],
    ]
}) => {
    // Tabs
    const [activeTab1, setActiveTab1] = useState("tab1");
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <section className={styles.developmentSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <h2 className='font-bold manrope text-white mb-3' dangerouslySetInnerHTML={{__html : title}} />
                            <p className='font16 font-medium text-white manrope mb-5' dangerouslySetInnerHTML={{__html : desc}}/>
                        </div>
                        <div className="tabList">
                            <ul className={styles.tabList}>
                                {
                                    tabData.map(([list,listId],i)=>(
                                <li key={i} className={`manrope font-medium ${styles.lists} ${activeTab1 == listId ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1(listId)}>
                                    {list}
                                </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                        {tabData.map(([list, listId ,desc], i) => (
                            activeTab1 == listId && (
                                <Row key={i} className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>{list}</h3>
                                            <p className='manrope text-white font16 font-medium'>{desc}</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                                )
                            ))}
                            {/* {activeTab1 == "tab2" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Design Documentation</h3>
                                            <p className='manrope text-white font16 font-medium'></p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab3" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>3D Game Design</h3>
                                            <p className='manrope text-white font16 font-medium'>Our 3D game design phase brings concepts to life with high-quality visuals and engaging gameplay mechanics. We focus on creating immersive environments, detailed characters, and dynamic animations. Using advanced tools, our 3D game developers ensure each element complements the game's overall aesthetic and enhances the player experience.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab4" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>3D Game Development</h3>
                                            <p className='manrope text-white font16 font-medium'>During development, we build the game using robust and scalable solutions. As one of the best 3D game development companies, our technical teams integrate art assets, codes, and modules within the chosen game engines. We prioritize structured code and optimization, ensuring the game runs smoothly across all platforms. This phase transforms the design into a playable reality.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab5" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>System Integrity Check</h3>
                                            <p className='manrope text-white font16 font-medium'>A crucial technical stage, the system integrity check involves a thorough review of all codes, modules, and systems. Our 3D game developers conduct extensive QA tests to ensure robust performance and eliminate bugs. This process guarantees that the game’s infrastructure is solid and ready for further testing.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab6" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Testing</h3>
                                            <p className='manrope text-white font16 font-medium'>Our standard game testing phase includes multiple rounds of quality assurance to identify and fix any issues. We conduct gameplay tests, performance analysis, and user feedback sessions. This comprehensive testing ensures the game is polished, user-friendly, and free from technical glitches before its official launch.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )}
                            {activeTab1 == "tab7" && (
                                <Row className='align-items-center'>
                                    <Col lg={7}>
                                        <div className="tabsContent">
                                            <h3 className='manrope text-white font-bold mb-3'>Launch Preparation</h3>
                                            <p className='manrope text-white font16 font-medium'>In the final phase, we focus on launch preparation, optimizing the game for release. Our experts handle post-launch strategies, live-ops support, and retention rate analysis. We ensure a seamless transition from development to live gameplay, providing continuous support to maximize the game's success in the market.</p>
                                            <div className={styles.tabBtn}>
                                                <a href="#href">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={5}>
                                        <div className="tabImage d-md-block d-none">
                                            <Image src={Tab1} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            )} */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default DevelopmentProcess
