"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { usePathname } from "next/navigation"
import Axios from "axios";
import { Container, Row, Col } from 'react-bootstrap'
//====== Css
import styles from "@/styles/gameDevServices/Discuss.module.css";
//====== Image
import plus from "media/gameServices/plus.png"
import cube from "media/gameServices/cube.png"


const Discuss = () => {
    /* ============================= */
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Submit');

    const getIPData = async () => {
        try {
            const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const currentdate = new Date().toLocaleString();
        const data = {
            name: e.target.name.value,
            last: 'null',
            email: e.target.email.value,
            phone: e.target.phone.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        };
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');
        /* ==============First API============== */
        fetch('/api/emailapi/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });
        /* ==============Second API============== */
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        };
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
        /* ==============Third API============== */
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "fields": [
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "firstname",
                    "value": e.target.name.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": e.target.phone.value
                }
            ],
            "context": {
                "ipAddress": ip.IPv4,
                "pageUri": pagenewurl,
                "pageName": pagenewurl
            },
            "legalConsentOptions": {
                "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                        {
                            "value": true,
                            "subscriptionTypeId": 999,
                            "text": "I agree to receive marketing communications from Example Company."
                        }
                    ]
                }
            }
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
        }
    }
    /* ============================= */
    return (
        <>
            <section className={styles.discuss}>
                <div className={styles.plus}>
                    <Image src={plus} alt='Bitswits' className='img-fluid w-50' />
                </div>
                <div className={styles.cube}>
                    <Image src={cube} alt='Bitswits' className='img-fluid' />
                </div>
                <Container>
                    <div className={`mb-5 text-center`}>
                        <h4 className='f-40 font-bold manrope mb-3'>Have A <span className='newfycolr'>Game Project</span> To Discuss?</h4>
                        <p className='font16 text-center manrope'>We’re a software development company that ensures its expertise extends to offer a <br /> seamlessly productive and growth-oriented partnership</p>
                    </div>
                    <div className={styles.make}>
                        <form className={styles.formsbanner} onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={3}>
                                    <div>
                                        <input type='text' name='name' minLength="4" required className={styles.forminput} placeholder='Name' />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div>
                                        <input type='email' name='email' required className={styles.forminput} placeholder='Email' />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div>
                                        <input type="tel" name='phone' minLength="10" maxLength="13" pattern="[0-9]*" required className={styles.forminput} placeholder='Phone Number' />
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <div>
                                        <input type='submit' name='submit' className={`bitsForm pink ${styles.book}`} placeholder="Submit" value={score}></input>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Discuss