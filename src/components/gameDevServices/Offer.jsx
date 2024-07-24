"use client"
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
//====== Css
import styles from "@/styles/gameDevServices/Offer.module.css"


const Offer = () => {
    /* ============================= */
    const menus = [
        { label: "iOS App Development Consultation", index: 0 },
        { label: "iOS UI/UX Design", index: 1 },
        { label: "Custom iOS Application Development", index: 2 },
        { label: "iOS Software Testing", index: 3 },
        { label: "Multi-platform Deployment", index: 4 },
    ];
    /* ============================= */
    const sections = [
        [
            {
                num: "",
                title: (<> <span className='newfycolr'>Ios App Development</span> Consultation </>),
                content: `<p class='font-medium manrope'> Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.</p>`
            },
        ],
        [
            {
                num: "",
                title: (<> iOS <span className='newfycolr'>UI/UX Design</span> </>),
                content: `<p class='font-medium'>Throughout the development process, creating detailed documentation is crucial for finalizing the Scope of Work, SDLC, and BRD so that the user-experience and features are finalized for the application right from the start. </p>`
            },
        ],
        [
            {
                num: "03",
                title: (<> Custom <span className='newfycolr'>iOS Application</span> Development </>),
                content: `<p class='font-medium'>This involves designing the application's architecture, including defining hardware and system requirements, system layout, and necessary platforms for native or cross-platform app development services.</p>`
            },
        ],
        [
            {
                num: "",
                title: (<> iOS <span className='newfycolr'>Software Testing</span> </>),
                content: `<p class='font-medium'>Writing code according to the previous design. This stage often involves multiple teams, especially in mobile app development services, focusing on different aspects such as iPhone app development services and Android app development.
            </p>`
            },
        ],
        [
            {
                num: "",
                title: (<> <span className='newfycolr'>Multi-platform</span> Deployment </>),
                content: `<p class='font-medium'> We use automation testing tools to debug your applications before sharing the final version with you. We make sure that the final product is user-friendly across multiple operating systems.</p>`
            },
        ],
    ];
    /* ============================= */
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    /* ============================= */
    return (
        <section id='process' className={styles.Offer}>
            <Row className="m-0 align-items-center">
                <Col lg={12}>
                    <div className={styles.txt}>
                        <h2 className='manrope font-bold'><span className='newfycolr'>Ios Application </span>Development Services We Offer</h2>
                        <p className='manrope font16 font-medium mb-2 mb-lg-5 pb-2'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. <br className='d-xl-block d-none' /> We bring your iOS app ideas to life by using our comprehensive We bring your iOS app ideas to life by using our</p>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={6} className='p-md-0'>
                        <nav className={styles.applicationlong}>
                            <ul className="d-lg-block d-none">
                                {menus.map((tab, index) => (
                                    <li key={index}
                                        className={`d-flex ${activeTab === index ? styles.active : ''}`}
                                        onClick={() => handleTabClick(index)}>
                                        <span className={`manrope pe-4`}>0{index + 1}</span>
                                        <span className={`${styles.menusHeading} manrope`}>{tab.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <select className="d-lg-none d-block" onChange={(e) => setActiveTab(parseInt(e.target.value))}>
                                {menus.map((tab, index) => (
                                    <option key={index} value={index} label={tab.label}>{tab.label}</option>
                                ))}
                            </select>
                        </nav>
                    </Col>
                    <Col lg={6} className='p-md-0'>
                        {sections[activeTab] && (
                            <div className={styles.understand}>
                                {sections[activeTab].map((item, index) => (
                                    <div key={index} className='h-100'>
                                        <div className={`${styles.understandContent}`}>
                                            <h2 className="manrope mb-0">{item.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                                            <div className={styles.btn}>
                                                <a href="#form" className="d-flex gap-3 manrope pink">
                                                    Let’s Discuss Your Project
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Offer
