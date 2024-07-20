import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Fueling.module.css"
//====== Images
import fuelingImg from "media/gameServices/fuelingImg.png"

const Fueling = () => {
    return (
        <section className={styles.fuelingSec}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={styles.txt}>
                            <h2 className='manrope font-bold text-white mb-3'>Fueling Your <span className='newfycolr'>Ios App</span> With
                                Emerging Technologies</h2>
                            <p className='manrope font16 text-white mb-5 pb-xxl-3'>Unlock the full potential of your iOS app with our expert consultation services. We offer tailored advice to optimize your app’s design, functionality, and user experience.</p>
                            <div className={styles.ideaPart}>
                                <Row>
                                    <Col md={8}>
                                        <div className={styles.content}>
                                            <h3 className='manrope text-white font-bold mb-3'>No Risks With An MVP! Launch <br className={styles.br} /> Your IDEA To See How They Like It! </h3>
                                            <p className='mb-0 manrope text-white'>BitsWits believes in taking a creative, hands-on approach to mobile application development because we know it’s not just</p>
                                        </div>
                                    </Col>
                                    <Col md={4}>
                                        <div className={styles.image}>
                                            <Image src={fuelingImg} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className={styles.secBtn}>
                                <a href="#href">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ul className={styles.fuelingItems}>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                            <li className='mb-5'>
                                <h3 className='manrope font-bold text-white'>AI/ML</h3>
                                <p className='text-white font16 manrope mb-0'>As a leading iOS development firm, we have a team of talented developers who can transform your business by integrating advanced AI and ML solutions. Our iOS app development services harness the power of artificial intelligence to automate processes, drive innovation</p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default Fueling
