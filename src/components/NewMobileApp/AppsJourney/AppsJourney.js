import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/AppsJourney.module.css"
import Link from 'next/link'
import Image from 'next/image'

import BannerImage from "media/newmobileapp/smal_banner.png"

const AppsJourney = () => {
    return (
        <>
            <section className={styles.appSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>Innovate Today, Lead Tomorrow</p>
                                <h2>Your App's Journey To Excellence <span>Starts Now!</span></h2>
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <p>Confused About Choosing The
                                    Right Technology For Your App?</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <p>Need Assistance In Crafting A
                                    User-Centric Design For Your
                                    App Idea?</p>
                            </div>
                        </Col>
                        <Col lg={2}></Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <p>Worried About Overblown
                                    Costs In App Development?</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <p>Struggling to Turn Your App
                                    Idea into Reality?</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <p>Worried About The Security And Privacy Of Your App?</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            {/* Small Banner Start */}
            <section className={styles.smallBanner}>
                <div className="container">
                    <div className={styles.bannerWrapper}>
                        <Row>
                            <Col lg={5}>
                                <h2>
                                    <span>
                                        No Risks
                                    </span> With An MVP!
                                    Launch Your IDEA To See
                                    How They Like It!
                                </h2>
                                <div className={styles.btn}>
                                    <Link href="javascript:;">
                                        Let’s Do This!
                                    </Link>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div className={`d-none d-lg-block ${styles.secImage}`}>
                                    <Image src={BannerImage} alt='Bitswits' className='img-fluid' />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            {/* Small Banner End */}
        </>
    )
}

export default AppsJourney
