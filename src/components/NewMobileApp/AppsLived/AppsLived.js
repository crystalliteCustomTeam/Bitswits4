import React, { useEffect, useRef, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/NewMobileApp/AppsLived.module.css"
import Image from 'next/image'
import Link from 'next/link'

// Images 
import rightArrow from "media/newmobileapp/right-arrow.png"
import downloads from "/public/newmobileapp/download.png"
import makeus from "/public/newmobileapp/makeus.png"
import roi from "/public/newmobileapp/roi.png"
import clutch from "media/newDubaiPagev1/clutch.png"
import slider1 from "media/newmobileapp/slider-1.png"
import slider2 from "media/newmobileapp/slider-2.png"
import slider3 from "media/newmobileapp/slider-3.png"
import slider4 from "media/newmobileapp/slider-4.png"
import slider5 from "media/newmobileapp/slider-5.png"


const AppsLived = () => {
    const sectionRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.5 // Change this value according to your preference
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);

    const startCounters = () => {
        const counterElements = document.querySelectorAll('.counter');

        counterElements.forEach((item) => {
            let counterInnerText = parseInt(item.textContent);
            let count = 1;
            let speed = parseInt(item.dataset.speed) / counterInnerText;
            const stop = setInterval(() => {
                item.textContent = count++;
                if (counterInnerText < count) {
                    clearInterval(stop);
                    if (counterInnerText === 20) {
                        item.textContent += "+";
                    } else if (counterInnerText === 30) {
                        item.textContent += "K";
                    } else if (counterInnerText === 10) {
                        item.textContent += "%";
                    }
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    var appsSlider = {
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        beforeChange: (current, next) => {
            setActiveSlide(next);
        }
    };

    const contentData = [
        [
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: 20
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: 30
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: 10
            },
        ],
        [
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: 10
            },
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: 20
            },
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: 30
            },

        ],
        [
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: 30
            },
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: 20
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: 10
            },
        ],
        [
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: 30
            },
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: 20
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: 10
            },
        ],
        [
            {
                icon: "/newmobileapp/makeus.png",
                title: "MAUs",
                number: 30
            },
            {
                icon: "/newmobileapp/download.png",
                title: "Downloads",
                number: 20
            },
            {
                icon: "/newmobileapp/roi.png",
                title: "ROI",
                number: 10
            },
        ],
    ];

    const SliderContent = [
        {
            image: slider1,
            title: "Route Rover",
            desc: "Bitswits' development of the Prey project, a wallet analytics and search engine platform on blockchain."
        },
        {
            image: slider2,
            title: "Route Rover",
            desc: "Bitswits' development of the Prey project, a wallet analytics and search engine platform on blockchain."
        },
        {
            image: slider3,
            title: "Route Rover",
            desc: "Bitswits' development of the Prey project, a wallet analytics and search engine platform on blockchain."
        },
        {
            image: slider4,
            title: "Route Rover",
            desc: "Bitswits' development of the Prey project, a wallet analytics and search engine platform on blockchain."
        },
        {
            image: slider5,
            title: "Route Rover",
            desc: "Bitswits' development of the Prey project, a wallet analytics and search engine platform on blockchain."
        }
    ]
    return (
        <>
            <section ref={sectionRef} className={styles.appStyles}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={styles}>
                                <h2>Apps That Lived To <span>Tell</span> The <span>Tale!</span></h2>
                                <p>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                            </div>
                        </Col>
                        <Col lg={5} className='px-1'>
                            <div className={styles.featured}>
                                <div>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">
                                            FEATURED WORKS
                                        </Link>
                                    </div>
                                    <h3>Some work we are proud of</h3>
                                    <p>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs.</p>

                                    <div className={styles.blackBtn}>
                                        <Link href="javascript:;" className='d-flex align-items-center gap-4'>
                                            Request a Proposal
                                            <Image src={rightArrow} alt='Bitswits' width={24} height={12} />
                                        </Link>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center justify-content-between mt-5 pt-2'>
                                    {contentData[activeSlide] && (
                                        <div className={styles.counterMain}>
                                            {contentData[activeSlide].map((data, index) => (
                                                <div className="downloads" key={index}>
                                                    <img src={data.icon} alt='Bitswits' />
                                                    <h4>{data.title}</h4>
                                                    <h5>
                                                        <span className='mb-0 d-inline counter' data-speed="1000">
                                                            {data.number}</span>
                                                    </h5>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="clutch d-none d-xl-block">
                                        <Image src={clutch} alt='Bitswits' width={127} height={60} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='px-1'>
                            <Slider {...appsSlider} className={`${styles.appsSlider} appsSlider`}>
                                {SliderContent.map((content, index) => (
                                    <div className=''>
                                        <div key={index} className={styles.slider}>
                                            <div className={styles.sliderImage}>
                                                <Image src={content.image} alt='Bitswits' className='img-fluid' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <div className="txt">
                                                    <h2>{content.title}</h2>
                                                    <p>{content.desc}</p>
                                                </div>
                                                <div className={styles.sliderBtn}>
                                                    <Link href="javascript:;" className='d-flex align-items-center gap-4'>
                                                        Request a Proposal
                                                        <Image src={rightArrow} alt='Bitswits' width={24} height={12} />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default AppsLived
