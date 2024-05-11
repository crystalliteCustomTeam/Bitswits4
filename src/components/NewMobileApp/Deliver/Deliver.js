"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMobileApp/Deliver.module.css'
//
import icon1 from "media/newmobileapp/icon1.png"
import icon2 from "media/newmobileapp/icon2.png"
import icon3 from "media/newmobileapp/icon3.png"

const Deliver = () => {
    return (
        <>
            <section className={styles.deliver}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <h2>How <span>Bitswits</span> Helps You Deliver <br /> The Best Results</h2>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.mainDeliver}>
                                <div className={`${styles.card} ${styles.card1}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon1} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Clear <br /> Communication</h3>
                                    <p>We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.</p>
                                </div>
                                <div className={`${styles.card} ${styles.card2}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Customer-Centric <br /> Approch</h3>
                                    <p>We prioritize our client's success, understand your unique needs, and deliver tailored solutions that drive your business growth.</p>
                                </div>
                                <div className={`${styles.card} ${styles.card3}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Innovation and <br /> Excellence</h3>
                                    <p>We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className={`${styles.btns}`}>
                                <a href="javascript:;">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Deliver
