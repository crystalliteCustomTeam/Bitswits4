import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';
import styles from '@/styles/Industries.module.css';
// Images
import realState from "media/newdubai/real-state.jpg"
import gaming from "media/newdubai/gaming-industries.jpg"
import information from "media/newdubai/information-technology.jpg"
import SliderOne from 'media/newdubai/slider-bg-5.webp';
import SliderTwo from 'media/newdubai/slider-bg-6.jpg';
import SliderThree from 'media/newdubai/slider-bg-7.jpg';
import SliderFour from 'media/newdubai/slider-bg-10.jpg';
import SliderFive from 'media/newdubai/slider-bg-9.jpeg';
import SliderSix from 'media/newdubai/slider-bg-10.jpg';
import SliderSeven from 'media/newdubai/slider-bg-1.jpg';
import SliderArrow from 'media/newdubai/slider-btn-arrow.png';

const Industries = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isSliderHovered, setIsSliderHovered] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(null);

    const sliderContent = [
        {
            title: 'Real State',
            desc: 'We specialize in real estate, offering customized solutions for property development and sales.',
            href: '#',
        },
        {
            title: 'Gaming',
            desc: 'We develop gaming solutions, integrating cutting-edge technology for immersive player experiences.',
            href: '#',
        },
        {
            title: 'Information Technology',
            desc: 'We offer Information Technology solutions with AI integration for enhanced business functionality.',
            href: '#',
        },
        {
            title: 'Ecommerce',
            desc: 'Ecommerce solutions engineered with advanced platforms for smooth online shopping experiences.',
            href: '#',
        },
        {
            title: 'Health Care',
            desc: 'We innovate healthcare solutions, utilizing state-of-the-art technology for enhanced patient care.',
            href: '#',
        },
        {
            title: 'Automotive',
            desc: 'Automotive solutions integrating advanced technology for optimized vehicle performance and efficiency.',
            href: '#',
        },
        {
            title: 'Manufacture',
            desc: 'Manufacturing solutions with advanced processes for efficient production and quality control.',
            href: '#',
        },
        {
            title: 'Logistic',
            desc: 'Logistics solutions optimized with advanced tracking systems for efficient supply chain management.',
            href: '#',
        },
    ];

    const sliderImages = [realState, gaming, information, SliderOne, SliderTwo, SliderThree, SliderFour, SliderSeven, SliderFive, SliderSix];

    useEffect(() => {
        setBackgroundImage(sliderImages[activeSlide]);
    }, [activeSlide]);

    const handleMouseEnter = (index) => {
        setActiveSlide(index);
        setIsSliderHovered(true);
    };

    const handleMouseLeave = () => {
        setIsSliderHovered(false);
    };

    var industriesSlider = {
        arrows: true,
        dots: false,
        autoplay: false,
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
        <>
            <section className={styles.industriesSec}>
                <Row>
                    <Col lg={12}>
                        <div className={styles.txt}>
                            <h2>Industries We Serve</h2>
                        </div>
                        <div
                            className={styles.sliderBackground}
                            onMouseEnter={() => setIsSliderHovered(true)}
                            onMouseLeave={() => setIsSliderHovered(false)}>
                            {isSliderHovered || backgroundImage ? (
                                <Image src={backgroundImage || sliderImages[0]} width={1532} height={842} alt='Bitswits' />
                            ) : null}
                        </div>
                        <Slider {...industriesSlider} className={`${styles.industriesSlider} industriesSlider`}>
                            {sliderContent.map((content, index) => (
                                <div key={index} className={styles.mainDiv}>
                                    <div
                                        className={`px-3 ${styles.sliderDiv}`}
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}>
                                        <div className={`card ${styles.card}`}>
                                            <h3>{content.title}</h3>
                                            <p>{content.desc}</p>
                                            <Link href={content.href} className={styles.btn}>
                                                Learn More
                                                <span>
                                                    <Image src={SliderArrow} alt='Bitswits' width={17} height={11} />
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
    );
};

export default Industries;
