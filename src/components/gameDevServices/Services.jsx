import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Services.module.css"
//====== Image
import serviceImg from "media/gameServices/serviceImg.png"
import servIcn1 from "media/gameServices/servIcn1.png"
import servIcn2 from "media/gameServices/servIcn2.png"
import servIcn3 from "media/gameServices/servIcn3.png"
import angel from "media/gameServices/angel.png"

const Services = () => {
    return (
        <section className={styles.serviceSec}>
            <div className={styles.angle}>
                <Image src={angel} alt='Bitswits' className='img-fluid' />
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-white manrope font-bold mb-3'>Our <span className='newfycolr'>Services</span></h2>
                            <p className='font16 text-white manrope mb-lg-5 pb-lg-3'>We’re a software development company that ensures its expertise extends to offer a seamlessly <br className='d-none d-lg-block' /> productive and growth-oriented partnership</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.services}>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>Mobile App</span> Game Development</h3>
                                    <Image src={servIcn1} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>3D Game</span> Development</h3>
                                    <Image src={servIcn2} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>NFT Game</span> Development</h3>
                                    <Image src={servIcn3} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>Mobile App</span> Game Development</h3>
                                    <Image src={servIcn1} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>3D Game</span> Development</h3>
                                    <Image src={servIcn2} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3 className='manrope mb-0'><span className='newfycolr'>NFT Game</span> Development</h3>
                                    <Image src={servIcn3} alt='Bitswits' className='img-fluid' />
                                </div>
                                <div className="">
                                    <p className='font16 manrope text-white mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh </p>
                                    <div className={styles.edgeBtn}>
                                        <a href="#href" className='manrope font-bold'>Let’s Discuss Your Project</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={styles.serviceImg}>
                            <Image src={serviceImg} alt='Bitswits' className='img-fluid w-75 ms-auto d-lg-block d-none' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services
