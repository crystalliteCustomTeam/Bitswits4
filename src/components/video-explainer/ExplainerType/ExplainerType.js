import React from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/ExplainerType.module.css"
import Image from 'next/image'
// ===== Images 
import Card1 from "media/videoexplainer/ty-ex-icon-1.png"
import Card2 from "media/videoexplainer/ty-ex-icon-2.png"
import Card3 from "media/videoexplainer/ty-ex-icon-3.png"
import Card4 from "media/videoexplainer/ty-ex-icon-4.png"
import Card5 from "media/videoexplainer/ty-ex-icon-5.png"
import Card6 from "media/videoexplainer/ty-ex-icon-6.png"

const ExplainerType = () => {
    return (
        <>
            <section className={styles.ExplainerTypeSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={styles.txt}>
                                <h2>
                                    Types of Explainer Videos
                                </h2>
                                <p>
                                    Explainer Videos LLC is a renowned name in the video animation industry. Our experts produce all types of animation videos with the usage of modern devices and techniques, some are discussed below:
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.card}>
                                <Image src={Card1} alt='Bitswits' />
                                <h3>Whiteboard Animation Video</h3>
                                <p>
                                    Whiteboard videos entail simulating black-line graphics on a white background while guiding viewers through the entire concept or idea.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default ExplainerType
