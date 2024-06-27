"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/YourTech.module.css"
// Images 
import TechOne from "media/services/tech-1.svg"
import TechTwo from "media/services/tech-2.svg"
import TechThree from "media/services/tech-3.svg"
import TechFour from "media/services/tech-4.svg"
import TechFive from "media/services/tech-5.svg"
import TechSix from "media/services/tech-6.svg"

const YourTech = () => {
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
                            <h2 className='manrope font-bold mb-md-3'>Your Tech Stack Is Our Burden</h2>
                            <p className='manrope font16 font-medium pb-2 pb-md-4 mb-xl-4'>Our teams hold expertise in a multitude of programming aspects</p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.tabList}>
                            <ul className={styles.tabList}>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab1" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab1")}>
                                    Mobile Technologies
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab2" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab2")}>
                                    UI/UX
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab3" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab3")}>
                                    Web & Hybrid
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab4" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab4")}>
                                    Backend & Database
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab5" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab5")}>
                                    Cloud
                                </li>
                                <li className={`manrope font-medium ${styles.lists} ${activeTab1 == "tab6" ? styles.active : styles.nonActive}`}
                                    onClick={() => fun1("tab6")}>
                                    Analytics and Payments
                                </li>
                            </ul>
                        </div>
                        <div className={styles.tabContent}>
                            {activeTab1 == "tab1" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab2" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab3" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab4" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab5" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab1 == "tab6" && (
                                <div className={styles.tenchnologies}>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechOne} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Kotlin</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechTwo} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Swift</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechThree} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Objective C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFour} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Xcode</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechFive} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Java</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.tech}>
                                            <div className={styles.techImage}>
                                                <Image src={TechSix} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className="texhTxt">
                                                <p className='manrope'>Android SDK</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default YourTech