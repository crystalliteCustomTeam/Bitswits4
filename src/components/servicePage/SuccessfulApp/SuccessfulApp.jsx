"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/SuccessfulApp.module.css"
// Images 
import Success1 from "media/services/success-1.svg"
import Success2 from "media/services/success-2.svg"
import Success3 from "media/services/success-3.svg"
import Success4 from "media/services/success-4.svg"
import Success5 from "media/services/success-5.svg"

const SuccessfulApp = ({
    title = "Our Success Stories in the <span class='newfycolr'>3D Game Development </span>World!",
    desc = "Take a look at our transformative projects that showcase business growth through innovative 3D games. These success stories highlight <br class='d-lg-block d-none' /> our impact on the gaming industry with increased revenue and happy clients!",
    successStories = [
        [Success1,"DragonQuest Legends", 'Our talented 3D game designers created "DragonQuest Legends," a mobile game with stunning 3D graphics, seamless gameplay, and engaging storylines, boosting player retention by 50%.'],
        [Success2,"Space Odyssey", 'We developed "Space Odyssey," a VR game featuring hyper realistic environments and intuitive controls, resulting in a 60% increase in user engagement.'],
        [Success3,"Warriors of the Realm", 'BitsWits has delivered "Warriors of the Realm," a console game with intricate character designs and expansive worlds, driving a 40% rise in sales within three months.'],
        [Success4,"Mystic Lands", 'We produced "Mystic Lands," a PC game with exceptional UI/UX design and responsive interfaces, enhancing user satisfaction and achieving a 45% revenue growth.'],
    ]
}) => {
    const [progress, setProgress] = useState(2);
    const sliderRef = useRef(null);
    // const successfulSlider = {
    //     arrows: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     speed: 200,
    //     responsive: [
    //         {
    //             breakpoint: 1099,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //     ],
    //     beforeChange: (current, next) => {
    //         const calc = ((next) / (sliderRef.current.props.children.length - 1)) * 100;
    //         setProgress(calc);
    //     }
    // };

    return (
        <section className={styles.successfulSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center text-black manrope font-bold mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='font16 text-black font-medium text-center manrope mb-5 pb-md-2' dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </Col>
                </Row>
                <div className="div">
                    <div className={`${styles.successfulSlider} successfulSlider`}>
                        {
                            successStories && successStories?.map(([image,title, desc], i) => (
                                <div key={i} className={styles.card}>
                                    <div className={styles.image}>
                                        <div className={styles.imageOne}>
                                            <Image src={image} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.titleDesc}>
                                            <h3 className='font-bold manrope'>{title}</h3>
                                            <div className={styles.hoverTxt}>
                                                <p className='manrope font-medium'>{desc}</p>
                                            </div>
                                        </div>
                                        <div className={styles.cardBtn}>
                                            <a href="#href" className='manrope'>
                                                View Full Casestudy
                                            </a>
                                        </div>
                                        <div className={styles.sliderNumber}>
                                            <p className='font-bold manrope'>0{++i}/</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        };
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default SuccessfulApp
