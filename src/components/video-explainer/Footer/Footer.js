import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import styles from "@/styles/video-explainer/Footer.module.css"
import { FaComments, FaEnvelope, FaGlobeAsia, FaPhoneAlt, FaUser } from 'react-icons/fa';
// images
import Payment from "media/videoexplainer/payment-img.png"
import UpArrow from "media/videoexplainer/up-arrow.png"

// const socialLinks = [
//     {
//         icon: facebook,
//         link: "https://www.facebook.com/infinityanimationsofficial"
//     },
//     {
//         icon: twitter,
//         link: "https://twitter.com/infinityan_/"
//     },
//     {
//         icon: instagram,
//         link: "https://www.instagram.com/infinityanimationsofficials"
//     },
//     {
//         icon: linkedin,
//         link: "https://www.linkedin.com/company/infinity-animations/"
//     },
//     {
//         icon: youtube,
//         link: "https://www.youtube.com/@Infinity-Animations"
//     },
//     {
//         icon: vimeo,
//         link: "https://www.vimeo.com/infinityanimations"
//     },
// ]
const VideoFooter = () => {
    // form Start 
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    // For Time
    let today = new Date();
    let setTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let setDate = `${month < 10 ? `0${month}` : `${month}`}-${date}-${year}`;

    const [ip, setIP] = useState("");
    //creating function to load ip address from the API
    const getIPData = async () => {
        const res = await Axios.get(
            "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
        );
        setIP(res.data);
    };
    useEffect(() => {
        getIPData();
    }, []);
    // For Page
    let page = usePathname();
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
        botchecker: null,
        pageURL: page
    });
    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [formStatus, setFormStatus] = useState(" Get Started");
    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const formValidateHandle = () => {
        let errors = {};
        // Name validation
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        // Phone validation
        const phoneRegex = /[0-9]/i;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone is required";
        }
        return errors;
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {
                let headersList = {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify(data);
                let reqOptions = {
                    url: "/api/email",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
            } else {
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }

        if (Object.keys(errors).length === 0) {
            if (data.botchecker === null) {


                let headersList = {
                    Accept: "*/*",
                    Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json",
                };

                let bodyContent = JSON.stringify({
                    IP: `${ip.IPv4} - ${ip.country_name} - ${ip.city}`,
                    Brand: "Infinity Animation",
                    Page: `${page}`,
                    Date: setDate,
                    Time: setTime,
                    JSON: data,
                });
                let reqOptions = {
                    url: "https://sheetdb.io/api/v1/1ownp6p7a9xpi",
                    method: "POST",
                    headers: headersList,
                    data: bodyContent,
                };
                await Axios.request(reqOptions);
                window.location.href = "/thank-you";
            }
        }
    };
    return (
        <>
            <section className={styles.footerSec}>
                <div className='container'>
                    <Row className='gap-4 gap-lg-0'>
                        <Col lg={6}>
                            <div className={styles.txt}>
                                <h2>Get in Touch Now!</h2>
                                <p>Its High Time to Showcase Your Store to the World</p>
                            </div>
                            <div className={styles.form}>
                                <form action="javascript:;">
                                    <Row>
                                        <Col lg={6} className={`${styles.inputs} `}>
                                            <FaUser className={styles.icon} />
                                            <input type="text" name="name" placeholder='Enter your name' onChange={handleDataChange} required />
                                            {errors.name && (
                                                <span>
                                                    {errors.name}
                                                </span>
                                            )}
                                        </Col>
                                        <Col lg={6} className={` ${styles.inputs} `}>
                                            <FaEnvelope className={styles.icon} />
                                            <input type="email" name="email" placeholder='Enter Email' onChange={handleDataChange} required />
                                            {errors.email && (
                                                <span>
                                                    {errors.email}
                                                </span>
                                            )}
                                        </Col>
                                        <Col lg={12} className={`${styles.inputs} w-100 `}>
                                            <FaPhoneAlt className={styles.icon} />
                                            <input type="phone" name="phone" minLength={7} maxLength={15} placeholder='Enter Phone Number' onChange={handleDataChange} required />
                                            {errors.phone && (
                                                <span>
                                                    {errors.phone}
                                                </span>
                                            )}
                                        </Col>
                                        <Col lg={12} className={`${styles.inputs} w-100 `}>
                                            <FaComments className={styles.icon} />
                                            <textarea name='message' placeholder='Message' onChange={handleDataChange}></textarea>
                                        </Col>
                                    </Row>
                                    <div className={`${styles.btn} mt-3`}>
                                        <button type='submit' onClick={handleFormSubmit} disabled={isDisabled}>
                                            {formStatus}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={styles.address_detail}>
                                <ul>
                                    <li className='py-[10px]'>
                                        <Link href="tel:833-666-6689" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <FaPhoneAlt className={styles.footerIcons} /> 833-666-6689
                                        </Link>
                                    </li>
                                    <li className='py-[10px]'>
                                        <Link href="mailto:queries@infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <FaEnvelope className={styles.footerIcons} /> queries@infinityanimations.com
                                        </Link>
                                    </li>
                                    <li className='py-[10px]'>
                                        <Link href="https://infinityanimations.com" className='text-[15px] md:text-[20px] text-white montserrat flex items-center gap-2'>
                                            <FaGlobeAsia className={styles.footerIcons} /> www.infinityanimations.com
                                        </Link>
                                    </li>
                                </ul>
                                <Image src={Payment} alt='Payment-Methods' className='w-5/12 lg:w-full my-3 object-contain' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <div className={styles.copyright}>
                <div className={`${styles.copyRightCon} container`}>
                    <p className='text-[14px] pb-[12px] text-[#333] montserrat text-center'>© 2024 - <p className='text-[14px] lg:text-[16px] text-white poppins text-center inline'> - All Rights Reserved By<Link href="https://mini-investments.net/">Mini Investments</Link></p> <Link target="_blank" className="no-underline" href="https://mini-investments.net/">Mini Investments</Link></p>
                    <div className="top-icon absolute right-0 top-[-40px]">
                        <Link href="#" className='bg-[#18d689] w-[80px] h-[80px] text-center text-white font-[500] uppercase rounded-[60%] align-middle border-[5px] border-white absolute right-0 lg:flex flex-col justify-center items-center md:block hidden'>
                            <Image src={UpArrow} alt='upArrow' className='mx-auto' />
                            <p className='text-[14px] text-center poppins'>Top</p>
                        </Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VideoFooter