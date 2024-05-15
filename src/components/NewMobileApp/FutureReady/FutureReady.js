import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/FutureReady.module.css"
import Image from 'next/image'
import Link from 'next/link'
// Images
import ios from "media/newmobileapp/ios.png"
import andriod from "media/newmobileapp/andriod.png"
import native from "media/newmobileapp/native.png"
import flutter from "media/newmobileapp/flutter.png"
import cross from "media/newmobileapp/cross.png"
import webdevelopment from "media/newmobileapp/webdevelopment.png"
import Slider from 'react-slick'

const FutureReady = () => {
    var FutureSlider = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 6000,
        cssEase: "linear",
    };
    return (
        <>
            <section className={styles.futureSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className="txt">
                                <h2>Future-Ready Solutions For <span>ROI-Driven Results!</span></h2>
                                <p>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-md-block d-none'>
                        <Row>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.iosCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>IOS Application Development</h3>
                                        <Image src={ios} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.We bring your iOS app ideas to life by using our comprehensive
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.andriodCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Android Application Development</h3>
                                        <Image src={andriod} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We take Android app development to the next level by following a comprehensive approach, from ideation to launch. We take Android app development to the next level by following a
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.nativeCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>React NativeApp Development</h3>
                                        <Image src={native} width={32} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.flutterCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Flutter App Development</h3>
                                        <Image src={flutter} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our team of expert Flutter app developers at Bitswits use the latest tools and techniques.Our team of expert Flutter app developers at Bitswits use the latest tools and techniques.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.crossCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Cross Platform App Development</h3>
                                        <Image src={cross} width={36} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We prioritize creating seamless user experiences in cross-platform app development. We prioritize creating seamless user experiences in cross-platform app development.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} lg={4} className='p-2'>
                                <div className={`${styles.webdevelopmentCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Web App Development</h3>
                                        <Image src={webdevelopment} width={31} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.We offer end-to-end web app development company.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='d-md-none d-block'>
                        <Slider {...FutureSlider} className='futureSlider'>
                            <div className='px-2'>
                                <div className={`${styles.iosCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>IOS Application Development</h3>
                                        <Image src={ios} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.We bring your iOS app ideas to life by using our comprehensive
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.andriodCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Android Application Development</h3>
                                        <Image src={andriod} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We take Android app development to the next level by following a comprehensive approach, from ideation to launch. We take Android app development to the next level by following a
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.nativeCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>React NativeApp Development</h3>
                                        <Image src={native} width={32} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our team of expert Flutter app developers at Bitswits use the latest tools and techniques to build cross-platform mobile apps tailored to your business needs.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.flutterCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Flutter App Development</h3>
                                        <Image src={flutter} width={25} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            Our team of expert Flutter app developers at Bitswits use the latest tools and techniques.Our team of expert Flutter app developers at Bitswits use the latest tools and techniques.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.crossCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Cross Platform App Development</h3>
                                        <Image src={cross} width={36} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We prioritize creating seamless user experiences in cross-platform app development. We prioritize creating seamless user experiences in cross-platform app development.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className={`${styles.webdevelopmentCard} ${styles.card}`}>
                                    <div className={styles.cardTop}>
                                        <h3>Web App Development</h3>
                                        <Image src={webdevelopment} width={31} height={30} alt='Bitswits' />
                                    </div>
                                    <div className="cardContent">
                                        <p>
                                            We offer end-to-end web app development company. Our team of skilled web app developers utilizes the latest technologies.We offer end-to-end web app development company.
                                        </p>
                                    </div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">Let’s Do This!</Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FutureReady
