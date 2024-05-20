import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Whowearenew.module.css";
//
import ban1 from "@/public/newdubai/ban1.webp"
import ban2 from "@/public/newdubai/ban2.png"
import ban3 from "@/public/newdubai/ban3.png"
import ArrowImage from "media/newdubai/slider-btn-arrow.png"

const Whowearenew = ({ content }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.5
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
            let startingPoint = Math.floor(counterInnerText * 0.6);
            let count = startingPoint;
            let speed = parseInt(item.dataset.speed) / (counterInnerText - startingPoint);
            const stop = setInterval(() => {
                item.textContent = count++;
                if (count > counterInnerText) {
                    clearInterval(stop);
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };

    const { title, desc, para, subtitleOne, subDescOne, subtitleTwo, subDescTwo, subtitleThree, subDescThree } = content
    return (
        <>
            <section ref={sectionRef} className={styles.counterSec}>
                <Container fluid>
                    <Row className={styles.android}>
                        <h2 className='center'>{title}</h2>
                        <p className='center p-0 mb-2'>{desc}</p>
                        <p className='center'>{para}</p>
                    </Row>
                    <Row className='align-items-center'>
                        <Col md={4} className='p-0'>
                            <div className={styles.caseBox}>
                                <div className={`${styles.ImageDiv}`}>
                                    <Image src={ban1} loading='lazy' className={`img-fluid mx-auto d-block`} />
                                </div>
                            </div>
                            <div className={`${styles.travelBox} ${styles.travel}`}>
                                <div>
                                    <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                        <h3>{subtitleOne}</h3>
                                        <Link href="/social-app-development-case-study">
                                            <Image src={ArrowImage} alt='Bitswits' className={`${styles.arrowImage} img-fluid`} />
                                        </Link>
                                    </div>
                                    <p className='white fontsfregular'>
                                        {subDescOne}
                                    </p>
                                </div>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">500K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">100K</p><span>+</span>
                                        </h4>
                                        <span>MAUs</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">300</p><span>%</span>
                                        </h4>
                                        <span>ROI</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={styles.caseBox}>
                                <div className={`${styles.ImageDiv}`}>
                                    <Image src={ban2} loading='lazy'  className={`img-fluid mx-auto d-block`} />
                                </div>
                            </div>
                            <div className={`${styles.travelBox} ${styles.travel2}`}>
                                <div>
                                    <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                        <h3>{subtitleTwo}</h3>
                                        <Link href="/hiring-app-development-case-study">
                                            <Image src={ArrowImage} alt='Bitswits' className={`${styles.arrowImage} img-fluid`} />
                                        </Link>
                                    </div>
                                    <p className='white fontsfregular'>
                                        {subDescTwo}
                                    </p>
                                </div>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">300K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">50K</p><span>+</span>
                                        </h4>
                                        <span>MAUs</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">250</p><span>%</span>
                                        </h4>
                                        <span>ROI</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={styles.caseBox}>
                                <div className={`${styles.ImageDiv}`}>
                                    <Image src={ban3} loading='lazy'  className={`img-fluid mx-auto d-block`} />
                                </div>
                            </div>
                            <div className={`${styles.travelBox} ${styles.travel3}`}>
                                <div>
                                    <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                        <h3>{subtitleThree}</h3>
                                        <Link href="/automobile-repair-app-development-case-study">
                                            <Image src={ArrowImage} alt='Bitswits' className={`${styles.arrowImage} img-fluid`} />
                                        </Link>
                                    </div>
                                    <p className='white fontsfregular'>
                                        {subDescThree}
                                    </p>
                                </div>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">200K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">70K</p><span>+</span>
                                        </h4>
                                        <span>MAUs</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="5">400</p><span>%</span>
                                        </h4>
                                        <span>ROI</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Whowearenew