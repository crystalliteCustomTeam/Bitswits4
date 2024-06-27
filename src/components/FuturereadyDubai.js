import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap'
import styles from "@/styles/futureReadyDubai.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Bitswitspopup from "../components/Bitswitspopup";
import { RxCross2 } from "react-icons/rx";
// Images
import ios from "media/newmobileapp/ios.png"
import andriod from "media/newmobileapp/andriod.png"
import native from "media/newmobileapp/native.png"
import flutter from "media/newmobileapp/flutter.png"
import cross from "media/newmobileapp/cross.png"
import webdevelopment from "media/newmobileapp/webdevelopment.png"
import Slider from 'react-slick'

const FutureReady = ({ content }) => {
    const { subtitle, title, para, subPara, accordionData } = content;

    var FutureSlider = {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 200,
    };

    // Modal 
    const [show, setShow] = useState(false);
    function modal(e) {
        e.preventDefault();
        setShow(true);
    }

    function closemodal() {
        setShow(false);
    }

    return (
        <>
            <section id='services' className={styles.futureSec}>
                <div className="container">
                    <Row>
                        <Col lg={12}>
                            <div className={`${styles.txt} text-center`}>
                                <h4>
                                    {subtitle}
                                </h4>
                                <h2>
                                    {title}
                                </h2>
                                <p className="fontsfregular mb-3">
                                    {para}
                                </p>
                                <p className="fontsfregular mb-3 mb-md-0">
                                    {subPara}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <div className='d-md-block d-none mt-5'>
                        <div className={styles.cardsRow}>
                            {accordionData.map((item, index) => (
                                <div key={index} className={`${styles.cardMain} p-2`}>
                                    <div className={`${styles.iosCard} ${styles.card}`}>
                                        <div className={styles.cardTop}>
                                            <h3>{item.question}</h3>
                                        </div>
                                        <div className="cardContent">
                                            <p>
                                                {item.answer}
                                            </p>
                                        </div>
                                        <div className={styles.btn}>
                                            <button onClick={modal} className='pink'>{item.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='d-md-none d-block'>
                        <Slider {...FutureSlider} className='futureSlider'>
                            {accordionData.map((item, index) => (
                                <div key={index} className={`${styles.cardMain} p-2`}>
                                    <div className={`${styles.iosCard} ${styles.card}`}>
                                        <div className={styles.cardTop}>
                                            <h3>{item.question}</h3>
                                        </div>
                                        <div className="cardContent">
                                            <p>
                                                {item.answer}
                                            </p>
                                        </div>
                                        <div className={styles.btn}>
                                            <button onClick={modal} className='pink'>{item.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            {/* Modal Start*/}
            <Modal show={show} onHide={closemodal} className={styles.modalnew}>
                <Modal.Body>
                    {" "}
                    <Bitswitspopup formsaspire="popquote" />{" "}
                    <span onClick={closemodal} className={styles.cross}>
                        {" "}
                        <RxCross2 />{" "}
                    </span>{" "}
                </Modal.Body>
            </Modal>
            {/* Modal Start*/}
        </>
    )
}

export default FutureReady
