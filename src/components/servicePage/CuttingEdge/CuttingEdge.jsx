import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/CuttingEdge.module.css"
// Images
import estimate from "media/services/estimate.svg"
import cuttingOne from "media/services/cutting1.png"
import cuttingTwo from "media/services/cutting2.png"
import cuttingThree from "media/services/cutting3.png"
import cuttingFour from "media/services/cutting4.png"
import cuttingFive from "media/services/cutting5.png"
import cuttingSix from "media/services/cutting6.png"
import cuttingSeven from "media/services/cutting7.png"
import cuttingEight from "media/services/cutting8.png"
import cuttingNine from "media/services/cutting9.png"
import cuttingTen from "media/services/cutting10.png"
import cuttingEleven from "media/services/cutting11.png"

const CuttingEdge = ({
    title = "High-Performance 3D Game <span class='newfycolr'> Development Services!</span>",
    desc = "As your dedicated 3D game developers, we provide high-performance 3D game development services for ambitious <br /> clients to achieve exceptional success!",
    services = [
        ["Full-Cycle Development","Access top talents and the latest trends with our full-cycle 3D game development services. We can create any genre using Unity and Unreal Engine, delivering immersive experiences from concept to completion."],
        ["3D Art","We create visually appealing and eye-catching designs. Our skilled 3D artists develop detailed character models and expansive game worlds that captivate and engage players."],
        ["AAA Art","Our advanced artists and top experts use Maya and Blender to create hyper realistic characters, environments, weapons, and vehicles. Each asset is designed to match your game's level and perfectly complement the storyline."],
        ["3D Animation","3D animation involves complex tasks that our top experts handle with precision. As a custom 3D game development company, we deliver streamlined animation and incomparable design, ensuring every movement or interaction captivates players."],
        ["3D Game UI/UX Design","Our interface artists create optimal architecture for the best UX. We focus on UX-driven design, ensuring easy navigation, responsive interfaces, and seamless integration with game programming for an engaging player experience."],
        ["3D Game QA Testing","Our experienced testers identify and resolve errors or shortcomings before release, ensuring a flawless gaming experience. We rigorously test every aspect to guarantee your game meets the highest quality standards."],
    ]
}) => {
    return (
        <section className={styles.cuttingEdgeSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="txt">
                            <h2 className='text-center text-white manrope font-bold mb-2 mb-lg-4' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='font16 text-white font-medium text-center manrope mb-md-5 pb-3' dangerouslySetInnerHTML={{ __html: desc }} />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className={styles.services}>
                            {
                                services && services?.map(([title,desc], i) => (
                                    <div key={i} className={`${styles.servicesItem}`}>
                                        <div className={styles.content}>
                                            <div className={styles.heading}>
                                                <h3 className='manrope'>{title}</h3>
                                                <div className='d-md-block d-none'>
                                                    <div className={styles.edgeBtn}>
                                                        <a href="#href" className='manrope font-bold'>
                                                            Let’s Do This!
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.desc}>
                                                <p className='font16 font-medium manrope'>{desc}</p>
                                                <div className='d-md-none d-block'>
                                                    <div className={styles.edgeBtn}>
                                                        <a href="#href" className='manrope font-bold'>
                                                            Let’s Do This!
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.serviceImage}>
                                            <Image src={cuttingOne} alt='Bitswits' className='img-fluid' />
                                        </div>
                                    </div>
                                ))
                            }
                            {/* <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>3D Art</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'></p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingTwo} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'></h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'></p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingThree} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'></h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'></p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingFour} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'></h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'></p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingFive} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'></h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'></p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingSix} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div> */}
                            {/* <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Software Quality Testing</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingSeven} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Migration Services</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingEight} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Blockchain App Development</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingNine} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Wearables</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingTen} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={`${styles.servicesItem}`}>
                                <div className={styles.content}>
                                    <div className={styles.heading}>
                                        <h3 className='manrope'>Augmented Reality</h3>
                                        <div className='d-md-block d-none'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.desc}>
                                        <p className='font16 font-medium manrope'>We bring your iOS app ideas to life by using our comprehensive approach to development, combining UI/UX app design. We bring your iOS app ideas to life by using our comprehensive</p>
                                        <div className='d-md-none d-block'>
                                            <div className={styles.edgeBtn}>
                                                <a href="#href" className='manrope font-bold'>
                                                    Let’s Do This!
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.serviceImage}>
                                    <Image src={cuttingEleven} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div> */}
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={styles.etimate}>
                            <Image src={estimate} alt='Bitswits' className='img-fluid d-lg-block d-none' />
                            <div className={styles.estimateContent}>
                                <h3 className='font-bold manrope text-center text-white'>Estimate Your App <br /> Project's Cost Now!</h3>
                                <div className={`${styles.etimateBtn}`}>
                                    <a href="#href">
                                        Let's Talk !
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CuttingEdge
