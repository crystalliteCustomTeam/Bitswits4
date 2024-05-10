"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/NewMobileApp/LogoSlider.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import leftImg1 from 'media/newmobileapp/sqlite-logo/firebase.png'
import leftImg2 from 'media/newmobileapp/sqlite-logo/java-logo.png'
import leftImg3 from 'media/newmobileapp/sqlite-logo/flutter-logo.png'
import leftImg4 from 'media/newmobileapp/sqlite-logo/html-logo.png'
import leftImg5 from 'media/newmobileapp/sqlite-logo/dot-net-logo.png'
import leftImg6 from 'media/newmobileapp/sqlite-logo/c-sharp-logo.png'
import leftImg7 from 'media/newmobileapp/sqlite-logo/css-logo.png'
import leftImg8 from 'media/newmobileapp/sqlite-logo/google-cloud-sql.png'
import leftImg9 from 'media/newmobileapp/sqlite-logo/android_studio-full.png'
import rightImg1 from 'media/newmobileapp/sqlite-logo/ionic.png'
import rightImg2 from 'media/newmobileapp/sqlite-logo/node-logo.png'
import rightImg3 from 'media/newmobileapp/sqlite-logo/php-logo.png'
import rightImg4 from 'media/newmobileapp/sqlite-logo/javascript-logo.png'
import rightImg5 from 'media/newmobileapp/sqlite-logo/ios-sdk.png'
import rightImg6 from 'media/newmobileapp/sqlite-logo/kotlin.png'
import rightImg7 from 'media/newmobileapp/sqlite-logo/objective.png'
import rightImg8 from 'media/newmobileapp/sqlite-logo/react-logo.png'
import rightImg9 from 'media/newmobileapp/sqlite-logo/sqlite-logo.png'
import btnArrow from "media/newmobileapp/right-arrow.png"

const LogoSlider = (props) => {
    const tabLeft = [
        { image: leftImg1, index: 0 },
        { image: leftImg2, index: 1 },
        { image: leftImg3, index: 2 },
        { image: leftImg4, index: 3 },
        { image: leftImg5, index: 4 },
        { image: leftImg6, index: 5 },
        { image: leftImg7, index: 6 },
        { image: leftImg8, index: 7 },
        { image: leftImg9, index: 8 },
    ];
    const tabRight = [
        { image: rightImg1, index: 0 },
        { image: rightImg2, index: 1 },
        { image: rightImg3, index: 2 },
        { image: rightImg4, index: 3 },
        { image: rightImg5, index: 4 },
        { image: rightImg6, index: 5 },
        { image: rightImg7, index: 6 },
        { image: rightImg8, index: 7 },
        { image: rightImg9, index: 8 },
    ];
    const router = usePathname();
    var leftSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
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
    var rightSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
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
            <section className={`d-none d-md-block ${styles.sliderSec}`}>
                <Row className={`m-0 py-5 px-0 justify-content-center`} >
                    <Col md={12} className=' text-center d-flex flex-column align-items-center '>
                        <h2>
                            <span> Yes. </span> We Cover Your Tech Stack.
                        </h2>
                        <p>
                            Our <span>4,000+</span> team has expertise in almost every <br />
                            programming language.
                        </p>
                        <br />
                        <Col md={11}>
                            <Slider {...leftSlider} className='mb-3'>
                                {tabLeft.map((item, index) => (
                                    <div className='d-flex justify-content-center '>
                                        <Image alt="BitsWits" src={item.image} className="img-fluid" style={{ maxWidth: '22vw' }} />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col md={11}>
                            <Slider {...rightSlider} className='mt-5'>
                                {tabRight.map((item, index) => (
                                    <div className='d-flex justify-content-center '>
                                        <Image alt="BitsWits" src={item.image} className="img-fluid" style={{ maxWidth: '22vw' }} />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.btn}>
                                <Link href="javascript:;" className='d-flex align-items-center gap-3'>
                                    Free Consultation
                                    <Image src={btnArrow} alt='Bitswits' width={24} height={12} />
                                </Link>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default LogoSlider