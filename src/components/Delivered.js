import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/Delivered.module.css";
// Images
import SecImage from "/public/newdubai/deliveredIcon.png"

const Delivered = () => {
    return (
        <>
            <section className={styles.counter}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Image src={SecImage} width={58} height={60} alt='BitsWits' className='mx-auto d-block mb-3' />
                            <h2>How Much Does It <br className='d-lg-block d-none' /> Cost To Make An App?</h2>
                            <p className='fontsfregular'>
                                The cost of developing an app can vary greatly depending on various factors. For a basic app to be up and running, you <br className='d-xl-block d-none' /> might need around <span className='text-primary-100'>$75,000</span>. However, this doesn't guarantee success.
                            </p>
                            <p className='fontsfregular'>
                                At Bitswits, a typical project starts at <span>$300,000</span>. This investment enables us to strategically develop your idea to ensure <br className='d-xl-block d-none' /> that your app brings the return on investment you're aiming for.
                            </p>
                            <Link href="javascript:$zopim.livechat.window.show();">Calculate Your App Cost</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Delivered