import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
//
import styles from '@/styles/NewMobileApp/JournyForm.module.css'
import formImg from 'media/newmobileapp/formImg.png'
import { usePathname } from 'next/navigation';

const JournyForm = () => {

    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        getIPData()
    }, [])

    const [score, setScore] = useState('Submit');

    const [checkboxes, setCheckboxes] = useState([]);
    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };
    const router = usePathname();
    const currentRoute = router;

    const [pagenewurl, setPagenewurl] = useState('');
    useEffect(() => {
        const pagenewurl = window.location.href;
        setPagenewurl(pagenewurl);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        var currentdate = new Date().toLocaleString() + ''
        const data = {
            name: e.target.first.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            checkboxesdata: checkboxes,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data)

        setScore('Sending Data');

        fetch('api/emailapidubai/route', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`)
            if (res.status === 200) {
                console.log(`Response Successed ${res}`)
            }
        })

        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        }

        let bodyContent = JSON.stringify({
            "IP": `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            "Brand": "Bitswits",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,
        });

        await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }

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
                            <form id='form' onSubmit={handleSubmit}>
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
                                    <button className={`${styles.value} pink`} type='submit'>
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
