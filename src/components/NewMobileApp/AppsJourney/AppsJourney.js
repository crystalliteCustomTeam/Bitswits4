import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/AppsJourney.module.css"
import Link from 'next/link'
import Image from 'next/image'

import BannerImage from "media/newmobileapp/smal_banner.png"

const cardsContent = [
    "Confused About Choosing The Right Technology For Your App?",
    "Need Assistance In Crafting A User-Centric Design For Your App Idea?",
    "Worried About Overblown Costs In App Development?",
    <>Struggling to Turn Your App Idea into <br className='d-block d-md-none' /> Reality?</>,
    "Worried About The Security And Privacy Of Your App?"
];

const Card = ({ content, isActive }) => {
    return (
        <div className={`${styles.card} ${isActive ? styles.active : ''}`}>
            <p>{content}</p>
        </div>
    );
};

const CardContainer = ({ content, isActive }) => {
    return (
        <Link href="javascript:;">
            <Card content={content} isActive={isActive} />
        </Link>
    );
};

const AppsJourney = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % cardsContent.length);
        }, 11000);

        return () => clearInterval(interval);
    }, []);

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
                    <Row className='justify-content-center'>
                        {cardsContent.slice(0, 2).map((content, index) => (
                            <div key={index} className="col-lg-6 col-xl-4">
                                <CardContainer content={content} isActive={index === activeIndex} />
                            </div>
                        ))}
                    </Row>
                    <Row className='justify-content-center'>
                        {cardsContent.slice(2).map((content, index) => (
                            <div key={index} className="col-lg-6 col-xl-4">
                                <CardContainer content={content} isActive={(index + 2) === activeIndex} />
                            </div>
                        ))}
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
