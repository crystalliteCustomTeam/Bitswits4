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
                            <h2>
                                <span>Areas</span> We Serve
                            </h2>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.locations}>
                                <div>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al Mujarrah, Sharjah</span>

                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al Mujarrah, Sharjah</span>

                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al Mujarrah, Sharjah</span>

                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al Mujarrah, Sharjah</span>

                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3>Sharjah</h3>
                                    <p>Address</p>
                                    <span className={styles.address}>Office #101, 32 Street, Al Mujarrah, Sharjah</span>

                                    <div className={styles.number}>
                                        <FaPhoneAlt className='me-2' />
                                        <Link href="tel:;">
                                            +971 555 031266
                                        </Link>
                                        <span className='mx-2'>|</span>
                                        <Link href="tel:;">
                                            +971 551 659060
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
