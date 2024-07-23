import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/BasedCta2.module.css"
//====== Image
import ball from "media/gameServices/plus2.png"
import cube from "media/gameServices/dimond2.png"
import angel from "media/gameServices/megnet.png"
import basedImg from "media/gameServices/basedImg2.png"

const BasedCta2 = () => {
    return (
        <section className={`${styles.BasedCta2}`}>
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
                                <h2 className={`manrope font-bold text-white`}>SEO-<span className='newfycolr'>Based Section</span></h2>
                                <p className={`font16 manrope text-white mt-3 mb-4`}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.euismod tincidunt ut laoreet dolore.euismod tincidunt ut laoreet dolore.euismod tincidunt ut laoreet dolore.</p>
                            </div>
                            <div className={styles.serviBtn}>
                                <a href="#href">Let’s Discuss Your Project</a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`d-md-block d-none ${styles.secImage} mt-4 mt-lg-0`}>
                            <Image src={basedImg} alt='Bitswits' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default BasedCta2
