"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
//====== Css
import styles from "@/styles/gameDevServices/Faqs.module.css"
//====== Images
import faqImg from "media/gameServices/faqImg.png"
import cube from "media/gameServices/cube.png"
//=====
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Faqs = (props) => {
    const [faqStates, setFaqStates] = useState(Array(props.faqsData.length).fill(false));
    const [isClassAdded, setClassAdded] = useState(false);
    const toggleFaq = (index) => {
        const newFaqStates = faqStates.map((state, i) => (i === index ? !state : false));
        setFaqStates(newFaqStates);
        setClassAdded(true);
    };

    return (
        <>
            <section className={`${styles.faqs} newfaqsgloble newlevel`}>
                <Container>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <h6 className="manrope center">Asked Questions With Value</h6>
                            <h2 className="text-black manrope center">
                                Frequently <span className='newfycolr'>Asked Questions</span>
                            </h2>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.ImgBox}>
                                <div className={styles.cube}>
                                    <Image src={cube} alt='Bitswits' className='img-fluid' />
                                </div>
                                <Image src={faqImg} alt='Bitswits' className='img-fluid' />
                            </div>
                        </Col>
                        <Col lg={8}>
                            {props.faqsData.map((faq, index) => (
                                <div key={index} className={`${faqStates[index] ? "touchFaq activefapost servicesFaqs" : ""} mb-2 mb-md-4 mb-lg-0`}>
                                    <div>
                                        <div onClick={() => toggleFaq(index)} className={`${styles.heading} newfoldpost p-3`}>
                                            <h3 className={`${faqStates[index] ? "text-black" : "text-black"} manrope `}>
                                                {faq.question} {faqStates[index] ? <FaAngleUp className={styles.activeArrow} /> : <FaAngleDown />}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className={faqStates[index] ? `d-block ${styles.mostimg}` : "d-none"}>
                                        <div>
                                            <p className="manrope font-medium">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Faqs;
