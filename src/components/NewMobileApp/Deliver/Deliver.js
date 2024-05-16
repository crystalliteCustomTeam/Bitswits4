import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/NewMobileApp/Deliver.module.css';
import icon1 from 'media/newmobileapp/icon1.png';
import icon2 from 'media/newmobileapp/icon2.png';
import icon3 from 'media/newmobileapp/icon3.png';
import Slider from 'react-slick';

const CardComponent = ({ activeIndex, setActiveIndex }) => {
    const [isMobile, setIsMobile] = useState(false);
    const cards = [
        {
            title: 'Clear Communication',
            content:
                'We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.',
        },
        {
            title: 'Customer-Centric Approach',
            content:
                'We prioritize our client\'s success, understand your unique needs, and deliver tailored solutions that drive your business growth.',
        },
        {
            title: 'Innovation and Excellence',
            content:
                'We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends.',
        },
    ];

    const handleCardHover = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`d-flex align-items-center ${styles.cardContainer}`}>
            {cards.map((card, index) => (
                <div className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
                    key={index}
                    onMouseEnter={() => handleCardHover(index)}>
                    <div className={styles.imgBox}>
                        {index === 0 && <Image src={icon1} alt='BitsWits' className='img-fluid' />}
                        {index === 1 && <Image src={icon2} alt='BitsWits' className='img-fluid' />}
                        {index === 2 && <Image src={icon3} alt='BitsWits' className='img-fluid' />}
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.content}</p>
                </div>
            ))}
        </div>
    );
};

const Deliver = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    var deliverSlider = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
        pauseOnHover: true,
    };
    return (
        <section className={styles.deliver}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2>How <span>Bitswits</span> Helps You Deliver <br /> The Best Results</h2>
                    </Col>
                    <Col lg={12}>
                        <div className={`d-none d-md-block ${styles.mainDeliver}`}>
                            <CardComponent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                        </div>
                        <Slider {...deliverSlider} className='d-block d-md-none'>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon1} alt='BitsWits' className='img-fluid' />
                                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Clear Communication</h3>
                                    <p>We build relationships based on integrity and trust, deliver on our promises, and always maintain clear communication.</p>
                                </div>
                            </div>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon2} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Customer-Centric Approach</h3>
                                    <p>We prioritize our client\'s success, understand your unique needs, and deliver tailored solutions that drive your business growth.</p>
                                </div>
                            </div>
                            <div>
                                <div className={`${styles.card}`}>
                                    <div className={styles.imgBox}>
                                        <Image src={icon3} alt='BitsWits' className='img-fluid' />
                                    </div>
                                    <h3>Innovation and Excellence</h3>
                                    <p>We consistently deliver innovative, highquality solutions as a team on the cutting edge of technology trends.</p>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.btns}>
                            <a href="javascript:;">Let’s Discuss Your Project</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Deliver;