import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewDubiaAwards.module.css"
import Slider from 'react-slick'
// Images    
import Star from "/public/newDubaiPagev1/star.png"
import Slider1 from "/public/newDubaiPagev1/award1.png"
import Slider2 from "/public/newDubaiPagev1/award2.png"
import Slider3 from "/public/newDubaiPagev1/award3.png"
import Slider4 from "/public/newDubaiPagev1/award4.png"
import Slider5 from "/public/newDubaiPagev1/award5.png"
import Slider6 from "/public/newDubaiPagev1/award6.png"
import Slider7 from "/public/newDubaiPagev1/award7.png"
import Slider8 from "/public/newDubaiPagev1/award8.png"
import Slider9 from "/public/newDubaiPagev1/award9.png"
import Slider10 from "/public/newDubaiPagev1/award10.png"
import Slider11 from "/public/newDubaiPagev1/award11.png"

const NewDubaiAwards = ({ content }) => {
    const { title, desc } = content
    var awardSlider = {
        autoPlay: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    dots: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.awardSec}>
                <Container>
                    <Row className='align-items-center'>
                        <Col md={7}>
                            <div>
                                <h3 className={styles.awardsHeading}>
                                    {title}
                                </h3>
                                <p className='fontsfregular'>
                                    {desc}
                                </p>
                                <div className={styles.btn}>
                                    <a href='javascript:;'>
                                        Check Reviews
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className={styles.pageReviews}>
                                <p className={`mb-0`}>
                                    65 reviews on clutch
                                </p>
                                <h4>4.9</h4>
                                <div className={styles.reviews}>
                                    <Image src={Star} alt='Reviews' />
                                    <Image src={Star} alt='Reviews' />
                                    <Image src={Star} alt='Reviews' />
                                    <Image src={Star} alt='Reviews' />
                                    <Image src={Star} alt='Reviews' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* award slider Start */}
            <section className={styles.awardsliderSec}>
                <Container>
                    <Row>
                        <Col sm={12}>
                            <Slider {...awardSlider} className='dubaiClientSlider dubaiSliders'>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider1} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Horizon Award</h6>
                                            <p className='mb-0 fontsfregular '>Gold Award Winner <br className='d-md-block d-none' /> 2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider2} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Dot Comm</h6>
                                            <p className='mb-0 fontsfregular'>Excellence in Web Creativity & <br className='d-xxl-block d-none' /> Digital Communication</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider3} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>INC. 5000</h6>
                                            <p className='mb-0 fontsfregular'>America's Fastest Growing <br className='d-xxl-block d-none' /> Companies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider4} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Rank Watch</h6>
                                            <p className='mb-0 fontsfregular'>Top Web Development <br className='d-xxl-block d-none' />
                                                Agencies 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider5} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Horizon Award</h6>
                                            <p className='mb-0 fontsfregular'>Silver Awards Winner <br className='d-md-block d-none' />
                                                2020</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider6} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Clutch</h6>
                                            <p className='mb-0 fontsfregular'>Top 1000 <br className='d-md-block d-none' />
                                                Companies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider7} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Right firms</h6>
                                            <p className='mb-0 fontsfregular'>Top Mobile App Development <br className='d-xxl-block d-none' /> Company 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider8} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Top Developers</h6>
                                            <p className='mb-0 fontsfregular'>Top Entertainment App <br className='d-xxl-block d-none' />
                                                Developers</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider9} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Expertise</h6>
                                            <p className='mb-0 fontsfregular'>Best Mobile App <br className='d-md-block d-none' />
                                                Developer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider10} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Top Rated</h6>
                                            <p className='mb-0 fontsfregular'>Top App Development <br className='d-xxl-block d-none' /> Companies</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <div className={styles.sliderCards}>
                                        <div className={styles.imageDiv}>
                                            <Image src={Slider11} alt="Bitswits" className='mx-auto' />
                                        </div>
                                        <div className={styles.sliderTxt}>
                                            <h6>Web Excelllence</h6>
                                            <p className='mb-0 fontsfregular'>Web Excellence <br className='d-md-block d-none' />
                                                Awards</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* award slider Start */}
        </>
    )
}

export default NewDubaiAwards