import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiAndrios.module.css"
// Images 
import PlayStore from "/public/newdubai/play-store.png"
import Andriodmobile from "/public/newdubai/andriodMobile.png"

const DubaiAndriod = () => {
    return (
        <>
            <section className={styles.iosSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={5}>
                            <div className={styles.iosImage}>
                                <Image src={Andriodmobile} width={650} height={508} alt='Bitswits' className='d-lg-block d-none' />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <Image src={PlayStore} width={60} height={60} alt='Bitswits' />
                            <h2>Android App Development In Dubai</h2>
                            <p className='fontsfregular'>
                                Bitswits also develops and designs apps for the Google Play Store. Our Android app developers have successfully transitioned chart-topping App Store icons to the Play Store.
                            </p>
                            <p className='fontsfregular'>
                                Our product managers work on both iOS and Android projects, implementing the same proven strategies across both platforms. Some clients, such as QuizUp, have requested an Android version of their iOS-only app.
                            </p>
                            <p className='fontsfregular'>
                                Others, like MGM Resorts International, have requested both Android and iOS builds to reach the largest possible user base. Bitswits' mobile app development has consistently delivered real business results for our clients.
                            </p>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiAndriod