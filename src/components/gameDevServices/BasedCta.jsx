import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/BasedCta.module.css"
//====== Image
import ball from "media/gameServices/ball.png"
import cube from "media/gameServices/cube2.png"
import angel from "media/gameServices/angel2.png"
import basedImg from "media/gameServices/basedImg.png"


const BasedCta = () => {
    return (
        <section className={`${styles.BasedCta}`}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className={styles.content}>
                            <div className={styles.cube}>
                                <Image src={cube} alt='Bitswits' className='img-fluid' />
                            </div>
                            <div className={styles.angel}>
                                <Image src={angel} alt='Bitswits' className='img-fluid' />
                            </div>
                            <div className={styles.txt}>
                                <div className={styles.ball}>
                                    <Image src={ball} alt='Bitswits' className='img-fluid' />
                                </div>
                                <h2 className={`manrope font-bold`}>SEO-<span className='newfycolr'>Based Section</span></h2>
                                <p className={`font16 manrope mt-3 mb-4`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
                            </div>
                            <div className={styles.serviBtn}>
                                <a href="#href" className='pink'>Let’s Discuss Your Project</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`d-md-block d-none ${styles.secImage}`}>
                            <Image src={basedImg} alt='Bitswits' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BasedCta
