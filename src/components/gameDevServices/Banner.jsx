"use client"
import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import Typing from 'react-typing-effect';
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Banner.module.css"
//====== Image
import logo1 from "media/gameServices/slideLogos/1.png"
import logo2 from "media/gameServices/slideLogos/2.png"
import logo3 from "media/gameServices/slideLogos/3.png"
import logo4 from "media/gameServices/slideLogos/4.png"
import logo5 from "media/gameServices/slideLogos/5.png"
import logo6 from "media/gameServices/slideLogos/6.png"
import logo7 from "media/gameServices/slideLogos/7.png"
import logo8 from "media/gameServices/slideLogos/8.png"
import logo9 from "media/gameServices/slideLogos/9.png"
import logo10 from "media/gameServices/slideLogos/10.png"
import logo11 from "media/gameServices/slideLogos/11.png"
import logo12 from "media/gameServices/slideLogos/12.png"
import logo13 from "media/gameServices/slideLogos/13.png"
import logo14 from "media/gameServices/slideLogos/14.png"
import logo15 from "media/gameServices/slideLogos/15.png"


const Banner = () => {
    /* ============================= */
    const logoData = [
        { logo: logo1 },
        { logo: logo2 },
        { logo: logo3 },
        { logo: logo4 },
        { logo: logo5 },
        { logo: logo6 },
        { logo: logo7 },
        { logo: logo8 },
        { logo: logo9 },
        { logo: logo10 },
        { logo: logo11 },
        { logo: logo12 },
        { logo: logo13 },
        { logo: logo14 },
        { logo: logo15 },
    ];
    /* ============================= */
    const logoSlider = {
        dots: false,
        arrows: false,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };
    /* ============================= */
    return (
        <section className={styles.banner}>
            <div className={styles.banVideo}>
                <video loading="lazy" muted loop autoPlay preload="auto" >
                    <source src="https://player.vimeo.com/progressive_redirect/playback/989097146/rendition/720p/file.mp4?loc=external&log_user=0&signature=3ff085a6ef07723a99e91c4223df0c30dc667885242f5804df7f98640687dc78" type="video/mp4" />
                </video>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <div>
                            <Typing
                                className={`${styles.typingText} manrope`}
                                text='Quickly – Efficiently – Effortlessly'
                                speed={100}
                                eraseDelay={200}
                                typingDelay={100}
                            />
                            <h1 className='font-bold manrope text-white mt-3'>The Ultimate <span>Mobile Game Development</span> Company</h1>
                            <p className='font16 manrope text-white my-3 py-xl-3'>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its client’s goals, and internal teams.</p>
                            <div className="btn d-flex align-items-center gap-4 px-0">
                                <a href="#href" className={`${styles.demoBtn} font-bold manrope pink`}>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                        <Slider {...logoSlider} className={`testimonialSlider pt-4 pt-xl-5`}>
                            {logoData.map((i, index) => (
                                <div key={index} className={styles.logos}>
                                    <Image src={i.logo} alt='Bitswits' className='img-fluid' />
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
