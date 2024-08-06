"use client"
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/WhyChoose.module.css"
import Slider from 'react-slick'

const WhyChoose = ({
    title = "Why<span class='newfycolr'> Choose</span> BitsWits?",
    desc = "Our comprehensive project management ensures high quality, transparency, and scalability. Here’s why you should choose BitsWits for your game development needs:",
    cardData = [
        ["On-Time <br class='d-xl-block d-none' /> Delivery","As a leading 3D game development company, we promise timely delivery, ensuring your game hits the market without delays."],
        ["Expertise of 250+ <br class='d-xl-block d-none' /> Professionals Delivery","We have a team of 100+ skilled 3D game developers with expertise in game engines like Unity, Unreal Engine, Phaser, and Maya."],
        ["Client-First <br class='d-xl-block d-none' /> Approach","We follow an agile process with a client-first approach, adapting to your needs and prioritizing your vision."],
        ["Streamlined Project <br class='d-xl-block d-none' /> Management","Our 3D game development services offer streamlined project management, ensuring end-to-end transparency to keep you informed at every stage."],
        ["Consistent <br class='d-xl-block d-none' /> Support","We offer a holistic approach to 3D game development, providing consistent testing and support for a flawless gaming experience."],
    ]
}) => {
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
    return (
        <section className={styles.whychooseSec}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="txt">
                            <h2 className='font-bold text-black manrope mb-md-3' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='font16 text-black font-medium manrope mb-3'>{desc}</p>
                            <div className={styles.secBtn}>
                                <a href="#href">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <Slider {...whychooseSlider} className={`whychooseSlider ${styles.whychooseSlider}`}>
                            {
                                cardData.map(([title,desc], i) => (
                                    <div key={i} className='px-1'>
                                        <div className={`card border-0 ${styles.card}`}>
                                            <h3 className='font-bold manrope' dangerouslySetInnerHTML={{__html : title}} />
                                            <p className='manrope font-medium font16 pe-2'>{desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default WhyChoose
