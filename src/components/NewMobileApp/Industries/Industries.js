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
            <section className={styles.industries}>
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <h2><span>Industries</span>  We’ve Conquered</h2>
                            <p>BitsWits offers a diverse reach by providing industry-specificsolutions for every client. We work with clients who aim to <br /> improve customer quality oflife while simplifying the daily duties of their employees.</p>
                        </Col>

                        <Col lg={12}>
                            <Slider {...indusSlider} className={`${styles.indusSlider} indusSlider`}>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide1} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Health Care</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Health Care</h3>
                                        <p>Be it taxi, travel, or Health Care, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide2} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Education</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Education</h3>
                                        <p>Be it taxi, travel, or Education, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide3} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Logistics</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Logistics</h3>
                                        <p>Be it taxi, travel, or Logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide4} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Insurance</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Insurance</h3>
                                        <p>Be it taxi, travel, or Insurance, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide5} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Engineering Construction <br /> & Operations</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Engineering Construction & Operations</h3>
                                        <p>Be it taxi, travel, or Engineering Construction & Operations, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`${styles.indusSlide} indusSlide`}>
                                    <Image src={slide4} alt='BitsWits' className='img-fluid' />
                                    <div className={`${styles.head} head`}>
                                        <h5>Insurance</h5>
                                    </div>
                                    <div className={`${styles.content} content`}>
                                        <h3>Insurance</h3>
                                        <p>Be it taxi, travel, or Insurance, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking,</p>
                                        <Link href="#" className={styles.btn}>
                                            Learn More
                                            <span>
                                                <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </Slider>
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

export default Industries
