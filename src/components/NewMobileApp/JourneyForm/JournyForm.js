import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
//
import styles from '@/styles/NewMobileApp/JournyForm.module.css'
import formImg from 'media/newmobileapp/formImg.png'

const JournyForm = () => {

    const [checkboxes, setCheckboxes] = useState([]);
    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };

    return (
        <>
            <section className={styles.JournyForm}>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.content}>
                                <h2>
                                    <span>Triumph</span> with the Best App  <span>Making</span> Services</h2>
                                <div className={styles.experts}>
                                    <h5>30 Minute Breakdown</h5>
                                    <h4>Free half-hour strategy session worth $300 With Our Experienced App Experts</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form id='form'>
                                <div className='mb-4'>
                                    <h4>Have an Idea to Execute?
                                    </h4>
                                    <h3 className='grdiant'>We’re Listening</h3>
                                </div>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Comment' name='comment' className='form-control mt-3'></textarea>
                                <div className={`d-flex justify-content-between mt-3 mt-md-5 ${styles.formBottom}`}>
                                    <div className='d-flex align-items-center gap-1'>
                                        <input className={`mb-0 ${styles.vehicle1}`} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                        <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                    </div>
                                    <button className={`${styles.value}`} type='submit'>
                                        <Image src={formImg} className='img-fluid' alt='BitsWits' />
                                        Let’s Do This
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default JournyForm
