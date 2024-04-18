import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Whowearenew.module.css";
//
import ban1 from "@/public/newdubai/ban1.png"
import ban2 from "@/public/newdubai/ban2.png"
import ban3 from "@/public/newdubai/ban3.png"

const Whowearenew = ({ content }) => {
    const { title, desc, subtitleOne, subDescOne, subtitleTwo, subDescTwo, subtitleThree, subDescThree } = content
    return (
        <>
            <section className={styles.counter}>
                <Container fluid>
                    <Row className={styles.android}>
                        <h3 className='center'>Who We've</h3>
                        <h2 className='center'>{title}</h2>
                        <p className='center'>
                            {desc}
                        </p>
                    </Row>
                    <Row>
                        <Col lg={4} className={`d-flex align-items-end justify-content-center p-0 ${styles.ImageDiv}`}>
                            <Image src={ban1} width={368} height={374} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col lg={4} className={`d-flex align-items-end justify-content-center p-0 ${styles.ImageDiv}`}>
                            <Image src={ban2} width={368} height={374} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col lg={4} className={`d-flex align-items-end justify-content-center p-0 ${styles.ImageDiv}`}>
                            <Image src={ban3} width={368} height={374} className={`img-fluid ${styles.comm}`} />
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban1} width={368} height={374} className={`img-fluid mx-auto d-block d-md-none`} />
                            </div>
                            <div className={styles.travel}>
                                <h3>{subtitleOne}</h3>
                                <p className='white fontsfregular'>
                                    {subDescOne}
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban2} width={368} height={374} className={`img-fluid mx-auto d-block d-md-none`} />
                            </div>
                            <div className={styles.travel2}>
                                <h3>{subtitleTwo}</h3>
                                <p className='white fontsfregular'>
                                    {subDescTwo}
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban3} width={368} height={374} className={`img-fluid mx-auto d-block d-md-none`} />
                            </div>
                            <div className={styles.travel3}>
                                <h3>{subtitleThree}</h3>
                                <p className='white fontsfregular'>
                                    {subDescThree}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Whowearenew