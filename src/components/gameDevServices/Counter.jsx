"use client"
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Counter.module.css";

const counters = [
    { number: '60K', description: 'Our Active User' },
    { number: '67K', description: 'Our Artwork' },
    { number: '47K', description: 'Available Artist' },
    { number: '42K', description: 'Our Products', noBorder: true }
];

const Counter = () => {

    return (
        <section className={styles.counterSec}>
            <Container>
                <Row>
                    {counters.map((counter, index) => (
                        <Col lg={3} key={index}>
                            <div className={`${styles.counter} ${counter.noBorder ? styles.noBorder : ''}`}>
                                <h3 className='manrope'>{counter.number}</h3>
                                <p className='manrope'>{counter.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default Counter
