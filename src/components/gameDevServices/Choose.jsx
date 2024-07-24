"use client"
import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Choose.module.css"


const Choose = () => {
    /* ============================= */
    const slides = [
        {
            title: 'Clear Communication',
            content: 'We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.'
        },
        {
            title: 'Customer-Centric Approach',
            content: 'We prioritize our client\'s success, understand your unique needs, and deliver tailored solutions that drive your business growth.'
        },
        {
            title: 'Innovation And Excellence',
            content: 'We consistently deliver innovative, high quality solutions as a team on the cutting edge of technology trends.'
        },
        {
            title: 'Customer-Centric Approach',
            content: 'We prioritize our client\'s success, understand your unique needs, and deliver tailored solutions that drive your business growth.'
        }
    ];
    /* ============================= */
    const whychooseSlider = {
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    /* ============================= */
    return (
        <section className={styles.Choose}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={4}>
                        <div className="txt">
                            <h2 className='font-bold text-black manrope mb-md-3'>Why <span className='newfycolr'>Choose Us</span></h2>
                            <p className='font16 text-black font-medium manrope mb-3'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining
                                UI/UX app design.</p>
                            <div className={styles.secBtn}>
                                <a href="#href" className='pink'>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Slider {...whychooseSlider} className={`whychooseSlider ${styles.whychooseSlider}`}>
                            {slides.map((value, index) => (
                                <div className='px-1' key={index}>
                                    <div className={`card border-0 ${styles.card}`}>
                                        <h3 className='font-bold manrope'>{value.title}</h3>
                                        <p className='manrope font-medium font16 pe-2'>{value.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose
