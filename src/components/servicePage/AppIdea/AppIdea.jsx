import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/AppIdea.module.css"
// Images
import AppIdeaMobile from "media/services/app-idea.svg"

const AppIdea = () => {
    return (
        <section className={styles.appIdeaSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.image}>
                                <Image src={AppIdeaMobile} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className={styles.secform}>
                                <h2 className='font-bold text-white manrope mb-3'>Quit Procrastinating and Build Your Dream Game Now!</h2>
                                <p className='font16 text-white font-medium manrope mb-md-4 pb-3'>Book your free consultation to learn how we create stunning games that enhance engagement and increase your revenue!</p>
                                <form>
                                    <Row className=''>
                                        <Col lg={6}>
                                            <div className="name">
                                                <input type="text" placeholder='Name*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="name">
                                                <input type="email" placeholder='Email*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="phone">
                                                <input type="number" placeholder='Phone*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="requirement">
                                                <input type="text" placeholder='App Requirements' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <button type='submit' className='manrope bitsForm'>
                                                Get Free Consultation
                                            </button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default AppIdea
