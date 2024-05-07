import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertappdubaiadvanced.module.css";
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Expertappdubaiadvanced(props) {

    const mblSlider = {
        arrows: false,
        infinite: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2 d-none d-lg-flex'>
                        <Col lg={12} className={styles.newtown}>
                            <h2 className='black  f-700 center mb-3 mb-md-5'>
                                {props.title}
                            </h2>
                        </Col>
                        {props.appData.map((app, index) => (
                            <Col lg={4} key={index}>
                                <div className={styles.app}>
                                    <div className={styles.copy}>
                                        <Image alt='BitsWits' src={app.imageSrc} className='img-fluid' />
                                        <h3 className='black fw700'>{app.title}</h3>
                                    </div>
                                    <p className='m-0'>{app.description}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>
                        <Col lg={12} >
                            <h2 className='black font50 f-700 center mb-5'>Advanced Technology Solutions for Large-Scale  <br></br> Businesses & Enterprises </h2>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider} dubaiSliders`}>
                            {props.appData.map((app, index) => (
                                <Col lg={4} key={index}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <Image alt='BitsWits' src={app.imageSrc} className='img-fluid mb-3' />
                                            <h3 className=' black fw700'>{app.title}</h3>
                                        </div>
                                        <p className='m-0'>{app.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>

            </section>
        </>
    )
}

