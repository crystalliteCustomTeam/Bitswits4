import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/NewDubiaAwards.module.css"
// Images     
import Slider1 from "/public/newDubaiPagev1/award1.png"
import Slider2 from "/public/newDubaiPagev1/award2.png"
import Slider3 from "/public/newDubaiPagev1/award3.png"
import Slider4 from "/public/newDubaiPagev1/award4.png"
import ClientTwo from "/public/newDubaiPagev1/client2.png"
import Star from "/public/newDubaiPagev1/star.png"

const NewDubaiAwards = ({ content }) => {
    const { title, desc } = content;
    var awardSlider = {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 991,
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
            <section className={styles.awardSec}>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={4}>
                            <div>
                                <div className={styles.txt}>
                                    <h3 className={styles.awardsHeading}>
                                        {title}
                                    </h3>
                                    <p className='fontsfregular'>
                                        {desc}
                                    </p>
                                </div>
                                <div className={`${styles.trustPilot} mt-5 mt-md-0`}>
                                    <div className='image'>
                                        <Image src={ClientTwo} alt='Bitswits' width={101} height={28} />
                                    </div>
                                    <div>
                                        <div className='txt d-flex align-items-center'>
                                            <p className='mb-0 me-2'>4.9 / <span>5.0</span></p>
                                            <div className='d-md-none d-lg-flex align-items-center'>
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
                            </div>
                        </Col>
                        <Col md={8}>
                            {/* <div className='d-xl-block d-none'>
                                <Row className="align-items-center">
                                    <Col lg={3} className='p-3'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider1} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} className='p-0'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider2} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Dot Comm</h6>
                                                <p className='mb-0 fontsfregular'>Excellence in Web Creativity &  Digital Communication</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} className='p-3'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider3} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>INC. 5000</h6>
                                                <p className='mb-0 fontsfregular'>America's Fastest Growing Companies</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={3} className='p-0'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider4} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Rank Watch</h6>
                                                <p className='mb-0 fontsfregular'>Top Web Development
                                                    Agencies 2023</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div> */}
                            <div className='mt-4 mt-md-0'>
                                <Slider {...awardSlider}>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider1} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider2} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Dot Comm</h6>
                                                <p className='mb-0 fontsfregular'>Excellence in Web Creativity &  Digital Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider3} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>INC. 5000</h6>
                                                <p className='mb-0 fontsfregular'>America's Fastest Growing Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src={Slider4} alt="Bitswits" className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Rank Watch</h6>
                                                <p className='mb-0 fontsfregular'>Top Web Development
                                                    Agencies 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col >
                    </Row >
                </Container >
            </section >
        </>
    )
}

export default NewDubaiAwards