import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/AppIdea.module.css"
//====== Images
import appIdeaImg from "media/gameServices/appIdeaImg.png"

const AppIdea = () => {
    return (
        <section className={styles.appIdeaSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center justify-content-center gap-5'>
                        <Col lg={4}>
                            <div className={styles.image}>
                                <Image src={appIdeaImg} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.secform}>
                                <h2 className='font-bold text-white manrope mb-4'>Let's Change The World <br />
                                    With Your App Idea!</h2>
                                <form>
                                    <Row>
                                        <Col lg={12}>
                                            <div className="name">
                                                <input type="text" placeholder='Name*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="name">
                                                <input type="email" placeholder='Email*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="phone">
                                                <input type="number" placeholder='Phone*' className='manrope' />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <div className="requirement">
                                                <textarea name="message" id="message" placeholder='App Requirements' className='manrope'></textarea>
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
