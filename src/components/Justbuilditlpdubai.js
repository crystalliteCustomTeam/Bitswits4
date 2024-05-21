import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Justbuilditlpdubai.module.css'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import banImg1 from '@/public/images/banner/bannerImg1.png'
import banImg2 from '@/public/images/banner/bannerImg2.png'
import banImg3 from '@/public/images/banner/bannerImg1.png'
import banImg4 from '@/public/images/banner/bannerImg2.png'
import banImg5 from '@/public/images/banner/bannerImg1.png'

const Justbuilditlpdubai = (props) => {

    var bannerslider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 20000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <section className={`${styles[props.slide]} ${props.css}`}>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <h2 className={styles.title}><span>{props.title1}</span> {props.title}</h2>
                            <p className={styles.para}>{props.para}</p>
                            <div className={styles.pont}>
                                <a className={`blueShade ${styles.about1}`} href={props.href}>
                                    Call Now
                                </a>
                                <a className={`pink ${styles.about}`} href="javascript:$zopim.livechat.window.show();">
                                    Live Chat
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Slider {...bannerslider} className='mt-5 d-sm-block d-none'>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" sizes="100vw" loading='lazy' src={banImg1} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" sizes="100vw" loading='lazy' src={banImg2} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" sizes="100vw" loading='lazy' src={banImg3} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" sizes="100vw" loading='lazy' src={banImg4} className="img-fluid" />
                    </div>
                    <div className={styles.strpImg}>
                        <Image alt="BitsWits" sizes="100vw" loading='lazy' src={banImg5} className="img-fluid" />
                    </div>
                </Slider>
            </section>
        </>
    )
}

export default Justbuilditlpdubai