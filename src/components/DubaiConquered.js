import React from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import styles from "@/styles/DubaiConquered.module.css"
// Images
import Slide1 from "/public/newdubai/conquered1.png"
import Slide2 from "/public/newdubai/conquered2.png"
import Slide3 from "/public/newdubai/conquered3.png"
import Slide4 from "/public/newdubai/conquered4.png"
import Slide5 from "/public/newdubai/conquered5.png"
import Slide6 from "/public/newdubai/conquered6.png"
import Slide7 from "/public/newdubai/conquered7.png"
import Slide8 from "/public/newdubai/conquered8.png"
import Slide9 from "/public/newdubai/conquered9.png"
import Slide10 from "/public/newdubai/conquered10.png"
import Slide11 from "/public/newdubai/conquered11.png"

const DubaiConquered = () => {
    var DubaiConquered = {
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    };
    return (
        <>
            <section className={styles.conqueredSec}>
                <div className='container'>
                    <h2>Industries We’ve Conquered</h2>
                    <p className='fontsfregular'>
                        BitsWits offers a diverse reach by providing industry-specificsolutions for every client. We work with clients who aim <br /> to improve customer quality oflife while simplifying the daily duties of their employees.
                    </p>
                    <Slider {...DubaiConquered} className='dubaiClientSlider mt-5'>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide1} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Ecommerce</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Ecommerce</h5>
                                    <p className='fontsfregular'>
                                        Revamp your online presence with BitsWits ecommerce app development services and solutions. From user-friendly interfaces to secure transactions, we tailor solutions that redefine ecommerce development for your brand.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide2} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Manufacture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Manufacture</h5>
                                    <p className='fontsfregular'>
                                        Enhance productivity and efficiency in manufacturing with BitsWits manufacturing
                                        development solutions. Our tailor-made solutions optimize workflows, reduce costs, and
                                        elevate your manufacturing capabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide3} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Automotive</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Automotive</h5>
                                    <p className='fontsfregular'>
                                        Our automotive development services transform concepts into reality, leveraging technology to redefine the future of transportation. Embark on a journey of automotive excellence with Trango Tech.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide4} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Logistics</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Logistics</h5>
                                    <p className='fontsfregular'>
                                        Be it taxi, travel, or logistics, we offer tech solutions for all kinds of businesses. From efficient route planning to real-time tracking, we optimize every step for a seamless travel experience with bespoke logistics development solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide5} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Agriculture</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Agriculture</h5>
                                    <p className='fontsfregular'>
                                        Harness the power of technology for sustainable farming. BitsWits agriculture development solutions optimize processes, maximize yields, and bring innovation to every aspect of modern farming.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide6} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>E-Learning</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>E-Learning</h5>
                                    <p className='fontsfregular'>
                                        BitsWits education development services and
                                        solutions reshape the e-learning industry, we offer interactive, engaging platforms that foster knowledge acquisition and skill development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide7} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Healthcare</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Healthcare</h5>
                                    <p className='fontsfregular'>
                                        BitsWits healthcare development solutions innovate patient care, assist doctors in streamlining medical operations, and amplify the impact of medical services.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide8} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Real Estate</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Real Estate</h5>
                                    <p className='fontsfregular'>
                                        Experience innovation in the real estate industry with Trango Tech. We create modern real estate apps and software based on AR/VR and AI/ML technologies that help businesses stand out in the digital era.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide9} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Food</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Food</h5>
                                    <p className='fontsfregular'>
                                        Revolutionize the culinary world with our expertise in the food delivery industry. From seamless order management to swift delivery tracking systems, we ensure your business stands out with our exquisite software solutions for the food and grocery industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide10} alt='Bitswits' width={287} height={384} className='mx-auto img-fluid' />
                                    <h3>Transportation</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Transportation</h5>
                                    <p className='fontsfregular'>
                                        Create a simplified and seamless supply chain management system, allowing you totrack
                                        shipments via mobile apps, offer on-ground taskforce management solutions,and much more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='px-2'>
                            <div className={styles.mainCardDiv}>
                                <div className={styles.card}>
                                    <Image src={Slide11} alt='Bitswits' width={287} height={384} className={`${styles.lastImg} mx-auto img-fluid`} />
                                    <h3>Sports</h3>
                                </div>
                                <div className={styles.cardHover}>
                                    <h5>Sports</h5>
                                    <p className='fontsfregular'>
                                        Experience the pinnacle of athletic innovation. BitsWits amplify training, fan
                                        engagement, and performance analysis, ensuring your brand stands at the forefront of the sports industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default DubaiConquered
