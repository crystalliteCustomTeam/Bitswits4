import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Whowearenew.module.css";
//
import ban1 from "@/public/newdubai/ban1.png"
import ban2 from "@/public/newdubai/ban2.png"
import ban3 from "@/public/newdubai/ban3.png"


const Whowearenew = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container fluid>
                    <Row className={styles.android}>
                        <h3 className='center'>Who We've</h3>
                        <h2 className='center'>Developed Android Apps For</h2>
                        <p className='center'>
                            We work with the best of the best to create the best of the best. We feel passionately about the projects we choose to take on <br /> and that means you get an invested team that will do everything in their power to turn your idea into a full-fledged app.
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
                                <h3>Social Media App</h3>
                                <p className='white fontsfregular'>
                                    Soul Scribe is a social networking app that works as a digital diary. Its unique feature is to invite friends and family to be part of your online journal. The app operates on a freemium subscription model, offering a complimentary family room option that allows users to invite peers to contribute to their memories.
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban2} width={368} height={374} className={`img-fluid mx-auto d-block d-md-none`} />
                            </div>
                            <div className={styles.travel2}>
                                <h3>Music App</h3>
                                <p className='white fontsfregular'>
                                    Beats, a music app, showcases music albums, lets users collaborate with other application users, and brings together a community of music enthusiasts, all within our vibrant and supportive platform.
                                </p>
                                <p className='white fontsfregular'>
                                    It stands out from the rest with its unique feature that allows users to not only create their own music but also share their albums with a global audience.
                                </p>
                            </div>
                        </Col>
                        <Col md={4} className='p-0'>
                            <div className={`${styles.ImageDiv}`}>
                                <Image src={ban1} width={368} height={374} className={`img-fluid mx-auto d-block d-md-none`} />
                            </div>
                            <div className={styles.travel3}>
                                <h3>Automobile App</h3>
                                <p className='white fontsfregular'>
                                    Grease Monkey is your automotive innovation platform that provides a thorough answer to all your car repair needs. From services and prices to locations and client reviews, we help you make informed decisions for your vehicle
                                </p>
                                <p className='white fontsfregular'>
                                    We take convenience to a whole new level. By just a few taps, you can specify your vehicle, choose a service, select the date and time, and complete the payment process - all within the app.
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