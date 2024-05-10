import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaPhoneAlt } from "react-icons/fa";
import styles from "@/styles/NewMobileApp/Location.module.css"
import Link from 'next/link';

const Location = () => {
    return (
        <>
            <section className={styles.locationSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <h2 className='mb-5'>
                                <span>Areas</span> We Serve
                            </h2>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.locations}>
                                <div className={styles.locate}>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al <br className='d-none d-lg-block' /> Mujarrah, Sharjah</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>DELAWARE</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>8 The Green STE 300, <br className='d-none d-lg-block' /> Dover DE 19901</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <Link href="tel:;">
                                            + 1 833 500 6007
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            + 1 312 379 5987
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>HOUSTON</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Williams Tower, 41St Floor <br className='d-none d-lg-block' /> 2800 Post Oak Blvd, Suite 4100 Houston, <br className='d-none d-lg-block' /> TX 77056</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <Link href="tel:;">
                                            + 1 713 565 7656
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>KARACHI</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>12Th Floor Caesar's Tower, <br className='d-none d-lg-block' />  Karachi, Pakistan</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <Link href="tel:;">
                                            +92 346 828 0101
                                        </Link>
                                    </div>
                                </div>
                                <div className={styles.locate}>
                                    <h3>LABUAN</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office 13 A - Main Office Tower <br className='d-none d-lg-block' />  Financial Park, Labuan , Malaysia</span>
                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' size={12} />
                                        <Link href="tel:;">
                                            +92 346 828 0101
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Location
