import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import styles from "@/styles/servicepage/EstimatedCost.module.css"
// Images 
import CardMobile from "media/services/cardMobile.svg"

const EstimatedCost = ({
    title = "Estimated <span class='newfycolr'>3D Game Development </span>  Costs by Platform Type",
    desc="Understanding the cost of developing a 3D game aids in better planning and budgeting. Below are estimated costs for different platforms, offering insights into the financial investment required from a 3D game developer's perspective.",
    costingCard = [
        ["PC Games",
            "$20K to $5 Million",
            "The cost to build 3D games for PC ranges from $20K to $5M, influenced by complexity, scale, and duration. More expensive than mobile games but cheaper than console games, advanced graphics and complex mechanics raise expenses."],
        ["Mobile",
            "Cost Range: $10K to $600K",
            "Creating a mobile game costs $10,000 to $50,000 for basic functionality. Advanced graphics and complex features can raise the cost to $600,000, offering budget flexibility based on features and quality."],
        ["Console",
            "$100K to Millions",
            "The 3D game development cost for consoles starts at $100,000 and can reach millions for AAA titles. These games are complex, requiring large teams, making them more expensive than PC and mobile games."],
    ],
    spcTitle = "Calculate Your Game Cost",
    spcDesc = "Estimate your game development cost by considering platform type, complexity, and features. Use our cost calculator for a detailed breakdown. Plan efficiently and realize your vision with our 3D game development services."
}) => {
    return (
        <section className={styles.estimateSec}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={`${styles.txt} text-center`}>
                            <h2 className='font-bold manrope text-black mb-3'  dangerouslySetInnerHTML={{__html : title}}/>
                            <p className='font16 font-medium text-black manrope mb-3 mb-lg-5 pb-xl-2'>{desc}</p>
                        </div>
                    </Col>
                   {
                    costingCard.map(([subtitle,title,desc],i)=>(
                        <Col key={i} lg={6} className='mt-4'>
                        <div className={styles.card}>
                            <div className={styles.cardTop}>
                                <p className='manrope font16 font-medium mb-0'>{subtitle}</p>
                            </div>
                            <div className={styles.cardDesc}>
                                <h6 className='manrope font-bold'>{title}</h6>
                                <p className='mb-0 manrope font16 font-medium pe-2'>{desc}</p>
                            </div>
                        </div>
                    </Col>
                    ))
                   }
                    <Col lg={6} className='mt-4'>
                        <div className={styles.cardTwo}>
                            <div className="d-flex align-items-center h-100">
                                <div className={styles.cardDesc}>
                                    <h6 className='manrope font-bold text-white pt-5'>{spcTitle}</h6>
                                    <p className='mb-4 manrope font16 font-medium pe-2 text-white'>{spcDesc}</p>
                                    <div className={styles.cardBtn}>
                                        <a href="#href" className='manrope'>
                                            Let’s Do This!
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardImage}>
                                    <Image src={CardMobile} alt='Bitswits' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EstimatedCost
