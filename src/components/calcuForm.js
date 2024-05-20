"use client"
import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Row, Col } from "react-bootstrap";
import styles from "@/styles/CalculatorScreen.module.css";

const CalcuForm = () => {

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
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            pageUrl: pagenewurl,
            IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
            currentdate: currentdate,
        }
        const JSONdata = JSON.stringify(data)
        setScore('Sending Data');

        fetch('/api/emailapi/', {
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
            <div className={styles.estimateForm}>
                <Row className='justify-content-between gy-4'>
                    <Col lg={4}>
                        <input type="text" name="name" id="name" placeholder="Full Name" required />
                    </Col>
                    <Col lg={4}>
                        <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" id="phone" placeholder="Phone" required />
                    </Col>
                    <Col lg={4}>
                        <input type="email" name="email" placeholder="Email Address" required />
                    </Col>
                    <Col lg={12}>
                        <textarea type="textarea" name="comment" id="comments" placeholder="Comments" required />
                    </Col>
                    <Col lg={12}>
                        <button value={score} id="savebtns" type="submit" className={styles.bttns1}>{score}</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default CalcuForm
