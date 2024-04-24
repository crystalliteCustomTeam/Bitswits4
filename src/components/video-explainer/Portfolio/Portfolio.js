import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Portfolio.module.css"

const Portfolio = () => {
    return (
        <>
            <section className={styles.portfolioSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <h2>Our Impactful Offerings</h2>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Portfolio
