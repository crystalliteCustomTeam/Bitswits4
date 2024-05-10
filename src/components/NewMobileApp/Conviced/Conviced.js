import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/Conviced.module.css"
// Images 
import Clutch from "media/newmobileapp/clutch.png"
import Arrow from "media/newmobileapp/right-arrow.png"
import Client1 from "media/newmobileapp/client1.png"
import ClientImage from "media/newmobileapp/reviewImage.png"
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'

const Conviced = () => {

    var convicedSlider = {
        arrows: false,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.convicedSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className='d-md-flex align-items-center justify-content-between mb-md-5 pb-3'>
                                <div className={styles.txt}>
                                    <h2>Still Not <span>Convinced?</span></h2>
                                    <p>Hear From Our Clients Who Made Headlines</p>
                                </div>
                                <div className="clutch">
                                    <Image src={Clutch} alt='Bitswits' width={217} height={50} className='img-fluid mx-auto d-block mt-4' />
                                    <div className={styles.btn}>
                                        <Link href="javascript:;" className='gap-4'>
                                            See All
                                            <Image src={Arrow} alt='Bitswits' width={24} height={15} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <Slider {...convicedSlider}>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative} ${styles.card}`}>
                                        <div className="cardTop">
                                            <p>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. <span className={styles.blue}>Their comprehensive work</span>, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                <Image src={Client1} alt='Bitswits' width={45} height={45} />
                                                <div className="txt">
                                                    <h3>Jordan</h3>
                                                    <h6>Tech Startup Founder</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p><span className={styles.red}>Bitswits' development of the ProEYE project,</span> a wallet analytics and search engine platform on blockchain, was exceptional. <span className={styles.red}>Their comprehensive work,</span> from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                <Image src={Client1} alt='Bitswits' width={45} height={45} />
                                                <div className="txt">
                                                    <h3>Jordan</h3>
                                                    <h6>Tech Startup Founder</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={`${styles.cardNegative} ${styles.card}`}>
                                        <div className="cardTop">
                                            <p>Bitswits' development of the ProEYE project, a <span className={styles.green}>wallet analytics and search</span> engine platform on blockchain, was exceptional. <span className={styles.green}>Their comprehensive work,</span> from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                <Image src={Client1} alt='Bitswits' width={45} height={45} />
                                                <div className="txt">
                                                    <h3>Jordan</h3>
                                                    <h6>Tech Startup Founder</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.card}>
                                        <div className="cardTop">
                                            <p><span className={styles.red}>Bitswits' development of the ProEYE project,</span> a wallet analytics and search engine platform on blockchain, was exceptional. <span className={styles.red}>Their comprehensive work,</span> from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <div className="client d-flex align-items-center gap-1 gap-xxl-3">
                                                <Image src={Client1} alt='Bitswits' width={45} height={45} />
                                                <div className="txt">
                                                    <h3>Jordan</h3>
                                                    <h6>Tech Startup Founder</h6>
                                                </div>
                                            </div>
                                            <div className="review d-flex align-items-center gap-2">
                                                <p className='mb-0'>4.9/5.0</p>
                                                <Image src={ClientImage} alt='Bitswits' width={21} height={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Conviced
