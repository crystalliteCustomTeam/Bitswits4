import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/NewDubaiBussiness.module.css"
// Images
import Bussiness from "/public/newdubai/bussinessImage.png"

const NewDubaiBussiness = () => {
    return (
        <>
            <section className={styles.bussinessSec}>
                <div className='container'>
                    <Row>
                        <Col lg={10}>
                            <p className={`${styles.firstPara} fontsfregular`}>What Will</p>
                            <h2>Mobile App Design <br /> In
                                <span> UAE</span> Do For Your Business?</h2>
                            <p className={`${styles.secondPara} fontsfregular`}>
                                We understand that you're interested in the financial aspects first and foremost. When Bitswits started, iPhone apps were just beginning to trend, the App Store was new and shiny, and Google Play was just a fraction of the marketplace it is today. Since then, apps can generate revenues ranging from thousands to millions of dollars each year. In 2020, mobile app revenue reached more than $581.9 billion.
                            </p>
                            <h3>Build A Stronger Brand</h3>
                            <p className={` fontsfregular`}>The benefits of an app don’t just stop at monetary value; they are also a great way to provide value for your clients, build a stronger brand, and connect more effectively with your customers. Bitswits can help you develop a strategy that aligns with your goals and clients.</p>
                            <div>
                                <Link href="javascript:;" className={styles.btn}>
                                    Talk To Our Experts
                                </Link>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.bussinessImage}>
                                <Image src={Bussiness} alt='Bitswits' width={579} height={488} className='img-fluid d-xl-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default NewDubaiBussiness
