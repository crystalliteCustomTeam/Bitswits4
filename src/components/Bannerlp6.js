import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerlp6.module.css";
import dynamic from "next/dynamic";
//
// import LpCarousel from '../components/LpCarousel';
const LpCarousel = dynamic(() => import("../components/LpCarousel"), { ssr: false });
const AndriodBanner = (props) => {
    return (
        <>
            <section className={styles[props.newHomeBgprops]} >
                <Container>
                    <Row>
                        <Col lg={12}>
                            {props.subtitle}
                            {props.title}
                            {props.para}
                            {props.btn2}
                            <div className='mt-5 center d-none d-lg-block'>
                                <LpCarousel />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AndriodBanner