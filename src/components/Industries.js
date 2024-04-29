import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/Industries.module.css"
// Images 
import SliderOne from "media/newdubai/slider-bg-1.png"
import SliderTwo from "media/newdubai/slider-bg-2.jpg"
// import SliderThree from "media/newdubai/slider-bg-3.jpg"
import SliderThree from "media/newdubai/slider-bg-4.jpg"
import SliderFour from "media/newdubai/slider-bg-5.jpg"
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
            title: "Logistics",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Manufacture",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        },
        {
            title: "Automotive",
            desc: "Revamp your online presence with BitsWits ecommerce app development services and solutions.",
            href: "#",
        }
    ]

    const sliderImages = [SliderOne, SliderTwo, SliderThree, SliderFour];

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
                    slidesToShow: 2,
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
                            <h2>Industries</h2>
                        </div>
                        <div className={styles.sliderBackground}>
                            {sliderImages[activeSlide] && (
                                <Image src={sliderImages[activeSlide]} alt='Bitswits' className='img-fluid' />
                            )}
                        </div>
                        <Slider {...industriesSlider} className={`${styles.industriesSlider} industriesSlider`}>
                            {sliderContent.map((content, index) => (
                                <div key={index}>
                                    <div className={`px-3 ${styles.sliderDiv}`}>
                                        <div className={styles.card}>
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
