import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Expertappdubaiadvanced.module.css";
//images
import banImg1 from '@/public/dubailp/services/1.png'
import banImg2 from '@/public/dubailp/services/2.png'
import banImg3 from '@/public/dubailp/services/3.png'
import banImg4 from '@/public/dubailp/services/4.png'
import banImg5 from '@/public/dubailp/services/5.png'
import banImg6 from '@/public/dubailp/services/6.png'
//
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const appData = [
    {
        title: 'Big Data',
        description: 'Big Data technology monitors large data sources and provides strategic directions in real-time. Our top expert mobile app developers in Dubai gear their work towards Big Data technology which will lead to your customers taking notice and staying put.',
        imageSrc: banImg2,
    },
    {
        title: 'Internet of Things (IoT)',
        description: 'IoT technology provides an effective way of collecting, accessing, automating, and many other necessary functions in real-time. Incorporating the latest technologies and market trends, our team from the app developers Dubai are the ones that actually build applications.',
        imageSrc: banImg3,
    },
    {
        title: 'Blockchain',
        description: 'Blockchain technology provides a safe and transparent environment for transactions. We are always in contact with our clients in order to deliver them indigenious digital products, which are based on Blockchain technology.',
        imageSrc: banImg1,
    },
    {
        title: 'AR/VR',
        description: 'Through our high-end AR/VR app development services, take your business to new heights. We are all about making a difference by pushing the innovation within the virtual reality realm and creating a deep impact that connects, holds, and captive the users. ',
        imageSrc: banImg6,
    },
    {
        title: 'AI/ML',
        description: (<> Experience the power of the future through our AI/ML apps. We used the most modern AI/ML technologies and developed very smart apps that constantly adjust and modify users' preferences. </>),
        imageSrc: banImg4,
    },
    {
        title: 'Cloud Computing',
        description: (<> Experience the next level of business growth with our cloud computing solutions. With scalable and secure cloud services, you can conveniently store, manage, and analyze your data by trusting our expert app development company Dubai.  </>),
        imageSrc: banImg5,
    },
];

export default function Expertappdubaiadvanced(props) {

    const mblSlider = {
        arrows: false,
        infinite: true,
        autoplay: true,
        dots: false,
        autoplaySpeed: 6000,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    };

    return (
        <>
            <section className={styles[props.expertapp]}>
                <Container>
                    <Row className='align-items-center g-2 d-none d-lg-flex'>
                        <Col lg={12} className={styles.newtown}>
                            <h2 className='black  f-700 center mb-3 mb-md-5'>
                                Advanced Technology Solutions for Large-Scale Businesses & Enterprises
                            </h2>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg2} className='img-fluid' />
                                    <h3 className=' black fw700'>Big Data</h3>
                                </div>
                                <p className='m-0'>Big Data technology monitors large data sources and provides strategic directions in real-time. Our top expert mobile app developers in Dubai gear their work towards Big Data technology which will lead to your customers taking notice and staying put. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg3} className='img-fluid' />
                                    <h3 className=' black fw700'>Internet of Things (IoT)</h3>

                                </div>
                                <p className='m-0'>IoT technology provides an effective way of collecting, accessing, automating, and many other necessary functions in real-time. Incorporating the latest technologies and market trends, our team from the app developers Dubai are the ones that actually build applications. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg1} className='img-fluid' />
                                    <h3 className=' black fw700'>Blockchain</h3>

                                </div>
                                <p className='m-0'>Blockchain technology provides a safe and transparent environment for transactions. We are always in contact with our clients in order to deliver them indigenious digital products, which are based on Blockchain technology.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg6} className='img-fluid' />
                                    <h3 className=' black fw700'>AR/VR</h3>
                                </div>
                                <p className='m-0'>Through our high-end AR/VR app development services, take your business to new heights. We are all about making a difference by pushing the innovation within the virtual reality realm and creating a deep impact that connects, holds, and captive the users. </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg4} className='img-fluid' />
                                    <h3 className=' black fw700'>AI/ML</h3>

                                </div>
                                <p className='m-0'>Experience the power of the future through our AI/ML apps. We used the most modern AI/ML technologies and developed very smart apps that constantly adjust and modify users' preferences.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.app}>
                                <div className={styles.copy}>
                                    <Image alt='BitsWits' src={banImg5} className='img-fluid' />
                                    <h3 className=' black fw700'>Cloud Computing</h3>

                                </div>
                                <p className='m-0'>Experience the next level of business growth with our cloud computing solutions. With scalable and secure cloud services, you can conveniently store, manage, and analyze your data by trusting our expert app development company Dubai. </p>
                            </div>
                        </Col>

                    </Row>

                    {/* For Mobile */}
                    <Row className='gy-5 d-block d-lg-none'>
                        <Col lg={12} >
                            <h2 className='black font50 f-700 center mb-5'>Advanced Technology Solutions for Large-Scale  <br></br> Businesses & Enterprises </h2>
                        </Col>
                        <Slider {...mblSlider} className={`mblSlider ${styles.mblSlider} dubaiSliders`}>
                            {appData.map((app, index) => (
                                <Col lg={4} key={index}>
                                    <div className={styles.app}>
                                        <div className={styles.copy}>
                                            <Image alt='BitsWits' src={app.imageSrc} className='img-fluid mb-3' />
                                            <h3 className=' black fw700'>{app.title}</h3>
                                        </div>
                                        <p className='m-0'>{app.description}</p>
                                    </div>
                                </Col>
                            ))}
                        </Slider>
                    </Row>
                </Container>

            </section>
        </>
    )
}

