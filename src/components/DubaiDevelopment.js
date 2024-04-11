import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Delivered.module.css";
// Images
import AppStore from "/public/newdubai/app-store.png"
import PlayStore from "/public/newdubai/play-store.png"
import VS from "/public/newdubai/vs.png"

const DubaiDevelopment = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='d-flex align-items-center justify-content-center gap-4 mb-4'>
                                <Image src={AppStore} width={60} height={60} alt='BitsWits' />
                                <Image src={VS} width={54} height={30} alt='BitsWits' />
                                <Image src={PlayStore} width={54} height={60} alt='BitsWits' />
                            </div>
                            <h2>iOS App Development vs <br className='d-lg-block d-none' /> Android App Development</h2>
                            <p className='fontsfregular'>
                                Mobile apps aren’t the new kids on the block anymore. There were <span>129.1 million</span> Android devices in 2020. Android apps <br /> reach a larger international audience, due to the ubiquity and accessibility of Android devices worldwide, however iOS <br /> mobile app’s revenue was almost double The Google Play Store’s apps at <span>$72.3 billion</span> in 2020.
                            </p>
                            <Link href="javascript:$zopim.livechat.window.show();">Talk To Our Experts</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DubaiDevelopment