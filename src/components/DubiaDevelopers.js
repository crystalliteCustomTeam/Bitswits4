import React from 'react'
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap'
import styles from "@/styles/DubaiDevelopers.module.css"

// Images     
import Building from "/public/newDubaiPagev1/builingImage.png"

const DubiaDevelopers = ({ content }) => {
    const { title, desc, subContent } = content
    return (
        <>
            <section className={styles.dubaiSec}>
                <div className='container'>
                    <Row>
                        <Col sm={12} xl={9}>
                            <div className={styles.txt}>
                                <h2>{title}</h2>
                                <p className={`${styles.mainPara} fontsfregular`}>
                                    {desc}
                                </p>
                                {subContent.map((content, index) => (
                                    <div key={index}>
                                        <h4>{content.subTitle}</h4>
                                        <p className='fontsfregular'>
                                            {content.subDesc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className={styles.buildingImage}>
                                <Image src={Building} width={752} height={742} alt='Bitswits' className='d-xl-block d-none' />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section >
        </>
    )
}

export default DubiaDevelopers
