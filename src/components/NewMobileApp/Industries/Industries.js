"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMobileApp/Industries.module.css'
import Slider from 'react-slick'
//
import slide1 from "media/newmobileapp/health.png"
import slide2 from "media/newmobileapp/education.png"
import slide3 from "media/newmobileapp/logistics.png"
import slide4 from "media/newmobileapp/insurance.png"
import slide5 from "media/newmobileapp/construction.png"
import arrow from 'media/newmobileapp/arrow.png';

const Industries = () => {

    var indusSlider = {
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <section id='industries' className={styles.industries}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <h2><span>Industries </span> We Dominate</h2>
                            <p>Rule your industry with our app development services, crafting cutting-edge solutions that set<br /> market standards. We lead the way!</p>
                        </Col>

                        <Col lg={12}>
                            <Slider {...indusSlider} className={`${styles.indusSlider} indusSlider`}>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide1} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Healthcare</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Healthcare</h3>
                                        <p>Our mobile app development services specialize in providing innovative healthcare solutions. As a US-based healthcare app development company, patient-centered treatment is our first priority.
                                        </p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide2} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Education</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Education</h3>
                                        <p>Mobile application development services transform education through digital classrooms and personalized learning. As the best app making services money can buy, we guarantee excellence.
                                        </p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide3} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Logistics</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Logistics</h3>
                                        <p>Trusted globally, we excel in inventory management and route optimization. As a leader in ride hailing app development services, our solutions are boundless.,</p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide4} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Insurance</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Insurance</h3>
                                        <p>Our mobile application development service innovates in insurance, digital insurance platforms, and claims automation. Our app development agency leads with success.
                                        </p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide5} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Engineering Construction <br /> & Operations</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Engineering Construction & Operations</h3>
                                        <p>Our mobile application development services pioneer sustainable infrastructure solutions. We are at the forefront of the industry. Trusted globally, we integrate and automate with precision.</p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide4} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Insurance</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Insurance</h3>
                                        <p>Our mobile application development service innovates in insurance, digital insurance platforms, and claims automation. Our app development agency leads with success.
                                        </p>
                                        <a href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </Col>

                        <Col lg={12}>
                            <div className={`${styles.btns}`}>
                                <a href="#form">
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

export default Industries
