import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/DubaiClients.module.css"
// Images
import ClientOne from "/public/newDubaiPagev1/client1.png"
import ClientTwo from "/public/newDubaiPagev1/client2.png"
import ClientThree from "/public/newDubaiPagev1/client3.png"
import Star from "/public/newDubaiPagev1/star.png"

const DubaiClients = () => {

    var dubaiClients = {
        arrows: true,
        dots: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles.clientSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <h2>Why Our Clients <span>Love</span> BitsWits</h2>
                            <p className='fontsfregular mb-5 mb-lg-4 pb-lg-5'>From concept to delivery, we are committed to working with our clients to create apps that are intuitive, engaging, <br /> and user-friendly. We take pride in our commitment to excellence and our team of experts.</p>

                        </Col>
                        <Col md={6} lg={4}>
                            <div className={styles.trustPilot}>
                                <div className='image'>
                                    <Image src={ClientOne} alt='Bitswits' width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 20+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-md-0`}>
                                <div className='image'>
                                    <Image src={ClientTwo} alt='Bitswits' width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 40+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} lg={4}>
                            <div className={`${styles.trustPilot} mt-5 mt-lg-0`}>
                                <div className='image'>
                                    <Image src={ClientThree} alt='Bitswits' width={161} height={40} />
                                </div>
                                <div>
                                    <div className='txt d-flex align-items-center'>
                                        <p className='mb-0 me-2'>5.0 / <span>5.0</span></p>
                                        <div className='d-flex align-items-center'>
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            <Image src={Star} alt='Bitswits' width={13} height={13} />
                                        </div>
                                    </div>
                                    <p className={`${styles.clientsPara} fontsfregular`}>based on 66+ clients</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <Slider {...dubaiClients} className='dubaiClientSlider pt-5 mt-3'>
                                <div>
                                    <div className={styles.card}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name'>
                                                <h6>Ryan Jaden</h6>
                                                <span>ITRans.ai</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Bitswits delivered an efficient solution that significantly improved processing speed, productivity, and accuracy. Their proactive engagement, soliciting of feedback, and implementing improvements ensured a successful partnership. The team's versatility and adaptability were commendable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.card}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name'>
                                                <h6>Joseph</h6>
                                                <span>CTO / Pronftdesign.com</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.card}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name'>
                                                <h6>Daniel Gonzalez</h6>
                                                <span>CTO/ Pronftdesign.com</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Bitswits excelled in developing our custom CRM system, perfectly aligning it with our SEO firm's workflow. Their team delivered an efficient, user-friendly solution with impressive attention to detail. We highly recommend Bitswits for their professionalism and app development expertise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={styles.card}>
                                        <div className={`${styles.cardTop}`}>
                                            <div className='name'>
                                                <h6>Ryan Jaden</h6>
                                                <span>ITRans.ai</span>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                                <Image src={Star} alt='Bitswits' width={13} height={13} />
                                            </div>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <p className='fontsfregular'>
                                                Bitswits delivered an efficient solution that significantly improved processing speed, productivity, and accuracy. Their proactive engagement, soliciting of feedback, and implementing improvements ensured a successful partnership. The team's versatility and adaptability were commendable.
                                            </p>
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

export default DubaiClients
