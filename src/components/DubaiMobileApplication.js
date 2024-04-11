import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiMobileApplication.module.css"
// Images 
import DubaiImage from "/public/newdubai/dubaiImage.png"

const DubaiMobileApplication = () => {
    return (
        <>
            <section className={styles.mobileApplicationSec}>
                <div className='container'>
                    <Row className='align-items-center'>
                        <Col lg={6}>
                            <h2>Bitswits More Than A Mere Mobile Application Development Company In Dubai</h2>
                            <p className='fontsfregular'>
                                The ingenious and disruptive mobile app solutions delivered by Bitswits skilled professionals have earned recognition, awards, and accolades globally, and this aspect primarily sets us apart from the rest of the mobile application development companies in Dubai. Utilizing the art of individualistic collectivism as fuel to empower our quest to revolutionize and disrupt, we aim to develop and deliver solutions that are scalable and designed to help businesses achieve their objectives.
                            </p>
                            <p className='fontsfregular'>
                                In addition to leveraging the art of collectivism, our experience of working with multiple industries plays an imperative role in enabling us to craft high-performing applications. With our work being backed by multiple awards and appreciation, you'll always have peace of mind that your mobile application is in the hands of professional app developers in Dubai. Moreover, we've won a lot of awards over the years, but here are the ones that we're proud of:
                            </p>
                            <div className={styles.btn}>
                                <Link href="javascript:;" className='text-white'>
                                    Let’s Get Started
                                </Link>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Image src={DubaiImage} alt='Bitswits' width={743} height={610} className='img-fluid' />
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiMobileApplication
