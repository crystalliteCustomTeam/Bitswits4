import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/DubaiConquered.module.css"
// Images
import SlideOne from "/public/newdubai/conquered1.png"
import SlideTwo from "/public/newdubai/conquered2.png"
import SlideThree from "/public/newdubai/conquered3.png"

const DubaiConquered = () => {
    var DubaiConquered = {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.conqueredSec}>
                <div className='container'>
                    <h2>Industries We’ve Conquered</h2>
                    <p className='fontsfregular'>
                        BitsWits offers a diverse reach by providing industry-specificsolutions for every client. We work with clients who aim <br /> to improve customer quality oflife while simplifying the daily duties of their employees.
                    </p>
                    <Slider {...DubaiConquered} className='dubaiClientSlider mt-5'>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideOne} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideOne} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideTwo} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Manufacture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideThree} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Automotive</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideOne} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideOne} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideTwo} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Manufacture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={SlideThree} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Automotive</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default DubaiConquered
