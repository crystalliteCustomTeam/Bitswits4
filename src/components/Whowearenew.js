import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Whowearenew.module.css";
//
import ban1 from "@/public/newdubai/ban1.png"
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
            <section ref={sectionRef} className={styles.counterSec}>
                <Container fluid>
                    <Row className={styles.android}>
                        {/* <h3 className='center'>Who We've</h3> */}
                        <h2 className='center'>{title}</h2>
                        <p className='center'>
                            {desc}
                        </p>
                    </Row>
                    <Row className='align-items-center'>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban1} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </div>
                            <div className={styles.travel}>
                                <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                    <h3>{subtitleOne}</h3>
                                    <Link href="/social-app-development-case-study">
                                        <Image src={ArrowImage} alt='Bitswits' className={styles.arrowImage} width={30} height={23} />
                                    </Link>
                                </div>
                                <p className='white fontsfregular'>
                                    {subDescOne}
                                </p>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">500K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">100K</p><span>+</span>
                                        </h4>
                                        <span>MAU</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">300</p><span>%</span>
                                        </h4>
                                        <span>ROI</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban2} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </div>
                            <div className={styles.travel2}>
                                <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                    <h3>{subtitleTwo}</h3>
                                    <Link href="/hiring-app-development-case-study">
                                        <Image src={ArrowImage} alt='Bitswits' className={styles.arrowImage} width={30} height={23} />
                                    </Link>
                                </div>
                                <p className='white fontsfregular'>
                                    {subDescTwo}
                                </p>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">300K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">50K</p><span>+</span>
                                        </h4>
                                        <span>MAU</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">250</p><span>%</span>
                                        </h4>
                                        <span>ROI</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban3} width={368} height={374} className={`img-fluid mx-auto d-block`} />
                            </div>
                            <div className={styles.travel3}>
                                <div className={`d-flex align-items-center justify-content-between mb-2 ${styles.txt}`}>
                                    <h3>{subtitleThree}</h3>
                                    <Link href="/automobile-repair-app-development-case-study">
                                        <Image src={ArrowImage} alt='Bitswits' className={styles.arrowImage} width={30} height={23} />
                                    </Link>
                                </div>
                                <p className='white fontsfregular'>
                                    {subDescThree}
                                </p>
                                <div className={styles.counter}>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">200K</p><span>+</span>
                                        </h4>
                                        <span>Installs</span>
                                    </div>
                                    <div>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">70K</p><span>+</span>
                                        </h4>
                                        <span>MAU</span>
                                    </div>
                                    <div className={styles.lastCount}>
                                        <h4>
                                            <p className='mb-0 d-inline counter' data-speed="4000">400</p><span>%</span>
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