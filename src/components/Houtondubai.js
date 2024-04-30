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
    const { menus, sections } = content
    const [isMobile, setIsMobile] = useState(false);
    const [selectedSection, setSelectedSection] = useState(null);
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
    }
    return (
        <>
            <section className={styles.houston}>
                <Container>
                    <Row className={styles.tone}>
                        <Col lg={5} className='p-0 text-center'>
                            {isMobile ? (
                                <select onChange={handleOnChangeSelect} value={selectedSection && visibleSection}>
                                    <option value={visibleSection}>{visibleSection}</option>
                                    {menus.map((menu, index) => (
                                        <option key={index} value={menu}>{menu}</option>
                                    ))}
                                </select>
                            ) : (
                                <>
                                    <nav className={`${styles.applicationlong} newfinfler`}>
                                        <ul className="position-sticky top-0">
                                            {menus.map((menu, index) => (
                                                <li key={index} className={visibleSection === menu ? styles.active : ""}>
                                                    <a href={`#${menu}`}>{menu}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                    <div className={styles.btn}>
                                        <Link href="javascript:;">
                                            <span>Book A Consultation Now!</span>
                                            <span>Book A Consultation Now!</span>
                                        </Link>
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
        </>
    )
}

export default Processpro