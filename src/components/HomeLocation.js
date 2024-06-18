import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../../styles/HomeLocation.module.css'
const HomeLocation = () => {

    const video = {
        FooterVideo: "https://download-video.akamaized.net/v3-1/playback/f0ca06d4-f35a-4c35-a18f-41e858a56e0c/6d3eba33?__token__=st=1718735411~exp=1718749811~acl=%2Fv3-1%2Fplayback%2Ff0ca06d4-f35a-4c35-a18f-41e858a56e0c%2F6d3eba33%2A~hmac=b5456e77c5399d11521651c3fe6938113c051493979e1b88b7b7ed8b82f49b0c&r=dXMtZWFzdDE%3D"
    }

    return (
        <>
            <section className={styles.locations}>
                <div className={styles.upside}>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <p className="f-30 f-montserrat f-700 newfycolr f-uppercase mb-0 text-center">
                                    Areas We Serve
                                </p>
                                <h3 className="newchoose f-playfair white f-700 text-center mb-0">
                                    Our Locations Globally
                                </h3>
                            </Col>
                            <Col lg={12}>
                                {video && (
                                    <video autoPlay loop muted src={video.FooterVideo} type="video/mp4" className='w-100 h-100'></video>
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default HomeLocation