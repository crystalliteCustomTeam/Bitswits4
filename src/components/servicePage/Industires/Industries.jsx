"use client"
import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/servicepage/Industries.module.css'
//
import slide1 from "media/services/slide-1.svg"
import slide2 from "media/services/slide-2.svg"
import slide3 from "media/services/slide-3.svg"
import slide4 from "media/services/slide-4.svg"
import slide5 from "media/services/slide-5.svg"
import slide6 from "media/services/slide-6.svg"
import slide7 from "media/services/slide-7.svg"
import slide8 from "media/services/slide-8.svg"
import slide9 from "media/services/slide-9.svg"
import slide10 from "media/services/slide-10.svg"
import slide11 from "media/services/slide-11.svg"
import arrow from 'media/newmobileapp/arrow.png';

const Industries = ({
    title = "Industries We <span class='newfycolr'>Serve</span>",
    desc = "We provide customized 3D game development services for various sectors, helping streamline operations and enhance user engagement. <br /> Explore our solutions tailored for healthcare, education, finance, retail, and more.",
    industriesCards = [
        [slide1,"Healthcare","We help healthcare providers improve communication with patients, streamline appointment scheduling, and enhance health tracking. Customized solutions ensure better patient engagement and more effective healthcare delivery, resulting in improved outcomes."],
        [slide2,"Education","We create interactive 3D content that boosts student engagement and learning. Our solutions include educational games, simulations, and virtual classrooms, making education more immersive and effective, enhancing the overall learning experience."],
        [slide3,"Finance","We focus on creating secure, real-time financial data visualization and interactive tools. These applications enhance convenience and security, helping users better understand and manage their finances."],
        [slide4,"Retail","We help retailers drive sales and customer satisfaction through personalized 3D shopping experiences. Our solutions include virtual stores, interactive product displays, and mobile payment integration, providing an engaging shopping experience."],
        [slide5,"Real Estate","Our services allow clients to explore property listings, schedule viewings, and interact with virtual tours. These solutions help real estate professionals showcase properties more effectively, leading to increased customer interest."],
        [slide6,"Travel & Hospitality","We develop 3D applications that help travelers explore destinations, manage travel plans, and optimize itinerary management. Our solutions also include tools for travel agencies to optimize fleet management and improve customer service."],
        [slide7,"Entertainment","Our services for the entertainment industry include interactive games, virtual concerts, and immersive experiences. We help clients engage their audience with high-quality content, from music and videos to live events."],
        [slide8,"Food & Beverage","We create 3D solutions for the food and beverage industry to optimize services, including delivery tracking, mobile payment processing, and interactive menus. These tools enhance customer satisfaction and streamline operations for better efficiency."],
    ]
}) => {

    var indusSlider = {
        arrows: true,
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
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
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
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
                            <h2 className='manrope mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='manrope' dangerouslySetInnerHTML={{ __html: desc }} />
                        </Col>
                        <Col lg={12}>
                            <Slider {...indusSlider} className={`${styles.indusSlider} servicesIndustriesSlider`}>
                                {
                                    industriesCards.map(([img,title,desc], i) => (
                                        <div key={i} className="px-2">
                                            <div className={`${styles.indusSlide} indusSlide`}>
                                                <Image src={img} alt='BitsWits' className='img-fluid w-100' />
                                                <div className={`${styles.head} head`}>
                                                    <h5 className='manrope'>{title}</h5>
                                                </div>
                                                <div className={`${styles.content} content`}>
                                                    <h3 className='manrope'>{title}</h3>
                                                    <p className='manrope'>{desc}</p>
                                                    <a href="#form" className={`manrope ${styles.btn}`}>
                                                        Learn More
                                                        <span>
                                                            <Image src={arrow} alt='Bitswits' width={17} height={11} />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </Col>
                        <Col lg={12} className='z-n1'>
                            <div className={`${styles.btns}`}>
                                <a href="#form" className='manrope'>
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