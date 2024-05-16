"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styles from "@/styles/Houtondubai.module.css";

const Section = ({ section, refCallback }) => {
    const { num, title, content } = section;
    return (
        <section id={num} ref={refCallback} className={`${styles.understand}`}>
            <div>
                <h4 className={styles.number}>{num}</h4>
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </section>
    );
};
const NewHouston = ({ content }) => {
    const { menus, sections } = content;
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSection, setSelectedSection] = useState(menus[0]);
    const [visibleSection, setVisibleSection] = useState(menus[0]);
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
                <div className="container">
                    <Row className={styles.tone}>
                        <Col lg={5} className={`p-0 text-center ${styles.stickyTop}`}>
                            {isMobile ? (
                                <select onChange={handleOnChangeSelect} value={selectedSection && visibleSection}>
                                    <option value={visibleSection}>{visibleSection}</option>
                                    {menus.map((menu, index) => (
                                        <option key={index} value={menu}>{menu}</option>
                                    ))}
                                </select>
                            ) : (
                                <>
                                    <div className={styles.headings}>
                                        <nav className={`${styles.applicationlong}`}>
                                            <ul className="position-sticky top-0">
                                                {menus.map((menu, index) => (
                                                    <li key={index} className={`d-flex ${visibleSection === `0${index + 1}` ? styles.active : ""}`}>
                                                        <a href={`#0${index + 1}`} onClick={() => setSelectedSection(index + 1)} className="d-flex align-items-center">
                                                            <span className={`pe-4 d-none`}>0{index + 1}</span>
                                                            <span className={styles.menusHeading}>{menu}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                        <div className={styles.btn}>
                                            <a href="javascript:$zopim.livechat.window.show();" className="pink">
                                                Book A Consultation Now!
                                            </a>
                                        </div>
                                    </div>
                                </>
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