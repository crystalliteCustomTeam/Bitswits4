import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiDelivered.module.css"
// Images
import ParticleOne from "/public/newDubaiPagev1/particale-1.png"
import ParticleTwo from "/public/newDubaiPagev1/particale-2.png"
import ParticleThree from "/public/newDubaiPagev1/particale-3.png"
import ParticleFour from "/public/newDubaiPagev1/particale-4.png"

const DubaiDelivered = ({ content }) => {
    const { title, desc, btntext } = content;

    return (
        <>
            <section className={styles.DubaiDelivered}  >
                <div>
                    <Image src={ParticleOne} alt='Bitswits' className={styles.particleOne} />
                </div>
                <div>
                    <Image src={ParticleThree} alt='Bitswits' className={styles.particleThree} />
                </div>
                <div>
                    <Image src={ParticleTwo} alt='Bitswits' className={styles.particleTwo} />
                </div>
                <div>
                    <Image src={ParticleFour} alt='Bitswits' className={styles.particleFour} />
                </div>
                <div className='container'>
                    <Row>
                        <Col sm={12}>
                            <h2>{title}</h2>
                            <p className='fontsfregular'>
                                {desc}
                            </p>
                            <div className={styles.btn}>
                                <a href='javascript:;'>
                                    <span>
                                        {btntext}
                                    </span>
                                    <span>
                                        {btntext}
                                    </span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiDelivered
