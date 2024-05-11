import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/Whowearenew.module.css";
//
import ban1 from "media/newdubai/ban4.png"
import ban2 from "media/newdubai/ban2.png"
import ban3 from "media/newdubai/ban5.png"
import ArrowImage from "media/newdubai/slider-btn-arrow.png"

const Whowearenew = ({ content }) => {
    const variantOne = {
        initial: {
            y: 200,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChild: 0.1,
            }
        },
    };
    const variantTwo = {
        initial: {
            y: 260,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                staggerChild: 0.1,
            }
        },
    };
    const variantThree = {
        initial: {
            y: 300,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 3,
                staggerChild: 0.1,
            }
        },
    };

    const sectionRef = useRef(null);

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
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    const { title, desc, subtitleOne, subDescOne, subtitleTwo, subDescTwo, subtitleThree, subDescThree } = content
    return (
        <>
            <section ref={sectionRef} className={`${styles.counterSec} overflow-hidden`}>
                <Container fluid className='px-0'>
                    <Row className={styles.android}>
                        <h2 className='center'>{title}</h2>
                        <p className='center'>
                            {desc}
                        </p>
                    </Row>
                    <Row className='align-items-center w-100'>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantOne} initial="initial" whileInView="animate">
                                <Image src={ban1} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantTwo} initial="initial" whileInView="animate">
                                <Image src={ban2} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <motion.div className={`${styles.ImageDiv}`} variants={variantThree} initial="initial" whileInView="animate">
                                <Image src={ban3} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </motion.div>
                        </Col>

                    </Row>
                    <div className={styles.counterBack}>
                        <Row className={styles.counterRow}>
                            <Col lg={7} className='p-0'>
                                <Row className={styles.counterdigit}>
                                    <Col md={4} className={`col-6 ${styles.borderOne}`}>
                                        <h5>
                                            <span className='mb-0 d-inline counter' data-speed="4000">1998</span><span>+</span>
                                        </h5>
                                        <p>Founded</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderTwo}`}>
                                        <h5>
                                            <span className='mb-0 d-inline counter' data-speed="4000">3000</span><span>+</span>
                                        </h5>
                                        <p>Engineers</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderThree}`}>
                                        <h5>
                                            <span className='mb-0 d-inline counter' data-speed="4000">800</span><span>+</span>
                                        </h5>
                                        <p>Clients Served</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderFour}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline counter' data-speed="4000">5</span><span>+</span>
                                        </h5>
                                        <p className='mb-0'>R&D Labs</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderFive}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline counter' data-speed="4000">50</span><span>+</span>
                                        </h5>
                                        <p className='mb-0'>Client's Of<br /> 5+ Years</p>
                                    </Col>
                                    <Col md={4} className={`col-6 ${styles.borderSix}`}>
                                        <h5 className='pt-2'>
                                            <span className='mb-0 d-inline counter' data-speed="4000">40</span><span></span>
                                        </h5>
                                        <p className='mb-0'>Countries On Our <br />
                                            Global Delivery Map</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} className='p-0'>
                                <div className={styles.intransition}>
                                    <h6>What We Did For Our Clients</h6>
                                    <h3>Intransition <br /> At A Glance</h3>
                                    <div className={`${styles.btn}`}>
                                        <a href="javascript:;">
                                            Free Consultation
                                        </a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Whowearenew