"use client"
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Testimonials.module.css"
//====== Image
import Client1 from "media/services/client-1.svg"
import QouteOne from "media/services/quote-left.svg"
import QouteTwo from "media/services/quote-right.svg"
import TestiOne from "media/services/testimonials-1.svg"
import TestiTwo from "media/services/testimonials-2.svg"
import TestiThree from "media/services/testimonials-3.svg"
import testiBef from "media/gameServices/testiBef.png"
import testiAftr from "media/gameServices/testiAftr.png"


const Testimonials = () => {
    /* ============================= */
    const testimonialsData = [
        {
            image: Client1,
            quote1: QouteOne,
            quote2: QouteTwo,
            name: "Suzie Milton",
            designation: "Game Developer",
            review: "Have never come across such a diverse hybrid app development services provider. All my queries were amicably handled and resolved without hassle. They certainly stand out as one of the best.",
        },
        {
            image: Client1,
            quote1: QouteOne,
            quote2: QouteTwo,
            name: "Suzie Milton",
            designation: "Game Developer",
            review: "Have never come across such a diverse hybrid app development services provider. All my queries were amicably handled and resolved without hassle. They certainly stand out as one of the best.",
        },
    ];
    /* ============================= */
    const testimonialSlider = {
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        autoplaySpeed: 3000,
        speed: 300,
    };
    /* ============================= */
    return (
        <section className={styles.testimonialsSec}>
            <div className={styles.testiBef}>
                <Image src={testiBef} alt='Bitswits' className='img-fluid w-50' />
            </div>
            <div className={styles.testiAftr}>
                <Image src={testiAftr} alt='Bitswits' className='img-fluid w-50' />
            </div>
            <Container>
                <Row>
                    <Col lg={1}></Col>
                    <Col lg={10}>
                        <div className={styles.sliderContent}>
                            <div className="txt">
                                <h2 className='manrope font-bold text-center text-white mb-3 mb-md-5 pb-3'><span className='newfycolr'>Client</span> Testimonial</h2>
                            </div>
                            <Slider {...testimonialSlider} className={`testimonialSlider pb-lg-4 ${styles.testimonialSlider}`}>
                                {testimonialsData.map((i, index) => (
                                    <div key={index}>
                                        <div className="testimonials">
                                            <div className="image">
                                                <Image src={i.image} alt='Bitswits' className='img-fluid d-block mx-auto' />
                                            </div>
                                            <div className={styles.sliderContent}>
                                                <div className={styles.quoteOne}>
                                                    <Image src={i.quote1} alt='Bitswits' className='img-fluid' />
                                                </div>
                                                <p className='manrope font-regular text-center text-white mb-4'>
                                                    {i.review}
                                                </p>
                                                <div className={styles.quoteTwo}>
                                                    <Image src={i.quote2} alt='Bitswits' className='img-fluid' />
                                                </div>
                                                <div className="clientName">
                                                    <h4 className='manrope font-bold text-center'>{i.name}</h4>
                                                    <h6 className='manrope font-medium text-center'>{i.designation}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div className="d-flex flex-wrap align-items-center justify-content-center gap-5 pt-5 mt-5">
                                <div>
                                    <Image src={TestiOne} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiTwo} alt='Bitswits' />
                                </div>
                                <div>
                                    <Image src={TestiThree} alt='Bitswits' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.secBtn}>
                            <a href="#href" className='pink'>
                                Let’s Discuss Your Project
                            </a>
                        </div>
                    </Col>
                    <Col lg={1}></Col>
                </Row>
            </Container>
        </section>
    )
}

export default Testimonials
