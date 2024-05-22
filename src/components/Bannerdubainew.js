import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Axios from "axios";
import { usePathname } from "next/navigation"
import { Container, Row, Col } from 'react-bootstrap'
import styles from "@/styles/bannerdubainew.module.css";
// images 
import badgeClient from "media/newdubai/badgesClient.png"
import Star from "media/newDubaiPagev1/star.png"
import Clutch from "media/newDubaiPagev1/clutch.png"

const dubaiBackground = `${styles.newHomeBg}`;
const houstonBackground = `${styles.newHoustonBg}`;
const dallasBackground = `${styles.newDallasBg}`;
const newYorkBackground = `${styles.newNewYorkBg}`;
const washingtonBackground = `${styles.newWashingtonBg}`;
const austinBackground = `${styles.newAustinBg}`;
const chicagoBackground = `${styles.newChicagoBg}`;
const miamiBackground = `${styles.newMiamiBg}`;
const torontoBackground = `${styles.newTorontoBg}`;
const ukBackground = `${styles.newUKBg}`;
const saudiaBackground = `${styles.newSaudiaBg}`;

const Bannerdubai = ({ content }) => {
    const pathname = usePathname();
    const { title, desc, pageSlug, bg = " " } = content;
    const [ip, setIP] = useState('');
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get('https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8');
        setIP(res.data);
    }
    useEffect(() => {
        // //   getIPData()
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
            {/* <section className={`
            ${pathname === "/app-development-austin" ? austinBackground : ""}
            ${pathname === "/app-development-chicago" ? chicagoBackground : ""}
            ${pathname === "/mobile-app-development-company-dallas" ? dallasBackground : ""}
            ${pathname === "/mobile-app-development-company-dubai" ? dubaiBackground : ""}
            ${pathname === "/app-development-houston" ? houstonBackground : ""}
            ${pathname === "/mobile-app-development-company-miami" ? miamiBackground : ""}
            ${pathname === "/new-mobile-app-development-company-newyork" ? newYorkBackground : ""}
            ${pathname === "/new-mobile-app-development-company-saudia" ? saudiaBackground : ""} 
            ${pathname === "/new-mobile-app-development-company-toronto" ? torontoBackground : ""}
            ${pathname === "/new-mobile-app-development-company-uk" ? ukBackground : ""}
            ${pathname === "/new-mobile-app-development-company-washington-dc" ? washingtonBackground : ""}
             ${styles.DubaiBanner} bg-black`} > */}
            <section className={`${styles.DubaiBanner} bg-black`}>
                {/* <Image src={bg} fill priority={true} sizes='100vw' style={{zIndex: -1}} /> */}
                <Container className={` ${styles.conform}`}>
                    <Row className={`g-5 ${styles.applost} align-items-center w-100 mx-auto`}>
                        <Col xl={7} className='px-0'>
                            <div className={styles.oppp}>
                                <h1 className='white fw500 mb-4'>
                                    {title}
                                </h1>
                                <p className='font16 white fw300 mt-3 mb-lg-4 fontsfregular'>
                                    {desc}
                                </p>
                                <a href='javascript:$zopim.livechat.window.show();' className={`${styles.deliver} pink`}>
                                    Let’s Build Your Dream App!
                                </a>
                            </div>
                            <div className={styles.badge}>
                                <div className={`d-flex align-items-center ${styles.clientRviews}`}>
                                    <div>
                                        <Image priority={true} sizes='100vw' fill src={badgeClient} alt='Bitswits' width={183} height={80} />
                                    </div>
                                    <div>
                                        <div className={styles.reviews}>
                                            <Image priority={true} sizes='100vw' fill src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' fill src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' fill src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' fill src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image priority={true} sizes='100vw' fill src={Star} alt='Bitswits' width={25} height={22} />
                                        </div>
                                        <p className='mb-0'>
                                            <strong>4.8 out of 5</strong> (review rating)
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Image priority={true} sizes='100vw' fill src={Clutch} alt='Bitswits' width={129} height={60} />
                                </div>
                            </div>
                        </Col>
                        <Col xl={5} className='px-0'>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3 className='mb-4 white fw500'>Book a Free Consultation</h3>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                {/* <input type='submit' value={score} name='submit' className={styles.value} placeholder="Submit"></input> */}
                                <button className={`pink ${styles.value}`} type='submit'>
                                    Submit
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bannerdubai