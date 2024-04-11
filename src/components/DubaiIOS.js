import React from 'react' 
import Image from 'next/image'; 
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiIOS.module.css"
// Images 
import AppleStore from "/public/newdubai/app-store.png"
import IOSmobile from "/public/newdubai/iosMobile.png"

const DubaiIOS = () => {
    return (
        <>
            <section className={styles.iosSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <Image src={AppleStore} width={60} height={60} alt='Bitswits' />
                            <h2>iOS App Development In Dubai</h2>
                            <p className='fontsfregular'>
                                Our iPhone app developers at Bitswits in Dubai are a team of top-tier strategists, designers, and developers. Every single Bitswits iPhone app undergoes thorough vetting.
                            </p>
                            <p className='fontsfregular'>
                                Some clients come to us with an idea, and we turn that idea into reality. For example, we built the Warby Parker app, which was featured in the App Store almost immediately after launch. Other clients come to us with an existing app but with ideas to improve it.
                            </p>
                            <p className='fontsfregular'>
                                When 9GAG approached Bitswits, they were looking for a revamped app to keep users engaged. We ultimately redesigned the 9GAG app and implemented new features to enhance the humor on mobile.
                            </p>
                        </Col>
                        <Col lg={5}>
                            <div className={styles.iosImage}>
                                <Image src={IOSmobile} width={627} height={555} alt='Bitswits' className='d-lg-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiIOS
