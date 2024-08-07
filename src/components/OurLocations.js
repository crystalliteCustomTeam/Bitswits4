import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/OurLocations.module.css'
//
import arrow from "media/icons/rightArrow.png"
import circle from "media/icons/circle.png"

const locations = [
    { name: 'Austin', description: 'Mobile App Development in Austin' },
    { name: 'Chicago', description: 'Mobile App Development in Chicago' },
    { name: 'Dallas', description: 'Mobile App Development in Dallas' },
    { name: 'Denver', description: 'Mobile App Development in Denver' },
    { name: 'Dubai', description: 'Mobile App Development in Dubai' },
    { name: 'Florida', description: 'Mobile App Development in Florida' },
    { name: 'Houston', description: 'Mobile App Development in Houston' },
    { name: 'Miami', description: 'Mobile App Development in Miami' },
    { name: 'New York', description: 'Mobile App Development in New York' },
    { name: 'Saudi Arabia', description: 'Mobile App Development in Saudi Arabia' },
    { name: 'Toronto', description: 'Mobile App Development in Toronto' },
    { name: 'Washington Dc', description: 'Mobile App Development in Washington Dc' }
];

const OurLocations = () => {
    return (
        <>
            <section className={styles.locations}>
                <Container>
                    <Row className='gy-4'>
                        <Col lg={12}>
                            <h2 className="text-center text-white">
                                Our <span className="newfycolr">Locations</span>
                            </h2>
                        </Col>
                        {locations.map((location, index) => (
                            <Col md={6} lg={4} key={index}>
                                <div className={styles.locCard}>
                                    <div className={styles.title}>
                                        <h4>{location.name}</h4>
                                        <a href="javascript:$zopim.livechat.window.show();">
                                            <Image src={arrow} alt='Bitswits' className='img-fluid' />
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <Image src={circle} alt='Bitswits' className='img-fluid' />
                                        <p className='mb-0'>{location.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurLocations
