import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/FutureReady.module.css"
import Image from 'next/image'
// Images
import ios from "media/newmobileapp/ios.png"

const FutureReady = () => {
    return (
        <>
            <section className={styles.futureSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className="txt">
                                <h2>Future-Ready Solutions For <span>ROI-Driven Results!</span></h2>
                                <p>Bitswits' development of the ProEYE project, a wallet analytics and search engine platform on blockchain, was exceptional. Their comprehensive work, from requirement analysis to deployment, resulted in a highly functional, user-friendly platform with advanced analytics and robust data integration. Their attention to detail in every phase ensured ProEYE's success in the blockchain arena.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <div className={styles.cardTop}>
                                    <h3>IOS Application Development</h3>
                                    <Image src={ios} width={25} height={30} alt='Bitswits' />
                                </div>
                                <div className="cardContent">
                                    <p>
                                        We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design.We bring your iOS app ideas to life by using our comprehensive
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default FutureReady
