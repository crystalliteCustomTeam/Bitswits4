import Image from 'next/image'
import React from 'react'
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from "@/styles/video-explainer/Header.module.css"
// Images
import logo from "/public/images/icons/footerlogo.webp";
import flagIcon from "/public/videoexplainer/flag-icon.png";
import chatIcon from "/public/videoexplainer/cht-icon.png";
import { FaEnvelope } from 'react-icons/fa';

const VideoHeader = () => {
    return (
        <>
            <header className='pt-4'>
                <Container>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='logo'>
                            <Image src={logo} alt='Bitswits' width={180} height={50} className={styles.logo} />
                        </div>
                        <div className={`d-flex align-items-center gap-lg-4`}>
                            <div>
                                <Link href="mailto:info@BitsWits.co" className={`${styles.btn} d-lg-flex align-items-center d-none`}>
                                    <FaEnvelope className='me-2 d-lg-block d-none' />
                                    info@BitsWits.co
                                </Link>
                            </div>
                            <div>
                                <Link href="tel:+1 312 379 5987" className={`${styles.btn} d-flex align-items-center`}>
                                    <Image src={flagIcon} alt='US Flag' className='me-2 d-sm-block d-none   ' />
                                    +1 312 379 5987
                                </Link>
                            </div>
                            <div>
                                <Link href="javascript:;" className={`${styles.btn} d-lg-flex align-items-center d-none`}>
                                    <Image src={chatIcon} lt='Chat Icon' className={`me-2 ${styles.chatIcon}`} />
                                    Live Chat
                                </Link>
                            </div>
                            <div>
                                <Link href="javascript:;" className={`${styles.popupBtn} d-lg-flex align-items-center d-none`}>Get Started</Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default VideoHeader