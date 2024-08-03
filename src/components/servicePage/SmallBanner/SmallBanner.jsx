import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SmallBanner.module.css"
// Images
import ImageOne from "media/services/smallBannerImg.svg"
import Image from 'next/image'

const SmallBanner = ({
    title="Hook Your Audience with Our Studio’s Optimized Games Across Any Genre!",
    desc="Launch a glitch-free, full-cycle game with optimized UX and stunning graphics, developed by our expert game artists!",
    cta="Let’s Connect!"
}) => {
    return (
        <section className={styles.SmallBannerSec}>
            <Container>
                <div className={styles.gredientBg}>
                    <Row className='align-items-center'>
                        <Col lg={6} className='p-0'>
                            <div className={styles.txt}>
                                <h2 className='manrope font-bold text-white'>
                                {title}
                                </h2>
                                <p className='manrope font-medium font16 text-white'>{desc}</p>
                                <div className={styles.secBtn}>
                                    <a href="#href" className='manrope'>
                                    {cta}
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
