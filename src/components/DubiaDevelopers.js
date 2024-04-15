import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiDevelopers.module.css"

// Images     
import Building from "/public/newDubaiPagev1/builingImage.png"

const DubiaDevelopers = () => {
    return (
        <>
            <section className={styles.dubaiSec}>
                <div className='container'>
                    <Row>
                        <Col sm={12} xl={8}>
                            <div className={styles.txt}>
                                <h2>Dubai App Developers</h2>
                                <p className={`${styles.mainPara} fontsfregular`}>
                                    Bitswits has been a leader in mobile app development in Dubai for over a decade. We have a proven track record of creating product-driven apps that speak for themselves through their high app store ratings and notoriety.
                                </p>
                                <h4>Collaborate Globally</h4>
                                <p className='fontsfregular'>At Bitswits in Dubai, our team of app developers, designers, and strategists collaborates with our global counterparts, enabling us to work in any time zone. Whether you require native iOS or Android app development or web design and development, our global team of digital transformation strategists is committed to lean methodology and agile development, ensuring you achieve the optimal ROI.</p>
                                <h4>Quality Products</h4>
                                <p className='fontsfregular'>With our agile methodology, growth-led strategy, and over 12 years of experience, we guarantee the delivery of top-notch products. Through careful analysis and insights gleaned from user feedback, each iteration is meticulously crafted to not only achieve award-winning status but also to meet your overarching business objectives.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.buildingImage}>
                                <Image src={Building} width={752} height={742} alt='Bitswits' className='d-xl-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubiaDevelopers
