import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Platforms.module.css"
//====== Image
import platformImg from "media/gameServices/platformImg.png"
import dimond from "media/gameServices/dimond.png"
import circles from "media/gameServices/circles.png"

const Platforms = () => {
    return (
        <section className={styles.Platforms}>
            <Container>
                <div className={styles.gredientBg}>
                    <div className={styles.dimond}>
                        <Image src={dimond} alt='Bitswits' className='img-fluid' />
                    </div>
                    <div className={styles.circles}>
                        <Image src={circles} alt='Bitswits' className='img-fluid' />
                    </div>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <div className={styles.txt}>
                                <h2 className='manrope text-white'>
                                    Our Game App Developers Work On The World’s Biggest Platforms
                                </h2>
                                <p className='manrope font16 text-white'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                                <div className={styles.secBtn}>
                                    <a href="#href" className='manrope'>
                                        Get Free Consultation
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='d-lg-block d-none'>
                            <div className={styles.secImg}>
                                <Image src={platformImg} alt='Bitswits' className='img-fluid d-block' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Platforms
