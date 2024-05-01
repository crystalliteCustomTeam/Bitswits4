import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/DubaiBrandTrust.module.css"
// Swiper
import { register } from 'swiper/element/bundle';
import 'swiper/css';
// Images
import BrandOne from "media/newdubai/single-brands.png"
import BrandTwo from "media/newdubai/single-brands.png"
// import BrandTwo from "media/newdubai/trust-2.png"
import BrandThree from "media/newdubai/trust-3.png"
import BrandFour from "media/newdubai/trust-4.png"
import BrandFive from "media/newdubai/trust-5.png"
import BrandSix from "media/newdubai/trust-6.png"
import Slider from 'react-slick'

const DubaiBrandTrust = () => {
    var brandSlider = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 6,
        speed: 7000,
        cssEase: "linear",
        pauseOnHover: true
    };

    // const swiperRef = useRef(null);
    // useEffect(() => {
    //     register();
    //     const params = {
    //         slidesPerView: 6,
    //         breakpoints: {
    //             300: {
    //                 slidesPerView: 2, 
    //             },
    //             768: {
    //                 slidesPerView: 3, 
    //             },
    //             1024: {
    //                 slidesPerView: 4, 
    //             },
    //             1300: {
    //                 slidesPerView: 5, 
    //             },
    //         },
    //     };
    //     // Assign it to swiper element
    //     Object.assign(swiperRef.current, params);
    //     // initialize swiper
    //     swiperRef.current.initialize();
    // }, []);
    return (
        <>
            <section className={styles.brandTrustSec}>
                <div className={`${styles.overFlow} container`}>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>World-Renowned</p>
                                <h2>Brands Trust Us</h2>
                            </div>
                            {/* <div className='d-md-block d-none'>
                                <div className={styles.brands}>
                                    <Image src={BrandOne} alt='Bitswits' width={80} height={65} />
                                    <Image src={BrandTwo} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandThree} alt='Bitswits' width={70} height={70} />
                                    <Image src={BrandFour} alt='Bitswits' width={80} height={70} />
                                    <Image src={BrandFive} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandSix} alt='Bitswits' width={150} height={90} />
                                </div>
                            </div> */}
                            <div className={styles.brands}>
                                <div>
                                    <Image src={BrandOne} alt='Bitswits' className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' className='w-100 h-auto' />
                                    <Image src={BrandOne} alt='Bitswits' className='w-100 h-auto' />
                                    <Image src={BrandTwo} alt='Bitswits' className='w-100 h-auto' />
                                </div>
                                {/* <Slider {...brandSlider} className='mt-4'>
                                    <div className='px-4'>
                                        <Image src={BrandOne} alt='Bitswits' width={80} height={65} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandTwo} alt='Bitswits' width={200} height={80} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandThree} alt='Bitswits' width={70} height={70} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandFour} alt='Bitswits' width={80} height={70} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandFive} alt='Bitswits' width={200} height={80} />
                                    </div>
                                    <div className='px-4'>
                                        <Image src={BrandSix} alt='Bitswits' width={150} height={90} />
                                    </div>
                                </Slider> */}
                            </div>
                        </Col>
                    </Row >
                </div >
            </section >
        </>
    )
}

export default DubaiBrandTrust
