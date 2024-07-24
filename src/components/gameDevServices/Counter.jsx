"use client"
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Counter.module.css";


const Counter = () => {
    /* ============================= */
    const counters = [
        { number: '60', description: 'Our Active User' },
        { number: '67', description: 'Our Artwork' },
        { number: '47', description: 'Available Artist' },
        { number: '42', description: 'Our Products', noBorder: true }
    ];
    /* ============================= */
    const sectionRef = useRef(null);
    useEffect(() => {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startCounters();
                }
            });
        }, {
            threshold: 0.5
        });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                sectionObserver.unobserve(sectionRef.current);
            }
        };
    }, []);
    /* ============================= */
    const startCounters = () => {
        const counterElements = document.querySelectorAll('.counter');

        counterElements.forEach((item) => {
            let counterInnerText = parseInt(item.textContent);
            let startingPoint = Math.floor(counterInnerText * 0.6);
            let count = startingPoint;
            let speed = parseInt(item.dataset.speed) / (counterInnerText - startingPoint);
            const stop = setInterval(() => {
                item.textContent = count++;
                if (count > counterInnerText) {
                    clearInterval(stop);
                }
            }, speed);

            return () => clearInterval(stop);
        });
    };
    /* ============================= */
    return (
        <section ref={sectionRef} className={styles.counterSec}>
            <Container>
                <Row className='gy-5'>
                    {counters.map((i, index) => (
                        <Col className="col-6 col-lg-3" key={index}>
                            <div className={`${styles.counter} ${i.noBorder ? styles.noBorder : ''}`}>
                                <h3 className="manrope">
                                    <span className="counter" data-speed="1000">{i.number}</span>
                                    <span>K</span>
                                </h3>
                                <p className="manrope">{i.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Counter;
