import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/Fueling.module.css"
// Images
import estimate from "media/services/estimate.svg"

const Fueling = ({
    title = "We Offer <span class='newfycolr'>3D Game Development</span> For All Genres",
    desc = "Our diverse 3D game development services are customized for all genres. We have expertise spanning a wide range of game types to captivate players.",
    genres = [
        ["Arcade Games", "Our 3D arcade games deliver fast-paced action and endless fun. We design engaging levels, unique characters, and vibrant environments. From classic to modern arcade styles, our games keep players hooked with thrilling challenges and smooth gameplay."],
        ["Action & RPG Games", "We create immersive action and RPG games with complex storylines, dynamic combat systems, and detailed worlds. Players can enjoy a range of weapons, stealth tactics, and character advancement. Our games offer thrilling action and deep role-playing experiences."],
        ["Racing Games", "Our racing games offer high-speed excitement with stunning 3D graphics. We develop tracks, vehicles, and realistic physics to enhance the racing experience. Whether it's street racing or off-road adventures, our games provide adrenaline-pumping action and competitive fun."],
        ["Casino & Card Games", "We develop captivating casino and card games with realistic graphics and smooth mechanics. Our range includes poker, blackjack, slots, and more. Players can enjoy the thrill of the casino from their devices, experiencing high-stakes gaming with immersive visuals."],
        ["Sport Games", "Our sports games cover a wide range, including FIFA-style soccer, cricket, football, and more. We focus on realistic gameplay, detailed player models, and dynamic action. Our games provide a true sports experience that keeps players engaged."],
        ["Adventure Games", "Our adventure games guide players through epic journeys filled with puzzles, challenges, and engaging stories. We create expansive worlds, complex characters, and interactive environments. Players can explore, solve mysteries, and overcome obstacles, experiencing the thrill of adventure."]
    ]
}) => {
    return (
        <section className={styles.fuelingSec}>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className={styles.txt}>
                            <h2 className='manrope font-bold text-white mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                            <p className='manrope font16 font-medium text-white mb-5 pb-xxl-3'>{desc}</p>
                            <div className={styles.ideaPart}>
                                <div className={styles.content}>
                                    <h3 className='manrope font-bold text-white mb-3'>No Risks With An MVP! Launch Your IDEA To See How They Like It! </h3>
                                    <p className='mb-0 manrope font-medium font16 text-white'>BitsWits believes in taking a creative, hands-on approach to mobile application development because we know it’s not just</p>
                                </div>
                                <div className={styles.image}>
                                    <Image src={estimate} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                            <div className={styles.secBtn}>
                                <a href="#href">
                                    Let’s Discuss Your Project
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ul className={styles.fuelingItems}>
                            {
                                genres.map(([title, desc], i) => (
                                    <li key={i} className='mb-5'>
                                        <h3 className='manrope font-bold text-white'>{title}</h3>
                                        <p className='text-white font16 manrope mb-0'>{desc}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Fueling
