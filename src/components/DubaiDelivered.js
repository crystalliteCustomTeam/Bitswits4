import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiDelivered.module.css"
// Images
import ParticleOne from "/public/newDubaiPagev1/particale-1.png"
import ParticleTwo from "/public/newDubaiPagev1/particale-2.png"
import ParticleThree from "/public/newDubaiPagev1/particale-3.png"
import ParticleFour from "/public/newDubaiPagev1/particale-4.png"

const DubaiDelivered = () => {
    return (
        <>
            <section className={styles.DubaiDelivered}>
                <Image src={ParticleOne} alt='Bitswits' className={styles.particleOne} />
                <Image src={ParticleThree} alt='Bitswits' className={styles.particleThree} />
                <Image src={ParticleTwo} alt='Bitswits' className={styles.particleTwo} />
                <Image src={ParticleFour} alt='Bitswits' className={styles.particleFour} />
                <div className='container'>
                    <Row>
                        <Col sm={12}>
                            <h2>We've Delivered 100+ Mobile Applications <br /> To Clients Worldwide!</h2>
                            <p className='fontsfregular'>Your app idea can be the next game-changer! Do you wish to be on that list?</p>
                            <div className={styles.btn}>
                                <a href='javascript:;'>
                                    Check Reviews
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
