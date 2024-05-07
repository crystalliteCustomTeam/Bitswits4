"use client"
import { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Houtondubai.module.css";
import Link from "next/link";

const Section = ({ section, refCallback }) => {
    const { title, content } = section;
    return (
        <section id={title} ref={refCallback} className={`${styles.understand}`}>
            <div className="content">
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </section>
    );
};

const Processpro = ({ content }) => {
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
        <section className={styles.houston}>
            <Container>
                <Row className={styles.tone}>
                    <Col lg={5} className={`p-0 text-center ${styles.stickyTop}`}>
                        {isMobile ? (
                            <select onChange={handleOnChangeSelect} value={selectedSection}>
                                {menus.map((menu, index) => (
                                    <option key={index} value={menu}>{menu}</option>
                                ))}
                            </select>
                        ) : (
                            <>
                                <div className={styles.headings}>
                                    <nav className={`${styles.applicationlong}`}>
                                        <ul>
                                            {menus.map((menu, index) => (
                                                <li key={index} className={visibleSection === menu ? styles.active : ""}>
                                                    <a href={`#${menu}`} onClick={() => setSelectedSection(menu)}>{menu}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;" className="pink">
                                            Book A Consultation Now!
                                        </Link>
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
            </Container>
        </section>
    );
};

export default Processpro;