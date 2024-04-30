import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Row } from 'react-bootstrap'
import { motion } from "framer-motion"
import styles from "@/styles/Industries.module.css"
// Images 
import SliderOne from "media/newdubai/slider-bg-5.webp"
import SliderTwo from "media/newdubai/slider-bg-6.jpg"
import SliderThree from "media/newdubai/slider-bg-7.jpg"
import SliderFour from "media/newdubai/slider-bg-10.jpg"
import SliderFive from "media/newdubai/slider-bg-9.jpeg"
import SliderSix from "media/newdubai/slider-bg-10.jpg"
import SliderSeven from "media/newdubai/slider-bg-1.jpg"
import SliderArrow from "media/newdubai/slider-btn-arrow.png"

const Industries = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderContent = [
        {
            title: "Ecommerce",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Health Care",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Automotive",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Manufacture",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Logistic",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        }
    ]

    const sliderImages = [SliderOne, SliderTwo, SliderThree, SliderFour, SliderSeven, SliderFive, SliderSix];

    var industriesSlider = {
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
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
            <section className={styles.industriesSec}>
                <Row>
                    <Col lg={12}>
                        <div className={styles.txt}>
                            <h2>Industries We Serve</h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1 }}
                            className={styles.sliderBackground}>
                            {sliderImages[activeSlide] && (
                                <Image src={sliderImages[activeSlide]} width={1532} height={842} alt='Bitswits' />
                            )}
                        </motion.div>
                        <Slider {...industriesSlider} className={`${styles.industriesSlider} industriesSlider`}>
                            {sliderContent.map((content, index) => (
                                <div key={index}>
                                    <div className={`px-3 ${styles.sliderDiv} sliderDiv`}>
                                        <div className={`card ${styles.card}`}>
                                            <h3>{content.title}</h3>
                                            <p>{content.desc}</p>
                                            <Link href={content.href} className={styles.btn}>
                                                Learn More
                                                <span>
                                                    <Image src={SliderArrow} alt='Bitswits' width={17}
                                                        height={11} />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Industries
