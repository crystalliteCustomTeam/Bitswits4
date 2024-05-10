import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/NewMobileApp/Banner.module.css"
// images 
import badgeClient from "media/newdubai/badgesClient.png"
import Star from "media/newDubaiPagev1/star.png"
import Clutch from "media/newmobileapp/clutch-black.png"
import Partner from "media/newmobileapp/partner.png"
import formImg from 'media/newmobileapp/formImg.png'

const Banner = ({ content }) => {
    const { title, desc, pageSlug } = content;
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
        gtag('event', 'conversion', { 'send_to': 'AW-11114809734/O9snCOO5m5EYEIaT-rMp' });
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
            <section className={`${styles.bannerSec}`} >
                <Container>
                    <Row className={`g-5 ${styles.applost} align-items-center`}>
                        <Col lg={7} xl={6} className='p-0'>
                            <div className={styles.quickly}>
                                <p className='mb-0'>Quickly – Efficiently – Effortlessly</p>
                            </div>
                            <div className={styles.oppp}>
                                <h1 className='text-black fw600 mb-4'>
                                    {title}
                                </h1>
                                <p className='font16 text-black fw300 mt-3 mb-lg-4 fontsfregular'>
                                    {desc}
                                </p>
                                <Link href='javascript:$zopim.livechat.window.show();' className={`${styles.deliver}`}>
                                    Let’s Discuss Your Project
                                </Link>
                            </div>
                            <div className={styles.badge}>
                                <div className={`d-flex align-items-center ${styles.clientRviews}`}>
                                    <div>
                                        <Image src={badgeClient} alt='Bitswits' width={183} height={80} />
                                    </div>
                                    <div>
                                        <div className={styles.reviews}>
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                            <Image src={Star} alt='Bitswits' width={25} height={22} />
                                        </div>
                                        <p className='mb-0'>
                                            <strong>4.8 out of 5</strong> (review rating)
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between gap-2 gap-xxl-5'>
                                    <Image src={Clutch} alt='Bitswits' width={127} height={60} />
                                    <Image src={Partner} alt='Bitswits' width={127} height={56} />
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} xl={6} className='p-0'>
                            <form className={styles.your} onSubmit={handleSubmit}>
                                <h3>Share Your Requirements</h3>
                                <p className='text-white text-center'>To help our experts understand your business objectives and create your customized plan.</p>
                                <input type='text' minLength="4" name='first' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <div className='d-sm-flex align-items-center mt-4'>
                                    <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                    <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                    <button className={`pink ${styles.value} mt-4 mt-sm-0`} type='submit'>
                                        <Image src={formImg} className='img-fluid' alt='BitsWits' />
                                        Submit
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

export default Banner
