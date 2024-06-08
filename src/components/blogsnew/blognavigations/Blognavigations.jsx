import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/Blognavigations.module.css"

const Blognavigations = () => {
    return (
        <>
            <section className={styles.sidebar}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.navigations}>
                                <div className={styles.mainHeading}>
                                    <h3 className='fontsfregular'>
                                        Navigation
                                    </h3>
                                </div>
                                <ul className={styles.navHeadings}>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Development Of A Crypto Exchange  <br />Platform App</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Tech Stack For Development</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Security Measurements</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Development Of A Crypto Exchange <br /> Platform App</a>
                                    </li>
                                    <li>
                                        <a href='javascript:;' className='fontsfregular text-black'>Tech Stack For Development</a>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.articles}>
                                <h3 className='fontsfregular'>Relevant Articles</h3>
                                <ul className='mt-4'>
                                    <li>
                                        <p className='fontsfregular'>Blockchain</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>Mobile Application</p>
                                        <h6 className='fontsfregular'>Frequently Asked Questions <br />Regarding The Development Of <br />Cryptocurrency Exchange Software</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>General</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                    <li>
                                        <p className='fontsfregular'>Mobile Application</p>
                                        <h6 className='fontsfregular'>Conquer Tech With Bitswits: <br />
                                            Your Path To Unstoppable Progress!</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.services}>
                                <h3 className='fontsfregular mb-4'>
                                    See Our Relsted Services
                                </h3>
                                <ul>
                                    <li>
                                        Mobile App Development
                                    </li>
                                    <li>
                                        Blockchain App Development
                                    </li>
                                    <li>
                                        React Native
                                    </li>
                                    <li>
                                        Game App Development
                                    </li>
                                    <li>
                                        Artificial Intelligence
                                    </li>
                                    <li>
                                        Android App Development
                                    </li>
                                    <li>
                                        iOS App Development
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Blognavigations
