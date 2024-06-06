import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/blogNew/BlogContent.module.css"
import Image from 'next/image';
// Images
import Arrow from "media/newblogs/blogArrow.png"
import BlogImage1 from "media/newblogs/blog-1.png"

const blogscontent = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }
    return (
        <>
            <section className={styles.blogcontent}>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.form}>
                                <form action="javascript:;">
                                    <select className={styles.search}>
                                        <option value="Blockchain" className='fontsfregular'>Blockchain</option>
                                        <option value="Development" className='fontsfregular'>Development</option>
                                        <option value="Game Development" className='fontsfregular'>Game Development</option>
                                    </select>
                                    <input type="text" />
                                    <button type='submit' className='fontsfregular'>Search</button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="tabs">
                                <ul className='d-flex align-items-center justify-content-between pt-5'>
                                    <li className={`${activeTab1 === 'tab1' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab1')}>
                                        All
                                    </li>
                                    <li className={`${activeTab1 === 'tab2' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab2')}>
                                        Blockchain
                                    </li>
                                    <li className={`${activeTab1 === 'tab3' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab3')}>
                                        eCommerce
                                    </li>
                                    <li className={`${activeTab1 === 'tab4' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab4')}>
                                        General
                                    </li>
                                    <li className={`${activeTab1 === 'tab5' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab5')}>
                                        Mobile Application
                                    </li>
                                    <li className={`${activeTab1 === 'tab6' ? styles.active : styles.nonActive} fontsfregular`} onClick={() => fun1('tab6')}>
                                        News
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col lg={12}>
                            <div className="tabs-body">
                                {activeTab1 == 'tab1' &&
                                    <div className='mt-4'>
                                        <Row>
                                            <Col lg={4}>
                                                <div className={styles.card}>
                                                    <div className={styles.cardImg}>
                                                        <Image src={BlogImage1} alt='Bitswits' className='img-fluid' />
                                                    </div>
                                                    <div className={styles.cardContent}>
                                                        <p>Blockchain</p>
                                                        <h5>Conquer Tech With Bitswits:
                                                            Your Path To Unstoppable Progress!</h5>
                                                        <p>Bitswits' Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                                        <div className={styles.btn}>
                                                            <a href="javascript:;" className='text-black'>
                                                                Read More
                                                                <Image src={Arrow} alt='Bitswits' className='ms-2' />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                }

                                {activeTab1 == 'tab2' &&
                                    <div>
                                        2
                                    </div>
                                }

                                {activeTab1 == 'tab3' &&
                                    <div>
                                        3
                                    </div>
                                }

                                {activeTab1 == 'tab4' &&
                                    <div>
                                        4
                                    </div>
                                }

                                {activeTab1 == 'tab5' &&
                                    <div>
                                        5
                                    </div>
                                }

                                {activeTab1 == 'tab6' &&
                                    <div>
                                        6
                                    </div>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default blogscontent
