import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/DeliveredBlack.module.css";
// Images
import SecImage from "/public/newdubai/deliveredIcon.png"

const DeliveredBlack = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image src={SecImage} width={58} height={60} alt='BitsWits' className='mx-auto d-block mb-3' />
                            <h2>How Much Money <br className='d-lg-block d-none' /> Can An App Earn?</h2>
                            <p className='fontsfregular'>
                                The profitability of releasing an app has increased exponentially since apps were first introduced. The top 200 apps have <br /> an average daily revenue of<span > $75,000</span>, while the top 8,000 apps have an average daily revenue of <span > $3,500</span>. The numbers <br />convey different messages depending on the perspective you take, and that's where we can help you.
                            </p>
                            <p className='fontsfregular'>
                                Bitswits can help you gain insight into the potential profit of your app idea. From there, we can assist you in launching <br /> your app and developing post-launch monetization strategies.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default DeliveredBlack