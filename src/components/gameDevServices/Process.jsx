"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Process.module.css"
//====== Image
import processImg from "media/gameServices/processImg.png"


const Process = () => {
    /* ============================= */
    const tabs = [
        { id: 'tab1', label: 'Discovery Session' },
        { id: 'tab2', label: 'Documentation' },
        { id: 'tab3', label: 'Design' },
        { id: 'tab4', label: 'Execution' },
        { id: 'tab5', label: 'Integration & Testing' },
        { id: 'tab6', label: 'Deployment' },
        { id: 'tab7', label: 'Maintenance & Updates' }
    ];
    /* ============================= */
    const tabData = [
        {
            id: "tab1",
            title: (<> Ios App Development <span className='text-white f-400'>Consultation</span> </>),
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab2",
            title: "Document",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab3",
            title: "Design",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab4",
            title: "Executive",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab5",
            title: "Inegration",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab6",
            title: "Deployment",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
        {
            id: "tab7",
            title: "Maintenance",
            para: "Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience. Our team of experienced developers will guide you through every step of the process, ensuring your app meets industry standards and stands out in the App Store. Let us help you turn your vision into a successful, high-performing iOS application.",
            img: processImg,
        },
    ];
    /* ============================= */
    const [activeTab1, setActiveTab1] = useState('tab1');
    const handleClick = (tabId) => {
        setActiveTab1(tabId);
    };
    /* ============================= */
    return (
        <section className={styles.Process}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt text-center">
                            <h2 className='font-bold manrope text-white mb-3'>Our <span className='newfycolr'>Mobile App Development</span> Process</h2>
                            <p className='font16 font-medium text-white manrope mb-5'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining <br className='d-lg-block d-none' />
                                UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                        </div>
                        <div className="tabList">
                            <ul className={styles.tabList}>
                                {tabs.map(tab => (
                                    <li
                                        key={tab.id}
                                        className={`manrope font-medium ${styles.lists} ${activeTab1 === tab.id ? styles.active : styles.nonActive}`}
                                        onClick={() => handleClick(tab.id)}
                                    >
                                        {tab.label}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            {tabData.map(tab => (
                                activeTab1 === tab.id && (
                                    <Row className='align-items-center' key={tab.id}>
                                        <Col lg={7}>
                                            <div className="tabsContent">
                                                <h3 className={`manrope font-bold newfycolr mb-3`}>
                                                    {tab.title}
                                                </h3>
                                                <p className='manrope text-white font16'>
                                                    {tab.para}
                                                </p>
                                                <div className={styles.tabBtn}>
                                                    <a href="#href" className='pink'>
                                                        Let’s Discuss Your Project
                                                    </a>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={5}>
                                            <div className={`${styles.tabImage} d-md-block d-none`}>
                                                <Image src={tab.img} alt='Bitswits' className='img-fluid' />
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Process
