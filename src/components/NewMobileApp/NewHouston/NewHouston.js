"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/NewMobileApp/NewHouston.module.css";
//
import BtnArrow from "media/newmobileapp/right-arrow.png"
import appLong from "media/newmobileapp/appLong.png"

const Section = ({ section, refCallback }) => {
    const { num, title, content } = section;
    return (
        <section id={num} ref={refCallback} className={`${styles.understand}`}>
            <div className="text-center my-5">
                <h4 className={styles.number}>{num}</h4>
                <h2 className="py-2">{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <div className={styles.btn}>
                    <Link href="javascript:;" className="d-flex gap-3">
                        Free Consultation
                        <Image src={BtnArrow} alt="Bitswits" width={24} height={12} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
const NewHouston = ({ content }) => {
    const { menus, sections } = content;
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSection, setSelectedSection] = useState(menus[0]); // Initialize selectedSection to the first menu item
    const [visibleSection, setVisibleSection] = useState(menus[0]); // Initialize visibleSection to the first menu item
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSection(entry.target.getAttribute("id"));
                    console.log(entry.target.getAttribute("id"));
                }
            });
        });
        sectionsRef.current.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    const refCallback = useCallback((element) => {
        if (element) {
            sectionsRef.current.push(element);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 992);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (selectedSection) {
            const section = sectionsRef.current.find(ref => ref.id === selectedSection);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [selectedSection]);

    const handleOnChangeSelect = (e) => {
        setSelectedSection(e.target.value);
        setVisibleSection(e.target.value);
    };
    return (
        <>
            <section className={`d-none d-lg-block ${styles.houston}`}>
                <Row className="m-0 align-items-center">
                    <Col lg={5}>
                        <div className={styles.txt}>
                            <h2> Trust The <span style={{ color: "#F32F53" }} > Process! </span> </h2>
                        </div>
                    </Col>
                    <Col lg={7}>
                        <div className={`border bgGrdiant ${styles.topBorder}`}>
                            <p>Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is
                                something our company excel in. We help you complete your digital presence.</p>
                        </div>
                    </Col>
                </Row>
                <div className="container">
                    <Row className={styles.tone}>
                        <Col lg={5} className={`p-0 text-center d-flex flex-column justify-content-center ${styles.menuCols}`}>
                            {isMobile ? (
                                <select onChange={handleOnChangeSelect} value={selectedSection && visibleSection}>
                                    <option value={visibleSection}>{visibleSection}</option>
                                    {menus.map((menu, index) => (
                                        <option key={index} value={menu}>{menu}</option>
                                    ))}
                                </select>
                            ) : (
                                <nav className={`${styles.applicationlong}`}>
                                    <Image src={appLong} alt="Bitswits" className="img-fluid" />
                                    <ul className="position-sticky top-0">
                                        {menus.map((menu, index) => (
                                            <li key={index} className={`d-flex ${visibleSection === `0${index + 1}` ? styles.active : ""}`}>
                                                <a href={`#0${index + 1}`} onClick={() => setSelectedSection(index + 1)} className="d-flex align-items-center">
                                                    <span className={`pe-4`}>0{index + 1}</span>
                                                    <span className={styles.menusHeading}>{menu}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            )}
                        </Col>
                        <Col lg={7}>
                            <div className={`${styles.posto} newscoolr`}>
                                {sections.map((section, index) => (
                                    <Section {...{ section, refCallback }} key={index} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default NewHouston