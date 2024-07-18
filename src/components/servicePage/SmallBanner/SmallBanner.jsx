import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SmallBanner.module.css"
// Images
import ImageOne from "media/services/smallBannerImg.svg"
import Image from 'next/image'

const SmallBanner = () => {
    return (
        <section className={styles.SmallBannerSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center'>
                        <Col lg={6} className='p-0'>
                            <div className={styles.txt}>
                                <h2 className='manrope font-bold text-white'>
                                    No Risks With An MVP!
                                    Launch Your IDEA To See
                                    How They Like It!
                                </h2>
                                <p className='manrope font-medium font16 text-white'>BitsWits believes in taking a creative, hands-on approach to mobile application development because we know it’s not just</p>
                                <div className={styles.secBtn}>
                                    <a href="#href" className='manrope'>
                                        Get Free Consultation
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className='d-lg-block d-none'>
                            <div className="secImg">
                                <Image src={ImageOne} alt='Bitswits' className='img-fluid ms-auto d-block' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default SmallBanner
