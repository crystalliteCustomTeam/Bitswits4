import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "@/styles/Dubaitimeline.module.css"
// Images 
import TimelineOne from "/public/newDubaiPagev1/timeline1.png"
import TimelineTwo from "/public/newDubaiPagev1/timeline2.png"
import TimelineThree from "/public/newDubaiPagev1/timeline3.png"
import TimelineFour from "/public/newDubaiPagev1/timeline4.png"
import TimelineFive from "/public/newDubaiPagev1/timeline5.png"

const DubaiTimeline = ({ content }) => {
    const { title, desc } = content
    var clientsthink = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className={styles.timelineSec}>
                <div className='container'>
                    <Row>
                        <Col lg={12}>
                            <div className={`${styles.timelineContent} d-block d-lg-none`}>
                                <h4 className={`${styles.redPara} fontsfregular`}>The Process </h4>
                                <h2>{title}</h2>
                                <p className='fontsfregular '>
                                    {desc}
                                </p>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className=''>
                                <div className={styles.timelineMain}>
                                    <div className={`${styles.timeline} ${styles.timeOne} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingTwo} d-none d-lg-block`}>
                                            <h4 className={`${styles.redPara} fontsfregular`}>The Process </h4>
                                            <h2>{title}</h2>
                                            <p className='fontsfregular'>
                                                {desc}
                                            </p>
                                        </div>
                                        <div className={styles.marker}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingOne} ${styles.spacing}`}>
                                            <Image src={TimelineOne} width={165} height={87} alt='Bitswits' />
                                            <h3 className=''>Idea Conceptualization and Research</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                At BitsWits, we make your idea work through the most comprehensive research and creativeness in the first stage. We will make it align with your business plans and market trends so that it will be both viable and marketable. Our collaborative workstyle ensures that your application idea is creative, market-prepared, and resonates with the requirements of your targeted audience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.timeline} ${styles.timeTwo} ${styles.timelineRight} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.spacingOne} ${styles.paddingThree}`}>
                                            <Image src={TimelineThree} width={203} height={202} alt='Bitswits' />
                                            <h3 className=''>Programming And Development</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                At BitsWits, we follow an agile methodology that enables us to adapt to ever-changing market requirements and deliver your app quickly and hassle-free. We prioritize key features and functionality first, which will ensure your app is completed on time and within your budget constraints. Plus, we perform continuous testing on your app to maintain its quality and reliability, thus ensuring a smooth and efficient development process.
                                            </p>
                                        </div>
                                        <div className={`d-lg-block d-none ${styles.numberTwo}`}></div>
                                        <div className={`d-lg-none d-block ${styles.numberTwoMobile}`}></div>
                                        <div className={styles.numberOne}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingFour} ${styles.spacingTwo}`}>
                                            <Image src={TimelineTwo} alt='Bitswits' width={184} height={100} />
                                            <h3 className=''>User-Centric Design (UX/UI)</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Our mobile Google-certified app developers in Dubai focus on creating visually appealing and interactive interfaces that improve user experience. Our experts collect insights into user behavior and preferences and then make the design accordingly so that your app not only functions smoothly but also delivers user-friendliness and engagement. Through wireframing and prototyping, we iterate on design concepts in order to optimize usability and create a seamless user experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.timeline} ${styles.timeThree} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingSix} ${styles.spacingFour}`}>
                                            <Image src={TimelineFour} width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>Final Touches and Polish</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Prior to the launch, we add features like animations, transitions and special effects in order to make your app more user-friendly and interesting. Through a comprehensive testing mechanism, we eliminate any bugs or issues your application is faced with, hence, your users will have an easy and smooth time when using your application. Our focus is to produce an app that is highly customizable and meets your expectations, leaving a satisfactory impression.
                                            </p>
                                        </div>
                                        <div className={styles.numberThree}></div>
                                        <div className={`d-lg-block d-none ${styles.numberFour}`}></div>
                                        <div className={`d-lg-none d-block ${styles.numberFourMobile}`}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingFive} ${styles.spacingThree}`}>
                                            <Image src={TimelineFive} width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>Brand Integration</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Your brand identity becomes part of your app, and we strive to maintain a seamless and memorable user experience. Our designers blend your logos, color schemes, and brand guidelines into the app's design to solidify your unique brand identity. By paying closer attention to each detail that we create, we develop a powerful brand presentation that forges a deep bond between your brand and your audience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-none '>
                                <div className={`${styles.timelineContent} ${styles.paddingTwo}`}>
                                    <p className={`${styles.redPara} fontsfregular`}>The Process </p>
                                    <h2>Mobile App Development Company In Dubai</h2>
                                    <p className='fontsfregular'>We are a digital transformation strategy company that goes beyond just developing mobile apps and digital products. We ensure that your product not only succeeds at launch but also has a growth plan in place to maintain its success for years to come.</p>
                                    <p className='fontsfregular'>
                                        Our team of expert product managers focuses on retention to maximize your return on investment. Our app developers understand the importance of a robust analytics environment, allowing you to gain detailed insights into how people are using your app.
                                    </p>
                                    <p className='fontsfregular'>
                                        This approach sets your team up for long-term success, enabling you to continuously optimize your app for growth and improvement.
                                    </p>
                                </div>

                            </div>
                            <div className='d-none'>
                                <Slider {...clientsthink} className='dubaiClientSlider'>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingOne} ${styles.spacing} `}>
                                                <h3 className=''>Idea Conceptualization and Research</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    At BitsWits, we make your idea work through the most comprehensive research and creativeness in the first stage. We will make it align with your business plans and market trends so that it will be both viable and marketable. Our collaborative workstyle ensures that your application idea is creative, market-prepared, and resonates with the requirements of your targeted audience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.spacingOne} ${styles.paddingThree} `}>
                                                <h3 className=''>Programming And Development</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    Our development methodology revolves around agility. We work in two-week sprints, during which all team members focus entirely on creating the core of your app. With bi-weekly check-ins, you have the opportunity to review progress and provide feedback along the way. The result is a seamless and fluid process. We don't consider apps complete until they meet or exceed the standards set during the product concepting stages of development. That's a promise.
                                                </p>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    We're dedicated to creating apps that leave a lasting impression, spark conversations, and above all, keep users engaged. With our international team of experts, we craft comprehensive, sleek designs that transform your idea into an app that succeeds in the marketplace.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingFour} ${styles.spacingTwo} `}>
                                                <h3 className=''>User-Centric Design (UX/UI)</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    Our mobile Google-certified app developers in Dubai focus on creating visually appealing and interactive interfaces that improve user experience. Our experts collect insights into user behavior and preferences and then make the design accordingly so that your app not only functions smoothly but also delivers user-friendliness and engagement. Through wireframing and prototyping, we iterate on design concepts in order to optimize usability and create a seamless user experience.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingFive} ${styles.spacingThree} `}>
                                                <h3 className=''>Programming and Development</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    At BitsWits, we follow an agile methodology that enables us to adapt to ever-changing market requirements and deliver your app quickly and hassle-free. We prioritize key features and functionality first, which will ensure your app is completed on time and within your budget constraints. Plus, we perform continuous testing on your app to maintain its quality and reliability, thus ensuring a smooth and efficient development process.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingSix} ${styles.spacingFour} `}>
                                                <h3 className=''>Polish</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    After finalizing the user interface and user experience, your app is ready to debut on the Google Play Store. However, at Bitswits, we include an additional step to ensure that your app surpasses industry standards. This is where we add transitions, animations, special touches, and any last Wishlist features to truly make your app stand out.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default DubaiTimeline
