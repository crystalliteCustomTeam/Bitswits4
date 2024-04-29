import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/DubaiBrandTrust.module.css"
import Image from 'next/image'
// Images
import BrandOne from "media/newdubai/trust-1.png"
import BrandTwo from "media/newdubai/trust-2.png"
import BrandThree from "media/newdubai/trust-3.png"
import BrandFour from "media/newdubai/trust-4.png"
import BrandFive from "media/newdubai/trust-5.png"
import BrandSix from "media/newdubai/trust-6.png"
import Slider from 'react-slick'

const DubaiBrandTrust = () => {
    var brandSlider = {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
    };
    return (
        <>
            <section className={styles.brandTrustSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <p>World-Renowned</p>
                                <h2>Brands Trust Us</h2>
                            </div>
                            <div className='d-md-block d-none'>
                                <div className={styles.brands}>
                                    <Image src={BrandOne} alt='Bitswits' width={80} height={65} />
                                    <Image src={BrandTwo} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandThree} alt='Bitswits' width={70} height={70} />
                                    <Image src={BrandFour} alt='Bitswits' width={80} height={70} />
                                    <Image src={BrandFive} alt='Bitswits' width={200} height={80} />
                                    <Image src={BrandSix} alt='Bitswits' width={150} height={90} />
                                </div>
                            </div>
                            <div className='d-md-none d-block'>
                                <Slider {...brandSlider} className='mt-4'>
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
                                </Slider>
                            </div>
                        </Col>
                    </Row >
                </div >
            </section >
        </>
    )
}

export default DubaiBrandTrust
