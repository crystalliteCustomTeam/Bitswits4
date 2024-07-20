import React from 'react'
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Banner.module.css"
//====== Image
import logos from "media/services/logos.svg"

const Banner = () => {
    return (
        <section className={styles.banner}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7}>
                        <div className="txt">
                            <p className={`${styles.gradient} font20 manrope font-bold mb-3`}>Quickly – Efficiently – Effortlessly</p>
                            <h1 className='font-bold manrope text-white'>The Ultimate <span className={styles.gradient2}>Mobile Game Development</span> Company</h1>
                            <p className='font16 manrope text-white my-3 py-3'>We’re a software development company that ensures its expertise extends to offer a seamlessly productive and growth-oriented partnership to its client’s goals, and internal teams.</p>
                            <div className="btn d-flex align-items-center gap-4 px-0">
                                <a href="#href" className={`${styles.demoBtn} font-bold manrope`}>
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                        <div className="logos pt-5">
                            <Image src={logos} alt='Bitswits' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
