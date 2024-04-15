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

const DubaiTimeline = () => {
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
                            <div className='d-lg-block d-none'>
                                <div className={styles.timelineMain}>
                                    <div className={`${styles.timeline} ${styles.timeOne} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingOne} ${styles.spacing}`}>
                                            <Image src={TimelineOne} width={165} height={87} alt='Bitswits' />
                                            <h3 className=''>Strategy And Concepting</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Our job at Bitswits is to take your idea and run with it, offering you a vast array of creative designs and strategies. While many development agencies will simply agree with your ideas, at Bitswits, we're here to challenge and innovate. We'll discuss how your mobile app can fit within your digital business strategy, and we'll carefully refine the design to align on a feature set that accomplishes your goals—and then some. Because we offer far more than the competition, we're able to provide well-rounded expert guidance in today's rigorous market.
                                            </p>
                                        </div>
                                        <div className={styles.marker}></div>
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
                                    <div className={`${styles.timeline} ${styles.timeTwo} ${styles.timelineRight} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.spacingOne} ${styles.paddingThree}`}>
                                            <Image src={TimelineThree} width={203} height={202} alt='Bitswits' />
                                            <h3 className=''>Programming And Development</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Our development methodology revolves around agility. We work in two-week sprints, during which all team members focus entirely on creating the core of your app. With bi-weekly check-ins, you have the opportunity to review progress and provide feedback along the way. The result is a seamless and fluid process. We don't consider apps complete until they meet or exceed the standards set during the product concepting stages of development. That's a promise.
                                            </p>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                We're dedicated to creating apps that leave a lasting impression, spark conversations, and above all, keep users engaged. With our international team of experts, we craft comprehensive, sleek designs that transform your idea into an app that succeeds in the marketplace.
                                            </p>
                                        </div>
                                        <div className={styles.numberTwo}></div>
                                        <div className={styles.numberOne}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingFour} ${styles.spacingTwo}`}>
                                            <Image src={TimelineTwo} alt='Bitswits' width={184} height={100} />
                                            <h3 className=''>User Experience And User Interface (UX/UI)</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Fluidity and efficiency are key factors in user retention and customer satisfaction. Our designers deliver multiple iterations of UI and UX prototypes to create wireframes that meet your requirements. We share and collaborate closely with our Android development team to ensure that all stakeholders are always on the same page. Once the user experience prototype design is finalized, our team unveils the blueprints of your app, and our developers begin their work.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`${styles.timeline} ${styles.timeThree} ${styles.timeLeft} d-flex align-items-center justify-content-between`}>
                                        <div className={`${styles.timelineContent} ${styles.paddingFive} ${styles.spacingThree}`}>
                                            <Image src={TimelineFive} width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>Branding</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                Creating a unique identity and tone is essential for every great brand. Our branding capabilities allow us to adapt your brand's logos, color schemes, and associated symbolism for mobile platforms. Our Android design team seamlessly integrates user interaction, product functionality, and desired customer experience, ensuring that your app meets all requirements while maintaining your brand's essence.
                                            </p>
                                        </div>
                                        <div className={styles.numberThree}></div>
                                        <div className={styles.numberFour}></div>
                                        <div className={`${styles.timelineContent} ${styles.paddingSix} ${styles.spacingFour}`}>
                                            <Image src={TimelineFour} width={207} height={202} alt='Bitswits' />
                                            <h3 className=''>Polish</h3>
                                            <p className={`${styles.timePara} fontsfregular`}>
                                                After finalizing the user interface and user experience, your app is ready to debut on the Google Play Store. However, at Bitswits, we include an additional step to ensure that your app surpasses industry standards. This is where we add transitions, animations, special touches, and any last Wishlist features to truly make your app stand out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-lg-none d-block'>
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
                            <div className='d-lg-none d-block'>
                                <Slider {...clientsthink} className='dubaiClientSlider'>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingOne} ${styles.spacing} `}>
                                                <h3 className=''>Strategy And Concepting</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    Our job at Bitswits is to take your idea and run with it, offering you a vast array of creative designs and strategies. While many development agencies will simply agree with your ideas, at Bitswits, we're here to challenge and innovate. We'll discuss how your mobile app can fit within your digital business strategy, and we'll carefully refine the design to align on a feature set that accomplishes your goals—and then some. Because we offer far more than the competition, we're able to provide well-rounded expert guidance in today's rigorous market.
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
                                                <h3 className=''>User Experience And User Interface (UX/UI)</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    Fluidity and efficiency are key factors in user retention and customer satisfaction. Our designers deliver multiple iterations of UI and UX prototypes to create wireframes that meet your requirements. We share and collaborate closely with our Android development team to ensure that all stakeholders are always on the same page. Once the user experience prototype design is finalized, our team unveils the blueprints of your app, and our developers begin their work.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1'>
                                        <div className={`${styles.cardBg}`}>
                                            <div className={`${styles.timelineContent} ${styles.paddingFive} ${styles.spacingThree} `}>
                                                <h3 className=''>Branding</h3>
                                                <p className={`${styles.timePara} fontsfregular`}>
                                                    Creating a unique identity and tone is essential for every great brand. Our branding capabilities allow us to adapt your brand's logos, color schemes, and associated symbolism for mobile platforms. Our Android design team seamlessly integrates user interaction, product functionality, and desired customer experience, ensuring that your app meets all requirements while maintaining your brand's essence.
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
